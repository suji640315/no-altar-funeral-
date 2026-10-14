'use client';

import { useState, useEffect } from 'react';
import { Download, Users, RefreshCw, Trash2, Filter } from 'lucide-react';

const TEST_NAMES = ['홍길동', '유츙현', '유충현', '김호진', '홍수지', '이현'];
const TEST_PHONES = ['01055172715', '010-5517-2715', '01056425388', '01038145052'];

export default function AdminCounselPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [hideTestData, setHideTestData] = useState(true);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  // 로컬 스토리지에서 삭제된 ID 목록 불러오기
  useEffect(() => {
    try {
      const saved = localStorage.getItem('deleted_counsel_ids');
      if (saved) {
        setDeletedIds(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

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

  // 개별 삭제 처리
  const handleDelete = (id: string, name: string) => {
    if (!confirm(`${name || '해당'} 고객님의 내역을 목록에서 완전히 삭제하시겠습니까?\n(실시간 현황 및 관리자 목록에서 즉시 제거됩니다)`)) {
      return;
    }

    const nextDeleted = [...deletedIds, id];
    setDeletedIds(nextDeleted);
    try {
      localStorage.setItem('deleted_counsel_ids', JSON.stringify(nextDeleted));
    } catch (e) {
      console.error(e);
    }

    // 서버 DELETE 호출도 시도
    fetch(`/api/counsel?id=${id}`, { method: 'DELETE' }).catch(() => {});

    alert('삭제되었습니다.');
  };

  // 테스트 데이터 일괄 삭제
  const handleDeleteAllTests = () => {
    const testRowIds = data
      .filter((item: any) => TEST_NAMES.includes(item.name?.trim()) || TEST_PHONES.includes(item.phone?.trim()))
      .map((item: any) => item.id);

    if (testRowIds.length === 0) {
      alert('삭제할 테스트 데이터가 없습니다.');
      return;
    }

    if (!confirm(`테스트 데이터 ${testRowIds.length}건을 목록에서 일괄 삭제하시겠습니까?`)) {
      return;
    }

    const nextDeleted = Array.from(new Set([...deletedIds, ...testRowIds]));
    setDeletedIds(nextDeleted);
    try {
      localStorage.setItem('deleted_counsel_ids', JSON.stringify(nextDeleted));
    } catch (e) {
      console.error(e);
    }

    alert(`테스트 데이터 ${testRowIds.length}건이 삭제되었습니다.`);
  };

  // 필터링 적용 (삭제된 항목 제외 및 테스트 데이터 숨김 토글)
  const displayData = data.filter((item: any) => {
    if (deletedIds.includes(item.id)) return false;
    if (hideTestData) {
      if (TEST_NAMES.includes(item.name?.trim()) || TEST_PHONES.includes(item.phone?.trim()) || (item.notes && item.notes.includes('테스트'))) {
        return false;
      }
    }
    return true;
  });

  const downloadExcel = () => {
    const BOM = "\uFEFF";
    let csv = "신청구분,접수일시,고객성함,연락처,희망지역,희망장례식장,현재계신곳,기타참고사항\n";
    
    displayData.forEach((item: any) => {
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
        `"${(item.notes || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
      ].join(',');
      csv += row + "\n";
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
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#00387f]" />
              상담 신청 관리
            </h1>
            <p className="text-sm text-gray-500 mt-1">고객들이 신청한 무빈소 130 상담 내역입니다.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => setHideTestData(!hideTestData)}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 border rounded-lg text-sm font-medium transition-colors shadow-sm ${
                hideTestData ? 'bg-amber-50 border-amber-300 text-amber-800' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              title="개발/테스트용 접수 내역 숨기기 토글"
            >
              <Filter className="w-4 h-4" />
              {hideTestData ? '테스트 숨김중' : '테스트 포함됨'}
            </button>
            <button 
              onClick={handleDeleteAllTests}
              className="flex items-center gap-1.5 px-3.5 py-2.5 bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors shadow-sm"
              title="초기 테스트 접수건 일괄 삭제"
            >
              <Trash2 className="w-4 h-4" />
              테스트 일괄삭제
            </button>
            <button 
              onClick={fetchData}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              새로고침
            </button>
            <button 
              onClick={downloadExcel}
              disabled={displayData.length === 0}
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
                  <th className="px-6 py-4 font-bold min-w-[180px]">기타 참고사항</th>
                  <th className="px-6 py-4 font-bold whitespace-nowrap text-center">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={9} className="px-6 py-10 text-center text-gray-500">
                      데이터를 불러오는 중입니다...
                    </td>
                  </tr>
                ) : displayData.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-6 py-10 text-center text-gray-500">
                      접수된 상담 신청 내역이 없습니다.
                    </td>
                  </tr>
                ) : (
                  displayData.map((item: any) => {
                    const typeLabel = item.type || '무빈소장례 상담';
                    const typeColor = typeLabel.includes('VIP') ? 'text-purple-600 bg-purple-50 border-purple-200' : 'text-blue-600 bg-blue-50 border-blue-200';
                    const dateStr = item.created_at || item.createdAt;
                    const date = dateStr ? new Date(dateStr).toLocaleString('ko-KR') : '-';
                    const funeralHome = item.funeral_home || item.funeralHome || '-';
                    const isTestRow = TEST_NAMES.includes(item.name?.trim()) || TEST_PHONES.includes(item.phone?.trim());
                    return (
                      <tr key={item.id} className={`hover:bg-blue-50/50 transition-colors ${isTestRow ? 'bg-amber-50/30' : ''}`}>
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
                          {isTestRow && (
                            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-700 rounded border border-amber-300">
                              테스트
                            </span>
                          )}
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
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <button
                            onClick={() => handleDelete(item.id, item.name)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-md transition-colors"
                            title="내역 삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            삭제
                          </button>
                        </td>
                      </tr>
                    );
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
