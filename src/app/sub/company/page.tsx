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
            <p className="text-gray-500 text-sm">(주)공무원라이프 오시는 길을 안내해 드립니다.</p>
          </div>
          
          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden relative flex items-center justify-center shadow-inner">
            {/* Placeholder for map */}
            <div className="text-center flex flex-col items-center">
              <MapPin className="w-12 h-12 text-gray-400 mb-2" />
              <p className="text-gray-500 font-medium">지도 준비 중입니다</p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" /> 본사 주소
              </h4>
              <p className="text-gray-600 text-sm">서울특별시 영등포구 선유로 146, 508호(양평동3가, 이앤씨드림타워)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" /> 고객 센터
              </h4>
              <p className="text-gray-600 text-sm">
                24시간 긴급 장례접수: <strong>1599-8379</strong>
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
