import { Phone, MessageCircle } from 'lucide-react';

export default function StickyBottomBar() {
  return (
    <>
      {/* Mobile Sticky Bottom Bar (모바일 하단 고정 바) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-brand-950 border-t border-brand-200 dark:border-brand-800 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <div className="flex h-16">
          <a 
            href="https://pf.kakao.com/_NpBqxb" 
            target="_blank" 
            rel="noopener noreferrer"
            title="공무원라이프 카카오톡 상담 새창열림"
            aria-label="공무원라이프 카카오톡 1:1 상담 바로가기"
            className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#FEE500] text-[#000000] font-bold text-sm"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>빠른 카톡상담</span>
          </a>
          <a 
            href="tel:02-477-8379" 
            title="무빈소 상담 02-477-8379 직통전화 연결"
            className="flex-[2] flex flex-col items-center justify-center gap-0.5 bg-red-600 text-white font-bold"
          >
            <span className="text-[11px] font-medium opacity-90">터치 시 바로연결</span>
            <div className="flex items-center gap-1.5 text-base sm:text-lg">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>무빈소 상담 02-477-8379</span>
            </div>
          </a>
        </div>
      </div>

      {/* Desktop Floating Quick Menu (PC 우측 하단 플로팅 사이드 배너) */}
      <aside aria-label="빠른 상담 플로팅 메뉴" className="hidden md:flex fixed bottom-8 right-6 z-50 flex-col gap-2.5 items-end">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 p-3.5 flex flex-col gap-2 transition-all hover:shadow-2xl">
          <div className="text-[11px] font-semibold text-gray-500 px-1 flex items-center justify-between gap-2">
            <span>실시간 빠른 문의</span>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          </div>

          {/* 직통전화 버튼 */}
          <a
            href="tel:02-477-8379"
            title="무빈소 상담 02-477-8379 직통전화 연결"
            className="flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl font-bold shadow-md transition-all text-sm group"
          >
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-medium text-red-100 leading-tight">전담 직통상담</div>
              <div className="text-sm font-black tracking-tight">무빈소 상담 02-477-8379</div>
            </div>
          </a>

          {/* 카카오톡 상담 버튼 */}
          <a
            href="https://pf.kakao.com/_NpBqxb" 
            target="_blank" 
            rel="noopener noreferrer"
            title="공무원라이프 카카오톡 상담 새창열림"
            aria-label="공무원라이프 카카오톡 1:1 상담 바로가기"
            className="flex items-center gap-2.5 bg-[#FEE500] hover:bg-[#ebd200] text-[#000000] px-4 py-2.5 rounded-xl font-bold shadow-xs transition-all text-sm group"
          >
            <div className="w-7 h-7 bg-black/10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-medium text-gray-700 leading-tight">1:1 채팅 문의</div>
              <div className="text-sm font-bold">카카오톡 실시간 상담</div>
            </div>
          </a>

          {/* 24시 긴급상황실 서브 안내 */}
          <div className="text-[11px] text-gray-500 text-center pt-1 border-t border-gray-100">
            24시간 상황실 <a href="tel:1599-8379" className="font-bold text-red-600 hover:underline">1599-8379</a>
          </div>
        </div>
      </aside>
    </>
  );
}
