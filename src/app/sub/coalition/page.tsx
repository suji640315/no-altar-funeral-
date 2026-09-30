'use client';

import Image from 'next/image';

// Extracted from the provided screenshot of the old website
const mouData = [
  { title: '인천개인택시조합', imgSrc: '/mou/mou_0.jpg' },
  { title: '부산광역시교육청공무원노동조합 후불제 상조 서비스 및 일회용품 제작 배송서비스 업무협약 체결', imgSrc: '/mou/mou_1.jpg' },
  { title: '연제구청공무원노동조합 후불제 상조서비스 업무협약 체결', imgSrc: '/mou/mou_2.jpg' },
  { title: '고창군공무원노동조합', imgSrc: '/mou/mou_3.jpg' },
  { title: '익산시공무원노동조합 (한마음화합은잔치)', imgSrc: '/mou/mou_4.jpg' },
  { title: '익산시공무원노동조합', imgSrc: '/mou/mou_5.jpg' },
  { title: '구리시공무원노동조합', imgSrc: '/mou/mou_6.jpg' },
  { title: '보성삼베섬유(주) 공동협력계약 체결 및 업무제휴', imgSrc: '/mou/mou_7.jpg' },
  { title: '보성삼베섬유(주) 공동협력계약 체결 및 업무제휴', imgSrc: '/mou/mou_8.jpg' },
  { title: '순복음여의도교회(여의도순복음교회 장례지원협력업체등록) MOU업무 협약', imgSrc: '/mou/mou_9.jpg' },
  { title: '사회적협동조합 멋진인생웰다잉(사전연명의료의향서 등록기관)과 MOU업무협약', imgSrc: '/mou/mou_10.jpg' },
  { title: '전국공무원노동조합함양군지부', imgSrc: '/mou/mou_11.jpg' },
  { title: '대한민국퇴직공무원노동조합 업무협약', imgSrc: '/mou/mou_12.jpg' },
  { title: '공공운수노조 인천지역공공기관지부', imgSrc: '/mou/mou_13.jpg' },
  { title: '인천환경공단 노동조합', imgSrc: '/mou/mou_14.jpg' }
];

export default function CoalitionPage() {
  return (
    <div className="w-full bg-white font-sans text-gray-800 flex flex-col pt-[100px] min-h-screen">
      {/* Title Header */}
      <div className="w-full bg-[#00387f] py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">제휴협약사</h1>
        <div className="w-9 h-[2px] bg-white/80 mx-auto my-3"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16 flex-1">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">제휴협약사</h2>
          <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-3"></div>
        </div>

        {/* 
          Grid layout matching the old website: 
          1 column on mobile, 3 columns on desktop.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mouData.map((item, index) => (
            <div key={index} className="w-full bg-white border border-gray-200 rounded overflow-hidden flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
              {/* Photo section */}
              <div className="w-full aspect-[4/3] relative bg-gray-100 border-b border-gray-100">
                <Image 
                  src={item.imgSrc} 
                  alt={item.title}
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              {/* Title section */}
              <div className="p-4 flex-1 flex items-center">
                <h3 className="text-xs md:text-sm font-bold text-gray-800 leading-snug break-keep">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
