import InquiryForm from '@/components/InquiryForm';
import TrustSection from '@/components/TrustSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import NetworkSection from '@/components/NetworkSection';
import { Phone, Shield, Clock, HeartHandshake } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-50 dark:bg-brand-900 selection:bg-gold-200 selection:text-gold-900">
      {/* Hero Section */}
      <section className="relative pt-12 pb-28 md:pt-24 lg:pt-32 lg:pb-48 overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4 md:mt-8">
          
          <div className="inline-block p-2 sm:p-4 md:p-8 w-full max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-red-600/90 text-white font-bold text-xs md:text-sm mb-3 md:mb-6 shadow-lg">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse"></span>
              공식 MOU 체결
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3 md:mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] break-keep">
              대한민국 공무원가족을 위한<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">무빈소장례 지원</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto mb-5 md:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-relaxed font-bold break-keep">
              공무원노동조합 및 기업 단체와의 MOU업무협약으로<br className="hidden md:block"/>
              믿음과 신뢰가 검증된 100% 후불제 무빈소장례 상품을 제공합니다.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-5">
              <div className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-gold-400" />
                <span className="font-bold text-white text-xs md:text-sm">MOU 체결 검증</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
                <HeartHandshake className="w-3 h-3 md:w-4 md:h-4 text-gold-400" />
                <span className="font-bold text-white text-xs md:text-sm">100% 후불제</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-gold-400" />
                <span className="font-bold text-white text-xs md:text-sm">24시간 긴급출동</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-20 -mt-20 md:-mt-24 lg:-mt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>

      {/* New Sections */}
      <TrustSection />
      <PricingSection />
      <ProcessSection />
      <NetworkSection />

      {/* Footer Contact */}
      <footer className="bg-brand-900 text-brand-300 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xl font-bold text-white">(주)공무원라이프</span>
          </div>
          <h2 className="text-xl font-bold text-brand-200 mb-6">24시간 긴급 접수</h2>
          <div className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-extrabold text-gold-400 mb-10">
            <Phone className="w-10 h-10 md:w-12 md:h-12" />
            <span>1599-8379</span>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto">
            상호: (주)공무원라이프 | 대표: 홍길동 | 사업자등록번호: 123-45-67890<br/>
            이메일: help@gongmuwon-life.com | 주소: 서울시 강남구<br/>
            통신판매업신고번호: 제2026-서울강남-0000호<br/>
            Copyright &copy; (주)공무원라이프 All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}