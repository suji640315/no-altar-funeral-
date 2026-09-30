import HeroCarousel from "@/components/HeroCarousel";
import MouSection from "@/components/MouSection";
import Image from "next/image";
import Link from "next/link";
import RecentCounselsTicker from "@/components/RecentCounselsTicker";
import { Handshake, PhoneCall, BookOpen, Gift, MessageCircle } from "lucide-react";

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Menu 1 */}
          <Link href="/sub/goods" className="bg-[#f5f7f9] rounded-xl p-6 aspect-square flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
            <div>
              <p className="text-xs text-gray-500 mb-1">장례상품 안내</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">공무원가족 전용<br/>무빈소 상품</h3>
            </div>
            <Handshake className="w-16 h-16 text-gray-300 self-end opacity-50 group-hover:opacity-100 group-hover:text-blue-500 transition-all group-hover:scale-110" />
          </Link>

          {/* Menu 2 */}
          <Link href="/sub/counsel" className="bg-[#f5f7f9] rounded-xl p-6 aspect-square flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
            <div>
              <p className="text-xs text-gray-500 mb-1">24시간</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors"><span className="text-red-500">무료상담</span><br/>서비스</h3>
            </div>
            <PhoneCall className="w-16 h-16 text-gray-300 self-end opacity-50 group-hover:opacity-100 group-hover:text-red-400 transition-all group-hover:scale-110" />
          </Link>

                    {/* Menu 3 */}
          <Link href="/sub/procedure" className="bg-[#f5f7f9] rounded-xl p-6 aspect-square flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
            <div>
              <p className="text-xs text-gray-500 mb-1">무빈소 장례안내</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">장례절차</h3>
            </div>
            <BookOpen className="w-16 h-16 text-gray-300 self-end opacity-50 group-hover:opacity-100 group-hover:text-green-500 transition-all group-hover:scale-110" />
          </Link>

{/* Menu 4 */}
          <div className="bg-[#f5f7f9] rounded-xl p-6 aspect-square flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
            <div>
              <p className="text-xs text-gray-500 mb-1">위로금 신청안내</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors"><span className="text-blue-600">장례위로금</span><br/>이란?</h3>
            </div>
            <Gift className="w-16 h-16 text-gray-300 self-end opacity-50 group-hover:opacity-100 group-hover:text-yellow-500 transition-all group-hover:scale-110" />
          </div>

        </div>
      </section>

      <RecentCounselsTicker />

      {/* SNS Section */}
      <section className="text-center mb-24 px-4">
        <h3 className="text-xl text-gray-600 mb-8">공무원상조 공무원라이프 SNS 장례정보</h3>
        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 bg-[#03c75a] text-white rounded-2xl flex items-center justify-center font-bold text-xl cursor-pointer hover:-translate-y-1 transition-transform">
            blog
          </div>
          <div className="w-14 h-14 bg-[#fae100] text-black rounded-2xl flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform">
            <MessageCircle className="w-8 h-8 fill-black" />
          </div>
          <div className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-2xl flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform">
            <div className="w-8 h-8 border-2 border-white rounded-lg relative flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full absolute top-1 right-1"></div>
            </div>
          </div>
          <div className="w-14 h-14 bg-[#1877f2] text-white rounded-2xl flex items-center justify-center font-bold text-3xl cursor-pointer hover:-translate-y-1 transition-transform pb-1 pr-1">
            f
          </div>
        </div>
      </section>

      <MouSection />
    </main>
  );
}