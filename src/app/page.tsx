import InquiryForm from '@/components/InquiryForm';
import WhyUsSection from '@/components/WhyUsSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import { Phone, Shield, Clock, HeartHandshake } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-50 dark:bg-brand-900 selection:bg-gold-200 selection:text-gold-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/10 to-brand-50 dark:from-brand-900/50 dark:to-brand-900" />
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gold-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-400/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-900 dark:text-white tracking-tight mb-8">
            거품을 뺀 가장 합리적인 이별,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">품격 있는 무빈소 장례</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-600 dark:text-brand-300 max-w-2xl mx-auto mb-12">
            복잡하고 부담스러운 장례 절차 대신, 고인을 향한 온전한 추모의 시간에 집중하실 수 있도록 정성을 다해 돕겠습니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-brand-800/60 rounded-full shadow-sm backdrop-blur-sm border border-brand-200/50 dark:border-brand-700/50">
              <Clock className="w-5 h-5 text-gold-500" />
              <span className="font-medium text-brand-800 dark:text-brand-200">24시간 긴급 출동</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-brand-800/60 rounded-full shadow-sm backdrop-blur-sm border border-brand-200/50 dark:border-brand-700/50">
              <Shield className="w-5 h-5 text-gold-500" />
              <span className="font-medium text-brand-800 dark:text-brand-200">투명한 정찰제</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-brand-800/60 rounded-full shadow-sm backdrop-blur-sm border border-brand-200/50 dark:border-brand-700/50">
              <HeartHandshake className="w-5 h-5 text-gold-500" />
              <span className="font-medium text-brand-800 dark:text-brand-200">1급 장례지도사 배정</span>
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
      <WhyUsSection />
      <PricingSection />
      <ProcessSection />

      {/* Footer Contact */}
      <footer className="bg-brand-900 text-brand-300 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">24시간 장례 접수센터</h2>
          <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-extrabold text-gold-400 mb-8">
            <Phone className="w-8 h-8 md:w-10 md:h-10" />
            <span>1500-0000</span>
          </div>
          <p className="text-sm">
            상호: 무빈소 장례서비스 | 대표: 김대표 | 사업자등록번호: 123-45-67890<br/>
            이메일: help@no-altar-funeral.co.kr | 주소: 서울특별시 어딘가
          </p>
        </div>
      </footer>
    </main>
  );
}
