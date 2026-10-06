'use client';

import Image from 'next/image';

const mouItems = [
  {
    type: 'ceremony',
    title: '구리시청공무원노조 협약식',
    imgSrc: '/images/mou-guri-ceremony.webp',
    alt: '구리시청공무원노동조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '구리시청공무원노동조합',
    imgSrc: '/banner_01.jpg',
    alt: '구리시청공무원노동조합 공식 로고',
  },
  {
    type: 'ceremony',
    title: '연제구청공무원노조 협약식',
    imgSrc: '/images/mou-yeonje-ceremony.webp',
    alt: '연제구청공무원노동조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '연제구청공무원노동조합',
    imgSrc: '/banner_06.jpg',
    alt: '연제구청공무원노동조합 공식 로고',
  },
  {
    type: 'ceremony',
    title: '인천통합공무원노조 협약식',
    imgSrc: '/images/mou-incheon-ceremony.webp',
    alt: '인천광역시통합공무원노동조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '인천광역시통합공무원노동조합',
    imgSrc: '/banner_08.jpg',
    alt: '인천광역시통합공무원노동조합 공식 로고',
  },
  {
    type: 'ceremony',
    title: '개인택시조합 협약식',
    imgSrc: '/images/mou-taxi-ceremony.webp',
    alt: '인천광역시 개인택시운송사업조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '인천개인택시조합',
    imgSrc: '/banner_02.jpg',
    alt: '인천광역시 개인택시운송사업조합 공식 로고',
  },
  {
    type: 'ceremony',
    title: '부산교육청공무원노조 협약식',
    imgSrc: '/images/mou-busan-ceremony.webp',
    alt: '부산광역시교육청공무원노동조합 무빈소장례 공식 의전 협약식 현장',
  },
  {
    type: 'logo',
    title: '공공운수노조 인천지역본부',
    imgSrc: '/banner_10.jpg',
    alt: '공공운수노조 인천지역본부 공식 로고',
  },
  {
    type: 'logo',
    title: '보건복지부',
    imgSrc: '/banner_03.jpg',
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
      <div className="container mx-auto max-w-6xl px-4 flex items-center gap-3 mb-6">
        <div className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></div>
        <h2 className="text-[17px] md:text-[20px] font-bold text-gray-800 tracking-tight">
          공공기관 및 공무원노조 공식 업무협약(MOU) 현장
        </h2>
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
            animation: custom-marquee 45s linear infinite;
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
            <div
              key={index}
              className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden w-[160px] md:w-[220px] h-[80px] md:h-[95px] bg-white flex items-center justify-center p-1 mx-1.5 md:mx-2.5 shadow-sm hover:shadow-md transition-shadow group relative"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  fill
                  className={
                    item.type === 'ceremony'
                      ? 'object-cover rounded group-hover:scale-105 transition-transform duration-300'
                      : 'object-contain relative z-10 p-1'
                  }
                  sizes="(max-width: 768px) 160px, 220px"
                />
                {item.type === 'ceremony' && (
                  <div className="absolute inset-x-0 bottom-0 bg-black/65 backdrop-blur-[2px] text-white text-[10px] md:text-xs py-0.5 px-1.5 text-center truncate z-20 font-medium">
                    {item.title}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
