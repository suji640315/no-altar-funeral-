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
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-sm mb-6 border border-red-100 dark:border-red-900/50">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            공무원 노동조합 및 기업 단체 MOU 협약
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight drop-shadow-md">
            대한민국 공무원라이프가 보증하는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 drop-shadow-sm">100% 후불제 전국 무빈소장례</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-md">
            매달 내는 납입금 0원 / 전국 어디서나 1시간 내 장례지도사 긴급 출동 / 인근 무빈소 장례식장 즉각 섭외
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-16">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-black/40 backdrop-blur-md rounded-full shadow-sm border border-white/20">
              <Shield className="w-5 h-5 text-gold-400" />
              <span className="font-bold text-white">MOU 체결 공식 인증</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-black/40 backdrop-blur-md rounded-full shadow-sm border border-white/20">
              <HeartHandshake className="w-5 h-5 text-gold-400" />
              <span className="font-bold text-white">100% 후불제 정찰제</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-black/40 backdrop-blur-md rounded-full shadow-sm border border-white/20">
              <Clock className="w-5 h-5 text-gold-400" />
              <span className="font-bold text-white">24시간 전국 직영 출동</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-20 -mt-24 lg:-mt-32 pb-24">
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