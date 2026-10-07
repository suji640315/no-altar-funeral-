'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MouMarqueeItem {
  type: 'ceremony' | 'logo';
  title: string;
  imgSrc: string;
  alt: string;
}

const mouItems: MouMarqueeItem[] = [
  // 1. 구리시청공무원노동조합
  {
    type: 'ceremony',
    title: '구리시청공무원노조 협약식',
    imgSrc: '/images/mou-guri-ceremony.webp',
    alt: '구리시청공무원노동조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '구리시청공무원노동조합',
    imgSrc: '/banner_15.jpg',
    alt: '구리시청공무원노동조합 공식 로고',
  },

  // 2. 연제구청공무원노동조합
  {
    type: 'ceremony',
    title: '연제구청공무원노조 협약식',
    imgSrc: '/images/mou-yeonje-ceremony.webp',
    alt: '연제구청공무원노동조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '연제구청공무원노동조합',
    imgSrc: '/banner_16.jpg',
    alt: '연제구청공무원노동조합 공식 로고',
  },

  // 3. 인천광역시통합공무원노동조합
  {
    type: 'ceremony',
    title: '인천통합공무원노조 협약식',
    imgSrc: '/images/mou-incheon-ceremony.webp',
    alt: '인천광역시통합공무원노동조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '인천광역시통합공무원노동조합',
    imgSrc: '/banner_02.jpg',
    alt: '인천광역시통합공무원노동조합 공식 로고',
  },

  // 4. 인천광역시 개인택시운송사업조합
  {
    type: 'ceremony',
    title: '개인택시조합 협약식',
    imgSrc: '/images/mou-taxi-ceremony.webp',
    alt: '인천광역시 개인택시운송사업조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '인천광역시 개인택시운송사업조합',
    imgSrc: '/banner_17.jpg',
    alt: '인천광역시 개인택시운송사업조합 공식 로고',
  },

  // 5. 부산광역시교육청 공무원노동조합
  {
    type: 'ceremony',
    title: '부산교육청공무원노조 협약식',
    imgSrc: '/images/mou-busan-ceremony.webp',
    alt: '부산광역시교육청공무원노동조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '부산광역시교육청 공무원노동조합',
    imgSrc: '/banner_13.jpg',
    alt: '부산광역시교육청 공무원노동조합 공식 로고',
  },

  // 6. 전북 고창군 공무원노동조합
  {
    type: 'ceremony',
    title: '고창군공무원노조 협약식',
    imgSrc: '/mou/mou-gochang-officials-mubinso.webp',
    alt: '전북 고창군 공무원노동조합 무빈소장례 공식 업무제휴 협약식',
  },
  {
    type: 'logo',
    title: '고창군공무원노동조합',
    imgSrc: '/banner_12.jpg',
    alt: '전북 고창군공무원노동조합 공식 로고',
  },

  // 7. 전북 익산시 공무원노동조합
  {
    type: 'ceremony',
    title: '익산시공무원노조 협약식',
    imgSrc: '/mou/mou-iksan-officials-mubinso.webp',
    alt: '전북 익산시 공무원노동조합 무빈소장례 공식 업무협약식',
  },
  {
    type: 'logo',
    title: '익산시공무원노동조합',
    imgSrc: '/banner_10.jpg',
    alt: '전북 익산시공무원노동조합 공식 로고',
  },

  // 8. 전국공무원노동조합 서울 양천구지부
  {
    type: 'ceremony',
    title: '양천구공무원노조 협약식',
    imgSrc: '/mou/mou-welldying-coop-mubinso.webp',
    alt: '전국공무원노동조합 서울 양천구지부 공식 업무제휴식',
  },
  {
    type: 'logo',
    title: '전국공무원노동조합 양천구지부',
    imgSrc: '/banner_14.jpg',
    alt: '전국공무원노동조합 양천구지부 공식 로고',
  },

  // 9. 대한민국퇴직공무원노동조합
  {
    type: 'ceremony',
    title: '퇴직공무원노조 협약식',
    imgSrc: '/mou/mou-hamyang-officials-mubinso.webp',
    alt: '대한민국퇴직공무원노동조합 공식 업무협약식',
  },
  {
    type: 'logo',
    title: '대한민국 퇴직공무원 노동조합',
    imgSrc: '/banner_08.jpg',
    alt: '대한민국 퇴직공무원 노동조합 공식 로고',
  },

  // 10. 민주노총 공공운수노조 인천지역공공기관지부
  {
    type: 'ceremony',
    title: '공공운수노조 인천지부 협약식',
    imgSrc: '/mou/mou-retired-officials-mubinso.webp',
    alt: '공공운수노조 인천지역공공기관지부 공식 업무협약식',
  },
  {
    type: 'logo',
    title: '공공운수노조 인천지역공공기관지부',
    imgSrc: '/banner_06.jpg',
    alt: '공공운수노조 인천지역공공기관지부 공식 로고',
  },

  // 11. 인천환경공단 노동조합
  {
    type: 'ceremony',
    title: '인천환경공단노조 협약식',
    imgSrc: '/mou/mou-incheon-union-mubinso.webp',
    alt: '인천환경공단 노동조합 공식 업무협약식',
  },
  {
    type: 'logo',
    title: '인천환경공단 노동조합',
    imgSrc: '/banner_07.jpg',
    alt: '인천환경공단 노동조합 공식 로고',
  },

  // 12. 보성삼베섬유(주)
  {
    type: 'ceremony',
    title: '보성삼베섬유 협약식',
    imgSrc: '/mou/mou-boseong-hemp-fabric-01-mubinso.webp',
    alt: '보성삼베섬유(주) 공동협력 및 업무제휴 협약식',
  },
  {
    type: 'logo',
    title: '보성삼베섬유(주)',
    imgSrc: '/banner_03.jpg',
    alt: '보성삼베섬유(주) 공식 로고',
  },

  // 13. 사회적협동조합 멋진인생웰다잉
  {
    type: 'ceremony',
    title: '멋진인생웰다잉 협약식',
    imgSrc: '/mou/mou-boseong-hemp-fabric-02-mubinso.webp',
    alt: '사전연명의료의향서등록기관 사회적협동조합 멋진인생웰다잉 협약식',
  },
  {
    type: 'logo',
    title: '사회적협동조합 멋진인생웰다잉',
    imgSrc: '/banner_04.jpg',
    alt: '사회적협동조합 멋진인생웰다잉 공식 로고',
  },

  // 14. 여의도순복음교회
  {
    type: 'ceremony',
    title: '여의도순복음교회 협약식',
    imgSrc: '/mou/mou-yoido-church-support-mubinso.webp',
    alt: '여의도순복음교회 장례지원협력 공식 업무협약식',
  },
  {
    type: 'logo',
    title: '인천개인택시조합 다사모',
    imgSrc: '/banner_18.jpg',
    alt: '인천개인택시조합 다사모 공식 로고',
  },

  // 15. 추가 공무원노조 및 정부 공공기관 공식 로고
  {
    type: 'logo',
    title: '담양군공무원노동조합',
    imgSrc: '/banner_11.jpg',
    alt: '담양군공무원노동조합 공식 로고',
  },
  {
    type: 'logo',
    title: '전라남도교육청공무원노동조합',
    imgSrc: '/banner_09.jpg',
    alt: '전라남도교육청공무원노동조합 공식 로고',
  },
  {
    type: 'logo',
    title: '보건복지부',
    imgSrc: '/banner_01.jpg',
    alt: '보건복지부 공식 로고',
  },
  {
    type: 'logo',
    title: '국립연명의료관리기관',
    imgSrc: '/banner_05.jpg',
    alt: '국립연명의료관리기관 공식 로고',
  },
];

const duplicatedItems = [...mouItems, ...mouItems, ...mouItems];

export default function MouSection() {
  return (
    <section id="mou" className="w-full py-10 bg-white overflow-hidden mb-10 border-t border-gray-100">
      <div className="container mx-auto max-w-6xl px-4 flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></div>
          <h2 className="text-[17px] md:text-[20px] font-bold text-gray-800 tracking-tight">
            공공기관 및 공무원노조 공식 업무협약(MOU) 현장
          </h2>
        </div>
        <Link 
          href="/sub/coalition" 
          className="text-xs md:text-sm text-gray-500 hover:text-blue-600 font-semibold flex items-center gap-1 transition-colors group"
        >
          <span>전체 협약사 현황 보기</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-0 md:px-6 overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes custom-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); }
          }
          .animate-custom-marquee {
            animation: custom-marquee 70s linear infinite;
            width: fit-content;
          }
          .animate-custom-marquee:hover {
            animation-play-state: paused;
          }
        `,
          }}
        />

        <div className="flex animate-custom-marquee">
          {duplicatedItems.map((item, index) => (
            <Link
              key={index}
              href="/sub/coalition"
              className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden w-[160px] md:w-[220px] h-[80px] md:h-[95px] bg-white flex items-center justify-center p-1 mx-1.5 md:mx-2.5 shadow-sm hover:shadow-md transition-shadow group relative block cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  fill
                  className={
                    item.type === 'ceremony'
                      ? 'object-cover rounded group-hover:scale-105 transition-transform duration-300'
                      : 'object-contain relative z-10 p-2'
                  }
                  sizes="(max-width: 768px) 160px, 220px"
                />
                {item.type === 'ceremony' && (
                  <div className="absolute inset-x-0 bottom-0 bg-black/65 backdrop-blur-[2px] text-white text-[10px] md:text-xs py-0.5 px-1.5 text-center truncate z-20 font-medium">
                    {item.title}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
