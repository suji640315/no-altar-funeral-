import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="py-24 bg-brand-50 dark:bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">
            투명한 무빈소 정찰제
          </h2>
          <p className="text-lg text-brand-600 dark:text-brand-300">
            복잡한 추가 요금 없이, 꼭 필요한 것만 담은 프리미엄 패키지
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-brand-950 rounded-3xl shadow-xl overflow-hidden border border-gold-200 dark:border-gold-900/30">
          <div className="md:flex">
            {/* Price Side */}
            <div className="p-10 md:w-2/5 bg-gradient-to-br from-brand-900 to-brand-800 text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-gold-400 mb-2">프리미엄 무빈소</h3>
              <p className="text-brand-200 mb-8">모든 필수 항목이 포함된 정액제</p>
              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="text-5xl font-extrabold tracking-tight">140</span>
                <span className="text-xl font-medium text-brand-200">만원</span>
              </div>
              <p className="text-sm text-brand-300 px-4">
                * 안치실, 화장장 비용 등 시설 이용료는 실비 별도입니다.
              </p>
            </div>
            
            {/* Features Side */}
            <div className="p-10 md:w-3/5">
              <h4 className="text-lg font-bold text-brand-900 dark:text-white mb-6">패키지 포함 내역</h4>
              <ul className="space-y-4">
                {[
                  "국가공인 1급 장례지도사 전담 배정 (염습, 입관식 진행)",
                  "고급 오동나무 관 및 최고급 명주 수의 제공",
                  "고인 이송용 앰뷸런스 지원 (관내 무료)",
                  "발인용 최고급 리무진 또는 장의 버스 제공",
                  "전문 염습 용품 및 고급 수시 용품 일체",
                  "입관식 생화 꽃장식 서비스",
                  "행정 서류 발급 안내 및 화장장 예약 대행"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-brand-700 dark:text-brand-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                <p className="text-red-700 dark:text-red-400 text-sm font-medium text-center">
                  약속드립니다. 유가족이 원치 않는 부당한 물품 강매나 수고비를 절대 요구하지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
