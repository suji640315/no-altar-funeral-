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
        </div>

      </div>
    </header>
  );
}