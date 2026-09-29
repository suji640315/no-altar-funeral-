'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InquirySchema, InquiryFormValues } from '@/lib/schema';
import { submitInquiry } from '@/app/actions/inquiry';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, MapPin, CheckCircle, Loader2, MessageCircle, Phone, ArrowRight } from 'lucide-react';

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(InquirySchema),
    defaultValues: {
      location_type: 'HOSPITAL',
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    setIsSubmitting(true);
    const result = await submitInquiry(data);
    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
    } else {
      alert(result.error || '오류가 발생했습니다.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      
      {/* 3-Button CTA Group */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="tel:1599-8379" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 group">
          <Phone className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium opacity-90">24시간 긴급 접수</span>
          <span className="font-extrabold text-xl">1599-8379</span>
        </a>
        <button onClick={() => document.getElementById('quick-form')?.focus()} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-brand-900 text-white hover:bg-brand-800 transition-colors shadow-lg group">
          <MapPin className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform text-gold-400" />
          <span className="text-sm font-medium opacity-90">가장 빠른 섭외</span>
          <span className="font-extrabold text-lg">장례식장 섭외 신청</span>
        </button>
        <a href="https://pf.kakao.com/your-id" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#FEE500] text-black hover:bg-[#FDD800] transition-colors shadow-lg group">
          <MessageCircle className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium opacity-90">부담없는 실시간 상담</span>
          <span className="font-extrabold text-lg">카카오톡 1:1 상담</span>
        </a>
      </div>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-panel p-8 rounded-3xl text-center space-y-6 bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600 mb-2"
            >
              <CheckCircle size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold text-brand-900 dark:text-white">접수가 완료되었습니다</h3>
            <p className="text-brand-600 dark:text-brand-300">
              해당 지역 관할 장례지도사가 확인 후 1분 이내에<br/>신속하게 연락드리겠습니다.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 px-6 py-3 bg-brand-900 text-white rounded-xl hover:bg-brand-800 transition-colors font-bold"
            >
              확인
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden bg-white/95 dark:bg-brand-950/95 backdrop-blur-md border border-brand-200 dark:border-brand-800"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-900 via-brand-700 to-brand-900" />
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-brand-900 dark:text-white mb-2">30초 긴급 무빈소 섭외 신청</h3>
              <p className="text-brand-600 dark:text-brand-400 text-sm">입력해주시면 관할 지도사가 가장 가까운 식장을 즉시 확인해 드립니다.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-brand-900 dark:text-brand-100">발생 지역 (시/도 및 구/군)</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400" />
                  <input
                    id="quick-form"
                    {...register('region')}
                    placeholder="예: 서울시 강남구, 경기도 성남시"
                    className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border border-brand-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-900 dark:bg-brand-900 dark:border-brand-700 dark:text-white transition-shadow"
                  />
                </div>
                {errors.region && <p className="text-red-500 text-xs font-medium">{errors.region.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-brand-900 dark:text-brand-100">신청자 연락처</label>
                <div className="relative">
                  <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400" />
                  <input
                    {...register('phone')}
                    placeholder="010-0000-0000"
                    className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border border-brand-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-900 dark:bg-brand-900 dark:border-brand-700 dark:text-white transition-shadow"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-brand-900 dark:text-brand-100">현재 고인 위치</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { value: 'HOSPITAL', label: '병원' },
                  { value: 'NURSING_HOME', label: '요양원/요양병원' },
                  { value: 'HOME', label: '자택' },
                  { value: 'OTHER', label: '기타' }
                ].map((type) => (
                  <label key={type.value} className="relative flex cursor-pointer items-center justify-center rounded-xl border border-brand-200 bg-brand-50 p-3 hover:bg-brand-100 transition-colors has-[:checked]:border-brand-900 has-[:checked]:bg-brand-900 has-[:checked]:text-white dark:bg-brand-900/50 dark:border-brand-700 dark:has-[:checked]:bg-gold-500 dark:has-[:checked]:border-gold-500">
                    <input type="radio" value={type.value} {...register('location_type')} className="sr-only" />
                    <span className="font-semibold text-sm">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-brand-900 dark:text-brand-100">요청사항 (선택)</label>
              <div className="relative">
                <textarea
                  {...register('memo')}
                  rows={3}
                  placeholder="추가로 전달하실 내용을 자유롭게 적어주세요."
                  className="w-full px-4 py-3 text-base rounded-xl border border-brand-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-900 dark:bg-brand-900 dark:border-brand-700 dark:text-white transition-shadow resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative overflow-hidden group bg-brand-900 text-white font-extrabold text-lg py-5 rounded-xl flex items-center justify-center transition-all hover:bg-brand-800 disabled:opacity-70 shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                  접수 처리 중...
                </>
              ) : (
                <>
                  식장 섭외 및 1시간 내 출동 요청
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-red-500 font-medium">
              * 비회원 즉시 접수 시스템입니다. 접수 즉시 관제 센터로 전송됩니다.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

// Force Vercel rebuild trigger
