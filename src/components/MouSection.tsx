import Image from 'next/image';

const mouItems = [
  { title: '인천개인택시조합', imgSrc: '/mou/mou_0.jpg' },
  { title: '부산광역시교육청공무원노동조합 업무협약 체결', imgSrc: '/mou/mou_1.jpg' },
  { title: '연제구청공무원노동조합 상조서비스 업무협약', imgSrc: '/mou/mou_2.jpg' },
  { title: '고창군공무원노동조합', imgSrc: '/mou/mou_3.jpg' },
  { title: '익산공무원노동조합(한마음화합큰잔치)', imgSrc: '/mou/mou_4.jpg' },
  { title: '익산시공무원노동조합', imgSrc: '/mou/mou_5.jpg' },
  { title: '구리시공무원노동조합', imgSrc: '/mou/mou_6.jpg' },
  { title: '보성삼베섬유(주) 공동협력계약', imgSrc: '/mou/mou_7.jpg' },
  { title: '순복음이레라이프 MOU업무 협약', imgSrc: '/mou/mou_8.jpg' },
  { title: '사회적협동조합 멋진인생웰다잉 MOU업무협약', imgSrc: '/mou/mou_9.jpg' },
  { title: '전국공무원노동조합양천구지부', imgSrc: '/mou/mou_10.jpg' },
  { title: '대한민국퇴직공무원노동조합 업무협약', imgSrc: '/mou/mou_11.jpg' },
  { title: '공공운수노조 인천지역공공기관지부', imgSrc: '/mou/mou_12.jpg' },
  { title: '인천환경공단人노동조합', imgSrc: '/mou/mou_13.jpg' },
  { title: '인천광역시통합공무원노동조합', imgSrc: '/mou/mou_14.jpg' }
];

export default function MouSection() {
  return (
    <section id="mou" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight mb-4">
            제휴협약사 (MOU)
          </h2>
          <div className="w-12 h-1.5 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-brand-600 max-w-2xl mx-auto font-medium">
            공무원노동조합 및 다양한 단체들과의 업무협약으로<br className="hidden sm:block"/>
            더욱 신뢰받고 검증된 무빈소장례 상품을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {mouItems.map((item, i) => (
            <div key={i} className="group border border-brand-100 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="relative w-full h-40 md:h-48 bg-white border-b border-brand-50 flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5 flex-1 flex flex-col justify-start bg-brand-50/50 group-hover:bg-white transition-colors duration-300">
                <h3 className="text-sm md:text-base font-bold text-brand-800 line-clamp-2 leading-snug group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}