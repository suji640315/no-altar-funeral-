'use client';

import React from 'react';
import Link from 'next/link';
import { Ambulance, CalendarDays, Flower2, Wind, Home, ArrowRight, PhoneCall } from 'lucide-react';

export default function ProcedurePage() {
  const steps = [
    {
      id: 1,
      title: '임종 및 이송',
      desc: '장례지도사 긴급 출동 및 장례식장 앰뷸런스 이송',
      details: '유가족의 연락을 받으면 24시간 언제든 전문 장례지도사가 신속하게 출동합니다. 관내/관외 상황에 맞춰 앰뷸런스를 배차하여 고인을 안전하고 정중하게 장례식장으로 이송합니다.',
      icon: <Ambulance className="w-8 h-8 text-[#00387f]" />,
      color: 'bg-blue-50 border-[#00387f]'
    },
    {
      id: 2,
      title: '안치 및 상담',
      desc: '안치실 모심 및 화장장 예약, 장례일정 상담',
      details: '고인을 장례식장 안치실에 정중히 모신 후, 담당 장례지도사가 유가족과 상의하여 신속하게 화장장(화장로)을 예약하고 2일장 또는 3일장 장례 일정 전반을 세심하게 상담해 드립니다.',
      icon: <CalendarDays className="w-8 h-8 text-indigo-600" />,
      color: 'bg-indigo-50 border-indigo-600'
    },
    {
      id: 3,
      title: '염습 및 입관',
      desc: '고인을 씻기고 수의를 입혀 관에 모시는 절차',
      details: '지정된 입관 시간에 유가족 참관 하에 경건하게 염습(고인을 목욕시키고 수의를 입히는 과정) 및 입관식을 진행합니다. 빈소를 차리지 않아도 고인과의 마지막 인사는 품격 있게 진행됩니다.',
      icon: <Flower2 className="w-8 h-8 text-pink-600" />,
      color: 'bg-pink-50 border-pink-600'
    },
    {
      id: 4,
      title: '발인 및 화장',
      desc: '장례식장을 떠나 화장장으로 이동하여 화장 진행',
      details: '정해진 시간에 맞춰 장례식장을 떠나(발인), 예약된 화장장으로 고인전용 리무진이나 영구차를 이용해 이동합니다. 화장장에 도착하여 안내에 따라 엄숙하게 화장을 진행합니다.',
      icon: <Wind className="w-8 h-8 text-teal-600" />,
      color: 'bg-teal-50 border-teal-600'
    },
    {
      id: 5,
      title: '장지 안치',
      desc: '유골함을 모시고 장지(수목장, 봉안당 등) 안치',
      details: '화장이 끝난 후 유골함을 모시고 원하시는 장지(납골당, 수목장, 해양장 등)로 이동하여 안치합니다. 장지 안치가 마무리되면 모든 장례 절차가 종료되며, 안전하게 귀가하시게 됩니다.',
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
            <h2 className="text-2xl font-bold text-gray-900">간소하지만 품격 있는 5단계 절차</h2>
            <p className="text-gray-500 mt-2">유가족의 슬픔을 덜어드리기 위해 모든 복잡한 절차를 대행해 드립니다.</p>
          </div>

          <div className="relative">
            {/* Vertical Line connecting steps */}
            <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-0.5 bg-gray-200"></div>

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
                  
                  {/* Icon & Step Number */}
                  <div className="flex-shrink-0 flex items-center gap-4 md:flex-col md:gap-0 z-10">
                    <div className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center ${step.color} shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white`}>
                      {step.icon}
                    </div>
                    <div className="md:mt-3 md:text-center">
                      <span className="text-sm font-bold text-gray-400">STEP {step.id}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group-hover:border-gray-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <h4 className="text-[#00387f] font-semibold text-sm mb-3">{step.desc}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
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
              <a href="tel:1599-8379" className="flex items-center justify-center gap-2 bg-[#00387f] hover:bg-[#002f6c] text-white px-8 py-4 rounded-xl font-bold shadow-md transition-colors">
                <PhoneCall className="w-5 h-5" />
                1599-8379 바로 전화하기
              </a>
              <Link href="/sub/counsel" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#00387f] border border-[#00387f] px-8 py-4 rounded-xl font-bold shadow-sm transition-colors">
                온라인 무료 상담 신청 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
