import { Heart, Home, DollarSign } from 'lucide-react';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: <Heart className="w-8 h-8 text-gold-500" />,
      title: "오직 고인에게만 집중",
      description: "복잡한 조문객 맞이에 신경 쓰지 않고, 남은 가족들이 모여 고인과의 따뜻한 추억을 나누며 진정한 애도의 시간을 가질 수 있습니다."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-gold-500" />,
      title: "합리적인 비용",
      description: "장례식장 빈소 대여료, 음식값, 도우미 비용 등 거품을 모두 빼어 기존 장례 대비 70% 이상 비용을 절감할 수 있습니다."
    },
    {
      icon: <Home className="w-8 h-8 text-gold-500" />,
      title: "현대적인 장례 문화",
      description: "허례허식을 버리고 실용성을 중시하는 현대 가족 형태(소가족, 1인 가구 등)에 가장 알맞고 품격 있는 새로운 장례 방식입니다."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">
            왜 무빈소 장례를 선택할까요?
          </h2>
          <p className="text-lg text-brand-600 dark:text-brand-300">
            형식보다는 마음을 담은, 가장 합리적이고 따뜻한 이별
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 rounded-2xl bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-white dark:bg-brand-800 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-brand-600 dark:text-brand-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
