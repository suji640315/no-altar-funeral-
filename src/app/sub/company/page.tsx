'use client';

import { Building2, Users, MapPin } from 'lucide-react';

export default function CompanyPage() {
  return (
    <div className="w-full bg-white font-sans text-gray-800 flex flex-col pt-[80px] md:pt-[100px] min-h-screen">
      
      {/* Title Header */}
      <div className="w-full bg-[#00387f] py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">회사소개</h1>
        <div className="w-9 h-[2px] bg-white/80 mx-auto my-3"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        
        {/* Section 1: 인사말 */}
        <section className="mb-24 scroll-mt-24" id="greeting">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <Building2 className="w-8 h-8 text-[#00387f]" /> 인사말
            </h2>
            <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-500 text-sm">공무원라이프의 설립 이념과 고객을 향한 다짐을 소개합니다.</p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black text-[#00387f] mb-6 leading-tight">
              "대한민국 공무원가족의 든든한 동반자,<br />(주)공무원라이프입니다."
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
              저희 (주)공무원라이프는 100% 후불제 상조 서비스를 통해 거품 없는 가격과 품격 있는 장례 서비스를 제공하고 있습니다. 
              슬픔에 잠긴 유가족분들께서 장례 절차에 대한 부담 없이 오직 고인을 추모하는 데에만 전념하실 수 있도록, 
              저희 임직원 모두가 내 가족의 일처럼 정성을 다해 모시겠습니다.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
              투명하고 정직한 장례 문화를 선도하며, 믿음과 신뢰로 검증된 최고의 파트너가 될 것을 약속드립니다.
            </p>
            <div className="text-right">
              <span className="text-gray-500 text-sm mr-2">대한민국 공무원 장례서비스</span>
              <span className="font-bold text-lg text-gray-900">(주)공무원라이프 대표이사</span>
            </div>
          </div>
        </section>

        {/* Section 2: 조직도 */}
        <section className="mb-24 scroll-mt-24" id="organization">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <Users className="w-8 h-8 text-[#00387f]" /> 조직도
            </h2>
            <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-500 text-sm">공무원라이프 조직도를 안내해 드립니다.</p>
          </div>
          
          <div className="flex flex-col items-center">
            {/* CEO */}
            <div className="bg-[#00387f] text-white font-bold py-4 px-12 rounded-lg shadow-md mb-8 relative">
              대표이사
              <div className="absolute w-[2px] h-8 bg-gray-300 left-1/2 -translate-x-1/2 top-full"></div>
            </div>
            
            {/* Director */}
            <div className="bg-[#1a5eff] text-white font-bold py-3 px-10 rounded-lg shadow-md mb-8 relative">
              총괄이사
              <div className="absolute w-[2px] h-8 bg-gray-300 left-1/2 -translate-x-1/2 top-full"></div>
              {/* Horizontal line for branches */}
              <div className="absolute w-[280px] md:w-[600px] h-[2px] bg-gray-300 left-1/2 -translate-x-1/2 top-[calc(100%+32px)]"></div>
            </div>
            
            {/* Departments */}
            <div className="flex justify-between w-full max-w-[320px] md:max-w-[640px] mt-8 gap-2 md:gap-4">
              <div className="flex-1 bg-white border-2 border-[#1a5eff] text-[#00387f] font-bold py-3 px-2 md:px-6 rounded-lg shadow-sm text-center text-sm md:text-base relative">
                <div className="absolute w-[2px] h-8 bg-gray-300 left-1/2 -translate-x-1/2 bottom-full"></div>
                장례의전팀
              </div>
              <div className="flex-1 bg-white border-2 border-[#1a5eff] text-[#00387f] font-bold py-3 px-2 md:px-6 rounded-lg shadow-sm text-center text-sm md:text-base relative">
                <div className="absolute w-[2px] h-8 bg-gray-300 left-1/2 -translate-x-1/2 bottom-full"></div>
                고객지원팀
              </div>
              <div className="flex-1 bg-white border-2 border-[#1a5eff] text-[#00387f] font-bold py-3 px-2 md:px-6 rounded-lg shadow-sm text-center text-sm md:text-base relative">
                <div className="absolute w-[2px] h-8 bg-gray-300 left-1/2 -translate-x-1/2 bottom-full"></div>
                마케팅팀
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 오시는길 */}
        <section className="scroll-mt-24" id="location">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <MapPin className="w-8 h-8 text-[#00387f]" /> 오시는 길
            </h2>
            <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-4 mb-4"></div>
          </div>
          
          {/* Map Embed */}
          <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden relative shadow-md mb-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.6661918341695!2d127.20235311531065!3d37.53935297980309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb077c5c065f1%3A0xc0fb10fa4d17b8f9!2z6rK96riw64-EIO2VmOuCqOyLnCDtZZjrgqjrjIDroZwgOTQ3!5e0!3m2!1sko!2skr!4v1684305844431!5m2!1sko!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
          
          <div className="flex justify-end gap-2 mb-10 mt-3">
            <a href="https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%95%98%EB%82%A8%EC%8B%9C%20%ED%95%98%EB%82%A8%EB%8C%80%EB%A1%9C%20947" target="_blank" rel="noopener noreferrer" className="bg-[#00c73c] text-white text-sm font-bold py-2 px-4 rounded shadow-sm hover:opacity-90 flex items-center gap-1">
              네이버 지도 <span className="text-[10px]">↗</span>
            </a>
            <a href="https://map.kakao.com/link/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%95%98%EB%82%A8%EC%8B%9C%20%ED%95%98%EB%82%A8%EB%8C%80%EB%A1%9C%20947" target="_blank" rel="noopener noreferrer" className="bg-[#fee500] text-[#191919] text-sm font-bold py-2 px-4 rounded shadow-sm hover:opacity-90 flex items-center gap-1">
              카카오맵 <span className="text-[10px]">↗</span>
            </a>
          </div>
          
          {/* Detailed Info */}
          <div className="flex flex-col gap-10">
            {/* 본사 오시는 길 */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#00387f] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full border-2 border-blue-500 inline-block"></span> 본사 오시는 길
              </h3>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-y-3 text-sm md:text-base border-t border-b border-gray-200 py-4">
                <div className="font-bold text-gray-700">주 소 :</div>
                <div className="text-gray-600">경기도 하남시 하남대로 947 하남테크노벨리U1센터 A동 401호</div>
                
                <div className="font-bold text-gray-700">통합콜센터 :</div>
                <div className="text-blue-600 font-bold font-sans">1599-8379</div>
                
                <div className="font-bold text-gray-700">전 화 :</div>
                <div className="text-gray-600">031-966-8379</div>
                
                <div className="font-bold text-gray-700">팩 스 :</div>
                <div className="text-gray-600">031-969-3522</div>
              </div>
            </div>

            {/* 교통편 */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#00387f] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full border-2 border-blue-500 inline-block"></span> 교통편(지하철)
              </h3>
              <div className="flex flex-col gap-5 border-b border-gray-200 pb-5">
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#8b50a4] text-white text-[11px] font-bold px-2 py-0.5 rounded">5호선</span>
                    <strong className="text-gray-800 text-sm md:text-base">하남풍산역 1번 출구 <span className="font-normal text-gray-500">(도보 약 10~12분, 800m)</span></strong>
                  </div>
                  <p className="text-[13px] md:text-sm text-gray-500 ml-[52px]">
                    * 하남풍산역 1번 출구 앞 버스정류장에서 마을버스 3-1, 3-2 또는 시내버스 30-3, 30-5 환승 시 1정거장('하남테크노벨리U1센터' 정류장) 하차
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#8b50a4] text-white text-[11px] font-bold px-2 py-0.5 rounded">5호선</span>
                    <strong className="text-gray-800 text-sm md:text-base">하남시청역 4번 출구 <span className="font-normal text-gray-500">(시내버스 환승 약 7분)</span></strong>
                  </div>
                  <p className="text-[13px] md:text-sm text-gray-500 ml-[52px]">
                    * 30-3, 30-5, 87, 89번 버스 탑승 후 '하남테크노벨리U1센터' 하차
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-500 text-white text-[11px] font-bold px-2 py-0.5 rounded">버스</span>
                    <strong className="text-gray-800 text-sm md:text-base">'하남테크노벨리U1센터' 정류장 하차 바로 앞</strong>
                  </div>
                  <p className="text-[13px] md:text-sm text-gray-500 ml-[46px]">
                    일반버스: 30-3, 30-5, 87, 89 | 마을버스: 3-1, 3-2
                  </p>
                </div>
                
              </div>
            </div>

            {/* 업무시간 */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#00387f] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full border-2 border-blue-500 inline-block"></span> 업무시간
              </h3>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-y-3 text-sm md:text-base border-b border-gray-200 pb-5">
                <div className="font-bold text-gray-700">평 일 :</div>
                <div className="text-gray-600">09:00~18:00 (031-966-8379)</div>
                
                <div className="font-bold text-gray-700">휴 무 :</div>
                <div className="text-gray-600">주말 및 공휴일 휴무</div>
                
                <div className="col-span-2 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
                  <div className="font-bold text-gray-700">장례접수 및 상담문의 <span className="font-normal text-gray-500">(24시간 운영)</span> :</div>
                  <div className="text-[#e3000f] font-bold text-lg font-sans">1599-8379</div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

      </div>
    </div>
  );
}
