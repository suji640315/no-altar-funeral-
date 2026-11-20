"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, Eye, Activity, ShieldCheck } from "lucide-react";
import { useLiveTraffic } from "@/lib/useLiveTraffic";

// 접속 및 화면 스크롤 시 부드러운 카운트업 & 수치 변동 시 팝(Pop) 율동 컴포넌트
function AnimatedCounter({
  value,
  trigger,
  duration = 1200,
  highlightColor = "text-yellow-300"
}: {
  value: number;
  trigger: boolean;
  duration?: number;
  highlightColor?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isBumping, setIsBumping] = useState(false);
  const prevValueRef = useRef(0);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!trigger) return;

      if (!hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        // 화면에 등장하는 순간 0부터 목표 수치까지 극적인 카운트업 (ease-out)
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setDisplayValue(Math.floor(value * ease));

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setDisplayValue(value);
          }
        };
        window.requestAnimationFrame(step);
        prevValueRef.current = value;
        return;
      }

      // 실시간 인원 변동 시: 살짝 튀어오르는 팝 율동
      if (prevValueRef.current !== value) {
        setIsBumping(true);
        setDisplayValue(value);
        prevValueRef.current = value;
        const timer = setTimeout(() => setIsBumping(false), 500);
        return () => clearTimeout(timer);
      }
}, [value, trigger, duration]);

  if (!trigger && displayValue === 0) {
    return <span>--</span>;
  }

  return (
    <span
      className={`inline-block transition-all duration-300 transform origin-center ${isBumping ? `scale-125 ${highlightColor} font-black drop-shadow-md` : "scale-100"
        }`}
    >
      {displayValue.toLocaleString()}
    </span>
  );
}

export default function LiveTrafficBanner() {
  const { liveUsers, todayVisitors, totalVisitors, isMounted } = useLiveTraffic();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤하여 배너가 눈에 보이는 순간 카운트업 트리거 (급하게 스크롤 이동해도 눈앞에서 촤르륵 작동!)
  useEffect(() => {
    if (!sectionRef.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const shouldTrigger = isMounted && isVisible;

  return (
      <section
        ref={sectionRef}
        aria-label="실시간 서비스 이용 현황"
        className="w-full bg-gradient-to-r from-[#001f47] via-[#00387f] to-[#001f47] border-y-2 border-[#1e4885] text-white py-3.5 px-3 sm:px-6 shadow-md select-none relative overflow-hidden"
      >
        {/* 3단 순차 파도타기(Staggered Wave) 율동 애니메이션 CSS */}
        <style jsx global>{`
        /* 쿵-쿵 심장박동 파도타기 키프레임 */
        @keyframes wavePulse {
          0%, 100% {
            transform: scale(1);
          }
          15% {
            transform: scale(1.15);
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.7));
          }
          30% {
            transform: scale(1);
          }
          45% {
            transform: scale(1.08);
            filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.4));
          }
          60% {
            transform: scale(1);
          }
        }

        /* 1단계: 현재 접속 (0초 시작) */
        .live-wave-1 {
          animation: wavePulse 2.6s ease-in-out infinite;
          animation-delay: 0s;
        }

        /* 2단계: 오늘 (0.85초 딜레이) */
        .live-wave-2 {
          animation: wavePulse 2.6s ease-in-out infinite;
          animation-delay: 0.85s;
        }

        /* 3단계: 누적 (1.7초 딜레이) */
        .live-wave-3 {
          animation: wavePulse 2.6s ease-in-out infinite;
          animation-delay: 1.7s;
        }

        @keyframes softGlowText {
          0%, 100% {
            opacity: 0.92;
            text-shadow: 0 0 3px rgba(52, 211, 153, 0.4);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 10px rgba(52, 211, 153, 0.9), 0 0 16px rgba(16, 185, 129, 0.5);
            transform: scale(1.02);
          }
        }

        .live-soft-glow {
          animation: softGlowText 2.4s ease-in-out infinite;
        }
      `}</style>

        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-3">

          {/* 좌측 타이틀 & 실시간 안내 (심장박동 & 은은한 에메랄드 펄스) */}
          <div className="flex items-center justify-center md:justify-start gap-2.5 w-full md:w-auto">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-sm shadow-emerald-400"></span>
            </span>
            <span className="font-bold text-emerald-400 tracking-wide text-sm sm:text-base flex items-center gap-1.5 drop-shadow-sm whitespace-nowrap live-soft-glow cursor-default">
              <Activity className="w-4 h-4 live-wave-1 text-emerald-300" />
              실시간 이용 현황
            </span>
            <span className="hidden lg:inline-block text-blue-300/40 text-sm">|</span>
            <span className="hidden lg:inline-block text-blue-100/90 text-xs sm:text-sm font-medium whitespace-nowrap">
              공공기관 공식 협약 검증 100% 후불제 무빈소 장례
            </span>
          </div>

          {/* 우측 3대 통계 수치 (Live, Today, Total) - 끊이지 않는 3단 순차 파도타기 율동 카드 */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full md:w-auto items-center">

            {/* 1. 실시간 동시 접속자 (1단계 율동: 0s 시작) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg py-2 px-2.5 sm:px-4 border border-emerald-500/30 shadow-sm shadow-emerald-500/10 transition-all hover:scale-105" title="현재 무빈소 사이트를 둘러보고 있는 유가족 및 회원">
              <div className="flex items-center gap-1 text-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap">
                <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0 live-wave-1" />
                <span>현재 접속</span>
              </div>
                <div className="flex items-baseline font-black text-emerald-300 text-base sm:text-xl tracking-tight live-wave-1">
                  <AnimatedCounter value={liveUsers} trigger={shouldTrigger} duration={1000} highlightColor="text-emerald-100" />
                  <span className="text-xs font-normal text-gray-300 ml-0.5">명</span>
                </div>
              </div>

              {/* 2. 오늘 방문자 (2단계 율동: 0.85s 딜레이 파도타기) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg py-2 px-2.5 sm:px-4 border border-amber-500/30 shadow-sm shadow-amber-500/10 transition-all hover:scale-105" title="오늘 무빈소장례를 방문한 유가족">
                <div className="flex items-center gap-1 text-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap">
                  <Eye className="w-3.5 h-3.5 text-amber-300 shrink-0 live-wave-2" />
                  <span>오늘</span>
                </div>
                  <div className="flex items-baseline font-black text-amber-300 text-base sm:text-xl tracking-tight live-wave-2">
                    <AnimatedCounter value={todayVisitors} trigger={shouldTrigger} duration={1200} highlightColor="text-white" />
                    <span className="text-xs font-normal text-gray-300 ml-0.5">명</span>
                  </div>
                </div>

                {/* 3. 누적 이용/방문 (3단계 율동: 1.7s 딜레이 파도타기) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg py-2 px-2.5 sm:px-4 border border-blue-400/30 shadow-sm shadow-blue-400/10 transition-all hover:scale-105" title="무빈소장례 누적 방문 수">
                  <div className="flex items-center gap-1 text-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-300 shrink-0 live-wave-3" />
                    <span>누적</span>
                  </div>
                    <div className="flex items-baseline font-black text-white text-base sm:text-xl tracking-tight live-wave-3">
                      <AnimatedCounter value={totalVisitors} trigger={shouldTrigger} duration={1400} highlightColor="text-amber-300" />
                      <span className="text-xs font-normal text-gray-300 ml-0.5">명</span>
                    </div>
                  </div>

                </div>

              </div>
            </section>
            );
}
