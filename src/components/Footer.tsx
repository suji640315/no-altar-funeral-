export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="text-gray-500 text-xs md:text-sm leading-relaxed">
            {/* 브랜드 정체성 및 사업부 표기 */}
            <div className="mb-3">
              <p className="text-gray-800 font-bold text-base md:text-lg">
                (주)공무원라이프 무빈소장례사업부
              </p>
              <p className="text-blue-700 text-xs md:text-sm font-medium mt-0.5">
                공무원라이프의 10년 공직 의전 노하우로 운영되는 무빈소 특화 전문 브랜드입니다.
              </p>
            </div>

            <p>사업장 주소 : 경기도 하남시 하남대로 947, A동 401호(풍산동, 하남테크노밸리U1센터)</p>
            <p>업무시간 : 평일 09:00~18:00 (주말/공휴일 휴무)</p>
            <div className="flex flex-wrap gap-x-4 mt-1">
              <span>
                직통 상담전화 : <a href="tel:02-477-8379" className="font-bold text-gray-800 hover:text-blue-600">02-477-8379</a>
              </span>
              <span>
                24시간 긴급상황실 : <a href="tel:1599-8379" className="font-bold text-red-600 hover:underline">1599-8379</a>
              </span>
              <span>FAX : 031-969-3522</span>
            </div>
            <div className="flex flex-wrap gap-x-4 mt-1">
              <span>사업자등록번호 : 236-87-00779</span>
              <span>통신판매업신고 : 제2017-서울종로-1130호</span>
            </div>
            <div className="mt-4 flex gap-4 text-gray-400 text-xs">
              <span>Copyright© (주)공무원라이프 무빈소장례. All rights reserved.</span>
              <span>관리자 : 김호진</span>
            </div>
          </div>

          <div className="text-right hidden md:block">
            <p className="text-xs font-semibold text-gray-500 mb-0.5">무빈소 전담 직통상담</p>
            <a href="tel:02-477-8379" className="text-2xl lg:text-3xl font-bold text-red-600 tracking-tighter hover:underline block">
              02-477-8379
            </a>
            <p className="text-xs text-gray-600 mt-1">
              24시간 긴급상황실 : <a href="tel:1599-8379" className="font-bold text-red-600 hover:underline">1599-8379</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
