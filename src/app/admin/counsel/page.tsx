'use client';

import { useState, useEffect } from 'react';
import { Download, Users, RefreshCw } from 'lucide-react';

export default function AdminCounselPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/counsel');
      const json = await res.json();
      if (json.success) {
        setData(json.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const downloadExcel = () => {
    const BOM = "\uFEFF";
    let csv = "신청구분,접수일시,고객성함,연락처,희망지역,희망장례식장,현재계신곳,기타참고사항
";
    
    data.forEach((item: any) => {
      // Handle both camelCase and snake_case safely
      const dateStr = item.created_at || item.createdAt; 
      const date = dateStr ? new Date(dateStr).toLocaleString('ko-KR') : '-';
      const funeralHome = item.funeral_home || item.funeralHome || '';
      
      const row = [
        `"${item.type || ''}"`,
        `"${date}"`,
        `"${item.name || ''}"`,
        `"${item.phone || ''}"`,
        `"${item.region || ''}"`,
        `"${funeralHome}"`,
        `"${item.patient_location || ''}"`,
        `"${(item.notes || '').replace(/"/g, '""').replace(/
/g, ' ')}"`
      ].join(',');
      csv += row + "
";
    });

    const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `상담신청목록_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-[100px] pb-20 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#00387f]" />
              상담 신청 관리
            </h1>
            <p className="text-sm text-gray-500 mt-1">고객들이 신청한 무빈소 130 상담 내역입니다.</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={fetchData}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              새로고침
            </button>
            <button 
              onClick={downloadExcel}
              disabled={data.length === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#00387f] text-white rounded-lg text-sm font-bold hover:bg-[#002f6c] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              엑셀 다운로드
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 border-b border-gray-200 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 font-bold whitespace-nowrap text-[#00387f]">신청 구분</th>
                  <th className="px-6 py-4 font-bold whitespace-nowrap">접수 일시</th>
                  <th className="px-6 py-4 font-bold whitespace-nowrap">고객 성함</th>
                  <th className="px-6 py-4 font-bold whitespace-nowrap">연락처</th>
                  <th className="px-6 py-4 font-bold whitespace-nowrap">희망 지역</th>
                  <th className="px-6 py-4 font-bold whitespace-nowrap">희망 장례식장</th>
                  <th className="px-6 py-4 font-bold whitespace-nowrap">현재 계신 곳</th>
                  <th className="px-6 py-4 font-bold min-w-[200px]">기타 참고사항</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-10 text-center text-gray-500">
                      데이터를 불러오는 중입니다...
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                      접수된 상담 신청 내역이 없습니다.
                    </td>
                  </tr>
                ) : (
                  data.map((item: any) => {
                    const typeLabel = item.type || '무빈소장례 상담';
                    const typeColor = typeLabel.includes('VIP') ? 'text-purple-600 bg-purple-50 border-purple-200' : 'text-blue-600 bg-blue-50 border-blue-200';
                    const dateStr = item.created_at || item.createdAt;
                    const date = dateStr ? new Date(dateStr).toLocaleString('ko-KR') : '-';
                    const funeralHome = item.funeral_home || item.funeralHome || '-';
                    return (
                      <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${typeColor}`}>
                            {typeLabel}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-[#00387f]">
                          {item.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.region}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                          {funeralHome}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">
                          {item.patient_location || '-'}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {item.notes || '-'}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
