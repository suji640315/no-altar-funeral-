'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/sub/company', label: '회사소개' },
    { href: '/sub/goods', label: '상품소개' },
    { href: '/sub/counsel', label: '무료상담서비스' },
    { href: '/sub/procedure', label: '장례절차' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-brand-950/95 backdrop-blur-md z-50 border-b border-brand-100 dark:border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo & Brand Separation for SEO */}
        <div className="flex flex-col justify-center relative z-20">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
            <Image 
              src="/logo.png" 
              alt="공무원라이프 무빈소장례" 
              width={220} 
              height={60} 
              className="h-9 md:h-11 w-auto object-contain" 
              priority 
            />
            <div className="flex items-center">
              <span className="hidden sm:inline-block h-5 w-[1px] bg-gray-300 mx-1"></span>
              <span className="text-xs md:text-sm font-black text-blue-700 tracking-tight bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80 shadow-xs">
                무빈소장례
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Desktop Menu & Mobile Toggle */}
        <div className="flex items-center gap-6 relative z-20">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-gray-800">
            {navLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.label}
              </Link>
            ))}
            <a
              href="tel:02-477-8379"
              className="flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded-full transition-colors ml-2 shadow-xs"
              title="직통상담전화 02-477-8379"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>02-477-8379</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-2 -mr-2 text-brand-900 dark:text-white hover:bg-brand-50 dark:hover:bg-brand-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden absolute top-20 left-0 right-0 bg-white dark:bg-brand-950 border-b border-brand-100 dark:border-brand-800 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="flex flex-col py-2 px-4">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href} 
              className="block text-base font-bold text-gray-800 p-4 border-b border-gray-100 last:border-0 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-3 pt-4 border-t border-gray-100">
            <a
              href="tel:02-477-8379"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>직통 상담전화 02-477-8379</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
