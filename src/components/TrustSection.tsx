import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function TrustSection() {
  const mouList = [
    "전국공무원노동조합",
    "대한민국공무원노동조합총연맹",
    "한국교원단체총연합회",
    "전국우정노동조합",
    "한국전력공사노동조합",
    "경찰청공무원노동조합"
  ];

  return (
    <section id="mou" className="py-24 bg-white dark:bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MOU Logo Wall */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-brand-50 dark:bg-brand-900 rounded-full mb-6">
            <ShieldCheck className="w-8 h-8 text-brand-900 dark:text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 dark:text-white mb-6">
            검증된 공신력, <span className="text-gold-500">MOU 제휴 현황</span>
          </h2>
          <p className="text-lg text-brand-600 dark:text-brand-300 max-w-3xl mx-auto">
            (주)공무원라이프는 주요 공무원 노동조합 및 공공기관과의 공식 업무협약을 통해, 
            가장 투명하고 믿을 수 있는 후불제 장례 서비스를 제공하고 있습니다.
          </p>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {mouList.map((mou, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 bg-gray-50 dark:bg-brand-900/40 rounded-xl border border-gray-200 dark:border-brand-800 font-bold text-gray-700 dark:text-gray-300">
                {mou}
              </div>
            ))}
          </div>
        </div>

        {/* Why Us Section included here as part of Trust */}
        <div className="bg-brand-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center relative z-10">
            왜 <span className="text-gold-400">공무원라이프 무빈소장례</span>인가요?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { title: "선납금 없는 100% 후불제", desc: "매달 내는 납입금 0원. 장례가 모두 끝난 후, 실제로 이용하신 내역에 대해서만 투명하게 정산합니다." },
              { title: "추가 강매 완벽 차단", desc: "수고비, 불필요한 용품 강매 등 유족을 두 번 울리는 악습을 회사 차원에서 100% 엄격하게 차단합니다." },
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
