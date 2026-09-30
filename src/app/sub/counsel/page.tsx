import Link from 'next/link';
import { Send } from 'lucide-react';

export default function CounselPage() {
  return (
    <div className="w-full bg-gray-50 min-h-screen pt-[100px] pb-20 font-sans text-gray-800">
      <div className="w-full bg-[#00387f] py-12 text-center text-white mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">무빈소 130 신청 및 상담</h1>
        <div className="w-9 h-[2px] bg-white/80 mx-auto my-3"></div>
        <p className="text-blue-100 text-sm mt-3">전문 장례지도사가 신속하고 친절하게 상담해 드립니다.</p>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10">
            <form className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">고객 성함 <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="홍길동" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="010-0000-0000" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">희망 지역 <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="예: 서울, 경기, 인천 등" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">희망 장례식장</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="원하시는 장례식장이 있다면 적어주세요 (선택사항)" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">기타 참고사항</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none resize-none" placeholder="궁금하신 점이나 특별히 요청하실 사항을 적어주세요."></textarea>
              </div>

              <div className="pt-4">
                <button type="button" className="w-full bg-[#00387f] hover:bg-[#002f6c] text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-lg">
                  <Send className="w-5 h-5" />
                  상담 신청하기
                </button>
              </div>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                남겨주신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.<br/>
                긴급한 상황이실 경우 <strong>1599-8379</strong>로 전화주시면 즉시 연결됩니다.
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
