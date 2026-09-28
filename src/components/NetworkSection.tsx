import { MapPin, Navigation, Ambulance } from 'lucide-react';

export default function NetworkSection() {
  const regions = [
    { name: "서울/경기/인천", count: "152개" },
    { name: "강원 영서/영동", count: "28개" },
    { name: "대전/충청/세종", count: "64개" },
    { name: "광주/전라", count: "47개" },
    { name: "대구/경북", count: "53개" },
    { name: "부산/울산/경남", count: "81개" }
  ];

  return (
    <section id="network" className="py-24 bg-white dark:bg-brand-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 font-bold text-sm mb-6 border border-brand-100 dark:border-brand-800">
                <Ambulance className="w-4 h-4" />
                전국 24시간 긴급 출동 시스템
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 dark:text-white mb-6 leading-tight">
                전국 어디서나 1시간 내<br/>
                <span className="text-gold-500">장례식장 섭외 및 현장 출동</span>
              </h2>
              <p className="text-lg text-brand-600 dark:text-brand-300 leading-relaxed">
                전국 주요 장례식장과 실시간 연계되어 가장 가깝고 쾌적한 무빈소 안치실을 즉시 확보합니다. 
                접수 즉시 관할 구역에 대기 중인 국가공인 장례지도사가 1시간 이내에 앰뷸런스와 함께 도착합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {regions.map((region, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-brand-100 dark:border-brand-800 bg-brand-50/50 dark:bg-brand-900/30 flex flex-col items-center text-center group hover:border-gold-500 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-500 mb-2 group-hover:-translate-y-1 transition-transform" />
                  <span className="font-bold text-brand-900 dark:text-white text-sm mb-1">{region.name}</span>
                  <span className="text-xs text-brand-500 font-medium">제휴 장례식장 {region.count}</span>
                </div>
              ))}
            </div>
            
            <button onClick={() => document.getElementById('quick-form')?.focus()} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-900 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors">
              <Navigation className="w-5 h-5" />
              내 주변 장례식장 섭외 현황 확인
            </button>
          </div>

          {/* Right Visual Map (Abstract Map Representation) */}
          <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-100 to-transparent dark:from-brand-900/40 opacity-50 rounded-full blur-3xl" />
            
            {/* Abstract Graphic */}
            <div className="relative w-full max-w-md aspect-square rounded-full border border-dashed border-brand-200 dark:border-brand-800 animate-[spin_60s_linear_infinite]">
              <div className="absolute top-1/4 left-0 w-4 h-4 bg-gold-400 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)] -translate-x-1/2" />
              <div className="absolute top-0 right-1/4 w-3 h-3 bg-brand-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] -translate-y-1/2" />
              <div className="absolute bottom-1/4 right-0 w-5 h-5 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] translate-x-1/2" />
              <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-gold-400 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)] translate-y-1/2" />
            </div>

            <div className="absolute w-64 h-64 bg-white dark:bg-brand-900 rounded-full shadow-2xl border-4 border-brand-50 dark:border-brand-800 flex flex-col items-center justify-center z-10">
              <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mb-4">
                <Ambulance className="w-8 h-8 text-gold-600 dark:text-gold-400" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-brand-900 dark:text-white">100%</div>
                <div className="text-sm font-bold text-brand-500 mt-1">전국 직영 커버리지</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
