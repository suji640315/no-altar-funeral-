import { CheckCircle } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-white dark:bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Us Section included here as part of Trust */}
        <div className="bg-brand-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center relative z-10">
            왜 <span className="text-gold-400">공무원라이프 무빈소장례</span>인가요?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { title: "선납금 없는 100% 후불제", desc: "매달 내는 납입금 0원. 장례가 모두 끝난 후, 실제로 이용하신 내역에 대해서만 투명하게 정산합니다." },
              { title: "추가 강매 완벽 차단", desc: "수고비, 불필요한 물품 강매 등 유족을 두 번 울리는 악습을 회사 차원에서 100% 엄격하게 차단합니다." },
              { title: "국가공인 1급 장례지도사", desc: "아르바이트생이 아닌, 까다로운 검증을 통과한 본사 직영 국가공인 1급 장례지도사가 처음부터 끝까지 동행합니다." }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-gold-400" />
                <h4 className="text-xl font-bold">{feature.title}</h4>
                <p className="text-brand-200">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}