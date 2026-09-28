export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "임종 및 긴급 접수",
      description: "24시간 콜센터로 연락 주시면, 즉시 전문 장례지도사가 배정되어 향후 절차를 안내해 드립니다."
    },
    {
      num: "02",
      title: "고인 이송 및 안치",
      description: "앰뷸런스를 파견하여 고인을 안전하고 정중하게 지정된 장례식장 안치실로 모십니다."
    },
    {
      num: "03",
      title: "입관식 및 추모",
      description: "전문 지도사의 세심한 염습과 생화 장식 속에서 유가족 참관 하에 경건한 입관식이 거행됩니다."
    },
    {
      num: "04",
      title: "발인 및 화장",
      description: "고급 리무진으로 고인을 화장장까지 모시며, 모든 행정 및 화장 절차를 곁에서 돕습니다."
    },
    {
      num: "05",
      title: "장지 안치",
      description: "가족 공원, 납골당, 수목장 등 원하시는 장지에 마지막으로 고인을 모시고 일정을 마무리합니다."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">
            무빈소 장례 진행 절차
          </h2>
          <p className="text-lg text-brand-600 dark:text-brand-300">
            임종부터 장지 안치까지, 전문 지도사가 모든 과정을 동행합니다
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-100 dark:bg-brand-800 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Number Circle in the middle */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold-500 rounded-full items-center justify-center text-white font-bold text-lg z-10 border-4 border-white dark:border-brand-950 shadow-sm">
                  {step.num}
                </div>

                {/* Content Box */}
                <div className="w-full md:w-1/2">
                  <div className={`p-8 bg-brand-50 dark:bg-brand-900/40 rounded-2xl border border-brand-100 dark:border-brand-800 relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    {/* Mobile Number Badge */}
                    <div className="md:hidden inline-block px-3 py-1 bg-gold-500 text-white rounded-full text-sm font-bold mb-4">
                      Step {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-brand-600 dark:text-brand-300">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty Space for the other side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
