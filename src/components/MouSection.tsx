import Image from 'next/image';

const mouItems = [
  { title: '?몄쿇媛쒖씤?앹떆議고빀', imgSrc: '/mou/mou_0.jpg' },
  { title: '遺?곌킅??떆援먯쑁泥?났臾댁썝?몃룞議고빀 ?낅Т?묒빟 泥닿껐', imgSrc: '/mou/mou_1.jpg' },
  { title: '?곗젣援ъ껌怨듬Т?먮끂?숈“???곸“?쒕퉬???낅Т?묒빟', imgSrc: '/mou/mou_2.jpg' },
  { title: '怨좎갹援곌났臾댁썝?몃룞議고빀', imgSrc: '/mou/mou_3.jpg' },
  { title: '?듭궛怨듬Т?먮끂?숈“???쒕쭏?뚰솕?⑺겙?붿튂)', imgSrc: '/mou/mou_4.jpg' },
  { title: '?듭궛?쒓났臾댁썝?몃룞議고빀', imgSrc: '/mou/mou_5.jpg' },
  { title: '援щ━?쒓났臾댁썝?몃룞議고빀', imgSrc: '/mou/mou_6.jpg' },
  { title: '蹂댁꽦?쇰쿋?ъ쑀(二? 怨듬룞?묐젰怨꾩빟', imgSrc: '/mou/mou_7.jpg' },
  { title: '?쒕났?뚯씠?덈씪?댄봽 MOU?낅Т ?묒빟', imgSrc: '/mou/mou_8.jpg' },
  { title: '?ы쉶?곹삊?숈“??硫뗭쭊?몄깮?곕떎??MOU?낅Т?묒빟', imgSrc: '/mou/mou_9.jpg' },
  { title: '?꾧뎅怨듬Т?먮끂?숈“?⑹뼇泥쒓뎄吏遺', imgSrc: '/mou/mou_10.jpg' },
  { title: '??쒕?援?눜吏곴났臾댁썝?몃룞議고빀 ?낅Т?묒빟', imgSrc: '/mou/mou_11.jpg' },
  { title: '怨듦났?댁닔?몄“ ?몄쿇吏??났怨듦린愿吏遺', imgSrc: '/mou/mou_12.jpg' },
  { title: '?몄쿇?섍꼍怨듬떒雅븍끂?숈“??, imgSrc: '/mou/mou_13.jpg' },
  { title: '?몄쿇愿묒뿭?쒗넻?⑷났臾댁썝?몃룞議고빀', imgSrc: '/mou/mou_14.jpg' }
];

export default function MouSection() {
  return (
    <section id="mou" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight mb-4">
            ?쒗쑕?묒빟??(MOU)
          </h2>
          <div className="w-12 h-1.5 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-brand-600 max-w-2xl mx-auto font-medium">
            怨듬Т?먮끂?숈“??諛??ㅼ뼇???⑥껜?ㅺ낵???낅Т?묒빟?쇰줈<br className="hidden sm:block"/>
            ?붿슧 ?좊ː諛쏄퀬 寃利앸맂 臾대퉰?뚯옣濡 ?곹뭹???쒓났?⑸땲??
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
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