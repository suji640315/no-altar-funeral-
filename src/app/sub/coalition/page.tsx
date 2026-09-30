'use client';

import Image from 'next/image';

const banners = [
  '/banner_01.jpg', '/banner_02.jpg', '/banner_03.jpg', '/banner_04.jpg',
  '/banner_05.jpg', '/banner_06.jpg', '/banner_07.jpg', '/banner_08.jpg',
  '/banner_09.jpg', '/banner_10.jpg', '/banner_11.jpg', '/banner_12.jpg',
  '/banner_13.jpg', '/banner_14.jpg', '/banner_15.jpg', '/banner_16.jpg',
  '/banner_17.jpg', '/banner_18.jpg'
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
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">협력기관 및 단체</h2>
          <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-3"></div>
          <p className="text-gray-500 text-sm mt-3">대한민국 공무원가족을 위한 제휴협약사 목록입니다.</p>
        </div>

        {/* grid-cols-1 on mobile so it's one picture per row, grid-cols-3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {banners.map((imgSrc, index) => (
            <div key={index} className="w-full aspect-[2/1] relative bg-white border border-gray-200 shadow-sm rounded overflow-hidden">
              <Image 
                src={imgSrc} 
                alt={`협력기관 ${index + 1}`} 
                fill 
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
