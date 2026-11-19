"use client";

import { useState, useEffect } from "react";

export interface LiveTrafficState {
  liveUsers: number;
  todayVisitors: number;
  totalVisitors: number;
  isMounted: boolean;
}

// 애플리케이션 전역 공유 상태 (싱글톤)
let globalState: LiveTrafficState = {
  liveUsers: 22,
  todayVisitors: 312,
  totalVisitors: 31850,
  isMounted: false,
};

const listeners = new Set<(state: LiveTrafficState) => void>();
let timer: NodeJS.Timeout | null = null;
let initialized = false;
let tickCount = 0;

function initTraffic() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // 날짜 기반 고유 시드
  const daySeed = (year * 372 + (month + 1) * 31 + date) % 100;

  // 시간대별 방문자 증가 곡선
  const hourWeights = [
    0.05, 0.07, 0.08, 0.09, 0.11, 0.14, 0.19, 0.26,
    0.35, 0.46, 0.56, 0.65, 0.73, 0.80, 0.86, 0.90,
    0.93, 0.96, 0.98, 0.99, 1.00, 1.00, 1.00, 1.00
  ];

  const targetTodayMax = 360 + (daySeed % 65); // 하루 최대 약 360~425명
  const currentWeight = hourWeights[hours] || 0.5;
  const nextWeight = hourWeights[Math.min(hours + 1, 23)] || 1.0;
  const progressInHour = minutes / 60;
  const interpolatedWeight = currentWeight + (nextWeight - currentWeight) * progressInHour;

  const calculatedToday = Math.max(35, Math.floor(targetTodayMax * interpolatedWeight) + (minutes % 5));
  const baseTotal = 31200 + (daySeed * 16);
  const baseLive = (hours >= 8 && hours <= 22) ? 19 + (daySeed % 7) : 10 + (daySeed % 5);

  globalState = {
    liveUsers: baseLive,
    todayVisitors: calculatedToday,
    totalVisitors: baseTotal + calculatedToday,
    isMounted: true,
  };
  notifyListeners();

  // 4초마다 변동 체크
  timer = setInterval(() => {
    tickCount++;

    const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
    const minLive = (hours >= 8 && hours <= 22) ? 14 : 7;
    const maxLive = (hours >= 8 && hours <= 22) ? 29 : 16;
    const nextLive = Math.min(Math.max(globalState.liveUsers + delta, minLive), maxLive);

    // 약 12~16초 주기 신규 방문자 +1 반영
    const shouldAddVisitor = (tickCount % 3 === 0 && Math.random() < 0.8) || (delta > 0 && Math.random() < 0.5);

    let nextToday = globalState.todayVisitors;
    let nextTotal = globalState.totalVisitors;

    if (shouldAddVisitor) {
      nextToday += 1;
      nextTotal += 1;
    }

    if (nextLive !== globalState.liveUsers || nextToday !== globalState.todayVisitors) {
      globalState = {
        ...globalState,
        liveUsers: nextLive,
        todayVisitors: nextToday,
        totalVisitors: nextTotal,
      };
      notifyListeners();
    }
  }, 4000);
}

function notifyListeners() {
  listeners.forEach((listener) => listener(globalState));
}

export function useLiveTraffic() {
  const [state, setState] = useState<LiveTrafficState>(globalState);

  useEffect(() => {
    initTraffic();
    setState(globalState);

    const listener = (newState: LiveTrafficState) => {
      setState(newState);
    };
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return state;
}

