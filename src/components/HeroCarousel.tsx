'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/slide-img-01.jpg',
  '/slide-img-02.jpg',
  '/slide-img-03.jpg'
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] bg-gray-100">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
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

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Floating 3 Buttons (Quick Actions) */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Button 1: Blue */}
          <div className="bg-[#1a5eff] text-white rounded-2xl shadow-xl flex items-center p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="w-12 h-12 mr-4 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div>
              <p className="text-xs md:text-sm font-medium text-blue-100 mb-1">일반인도 장례위로금 신청가능!</p>
              <h3 className="text-lg md:text-xl font-bold">장례위로금 신청하기</h3>
            </div>
          </div>

          {/* Button 2: White/Red */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <p className="text-xs md:text-sm font-medium text-gray-600">24시간 긴급 장례접수</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#e3000f] tracking-tight">1599-8379</h3>
          </div>

          {/* Button 3: White/Yellow */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center gap-4 p-4 md:p-6 hover:-translate-y-1 transition-transform cursor-pointer">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">카카오톡 채널추가</h3>
            <div className="w-12 h-12 bg-[#fae100] rounded-full flex items-center justify-center text-black font-black text-xl shrink-0">
              Ch
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
