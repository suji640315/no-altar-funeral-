import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '무빈소 130 안심 패키지 | 공무원라이프 무빈소장례',
  description: '공무원 협약 기준 100% 후불제 무빈소 130만 원 정찰제. 부당 추가금 0원 보증, 1급 장례지도사 정식 입관식 집도 및 화장장 동행.',
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net/sub/goods',
  },
};

export default function GoodsPage() {
  return (
    <div className="w-full bg-white font-sans text-gray-800 flex flex-col pt-[100px] min-h-screen">
      {/* Title Header */}
      <div className="w-full bg-[#00387f] py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">장례상품</h1>
        <div className="w-9 h-[2px] bg-white/80 mx-auto my-3"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16 flex-1">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">장 례 상 품</h2>
          <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-3"></div>
          <p className="text-gray-500 text-sm mt-3">거품을 뺀 100% 후불제 맞춤 장례서비스를 상품별로 한눈에 비교해 보세요.</p>
        </div>

        {/* Tab Buttons */}
        <div className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-center">
            <button type="button" className="px-5 py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all border bg-[#00387f] text-white border-[#00387f] shadow-md">
              공무원 협약 기준 [무빈소 130 안심 정찰 패키지]
            </button>
          </div>
        </div>

        {/* 1. 상단 인트로 안내 박스 */}
        <div className="mb-10 max-w-xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/30 border border-blue-100 rounded-2xl p-6 md:p-7 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-[#00387f] text-white flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base">공무원 협약 기준 기획 의도 및 안심 보증</h3>
            </div>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed break-keep font-medium">
              불필요한 빈소 비용 거품은 걷어내고, 공무원 협약 기준의 품격만 정직하게 채웠습니다.<br className="hidden md:inline" />
              공무원라이프 무빈소 130은 조문객 맞이 없이 직계가족 중심으로 경건하게 배웅하는 정찰제 패키지입니다. 1급 장례지도사의 정식 입관식(궁중대렴) 집도와 화장장 동행까지 모든 필수 절차가 포함되어 있으며, 현장 부당 추가금 0원을 보증합니다.
            </p>
          </div>
        </div>

        {/* Goods Cards Grid - 무빈소 130 */}
        <div className="grid gap-6 grid-cols-1 justify-center">
          
          {/* 무빈소 130 Card */}
          <div className="rounded-2xl overflow-hidden bg-white flex flex-col justify-between transition-all duration-200 relative border border-gray-200 hover:border-gray-400 shadow-sm max-w-lg mx-auto w-full">
            <div>
              {/* 3. 상품 대표 썸네일 리소스 최적화 */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden border-b border-gray-100">
                <Image
                  src="/images/mubinso-130-package.webp"
                  alt="공무원라이프 100% 후불제 무빈소 130 장례상품 구성"
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute top-3 left-3 bg-[#00387f]/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  공무원 협약 정찰제
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2.5 py-0.5 rounded-md font-medium">
                  부당 추가금 0원 보증
                </div>
              </div>

              <div className="p-6 text-center bg-gray-50 border-b border-gray-100">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 bg-blue-100 text-blue-900 border border-blue-200">실속 간소화 · 정찰 패키지</span>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">공무원 협약 기준 [무빈소 130 안심 정찰 패키지]</h3>
                <div className="text-3xl md:text-4xl font-black mt-2 tracking-tight text-[#00387f]">130만 원</div>
                <p className="text-xs md:text-sm mt-2 leading-snug break-keep text-gray-600 font-medium">빈소를 차리지 않고 가족 중심의 경건하고 알뜰한 정찰제 장례</p>
              </div>

              {/* 2. 세부 품목 설명 문구 보강 (표 내부 텍스트 수정) */}
              <div className="p-6 space-y-4 text-xs md:text-[13px]">
                
                {/* 1. 입관 의전 */}
                <div className="flex items-start gap-3 pb-3.5 border-b border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#00387f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5 text-sm">입관 의전</span>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">1급 국가공인 장례지도사 2인 전담 집도 (궁중대렴 정식 입관 및 생화 꽃관 장식)</p>
                  </div>
                </div>

                {/* 2. 입관 용품 */}
                <div className="flex items-start gap-3 pb-3.5 border-b border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5 text-sm">입관 용품</span>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">공무원 협약 규격 정품 오동나무 규격관 및 최고급 모시/위생 수의 일체</p>
                  </div>
                </div>

                {/* 3. 이송/운구 */}
                <div className="flex items-start gap-3 pb-3.5 border-b border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5 text-sm">이송/운구</span>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">관내 고인 전용 운구 차량 지원 및 관내 화장장까지 운구전용 리무진 또는 유족버스 중 택1 지원</p>
                  </div>
                </div>

                {/* 4. 행정 지원 */}
                <div className="flex items-start gap-3 pb-3.5 border-b border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5 text-sm">행정 지원</span>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">e하늘 화장장 예약 대행 및 사망진단서 등 장례 행정 원스톱 안내</p>
                  </div>
                </div>

                {/* 5. 결제 조건 */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5 text-sm">결제 조건</span>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">계약금 0원, 모든 장례 절차 종료 후 결제하는 100% 순수 후불제</p>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="p-6 pt-0 mt-4">
              <Link href="/sub/counsel" className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-center block text-sm md:text-base transition-all shadow-md bg-[#00387f] hover:bg-[#002b66]">
                공무원 협약 기준 [무빈소 130 안심 정찰 패키지] 신청 및 상담
              </Link>
              <div className="mt-3 text-center">
                <a href="tel:1599-8379" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 font-semibold py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> 24시간 전화 바로 연결 (1599-8379)
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
