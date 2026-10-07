import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Ambulance, Flower2, Wind, Home, ArrowRight, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: '무빈소 장례 진행절차 (2일·3일 가족장 안내) | 공무원라이프 무빈소장례',
  description: '임종 즉시 안치실 배정부터 1급 지도사의 정식 입관식, 화장장 예약 및 동행까지. 무빈소 장례의 투명한 진행 절차를 확인하세요.',
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net/sub/procedure',
  },
};

export default function ProcedurePage() {
  const steps = [
    {
      id: 1,
      title: 'STEP 01 (임종 및 안치실 이송)',
      desc: '24시간 긴급상황실 접수, 고인 전용 운구차량 즉시 배차 및 안치실 안치, 화장장 신속 예약 대행',
      details: '24시간 긴급상황실(02-477-8379) 접수 → 고인 전용 운구차량 즉시 배차 → 유가족 관내 최적 장례식장 안치실 안치 → e하늘 화장장 신속 예약 대행',
      icon: <Ambulance className="w-8 h-8 text-[#00387f]" />,
      color: 'bg-blue-50 border-[#00387f]'
    },
    {
      id: 2,
      title: 'STEP 02 (전문 입관식 및 추모)',
      desc: '1급 장례지도사 2인 전담 집도, 궁중대렴 정식 염습 및 수의 착용, 생화 꽃관 장식 마지막 추모 인사',
      details: '1급 장례지도사 2인 전담 집도 → 궁중대렴 정식 염습 및 수의 착용 → 생화 꽃관 장식 후 유가족 참관 하에 마지막 추모 인사',
      icon: <Flower2 className="w-8 h-8 text-pink-600" />,
      color: 'bg-pink-50 border-pink-600'
    },
    {
      id: 3,
      title: 'STEP 03 (발인 및 화장장 동행)',
      desc: '고인 전용 운구차량 운행, 화장장 이동 및 접수 동행, 화장로 입로 및 수골 참관',
      details: '고인 전용 운구차량 운행 → 화장장 이동 및 접수 동행 → 화장로 입로 및 수골 참관',
      icon: <Wind className="w-8 h-8 text-teal-600" />,
      color: 'bg-teal-50 border-teal-600'
    },
    {
      id: 4,
      title: 'STEP 04 (봉안 및 후불 정산)',
      desc: '유가족 희망 장지 안치 안내 및 100% 후불 정산',
      details: '유가족 희망 장지(봉안당/수목장/해양장 등) 안치 안내 → 모든 일정 종료 후 만족도 확인 및 100% 후불 결제',
      icon: <Home className="w-8 h-8 text-amber-600" />,
      color: 'bg-amber-50 border-amber-600'
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen pt-[100px] pb-20 font-sans text-gray-800">
      <div className="w-full bg-[#00387f] py-12 text-center text-white mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">무빈소 장례절차 안내</h1>
        <div className="w-9 h-[2px] bg-white/80 mx-auto my-3"></div>
        <p className="text-blue-100 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          빈소를 차리지 않아도 고인 가시는 길, 조금의 부족함도 없도록<br className="hidden md:block" />
          공무원라이프의 전문 장례지도사가 처음부터 끝까지 함께합니다.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-10">
          
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900">간소하지만 품격 있는 무빈소 4단계 핵심 절차</h2>
            <p className="text-gray-500 mt-2">불필요한 절차 거품은 빼고, 정직한 고인 예우에만 집중하는 무빈소 전용 일정입니다.</p>
          </div>

          <div className="relative">
            {/* Vertical Line connecting steps */}
            <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-0.5 bg-gray-200"></div>

            <div className="space-y-8 md:space-y-12">
              {steps.map((step) => (
                <div key={step.id} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
                  
                  {/* Icon & Step Number */}
                  <div className="flex-shrink-0 flex items-center gap-4 md:flex-col md:gap-0 z-10">
                    <div className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center ${step.color} shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white`}>
                      {step.icon}
                    </div>
                    <div className="md:mt-3 md:text-center">
                      <span className="text-sm font-bold text-gray-400">STEP 0{step.id}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group-hover:border-gray-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <h4 className="text-[#00387f] font-semibold text-sm mb-3">{step.desc}</h4>
                    <p className="text-gray-700 leading-relaxed text-sm font-medium bg-gray-50/70 p-3.5 rounded-xl border border-gray-100">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Call */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
            <h3 className="text-xl font-bold text-[#00387f] mb-3">무빈소 장례, 지금 바로 도움이 필요하신가요?</h3>
            <p className="text-gray-600 mb-8 text-sm">
              24시간 전문 장례지도사가 대기 중입니다. 언제든 편하게 연락 주시면 친절하게 안내해 드리겠습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:02-477-8379" className="flex items-center justify-center gap-2 bg-[#00387f] hover:bg-[#002f6c] text-white px-8 py-4 rounded-xl font-bold shadow-md transition-colors text-base">
                <PhoneCall className="w-5 h-5" />
                02-477-8379 직통 전화하기
              </a>
              <a href="tel:1599-8379" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-md transition-colors text-base">
                <PhoneCall className="w-5 h-5" />
                1599-8379 (24시 상황실)
              </a>
              <Link href="/sub/counsel" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#00387f] border border-[#00387f] px-8 py-4 rounded-xl font-bold shadow-sm transition-colors text-base">
                온라인 무료 상담 신청 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
