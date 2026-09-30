'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/slide-img-01.png',
  '/slide-img-02.png',
  '/slide-img-03.png'
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
    </div>
  );
}