import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: '제휴협약사 현황 | 공무원라이프 무빈소장례',
  description: '구리시청, 연제구청, 인천공무원노조 등 공공기관 공식 업무협약(MOU) 체결 현황. 공직사회가 검증한 품격 있는 무빈소 장례 서비스를 약속합니다.',
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net/sub/coalition',
  },
  openGraph: {
    title: '공공기관 및 공무원노조 공식 제휴협약 현황 - 무빈소장례',
    description: '공무원 협약 기준 그대로, 투명하고 정직한 무빈소 가족장을 모십니다.',
    url: 'https://xn--9n2b17ct9ctte97j.net/sub/coalition',
  },
};

interface MouItem {
  title: string;
  imgSrc: string;
  alt: string;
}

const mouData: MouItem[] = [
  {
    title: '인천개인택시조합',
    imgSrc: '/mou/mou-taxi-transport-mubinso.webp',
    alt: '인천개인택시조합 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '부산광역시교육청공무원노동조합 후불제 상조 서비스 및 일회용품 제작 배송서비스 업무협약 체결',
    imgSrc: '/mou/mou-busan-edu-officials-mubinso.webp',
    alt: '부산광역시교육청공무원노동조합 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '연제구청공무원노동조합 후불제 상조서비스 업무협약 체결',
    imgSrc: '/mou/mou-yeonje-officials-mubinso.webp',
    alt: '연제구청공무원노동조합 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '고창군공무원노동조합',
    imgSrc: '/mou/mou-gochang-officials-mubinso.webp',
    alt: '고창군공무원노동조합 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '익산시공무원노동조합 (한마음화합은잔치)',
    imgSrc: '/mou/mou-iksan-festival-mubinso.webp',
    alt: '익산시공무원노동조합 한마음화합은잔치 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '익산시공무원노동조합',
    imgSrc: '/mou/mou-iksan-officials-mubinso.webp',
    alt: '익산시공무원노동조합 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '구리시공무원노동조합',
    imgSrc: '/mou/mou-guri-officials-mubinso.webp',
    alt: '구리시청공무원노동조합 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '보성삼베섬유(주) 공동협력계약 체결 및 업무제휴',
    imgSrc: '/mou/mou-boseong-hemp-fabric-01-mubinso.webp',
    alt: '보성삼베섬유(주) 공무원라이프 무빈소장례 공동협력계약 체결 및 공식 업무제휴식'
  },
  {
    title: '보성삼베섬유(주) 공동협력계약 체결 및 업무제휴',
    imgSrc: '/mou/mou-boseong-hemp-fabric-02-mubinso.webp',
    alt: '보성삼베섬유(주) 공무원라이프 무빈소장례 공동협력 및 업무제휴 협약식'
  },
  {
    title: '순복음여의도교회(여의도순복음교회 장례지원협력업체등록) MOU업무 협약',
    imgSrc: '/mou/mou-yoido-church-support-mubinso.webp',
    alt: '순복음여의도교회 공무원라이프 무빈소장례 장례지원협력 MOU 공식 업무협약식'
  },
  {
    title: '사회적협동조합 멋진인생웰다잉(사전연명의료의향서 등록기관)과 MOU업무협약',
    imgSrc: '/mou/mou-welldying-coop-mubinso.webp',
    alt: '사회적협동조합 멋진인생웰다잉 공무원라이프 무빈소장례 MOU 공식 업무협약 체결'
  },
  {
    title: '전국공무원노동조합함양군지부',
    imgSrc: '/mou/mou-hamyang-officials-mubinso.webp',
    alt: '전국공무원노동조합함양군지부 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '대한민국퇴직공무원노동조합 업무협약',
    imgSrc: '/mou/mou-retired-officials-mubinso.webp',
    alt: '대한민국퇴직공무원노동조합 공무원라이프 무빈소장례 공식 업무협약식'
  },
  {
    title: '공공운수노조 인천지역공공기관지부',
    imgSrc: '/mou/mou-incheon-union-mubinso.webp',
    alt: '인천광역시통합공무원노동조합 공공운수노조 무빈소장례 공식 업무협약 체결'
  },
  {
    title: '인천환경공단 노동조합',
    imgSrc: '/mou/mou-incheon-env-union-mubinso.webp',
    alt: '인천환경공단 노동조합 공무원라이프 무빈소장례 공식 업무협약식'
  }
];

export default function CoalitionPage() {
  return (
    <div className="w-full bg-white font-sans text-gray-800 flex flex-col pt-[100px] min-h-screen">
      {/* Title Header */}
      <div className="w-full bg-[#00387f] py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">제휴협약사</h1>
        <div className="w-9 h-[2px] bg-white/80 mx-auto my-3"></div>
        <p className="text-blue-100 text-sm md:text-base font-normal max-w-xl mx-auto px-4">
          대한민국 공직사회 및 주요 공공기관이 공식 검증한 신뢰의 의전 파트너십
        </p>
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16 flex-1">
        
        {/* Page Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">제휴협약사 현황</h2>
          <div className="w-10 h-[2px] bg-blue-600 mx-auto mt-3"></div>
        </div>

        {/* 1. 갤러리 상단 인트로 텍스트 섹션 (SEO & 신뢰 강화 박스) */}
        <div className="bg-gradient-to-br from-blue-50/90 via-slate-50 to-indigo-50/60 border border-blue-100/90 rounded-2xl p-6 md:p-8 mb-10 md:mb-12 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-semibold text-xs shadow-sm">
              <Award className="w-3.5 h-3.5" />
              공공기관 공식 협약 검증
            </span>
          </div>

          <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 tracking-tight leading-snug">
            공직사회가 검증한 10년의 신뢰, 무빈소 장례에서도 그대로 이어집니다.
          </h3>

          <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
            <p>
              (주)공무원라이프는 구리시청, 부산 연제구청, 인천광역시통합공무원노동조합 등 주요 지자체 및 공공단체와 정식 업무협약(MOU)을 체결하고 투명한 의전 서비스를 제공해 오고 있습니다.
            </p>
            <p>
              본 무빈소장례 센터는 협약 기관들의 엄격한 심사 기준과 &apos;부당 추가금 0원&apos;, &apos;100% 후불제 원칙&apos;을 일반 시민 유가족의 무빈소·가족장에도 동일한 프로토콜로 적용하여 정성을 다해 모십니다.
            </p>
          </div>
        </div>

        {/* 
          Grid layout matching the established design: 
          1 column on mobile, 3 columns on desktop.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {mouData.map((item, index) => (
            <div 
              key={index} 
              className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group"
            >
              {/* Photo section: Strict 4:3 Aspect Ratio Container with Guaranteed Containment */}
              <div 
                className="w-full relative bg-gray-100 border-b border-gray-100 overflow-hidden shrink-0"
                style={{ aspectRatio: '4 / 3' }}
              >
                <Image 
                  src={item.imgSrc} 
                  alt={item.alt}
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0
                  }}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  priority={index === 0}
                />
              </div>
              
              {/* Title & Caption section */}
              <div className="p-4 md:p-5 flex-1 flex flex-col justify-between bg-white">
                {/* 기관명: 모바일 14px, 데스크톱 15px 고대비 텍스트, 균일한 행 높이(min-h) 확보 */}
                <h3 className="text-[14px] md:text-[15px] font-bold text-gray-900 leading-snug break-keep mb-3 min-h-[2.75rem] flex items-center">
                  {item.title}
                </h3>
                
                {/* 사진 하단 텍스트 캡션: 모바일 13px 이상, 진한 파랑 및 고명도 대비 */}
                <div className="pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[13px] font-bold text-[#004bb5]">
                  <ShieldCheck className="w-4 h-4 text-[#004bb5] shrink-0" />
                  <span>[공무원 협약 기준 의전 적용]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
