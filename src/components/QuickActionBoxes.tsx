"use client";

import React, { useState } from "react";
import VipCardModal from "@/components/VipCardModal";

export default function QuickActionBoxes() {
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);

  return (
    <>
      <section className="w-full flex justify-center -mt-14 md:-mt-16 relative z-20 px-4 select-none">
        <h2 className="sr-only">무빈소 장례 특별할인 혜택 및 24시간 상담 퀵메뉴</h2>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center w-full max-w-5xl justify-center">
          
          {/* Box 1: 10만원 특별할인카드 받기 */}
          <div
            onClick={() => setIsVipModalOpen(true)}
            title="10만원 특별할인카드 신청하기"
            className="w-full max-w-[320px] md:w-[310px] h-[115px] bg-[#1a5eff] hover:bg-[#124bdf] text-white rounded-xl shadow-lg border border-blue-600 overflow-hidden flex items-center px-5 cursor-pointer group transition-transform hover:-translate-y-1"
          >
            <div className="w-11 h-11 mr-3 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-blue-100 mb-0.5 tracking-tight">
                [130만 → 120만] 즉시 차감 혜택
              </p>
              <h3 className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-2xl font-black text-[#ffe600] tracking-tight drop-shadow-sm">
                  10만원
                </span>
                <span className="text-base font-bold text-white tracking-tight">
                  특별할인카드 받기
                </span>
              </h3>
            </div>
          </div>

          {/* Box 2: 무빈소 장례 전담 직통상담 02-477-8379 */}
          <a
            href="tel:02-477-8379"
            title="무빈소 장례 전담 직통상담 전화 바로 연결"
            className="w-full max-w-[320px] md:w-[310px] h-[115px] bg-white hover:bg-gray-50 rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer group transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <p className="text-xs font-bold text-gray-700">무빈소 장례 전담 직통상담</p>
            </div>
            <h3 className="text-2xl font-black text-[#e3000f] tracking-tight group-hover:scale-105 transition-transform">
              02-477-8379
            </h3>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">
              (24시간 상황실: 1599-8379)
            </p>
          </a>

          {/* Box 3: 카카오톡 1:1 상담 */}
          <a
            href="https://pf.kakao.com/_NpBqxb/chat"
            target="_blank"
            rel="noopener noreferrer"
            title="공무원라이프 카카오톡 1:1 실시간 상담 바로가기"
            aria-label="공무원라이프 카카오톡 1:1 실시간 상담 바로가기"
            className="w-full max-w-[320px] md:w-[310px] h-[115px] bg-white hover:bg-gray-50 rounded-xl shadow-lg border border-gray-200 overflow-hidden flex items-center justify-between px-6 cursor-pointer group transition-transform hover:-translate-y-1"
          >
            <div className="text-left">
              <p className="text-xs font-medium text-gray-500 mb-0.5">실시간 1:1 채팅 문의</p>
              <h3 className="text-lg font-bold text-gray-800">카카오톡 1:1 상담</h3>
            </div>
            <div className="w-11 h-11 bg-[#fae100] rounded-full flex items-center justify-center text-black font-black text-xl shrink-0 group-hover:scale-105 transition-transform shadow-xs">
              Ch
            </div>
          </a>

        </div>
      </section>

      <VipCardModal isOpen={isVipModalOpen} onClose={() => setIsVipModalOpen(false)} />
    </>
  );
}

