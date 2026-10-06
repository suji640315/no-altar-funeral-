'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import VipCardModal from './VipCardModal';

interface SlideItem {
  id: number;
  src: string;
  alt: string;
  subtitle: string;
  title: string;
  badge?: string;
  subtext?: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    src: '/images/mubinso-trust-flag-banner.webp',
    alt: '공무원 협약 검증 100% 후불제 무빈소장례',
    subtitle: '대한민국 공직사회가 검증한 의전 기준 그대로',
    title: '100% 후불제 무빈소장례',
    badge: '공무원 노조 공식 협약 의전팀 직접 진행 | 일반 시민 동일 혜택 적용',
  },
  {
    id: 2,
    src: '/images/mubinso-slide-respect.webp',
    alt: '정직한 후불제 무빈소 가족장 입관 서비스',
    subtitle: '빈소 비용 거품은 덜고, 마지막 배웅의 정성은 온전히',
    title: '품격 있는 무빈소 가족장·직장',
    subtext: '1급 장례지도사의 궁중대렴 정식 입관식 거행',
  },
  {
    id: 3,
    src: '/images/mubinso-slide-safe.webp',
    alt: '부당 추가금 없는 무빈소 정찰제 장례',
    subtitle: '사전 확정 견적 외 현장 바가지 0원 약속',
    title: '단 1원의 부당 추가금 없는 정찰제',
    subtext: '사전 확정 정찰 견적 외 현장 추가 비용 0원 보증',
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-[450px] md:h-[530px] lg:h-[600px] bg-gray-900 group select-none">
      {/* Background Slides Container */}
      <div className="absolute inset-0 overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform-gpu ${
              index === currentIndex
                ? 'opacity-100 z-10 pointer-events-auto'
                : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />

            {/* Slide Text - Centered vertically and horizontally */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pb-12 md:pb-14 px-4 z-20">
              {slide.badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-600/90 text-white font-semibold text-[11px] md:text-sm mb-3 shadow-lg backdrop-blur-sm border border-blue-400/30">
                  <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-200" />
                  <span>{slide.badge}</span>
                </div>
              )}

              <p
                className="text-base md:text-xl lg:text-2xl font-medium text-blue-100 mb-2 md:mb-3 tracking-tight"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
              >
                {slide.subtitle}
              </p>

              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 md:mb-3"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
              >
                {slide.title}
              </h1>

              {slide.subtext && (
                <p
                  className="text-xs md:text-base lg:text-lg text-gray-200 font-normal flex items-center justify-center gap-1.5"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{slide.subtext}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-2 md:left-4 top-[42%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-30"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-[42%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-30"
        aria-label="다음 슬라이드"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-16 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? 'w-6 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full'
            }`}
            aria-label={`${index + 1}번 슬라이드로 이동`}
          />
        ))}
      </div>

      {/* Floating 3 Buttons (Quick Actions) */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-30 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Button 1: 특별할인카드 신청하기 */}
          <div
            onClick={() => setIsVipModalOpen(true)}
            className="bg-[#1a5eff] text-white rounded-2xl shadow-xl flex items-center p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            <div className="w-12 h-12 mr-4 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div>
              <p className="text-xs md:text-sm font-medium text-blue-100 mb-1">일반 시민도 공무원 협약 할인 혜택 동일 적용</p>
              <h3 className="text-lg md:text-xl font-bold">특별할인카드 신청하기</h3>
            </div>
          </div>

          {/* Button 2: 24시간 긴급 장례접수 1599-8379 */}
          <a
            href="tel:1599-8379"
            className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <p className="text-xs md:text-sm font-medium text-gray-600">24시간 긴급 장례접수</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#e3000f] tracking-tight group-hover:scale-105 transition-transform">
              1599-8379
            </h3>
          </a>

          {/* Button 3: 카카오톡 1:1 상담 */}
          <a
            href="https://pf.kakao.com/_NpBqxb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center gap-4 p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            <div className="text-left">
              <p className="text-xs md:text-sm font-medium text-gray-500 mb-0.5">실시간 1:1 채팅 문의</p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">카카오톡 1:1 상담</h3>
            </div>
            <div className="w-12 h-12 bg-[#fae100] rounded-full flex items-center justify-center text-black font-black text-xl shrink-0 group-hover:scale-105 transition-transform">
              Ch
            </div>
          </a>
        </div>
      </div>

      <VipCardModal isOpen={isVipModalOpen} onClose={() => setIsVipModalOpen(false)} />
    </section>
  );
}
