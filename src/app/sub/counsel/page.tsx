'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function CounselPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    funeralHome: '',
    patientLocation: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationClick = (location: string) => {
    setFormData({ ...formData, patientLocation: location });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    
    try {
      const res = await fetch('/api/counsel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', phone: '', region: '', funeralHome: '', patientLocation: '', notes: '' });
      } else {
        setErrorMsg(data.error || '접수 중 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      }
    } catch (err) {
      setErrorMsg('네트워크 오류가 발생했습니다. 관리자에게 문의해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const locationOptions = ["요양병원", "요양원", "병원", "자택", "기타"];

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
            {success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-blue-50 text-[#00387f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">상담 신청이 완료되었습니다!</h2>
                <p className="text-gray-500 mb-6">담당 장례지도사가 확인 후 신속하게 연락드리겠습니다.</p>
                <button onClick={() => setSuccess(false)} className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">추가 접수하기</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
                    {errorMsg}
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">고객 성함 <span className="text-red-500">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="홍길동" required />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="010-0000-0000" required />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">희망 지역 <span className="text-red-500">*</span></label>
                  <input type="text" name="region" value={formData.region} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="예: 서울, 경기, 인천 등" required />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">희망 장례식장</label>
                  <input type="text" name="funeralHome" value={formData.funeralHome} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="원하시는 장례식장이 있다면 적어주세요 (선택사항)" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">현재 환자분 계신 곳</label>
                  <div className="grid grid-cols-5 gap-2">
                    {locationOptions.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => handleLocationClick(loc)}
                        className={`py-3 px-1 text-xs md:text-sm font-bold rounded-lg border transition-all ${
                          formData.patientLocation === loc 
                            ? 'border-[#00387f] text-[#00387f] bg-blue-50' 
                            : 'border-gray-200 text-gray-600 bg-white hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">기타 참고사항</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none resize-none" placeholder="궁금하신 점이나 특별히 요청하실 사항을 적어주세요."></textarea>
                </div>

                <div className="pt-4">
                  <button disabled={loading} type="submit" className="w-full bg-[#00387f] hover:bg-[#002f6c] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-lg">
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {loading ? '접수 중...' : '상담 신청하기'}
                  </button>
                </div>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  남겨주신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.<br/>
                  긴급한 상황이실 경우 <strong>1599-8379</strong>로 전화주시면 즉시 연결됩니다.
                </p>

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}