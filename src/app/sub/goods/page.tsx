import Link from 'next/link';

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
            <button type="button" className="px-4 py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all border bg-[#00387f] text-white border-[#00387f] shadow-md">무빈소 130 (130만 원)</button>
          </div>
        </div>

        {/* Goods Cards Grid - Only showing 무빈소 130 */}
        <div className="grid gap-6 grid-cols-1 justify-center">
          
          {/* 무빈소 130 Card */}
          <div className="rounded-2xl overflow-hidden bg-white flex flex-col justify-between transition-all duration-200 relative border border-gray-200 hover:border-gray-400 shadow-sm max-w-md mx-auto w-full">
            <div>
              <div className="p-5 text-center bg-gray-50 border-b border-gray-100">
                <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 bg-gray-200 text-gray-800">실속 간소화</span>
                <h3 className="text-xl md:text-2xl font-black text-gray-900">무빈소 130</h3>
                <div className="text-2xl md:text-3xl font-black mt-2 tracking-tight text-gray-900">130만 원</div>
                <p className="text-xs mt-2 leading-snug break-keep text-gray-500">빈소를 차리지 않고 가족 중심의 경건하고 알뜰한 장례</p>
              </div>
              <div className="p-5 space-y-4 text-xs md:text-[13px]">
                
                <div className="flex items-start gap-2.5 pb-3 border-b border-gray-100">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5">인력 지원</span>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed font-medium">국가공인 1급 장례지도사 2명 (상시 1명, 입관 1명)<br/>※ 행사도우미 제외(빈소 미사용)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-3 border-b border-gray-100">
                  <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5">용품 / 수의 지원</span>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed font-medium">오동나무 보통관(매장) / 오동나무 화장관·목함(화장)<br/>보성화장수의, 입관·수시용품 일체, 꽃관장식 제공</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-3 border-b border-gray-100">
                  <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shirt"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5">상복 지원</span>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed font-medium">전통복 일체 필요량 제공 (굴건제복, 바지저고리 등)<br/>※ 현대복 미포함</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-3 border-b border-gray-100">
                  <div className="w-6 h-6 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5">장의 차량 지원</span>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed font-medium">관내 앰블런스 무료 이송<br/>고인전용리무진 또는 장의버스 중 선택 1 (관내 화장장)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-3 border-b border-gray-100">
                  <div className="w-6 h-6 rounded-md bg-rose-50 text-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flower-2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5">제단 / 헌화꽃</span>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed font-medium">헌화꽃 미포함</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5">특화 행정 지원</span>
                    <p className="text-gray-500 text-[11px] leading-relaxed">부고알림, 화장예약, 사망진단서 등 행정지원, 장지안내</p>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="p-5 pt-0 mt-4">
              <Link href="/sub/counsel" className="w-full py-3 px-4 rounded-xl text-white font-bold text-center block text-sm transition-all shadow-md bg-gray-800 hover:bg-gray-900">
                무빈소 130 신청 및 상담
              </Link>
              <div className="mt-2 text-center">
                <a href="tel:1599-8379" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 font-semibold py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> 전화 바로 연결 (1599-8379)
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
