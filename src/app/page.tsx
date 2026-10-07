import HeroCarousel from "@/components/HeroCarousel";
import MouSection from "@/components/MouSection";
import Link from "next/link";
import RecentCounselsTicker from "@/components/RecentCounselsTicker";
import { Handshake, Headset, BookOpen, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* 1. 메인 슬라이드 */}
      <HeroCarousel />

      {/* Spacer for floating buttons from Hero */}
      <div className="h-32 md:h-24"></div>

      {/* 2. 중간 슬로건 텍스트 바 */}
      <section className="py-12 md:py-16 text-center px-4 max-w-4xl mx-auto">
        <p className="text-lg md:text-2xl text-gray-700 font-semibold leading-relaxed break-keep">
          구리시청, 연제구청, 인천공무원노조 등 공공기관 공식 협약 기준 그대로!<br className="hidden md:block" />
          까다로운 공직사회가 검증한 의전 품질로, 일반 시민 여러분의 무빈소 가족장을 거품 없는 정찰제로 모십니다.
        </p>
      </section>

      {/* 3. 4대 테마별 서비스 카드 (기존 그리드 디자인 유지) */}
      <section className="max-w-5xl mx-auto px-4 w-full mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {/* 카드 1: 무빈소 정찰가 */}
          <Link
            href="/sub/goods"
            className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 aspect-square flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
          >
            <div className="relative z-10">
              <p className="text-[11px] md:text-xs text-blue-600 font-bold mb-1 tracking-tight">
                부당 추가금 없는 투명한 패키지
              </p>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-snug">
                공무원 협약 검증<br />
                <span className="text-blue-600">무빈소 정찰가</span>
              </h3>
            </div>
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
              <Handshake className="w-16 h-16 md:w-20 md:h-20 text-blue-500 fill-blue-50 relative z-10 drop-shadow-md" />
            </div>
          </Link>

          {/* 카드 2: 무료상담 신청서비스 (상담신청 로고 적용) */}
          <Link
            href="/sub/counsel"
            className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 aspect-square flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
          >
            <div className="relative z-10">
              <p className="text-[11px] md:text-xs text-red-500 font-bold mb-1 tracking-tight">
                24시간 실시간 맞춤 안내
              </p>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-snug">
                무료상담<br />
                <span className="text-red-500">신청서비스</span>
              </h3>
            </div>
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 bg-red-100 rounded-full opacity-50 blur-2xl"></div>
              <Headset className="w-16 h-16 md:w-20 md:h-20 text-red-500 fill-red-50 relative z-10 drop-shadow-md" />
            </div>
          </Link>

          {/* 카드 3: 맞춤 장례절차 */}
          <Link
            href="/sub/procedure"
            className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 aspect-square flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
          >
            <div className="relative z-10">
              <p className="text-[11px] md:text-xs text-emerald-600 font-bold mb-1 tracking-tight">
                입관식부터 e하늘 화장장 동행까지
              </p>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-snug">
                무빈소 3일/2일<br />
                <span className="text-emerald-600">맞춤 장례절차</span>
              </h3>
            </div>
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
              <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-emerald-500 fill-emerald-50 relative z-10 drop-shadow-md" />
            </div>
          </Link>

          {/* 카드 4: 협약 현장 사진 */}
          <Link
            href="/sub/coalition"
            className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 aspect-square flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
          >
            <div className="relative z-10">
              <p className="text-[11px] md:text-xs text-[#00387f] font-bold mb-1 tracking-tight">
                눈으로 확인하는 실제 협약식 증거
              </p>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-snug">
                공공기관 공식<br />
                <span className="text-[#00387f]">협약 현장 사진</span>
              </h3>
            </div>
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
        <h3 className="text-lg md:text-xl text-gray-700 font-bold mb-1.5 tracking-tight">
          (주)공무원라이프 공식 SNS &amp; 소통 채널
        </h3>
        <p className="text-xs md:text-sm text-gray-500 mb-8 font-medium">
          공무원라이프가 전하는 장례 정보와 실시간 상담 채널입니다.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://blog.naver.com/officialslife"
            target="_blank"
            rel="noopener noreferrer"
            title="공무원라이프 공식 네이버 블로그 새창열림"
            aria-label="공무원라이프 공식 네이버 블로그 새창열림"
            className="w-14 h-14 bg-[#03c75a] text-white rounded-2xl flex items-center justify-center font-bold text-xl hover:-translate-y-1 transition-transform hover:shadow-lg"
          >
            blog
          </a>
          <a
            href="https://pf.kakao.com/_NpBqxb"
            target="_blank"
            rel="noopener noreferrer"
            title="공무원라이프 무빈소장례 카카오톡 상담 새창열림"
            aria-label="공무원라이프 무빈소장례 카카오톡 상담 새창열림"
            className="w-14 h-14 bg-[#fae100] rounded-2xl flex items-center justify-center hover:-translate-y-1 transition-transform hover:shadow-lg"
          >
            <svg viewBox="0 0 100 100" className="w-9 h-9" aria-hidden="true">
              <path
                d="M50 15C25.147 15 5 31.701 5 52.308c0 13.385 8.528 25.107 21.684 31.966-.549 2.052-1.895 7.37-2.186 8.527-.372 1.487.525 1.47 1.134 1.06 4.795-3.238 13.435-9.155 18.57-12.753 1.896.549 3.822.662 5.792.662 24.853 0 45-16.701 45-37.308C95 31.701 74.853 15 50 15z"
                fill="#3a1d1d"
              />
              <text x="50" y="61" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="27" fill="#fae100" textAnchor="middle" letterSpacing="-1">
                TALK
              </text>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/officialslife"
            target="_blank"
            rel="noopener noreferrer"
            title="공무원라이프 공식 인스타그램 새창열림"
            aria-label="공무원라이프 공식 인스타그램 새창열림"
            className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-2xl flex items-center justify-center hover:-translate-y-1 transition-transform hover:shadow-lg"
          >
            <div className="w-8 h-8 border-2 border-white rounded-lg relative flex items-center justify-center" aria-hidden="true">
              <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full absolute top-1 right-1"></div>
            </div>
          </a>
          <a
            href="https://www.facebook.com/officialslife"
            target="_blank"
            rel="noopener noreferrer"
            title="공무원라이프 공식 페이스북 새창열림"
            aria-label="공무원라이프 공식 페이스북 새창열림"
            className="w-14 h-14 bg-[#1877f2] text-white rounded-2xl flex items-center justify-center font-bold text-3xl hover:-translate-y-1 transition-transform pb-1 pr-1 hover:shadow-lg"
          >
            f
          </a>
        </div>
      </section>

      {/* 4. 하단 협력기관 롤링 슬라이더 */}
      <MouSection />
    </main>
  );
}
