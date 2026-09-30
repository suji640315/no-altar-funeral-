import Image from 'next/image';

const mouItems = [
  {
    title: '인천개인택시조합',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2022-07/1f1e72ba523932d5829a969d635bcc0f_thumb.jpg'
  },
  {
    title: '부산광역시교육청공무원노동조합 업무협약 체결',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-03/8f13e61e49d4d3b29f2e089d74df5ab1_thumb.jpg'
  },
  {
    title: '연제구청공무원노동조합 상조서비스 업무협약',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-03/09c302bcce7f827c41e07ea8d238b512_thumb.jpg'
  },
  {
    title: '고창군공무원노동조합',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-02/9749e1f5eddebdc7498e1bf4ad66198c_thumb.jpg'
  },
  {
    title: '익산공무원노동조합(한마음화합큰잔치)',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-02/ae0a83e7c8cb87b3aec7da8f2c410481_thumb.jpg'
  },
  {
    title: '익산시공무원노동조합',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-02/c56958ef13786a7c9b8cff01208f26dc_thumb.jpg'
  },
  {
    title: '구리시공무원노동조합',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-02/7df73011ac8ad1f424457bb9971cfaa1_thumb.jpg'
  },
  {
    title: '보성삼베섬유(주) 공동협력계약',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-02/c758faccad3be786c8281f953114d2cc_thumb.jpg'
  },
  {
    title: '순복음이레라이프 MOU업무 협약',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-02/b30c9a438df2d0ad7cbe7d6ce42ce3a0_thumb.jpg'
  },
  {
    title: '사회적협동조합 멋진인생웰다잉 MOU업무협약',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-02/b03093b5e6f8e14ae6bcde4b6e57b40b_thumb.jpg'
  },
  {
    title: '전국공무원노동조합양천구지부',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2019-07/2dec97ed7faa230568cc5822ce241384_thumb.jpg'
  },
  {
    title: '대한민국퇴직공무원노동조합 업무협약',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2020-02/04794e29dafcdd8c2c6d0c1d7d8dfd5f_thumb.jpg'
  },
  {
    title: '공공운수노조 인천지역공공기관지부',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2017-11/0747507812a556e51cee5bf36a205197_thumb.jpg'
  },
  {
    title: '인천환경공단人노동조합',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2017-11/054109aaf314c404f6f2595eaac3f84a_thumb.jpg'
  },
  {
    title: '인천광역시통합공무원노동조합',
    imgSrc: 'http://www.xn--ob0br3ru1cxypqxah90d.com/application/uploads/bbs/coalition/2017-11/df25c327710c9fb38fc30653bd916cef_thumb.jpg'
  }
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