import { Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-brand-950/90 backdrop-blur-md z-50 border-b border-brand-100 dark:border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo & Brand */}
        <div className="flex flex-col justify-center">
          <Link href="/">
            <Image src="/logo.png" alt="(주)공무원라이프" width={220} height={60} className="h-10 md:h-12 w-auto object-contain" priority />
          </Link>
        </div>

        {/* Right: Emergency Dial & Desktop Menu */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex gap-6 text-sm font-medium text-brand-700 dark:text-brand-300">
            <Link href="#about" className="hover:text-gold-500 transition-colors">회사소개</Link>
            <Link href="#pricing" className="hover:text-gold-500 transition-colors">무빈소 상품안내</Link>
            <Link href="#network" className="hover:text-gold-500 transition-colors">전국 장례식장 안내</Link>
            <Link href="#mou" className="hover:text-gold-500 transition-colors">MOU 제휴 현황</Link>
          </nav>

          <a href="tel:1599-8379" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-600/20 transition-transform active:scale-95">
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden md:inline">24시 긴급 장례접수</span>
            <span className="md:hidden">긴급접수</span>
            <span className="ml-1 md:text-lg">1599-8379</span>
          </a>
        </div>

      </div>
    </header>
  );
}
