'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

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
        
        {/* Left: Logo & Brand */}
        <div className="flex flex-col justify-center relative z-20">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/logo.png" alt="(주)공무원라이프" width={220} height={60} className="h-10 md:h-12 w-auto object-contain" priority />
          </Link>
        </div>

        {/* Right: Desktop Menu & Mobile Toggle */}
        <div className="flex items-center gap-6 relative z-20">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 text-sm font-bold text-gray-800">
            {navLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.label}
              </Link>
            ))}
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
        </div>
      </div>
    </header>
  );
}