'use client';

import Image from 'next/image';

const mouItems = [
  { title: '협력기관', imgSrc: '/banner_01.jpg' },
  { title: '협력기관', imgSrc: '/banner_02.jpg' },
  { title: '협력기관', imgSrc: '/banner_03.jpg' },
  { title: '협력기관', imgSrc: '/banner_04.jpg' },
  { title: '협력기관', imgSrc: '/banner_05.jpg' },
  { title: '협력기관', imgSrc: '/banner_06.jpg' },
  { title: '협력기관', imgSrc: '/banner_07.jpg' },
  { title: '협력기관', imgSrc: '/banner_08.jpg' },
  { title: '협력기관', imgSrc: '/banner_09.jpg' },
  { title: '협력기관', imgSrc: '/banner_10.jpg' },
  { title: '협력기관', imgSrc: '/banner_11.jpg' },
  { title: '협력기관', imgSrc: '/banner_12.jpg' },
  { title: '협력기관', imgSrc: '/banner_13.jpg' },
  { title: '협력기관', imgSrc: '/banner_14.jpg' },
  { title: '협력기관', imgSrc: '/banner_15.jpg' },
  { title: '협력기관', imgSrc: '/banner_16.jpg' },
  { title: '협력기관', imgSrc: '/banner_17.jpg' },
  { title: '협력기관', imgSrc: '/banner_18.jpg' }
];

const duplicatedItems = [...mouItems, ...mouItems, ...mouItems];

export default function MouSection() {
  return (
    <section id="mou" className="w-full py-10 bg-white overflow-hidden mb-10 border-t border-gray-100">
      <div className="container mx-auto max-w-6xl px-4 flex items-center gap-4 mb-4">
        <div className="w-3 h-3 bg-gray-400"></div>
        <h2 className="text-[16px] font-bold text-gray-700">협력기관 및 단체</h2>
      </div>
      <div className="relative w-full max-w-6xl mx-auto px-0 md:px-10 overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes custom-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); }
          }
          .animate-custom-marquee {
            animation: custom-marquee 40s linear infinite;
            width: fit-content;
          }
          .animate-custom-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
        <div className="flex animate-custom-marquee">
          {duplicatedItems.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 border border-gray-200 w-[140px] md:w-[200px] h-[70px] md:h-[80px] bg-white flex items-center justify-center p-2 mx-1 md:mx-2"
            >
              <div className="relative w-full h-full flex items-center justify-center text-xs text-gray-400">
                <span className="absolute text-center px-1 opacity-10 whitespace-normal leading-tight">{item.title}</span>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-contain relative z-10 bg-white"
                  sizes="(max-width: 768px) 140px, 200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
