'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { updateInquiryStatus } from '@/app/actions/inquiry';
import { RefreshCw, Search, Phone, MapPin, User, Check, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

type Inquiry = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  urgency_status: string;
  region: string;
  preferred_parlor: string;
  memo: string;
  dispatch_status: string;
  assigned_director: string;
  alimtalk_sent: boolean;
};

export default function AdminDashboard({ initialInquiries }: { initialInquiries: Inquiry[] }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [searchTerm, setSearchTerm] = useState('');
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  useEffect(() => {
    // Subscribe to realtime inserts and updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'inquiries',
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setInquiries((prev) => [payload.new as Inquiry, ...prev]);
            // Play notification sound
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3');
            audio.play().catch(e => console.error("Audio play failed:", e));
          } else if (payload.eventType === 'UPDATE') {
            setInquiries((prev) =>
              prev.map((item) => (item.id === payload.new.id ? (payload.new as Inquiry) : item))
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setIsUpdating(id);
    await updateInquiryStatus({ id, status: newStatus as any });
    setIsUpdating(null);
  };

  const filtered = inquiries.filter(i => 
    i.name.includes(searchTerm) || i.phone.includes(searchTerm) || i.region.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'RECEIVED': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'CONTACTED': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'DISPATCHED': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'COMPLETED': return 'bg-green-100 text-green-800 border-green-200';
      case 'CANCELLED': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'RECEIVED': return '접수됨';
      case 'CONTACTED': return '연락완료';
      case 'DISPATCHED': return '출동중';
      case 'COMPLETED': return '장례종료';
      case 'CANCELLED': return '취소/보류';
      default: return status;
    }
  };

  return <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-900">상담 및 출동 관리</h1>
          <p className="text-sm text-brand-500">실시간으로 접수된 장례 요청을 관리합니다.</p>
        </div>
        
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" />
          <input 
            type="text"
            placeholder="이름, 전화번호, 지역 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-brand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-50 border-b border-brand-200 text-sm font-semibold text-brand-700">
                <th className="p-4 whitespace-nowrap">접수시간</th>
                <th className="p-4 whitespace-nowrap">고객정보</th>
                <th className="p-4 whitespace-nowrap">유형/지역</th>
                <th className="p-4">요청사항</th>
                <th className="p-4 whitespace-nowrap">알림톡</th>
                <th className="p-4 whitespace-nowrap">진행상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-brand-500">
                    접수된 내역이 없습니다.
                  </td>
                </tr>
              )}
              {filtered.map((inquiry) => (
                <motion.tr 
                  key={inquiry.id}
                  initial={{ opacity: 0, bg: '#fffbeb' }}
                  animate={{ opacity: 1, bg: '#ffffff' }}
                  transition={{ duration: 0.5 }}
                  className="hover:bg-brand-50/50 transition-colors"
                >
                  <td className="p-4 text-sm text-brand-600 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(inquiry.created_at).toLocaleString('ko-KR', {
                        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                      })}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="font-semibold text-brand-900 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-brand-400" />
                      {inquiry.name}
                    </div>
                    <div className="text-sm text-brand-500 flex items-center gap-1.5 mt-1">
                      <Phone className="w-3.5 h-3.5" />
                      {inquiry.phone}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="mb-1">
                      {inquiry.urgency_status === 'EMERGENCY_DECEASED' ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                          긴급출동(임종)
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-100 text-brand-800">
                          사전상담
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-brand-700 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-400" />
                      {inquiry.region}
                    </div>
                  </td>
                  <td className="p-4 max-w-xs">
                    <div className="text-sm text-brand-800 truncate" title={inquiry.preferred_parlor}>
                      <span className="text-brand-400 mr-1">장례식장:</span>
                      {inquiry.preferred_parlor || '-'}
                    </div>
                    <div className="text-sm text-brand-600 line-clamp-2 mt-1" title={inquiry.memo}>
                      {inquiry.memo || '-'}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    {inquiry.alimtalk_sent ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
                        <Check className="w-3.5 h-3.5" /> 발송됨
                      </span>
                    ) : (
                      <span className="text-xs text-brand-400">대기중</span>
                    )}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="relative">
                      <select
                        disabled={isUpdating === inquiry.id}
                        value={inquiry.dispatch_status}
                        onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                        className={`appearance-none text-sm font-medium pl-3 pr-8 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors cursor-pointer ${getStatusColor(inquiry.dispatch_status)} ${isUpdating === inquiry.id ? 'opacity-50' : ''}`}
                      >
                        <option value="RECEIVED">접수됨</option>
                        <option value="CONTACTED">연락완료</option>
                        <option value="DISPATCHED">출동중</option>
                        <option value="COMPLETED">장례종료</option>
                        <option value="CANCELLED">취소/보류</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-current opacity-70">
                        {isUpdating === inquiry.id ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}
