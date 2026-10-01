import { Phone, MessageCircle } from 'lucide-react';

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-brand-950 border-t border-brand-200 dark:border-brand-800 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
      <div className="flex h-16">
        <a 
          href="https://pf.kakao.com/_NpBqxb" 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#FEE500] text-[#000000] font-bold text-sm"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>빠른 카톡상담</span>
        </a>
        <a 
          href="tel:1599-8379" 
          className="flex-[2] flex flex-col items-center justify-center gap-0.5 bg-red-600 text-white font-bold"
        >
          <span className="text-xs font-medium opacity-90">터치 시 바로연결</span>
          <div className="flex items-center gap-2 text-lg">
            <Phone className="w-5 h-5" />
            <span>1599-8379</span>
          </div>
        </a>
      </div>
    </div>
  );
}
