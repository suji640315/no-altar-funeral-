export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          
          <div className="text-gray-500 text-xs md:text-sm leading-relaxed">
            <p className="mb-1 text-gray-700 font-bold">(주)공무원라이프</p>
            <p>주소 : 경기도 하남시 하남대로 947, A동 401호 (풍산동, 하남테크노벨리U1센터)</p>
            <p>업무시간 : 평일 09:00~18:00 (주말/공휴일 휴무)</p>
            <div className="flex flex-wrap gap-x-4 mt-1">
              <span>대표전화 : <strong>1599-8379</strong></span>
              <span>TEL : 031-966-8379</span>
              <span>FAX : 031-969-3522</span>
            </div>
            <div className="flex flex-wrap gap-x-4 mt-1">
              <span>사업자등록번호 : 458-81-00682</span>
              <span>통신판매업 : 제2017-서울종로-1130호</span>
            </div>
            <div className="mt-4 flex gap-4 text-gray-400">
              <span>Copyrightⓒ 2017 공무원라이프. All right Reserved.</span>
              <span>관리자 : 김호진</span>
            </div>
          </div>
          
          <div className="text-right hidden md:block">
            <p className="text-2xl font-bold text-gray-800 tracking-tighter">1599-8379</p>
            <p className="text-xs text-gray-500">장례접수·상담 (24시간 운영)</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
