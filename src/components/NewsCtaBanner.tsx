'use client';

import { useState } from 'react';
import Link from 'next/link';
import VipCardModal from './VipCardModal';
import { Phone, MessageSquare, CreditCard, MessageCircle, CheckCircle2, X } from 'lucide-react';

export default function NewsCtaBanner() {
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [showPhoneGuide, setShowPhoneGuide] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined') {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      if (!isMobile) {
        e.preventDefault();
        if (navigator.clipboard) {
          navigator.clipboard.writeText('02-477-8379').catch(() => {});
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        }
        setShowPhoneGuide(true);
      }
    }
  };

  return (
    <>
      <div className="mt-14 bg-white border border-blue-200 rounded-2xl p-6 md:p-8 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              24시간 장례 긴급출동 &amp; 사전 무료상담 · 10만원 즉시 할인
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mt-2.5 break-keep">
              무빈소장례 비용이나 절차가 궁금하신가요?
            </h3>
            <p className="text-sm text-gray-600 mt-1.5 break-keep leading-relaxed">
              전담 국가공인 장례지도사가 365일 24시간 친절히 안내해 드립니다. 사전 할인카드를 발급받으시면 <strong className="text-[#00387f]">10만원 즉시 차감 혜택(130만→120만)</strong>이 적용됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0 w-full lg:w-auto">
            {/* 1. 10만원 특별할인카드 즉시 발급 (모달 오픈) */}
            <button
              type="button"
              onClick={() => setIsVipModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1a5eff] hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-sm transition-all cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-[#ffe600] shrink-0" />
              <span>10만원 할인카드 즉시발급</span>
            </button>

            {/* 2. 온라인 무료상담 신청 (/sub/counsel 페이지 이동) */}
            <Link
              href="/sub/counsel"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#00387f] hover:bg-[#002b63] text-white font-bold rounded-xl text-sm shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>온라인 무료상담 신청</span>
            </Link>

            {/* 3. 직통 상담전화 (모바일 즉시 발신 / PC 안내팝업) */}
            <a
              href="tel:02-477-8379"
              onClick={handlePhoneClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-sm transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>직통상담 02-477-8379</span>
            </a>

            {/* 4. 카카오톡 1:1 실시간 상담 */}
            <a
              href="https://pf.kakao.com/_NpBqxb/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#fae100] hover:bg-[#ebd200] text-[#381e1f] font-bold rounded-xl text-sm shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>카카오톡 1:1 실시간 상담</span>
            </a>
          </div>
        </div>
      </div>

      {/* 특별 할인카드 발급 모달 */}
      <VipCardModal isOpen={isVipModalOpen} onClose={() => setIsVipModalOpen(false)} />

      {/* PC에서 전화 버튼 클릭 시 친절 안내 모달 */}
      {showPhoneGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-7 shadow-2xl relative text-center border border-gray-200">
            <button
              type="button"
              onClick={() => setShowPhoneGuide(false)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7" />
            </div>

            <p className="text-xs font-bold text-blue-600 mb-1">
              365일 24시간 무빈소장례 전담 상담센터
            </p>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              직통 상담전화 안내
            </h4>
            <div className="bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 my-4">
              <div className="text-xs text-gray-500 mb-1">무빈소 전담 직통번호</div>
              <div className="text-3xl font-black text-red-600 tracking-tight">
                02-477-8379
              </div>
              <div className="text-xs text-gray-600 mt-2 pt-2 border-t border-gray-200">
                24시간 긴급상황실 : <strong className="text-gray-900">1599-8379</strong>
              </div>
            </div>

            {copied && (
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full mb-4">
                <CheckCircle2 className="w-4 h-4" />
                전화번호(02-477-8379)가 복사되었습니다!
              </div>
            )}

            <p className="text-xs text-gray-500 leading-relaxed mb-5">
              현재 PC 환경에서 접속 중이십니다. 위 번호로 전화 주시거나, 아래 온라인 상담 신청을 남겨주시면 전담 장례지도사가 즉시 연락드립니다.
            </p>

            <div className="flex gap-2.5">
              <Link
                href="/sub/counsel"
                onClick={() => setShowPhoneGuide(false)}
                className="flex-1 py-3 bg-[#00387f] hover:bg-[#002b63] text-white font-bold rounded-xl text-sm transition-colors"
              >
                온라인 무료상담 남기기
              </Link>
              <button
                type="button"
                onClick={() => setShowPhoneGuide(false)}
                className="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-sm transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

