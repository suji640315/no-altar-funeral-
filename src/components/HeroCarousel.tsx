'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VipCardModal from './VipCardModal';

const images = [
  '/slide-img-01.jpg',
  '/slide-img-02.jpg',
  '/slide-img-03.jpg'
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 group">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover md:object-fill"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Overlay to make text pop */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      {/* Main Huge Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none pb-24 md:pb-24 px-4">
        <div className="border-2 border-white/80 px-8 py-6 md:px-16 md:py-10 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[1px]">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4 tracking-tight" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            대한민국 공무원가족을 위한
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            무빈소장례
          </h1>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrev}
        className="absolute left-2 md:left-4 top-[40%] md:top-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-50"
      >
        <ChevronLeft className="w-8 h-8 md:w-6 md:h-6" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-[40%] md:top-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-50"
      >
        <ChevronRight className="w-8 h-8 md:w-6 md:h-6" />
      </button>

      {/* Floating 3 Buttons (Quick Actions) */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Button 1: Blue */}
          <div onClick={() => setIsVipModalOpen(true)} className="bg-[#1a5eff] text-white rounded-2xl shadow-xl flex items-center p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="w-12 h-12 mr-4 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div>
              <p className="text-xs md:text-sm font-medium text-blue-100 mb-1">일반인도 특별할인카드 신청가능!</p>
              <h3 className="text-lg md:text-xl font-bold">특별할인카드 신청하기</h3>
            </div>
          </div>

          {/* Button 2: White/Red */}
          <a href="tel:1599-8379" className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <p className="text-xs md:text-sm font-medium text-gray-600">24시간 긴급 장례접수</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#e3000f] tracking-tight">1599-8379</h3>
            </a>

          {/* Button 3: White/Yellow */}
          <a href="https://pf.kakao.com/_NpBqxb" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center gap-4 p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer">

            <h3 className="text-xl md:text-2xl font-bold text-gray-800">카카오톡 채널추가</h3>
            <div className="w-12 h-12 bg-[#fae100] rounded-full flex items-center justify-center text-black font-black text-xl shrink-0">
              Ch
            </div>
          </a>
        </div>
      </div>
      <VipCardModal isOpen={isVipModalOpen} onClose={() => setIsVipModalOpen(false)} />
    </section>
  );
}
