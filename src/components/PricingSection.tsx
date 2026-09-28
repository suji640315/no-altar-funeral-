import { Check, Info } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-brand-50 dark:bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 dark:text-white mb-4">
            투명한 무빈소 패키지 정찰제
          </h2>
          <p className="text-lg text-brand-600 dark:text-brand-300">
            복잡한 옵션과 숨은 비용 없이, 직관적인 두 가지 패키지로 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Basic Package */}
          <div className="bg-white dark:bg-brand-950 rounded-3xl shadow-xl overflow-hidden border border-brand-200 dark:border-brand-800 flex flex-col">
            <div className="p-8 bg-gray-50 dark:bg-brand-900 text-center border-b border-brand-100 dark:border-brand-800">
              <h3 className="text-2xl font-bold text-brand-900 dark:text-white mb-2">무빈소 기본형</h3>
              <p className="text-brand-500 text-sm mb-6">최소한의 필수 절차만 포함된 실속형</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-brand-900 dark:text-white">120</span>
                <span className="text-lg font-medium text-brand-600 dark:text-brand-400">만원</span>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "국가공인 1급 장례지도사 배정",
                  "고인 이송용 앰뷸런스 (관내 무료)",
                  "일반 목관 및 기본 수의 제공",
                  "전문 염습 및 수시 용품",
                  "화장장 예약 대행 및 행정 안내"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-brand-700 dark:text-brand-300">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => document.getElementById('quick-form')?.focus()} className="w-full py-4 rounded-xl font-bold bg-brand-100 text-brand-900 hover:bg-brand-200 transition-colors">
                기본형 상담 신청
              </button>
            </div>
          </div>

          {/* Standard Package */}
          <div className="bg-white dark:bg-brand-950 rounded-3xl shadow-2xl overflow-hidden border-2 border-gold-400 relative flex flex-col scale-105 z-10">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-400 to-gold-600" />
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">가장 많이 선택</div>
            
            <div className="p-8 bg-gradient-to-br from-brand-900 to-brand-800 text-center border-b border-brand-800">
              <h3 className="text-2xl font-bold text-gold-400 mb-2">무빈소 표준형</h3>
              <p className="text-brand-200 text-sm mb-6">품격 있는 입관식과 고급 차량이 포함된 표준형</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-white">140</span>
                <span className="text-lg font-medium text-brand-200">만원</span>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "국가공인 1급 장례지도사 전담 배정",
                  "고인 이송용 앰뷸런스 (관내 무료)",
                  "고급 오동나무 관 및 최고급 명주 수의",
                  "입관식 생화 꽃장식 서비스",
                  "발인용 최고급 리무진 또는 버스 지원",
                  "장례식장 안치실 사용료 일부 지원",
                  "화장장 예약 대행 및 장지 동행 안내"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-brand-700 dark:text-brand-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => document.getElementById('quick-form')?.focus()} className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 transition-colors shadow-lg">
                표준형 상담 신청
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 max-w-4xl mx-auto flex items-start gap-3 p-4 bg-brand-100/50 dark:bg-brand-900/30 rounded-xl">
          <Info className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
          <p className="text-sm text-brand-600 dark:text-brand-400">
            * 상기 금액은 100% 후불제로 장례 종료 후 결제됩니다.<br/>
            * 장례식장 안치실/입관실 등 시설 사용료와 화장장 이용료는 실비로 별도 정산됩니다. 
            (관할 장례지도사가 가장 저렴하고 가까운 시설로 안내해 드립니다.)
          </p>
        </div>
      </div>
    </section>
  );
}
