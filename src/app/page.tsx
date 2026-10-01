import HeroCarousel from "@/components/HeroCarousel";
import MouSection from "@/components/MouSection";
import Image from "next/image";
import Link from "next/link";
import RecentCounselsTicker from "@/components/RecentCounselsTicker";
import { Handshake, PhoneCall, BookOpen, Gift, MessageCircle, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroCarousel />

      {/* Spacer for floating buttons from Hero */}
      <div className="h-32 md:h-24"></div>

      {/* Subtitle Section */}
      <section className="py-12 md:py-16 text-center px-4">
        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
          공무원노동조합 및 기업 단체와의 MOU업무협약으로<br className="hidden md:block"/>
          믿음과 신뢰가 검증된 100% 후불제 장례상품을 제공합니다.
        </p>
      </section>

      {/* 4 Square Menus */}
      <section className="max-w-5xl mx-auto px-4 w-full mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          
          {/* Menu 1: 상품 안내 */}
          <Link href="/sub/goods" className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 aspect-square flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[11px] md:text-xs text-gray-400 font-bold mb-1 uppercase tracking-wider">Smart Service</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">공무원가족 전용<br/><span className="text-blue-600">무빈소 상품</span></h3>
            </div>
            {/* Illustration-like Icon */}
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
              <Handshake className="w-16 h-16 md:w-20 md:h-20 text-blue-500 fill-blue-50 relative z-10 drop-shadow-md" />
            </div>
          </Link>

          {/* Menu 2: 무료 상담 */}
          <Link href="/sub/counsel" className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 aspect-square flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[11px] md:text-xs text-gray-400 font-bold mb-1 uppercase tracking-wider">Smart Service</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">24시간<br/><span className="text-red-500">무료상담</span> 서비스</h3>
            </div>
            {/* Illustration-like Icon */}
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 bg-red-100 rounded-full opacity-50 blur-2xl"></div>
              <PhoneCall className="w-16 h-16 md:w-20 md:h-20 text-red-500 fill-red-50 relative z-10 drop-shadow-md" />
            </div>
          </Link>

          {/* Menu 3: 장례 절차 */}
          <Link href="/sub/procedure" className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 aspect-square flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[11px] md:text-xs text-gray-400 font-bold mb-1 uppercase tracking-wider">Smart Service</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">무빈소 장례안내<br/><span className="text-green-600">장례절차</span></h3>
            </div>
            {/* Illustration-like Icon */}
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 bg-green-100 rounded-full opacity-50 blur-2xl"></div>
              <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-green-500 fill-green-50 relative z-10 drop-shadow-md" />
            </div>
          </Link>

          {/* Menu 4: 제휴협약사 */}
          <Link href="/sub/coalition" className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 aspect-square flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[11px] md:text-xs text-gray-400 font-bold mb-1 uppercase tracking-wider">Smart Service</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">공무원라이프<br/><span className="text-[#00387f]">제휴협약사</span></h3>
            </div>
            {/* Illustration-like Icon */}
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
              <Building2 className="w-16 h-16 md:w-20 md:h-20 text-[#00387f] fill-indigo-50 relative z-10 drop-shadow-md" />
            </div>
          </Link>
          
        </div>
      </section>

      <RecentCounselsTicker />

      {/* SNS Section */}
      <section className="text-center mb-24 px-4">
        <h3 className="text-xl text-gray-600 mb-8">공무원상조 공무원라이프 SNS 장례정보</h3>
        <div className="flex items-center justify-center gap-4">
          <a href="https://blog.naver.com/officialslife" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#03c75a] text-white rounded-2xl flex items-center justify-center font-bold text-xl hover:-translate-y-1 transition-transform hover:shadow-lg">
            blog
          </a>
          <a href="https://pf.kakao.com/_NpBqxb" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#fae100] text-black rounded-2xl flex items-center justify-center hover:-translate-y-1 transition-transform hover:shadow-lg">
            <MessageCircle className="w-8 h-8 fill-black" />
          </a>
          <a href="https://www.instagram.com/officialslife" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-2xl flex items-center justify-center hover:-translate-y-1 transition-transform hover:shadow-lg">
            <div className="w-8 h-8 border-2 border-white rounded-lg relative flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full absolute top-1 right-1"></div>
            </div>
          </a>
          <a href="https://www.facebook.com/officialslife" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#1877f2] text-white rounded-2xl flex items-center justify-center font-bold text-3xl hover:-translate-y-1 transition-transform pb-1 pr-1 hover:shadow-lg">
            f
          </a>
        </div>
      </section>

      <MouSection />
    </main>
  );
}