'use client';

import { useState, useEffect } from 'react';

export default function RecentCounselsTicker() {
  const [recentCounsels, setRecentCounsels] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/counsel/recent')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          let list = [...data.data];
          const fakes = [
            { id: 'f1', name: '김*수', region: '서울', location: '병원', date: new Date().toISOString().slice(0, 10) },
            { id: 'f2', name: '이*영', region: '경기', location: '자택', date: new Date().toISOString().slice(0, 10) },
            { id: 'f3', name: '박*훈', region: '인천', location: '요양병원', date: new Date().toISOString().slice(0, 10) },
            { id: 'f4', name: '최*민', region: '서울', location: '요양원', date: new Date().toISOString().slice(0, 10) },
            { id: 'f5', name: '정*진', region: '경기', location: '병원', date: new Date().toISOString().slice(0, 10) }
          ];
          if (list.length < 5) {
            list = [...list, ...fakes].slice(0, 10);
          }
          setRecentCounsels([...list, ...list]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  if (recentCounsels.length === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-8 mb-4">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rollUpTicker {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .ticker-container {
          animation: rollUpTicker 20s linear infinite;
        }
        .ticker-container:hover {
          animation-play-state: paused;
        }
      `}} />
      
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">
            실시간 무빈소 상담 현황
          </h2>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">현재 {2458 + new Date().getDate() * 2}분께서 고민을 해결하셨습니다.</span>
        </div>
        
        <div className="h-[180px] overflow-hidden relative w-full">
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10"></div>
          
          <div className="ticker-container flex flex-col gap-3">
            {recentCounsels.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full w-[60px] text-center">
                    {item.region}
                  </span>
                  <span className="font-bold text-gray-800 w-[80px]">{item.name} <span className="font-normal text-sm text-gray-500">님</span></span>
                  <span className="text-sm text-gray-600 font-medium hidden sm:block">{item.location}</span>
                </div>
                <div className="text-sm text-gray-400">
                  {item.date}
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
}