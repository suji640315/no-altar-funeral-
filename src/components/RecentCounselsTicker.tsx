'use client';

import { useState, useEffect } from 'react';

export default function RecentCounselsTicker() {
  const [recentCounsels, setRecentCounsels] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/counsel/recent')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          // 자연스러운 무한 롤링 루프를 위해 2벌 연결
          setRecentCounsels([...data.data, ...data.data]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  if (recentCounsels.length === 0) return null;

  // 100여 개 항목이 천천히 편안하게 지나가도록 속도 최적화 (항목당 약 2.4초)
  const animDuration = Math.max(60, Math.round((recentCounsels.length / 2) * 2.4));

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-8 mb-4">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rollUpTicker {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .ticker-container {
          animation: rollUpTicker ${animDuration}s linear infinite;
        }
        .ticker-container:hover {
          animation-play-state: paused;
        }
      `}} />
      
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
              실시간 무빈소 상담 현황
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              24시 실시간 접수중
            </span>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium self-start sm:self-auto">
            현재 {2458 + new Date().getDate() * 2}분께서 고민을 해결하셨습니다.
          </span>
        </div>
        
        <div className="h-[190px] overflow-hidden relative w-full">
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="ticker-container flex flex-col gap-2.5">
            {recentCounsels.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="flex items-center justify-between py-2 px-3.5 bg-gray-50/90 hover:bg-blue-50/60 rounded-xl transition-colors border border-gray-100/80"
              >
                <div className="flex items-center gap-2.5 sm:gap-4 overflow-hidden">
                  <span className="px-2 py-0.5 bg-blue-100/70 text-blue-800 text-xs font-bold rounded-md w-[48px] sm:w-[54px] text-center shrink-0">
                    {item.region}
                  </span>
                  <span className="font-bold text-gray-800 text-sm sm:text-base shrink-0">
                    {item.name} <span className="font-normal text-xs text-gray-400">님</span>
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 font-medium truncate max-w-[130px] sm:max-w-[240px]">
                    {item.location}
                  </span>
                  {item.isReal && (
                    <span className="hidden sm:inline-block text-[10px] font-bold text-red-600 bg-red-50 border border-red-200/60 px-1.5 py-0.2 rounded shrink-0">
                      실시간접수
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium shrink-0 ml-2">
                  {item.date}
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
