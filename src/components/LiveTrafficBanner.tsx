"use client";

import React from "react";
import { Users, Eye, Activity, ShieldCheck } from "lucide-react";
import { useLiveTraffic } from "@/lib/useLiveTraffic";

export default function LiveTrafficBanner() {
  const { liveUsers, todayVisitors, totalVisitors, isMounted } = useLiveTraffic();

  return (
    <section aria-label="실시간 서비스 이용 현황" className="w-full bg-gradient-to-r from-[#001f47] via-[#00387f] to-[#001f47] border-y-2 border-[#1e4885] text-white py-3.5 px-3 sm:px-6 shadow-md select-none">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* 좌측 타이틀 & 실시간 안내 */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 w-full md:w-auto">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-sm shadow-emerald-400"></span>
          </span>
          <span className="font-bold text-emerald-400 tracking-wide text-sm sm:text-base flex items-center gap-1.5 drop-shadow-sm whitespace-nowrap">
            <Activity className="w-4 h-4" />
            실시간 이용 현황
          </span>
          <span className="hidden lg:inline-block text-blue-300/40 text-sm">|</span>
          <span className="hidden lg:inline-block text-blue-100/90 text-xs sm:text-sm font-medium whitespace-nowrap">
            공공기관 공식 협약 검증 100% 후불제 무빈소 장례
          </span>
        </div>

        {/* 우측 3대 통계 수치 (Live, Today, Total) - 눈에 띄는 큰 폰트 & 카드형 스타일 */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full md:w-auto items-center">
          
          {/* 1. 실시간 동시 접속자 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg py-2 px-2.5 sm:px-4 border border-white/10 transition-all" title="현재 무빈소 사이트를 둘러보고 있는 유가족 및 회원">
            <div className="flex items-center gap-1 text-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap">
              <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>현재 접속</span>
            </div>
            <div className="flex items-baseline font-black text-emerald-300 text-base sm:text-xl tracking-tight">
              {isMounted ? liveUsers.toLocaleString() : "--"}
              <span className="text-xs font-normal text-gray-300 ml-0.5">명</span>
            </div>
          </div>

          {/* 2. 오늘 방문자 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg py-2 px-2.5 sm:px-4 border border-white/10 transition-all" title="오늘 무빈소장례를 방문한 유가족">
            <div className="flex items-center gap-1 text-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap">
              <Eye className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>오늘</span>
            </div>
            <div className="flex items-baseline font-black text-amber-300 text-base sm:text-xl tracking-tight">
              {isMounted ? todayVisitors.toLocaleString() : "--"}
              <span className="text-xs font-normal text-gray-300 ml-0.5">명</span>
            </div>
          </div>

          {/* 3. 누적 이용/방문 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg py-2 px-2.5 sm:px-4 border border-white/10 transition-all" title="무빈소장례 누적 방문 수">
            <div className="flex items-center gap-1 text-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>누적</span>
            </div>
            <div className="flex items-baseline font-black text-white text-base sm:text-xl tracking-tight">
              {isMounted ? totalVisitors.toLocaleString() : "--"}
              <span className="text-xs font-normal text-gray-300 ml-0.5">명</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

