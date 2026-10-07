import { Metadata } from 'next';
import { Building2, Users, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: '브랜드 및 조직 소개 | 공무원라이프 무빈소장례',
  description: '공무원 노조 협약 기준의 무빈소 전담 의전팀과 신속 배정 시스템을 갖춘 공무원라이프 무빈소장례사업부 소개입니다.',
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net/sub/company',
  },
};

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
            <p className="text-gray-500 text-sm">공직사회가 신뢰한 품격과 정직함으로 무빈소 가족장의 새로운 기준을 세웁니다.</p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black text-[#00387f] mb-6 leading-tight">
              "공직사회가 검증한 10년 의전 노하우,<br />정직한 무빈소 가족장으로 이어갑니다."
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
              (주)공무원라이프 무빈소장례는 수백만 원에 달하는 불필요한 빈소 대여료와 접객 음식 비용의 거품을 과감히 걷어내고, 
              오직 고인과의 가장 경건하고 진실된 마지막 배웅에만 온전히 집중할 수 있도록 출범한 무빈소 특화 전문 브랜드입니다.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
              까다로운 공공기관 및 공무원 노동조합 협약 심사를 통과한 검증된 1급 장례지도사 2인이 모든 입관식과 발인, 
              화장장 예약 대행 및 장지 동행까지 직접 전담 집도합니다. 단 1원의 부당 추가금 없이, 100% 후불제로 
              처음부터 끝까지 가족의 곁에서 정직하고 품격 있게 모실 것을 약속드립니다.
            </p>
            <div className="text-right">
              <span className="text-gray-500 text-sm mr-2">대한민국 공무원 장례서비스</span>
              <span className="font-bold text-lg text-gray-900">(주)공무원라이프 무빈소장례사업부</span>
            </div>
          </div>
        </section>

        {/* Section 2: 조직도 */}
        <section className="mb-24 scroll-mt-24" id="organization" aria-label="공무원라이프 무빈소장례사업부 조직도">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <Users className="w-8 h-8 text-[#00387f]" /> 조직도
            </h2>
            <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-500 text-sm">공무원 협약 기준 의전 프로토콜을 수행하는 무빈소 전담 조직도입니다.</p>
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
            
            {/* Departments container */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 w-full max-w-4xl relative">
              
              {/* Dept 1: 경영기획부 */}
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-8 bg-gray-300 mb-2"></div>
                <div className="w-full bg-white border-2 border-[#00387f] text-[#00387f] font-bold py-2.5 rounded-lg text-center shadow-sm">
                  경영기획부
                </div>
                <div className="w-full bg-gray-50 border border-gray-200 mt-2 p-3 rounded-lg text-xs md:text-sm text-gray-600 space-y-1.5 text-center">
                  <div>경영기획팀</div>
                  <div>정찰제관리팀</div>
                  <div>행정지원팀</div>
                </div>
              </div>

              {/* Dept 2: 의전사업부 */}
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-8 bg-gray-300 mb-2"></div>
                <div className="w-full bg-white border-2 border-[#00387f] text-[#00387f] font-bold py-2.5 rounded-lg text-center shadow-sm">
                  의전사업부
                </div>
                <div className="w-full bg-gray-50 border border-gray-200 mt-2 p-3 rounded-lg text-xs md:text-sm text-gray-600 space-y-1.5 text-center">
                  <div className="font-semibold text-gray-800">무빈소 전담의전1팀</div>
                  <div className="font-semibold text-gray-800">무빈소 전담의전2팀</div>
                  <div className="font-semibold text-gray-800">전용운구·물류팀</div>
                </div>
              </div>

              {/* Dept 3: 대외협력부 */}
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-8 bg-gray-300 mb-2"></div>
                <div className="w-full bg-white border-2 border-[#00387f] text-[#00387f] font-bold py-2.5 rounded-lg text-center shadow-sm">
                  대외협력부
                </div>
                <div className="w-full bg-gray-50 border border-gray-200 mt-2 p-3 rounded-lg text-xs md:text-sm text-gray-600 space-y-1.5 text-center">
                  <div className="font-semibold text-gray-800">공공기관·노조협력팀</div>
                  <div className="font-semibold text-gray-800">지자체 화장시설협력팀</div>
                  <div>브랜드홍보팀</div>
                </div>
              </div>

              {/* Dept 4: 고객지원부 */}
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-8 bg-gray-300 mb-2"></div>
                <div className="w-full bg-white border-2 border-[#00387f] text-[#00387f] font-bold py-2.5 rounded-lg text-center shadow-sm">
                  고객지원부
                </div>
                <div className="w-full bg-gray-50 border border-gray-200 mt-2 p-3 rounded-lg text-xs md:text-sm text-gray-600 space-y-1.5 text-center">
                  <div className="font-semibold text-gray-800">
                    24시간 긴급상황실<br className="sm:hidden" />
                    <span className="text-[11px] md:text-xs text-blue-700 font-bold block sm:inline sm:ml-1">(02-477-8379)</span>
                  </div>
                  <div className="font-semibold text-gray-800">안치실 신속배정팀</div>
                  <div>유가족케어팀</div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 3: 오시는 길 */}
        <section className="scroll-mt-24" id="location">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <MapPin className="w-8 h-8 text-[#00387f]" /> 오시는 길
            </h2>
            <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-500 text-sm">공무원라이프 본사 위치를 안내해 드립니다.</p>
          </div>

          {/* Detailed Info */}
          <div className="flex flex-col gap-10">
            {/* 본사 오시는 길 */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#00387f] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full border-2 border-blue-500 inline-block"></span> 본사 오시는 길
              </h3>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-y-3 text-sm md:text-base border-t border-b border-gray-200 py-4">
                <div className="font-bold text-gray-700">사업장 주소 :</div>
                <div className="text-gray-600">경기도 하남시 하남대로 947, A동 401호(풍산동, 하남테크노밸리U1센터)</div>
                
                <div className="font-bold text-gray-700">직통 상담전화 :</div>
                <div className="text-blue-600 font-bold font-sans">
                  <a href="tel:02-477-8379" className="hover:underline">02-477-8379</a>
                </div>
                
                <div className="font-bold text-gray-700">24시 상황실 :</div>
                <div className="text-red-600 font-bold font-sans">
                  <a href="tel:1599-8379" className="hover:underline">1599-8379</a>
                </div>
                
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
                    * 하남풍산역 1번 출구 앞 버스정류장에서 마을버스 3-1, 3-2 또는 시내버스 30-3, 30-5 환승 시 1정거장('하남테크노밸리U1센터' 정류장) 하차
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#8b50a4] text-white text-[11px] font-bold px-2 py-0.5 rounded">5호선</span>
                    <strong className="text-gray-800 text-sm md:text-base">하남시청역 4번 출구 <span className="font-normal text-gray-500">(시내버스 환승 약 7분)</span></strong>
                  </div>
                  <p className="text-[13px] md:text-sm text-gray-500 ml-[52px]">
                    * 30-3, 30-5, 87, 89번 버스 탑승 후 '하남테크노밸리U1센터' 하차
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-500 text-white text-[11px] font-bold px-2 py-0.5 rounded">버스</span>
                    <strong className="text-gray-800 text-sm md:text-base">'하남테크노밸리U1센터' 정류장 하차 바로 앞</strong>
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
                <div className="text-gray-600">09:00~18:00 (직통 02-477-8379)</div>
                
                <div className="font-bold text-gray-700">휴 무 :</div>
                <div className="text-gray-600">주말 및 공휴일 휴무</div>
                
                <div className="col-span-2 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
                  <div className="font-bold text-gray-700">장례접수 및 상담문의 <span className="font-normal text-gray-500">(24시간 운영)</span> :</div>
                  <div className="text-[#e3000f] font-bold text-lg font-sans">
                    <a href="tel:02-477-8379" className="hover:underline mr-3">02-477-8379</a>
                    <span className="text-sm font-normal text-gray-500">(상황실: 1599-8379)</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

      </div>

    </div>
  );
}
