'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SlideItem {
  id: number;
  src: string;
  alt: string;
  subtitle: string;
  title: string;
  seoTitleSuffix?: string;
  badge?: string;
  subtext?: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    src: '/images/mubinso-trust-flag-banner.webp',
    alt: '무빈소 장례 전문 공무원라이프 품격 있는 가족장·직장 공식 협약 의전',
    subtitle: '대한민국 공직사회가 검증한 의전 기준 그대로',
    title: '품격 있는 무빈소 가족장',
    seoTitleSuffix: '·직장 전문',
    badge: '공무원 노조 공식 협약 의전팀 직접 진행 | 일반 시민 동일 혜택 적용',
  },
  {
    id: 2,
    src: '/images/mubinso-slide-respect.webp',
    alt: '공공기관 협약 무빈소 장례 전문 1급 장례지도사 정식 입관식 서비스',
    subtitle: '빈소 비용 거품은 덜고, 마지막 배웅의 정성은 온전히',
    title: '100% 후불제 무빈소장례',
    seoTitleSuffix: ' 전문',
    subtext: '1급 장례지도사의 궁중대렴 정식 입관식 거행',
  },
  {
    id: 3,
    src: '/images/mubinso-slide-safe.webp',
    alt: '빈소 비용 거품 없는 무빈소 장례 정찰제 비용 안내 및 상담',
    subtitle: '사전 확정 견적 외 현장 바가지 0원 약속',
    title: '단 1원의 추가금 없는 정찰제',
    subtext: '사전 확정 정찰 견적 외 현장 추가 비용 0원 보증',
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pb-12 md:pb-14 px-3 sm:px-4 z-20">
              {slide.badge && (
                <div className="inline-flex items-center gap-1 md:gap-1.5 px-2.5 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-600/90 text-white font-semibold text-[11px] md:text-sm mb-3 shadow-lg backdrop-blur-sm border border-blue-400/30">
                  <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-200 shrink-0" />
                  <span>{slide.badge}</span>
                </div>
              )}

              <p
                className="text-[13.5px] sm:text-base md:text-xl lg:text-2xl font-medium text-blue-100 mb-2 md:mb-3 tracking-tight break-keep whitespace-nowrap"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
              >
                {slide.subtitle}
              </p>

              {index === 0 ? (
                <h1
                  className="text-[25px] sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 md:mb-3 break-keep whitespace-nowrap"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  {slide.title}
                  {slide.seoTitleSuffix && <span className="sr-only">{slide.seoTitleSuffix}</span>}
                </h1>
              ) : (
                <h2
                  className="text-[24px] sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 md:mb-3 break-keep whitespace-nowrap"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  {slide.title}
                  {slide.seoTitleSuffix && <span className="sr-only">{slide.seoTitleSuffix}</span>}
                </h2>
              )}

              {slide.subtext && (
                <p
                  className="text-xs md:text-base lg:text-lg text-gray-200 font-normal flex items-center justify-center gap-1.5 break-keep"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
        className="absolute left-1.5 md:left-4 top-[42%] md:top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-black/25 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-30"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-1.5 md:right-4 top-[42%] md:top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-black/25 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-30"
        aria-label="다음 슬라이드"
      >
        <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
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
    </section>
  );
}
