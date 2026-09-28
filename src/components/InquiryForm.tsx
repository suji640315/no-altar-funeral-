'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InquirySchema, InquiryFormValues } from '@/lib/schema';
import { submitInquiry } from '@/app/actions/inquiry';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, MapPin, Building, FileText, CheckCircle, Loader2 } from 'lucide-react';
// Note: Changed from react-hook-form to react-form-hook (wait, I used react-hook-form in package.json)
// Let me use react-hook-form
import { useForm as useRHForm } from 'react-hook-form';

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRHForm<InquiryFormValues>({
    resolver: zodResolver(InquirySchema),
    defaultValues: {
      urgency_status: 'PRE_DECEASED_CONSULT',
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
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-panel p-8 rounded-3xl text-center space-y-6"
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
              담당 장례지도사가 확인 후 3분 이내에<br/>신속하게 연락드리겠습니다.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 px-6 py-3 bg-brand-900 text-white rounded-xl hover:bg-brand-800 transition-colors"
            >
              새로운 상담 신청하기
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600" />
            
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-brand-800 dark:text-brand-200">상담 유형</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative flex cursor-pointer rounded-xl border border-brand-200 bg-white/50 p-4 hover:bg-gold-50 transition-colors has-[:checked]:border-gold-500 has-[:checked]:bg-gold-50 has-[:checked]:ring-1 has-[:checked]:ring-gold-500 dark:bg-brand-800/50 dark:border-brand-700 dark:has-[:checked]:bg-gold-900/30">
                  <input type="radio" value="PRE_DECEASED_CONSULT" {...register('urgency_status')} className="sr-only" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-brand-900 dark:text-white">사전 상담</span>
                    <span className="text-xs text-brand-500 mt-1">미리 준비하는 장례</span>
                  </div>
                </label>
                <label className="relative flex cursor-pointer rounded-xl border border-brand-200 bg-white/50 p-4 hover:bg-red-50 transition-colors has-[:checked]:border-red-500 has-[:checked]:bg-red-50 has-[:checked]:ring-1 has-[:checked]:ring-red-500 dark:bg-brand-800/50 dark:border-brand-700 dark:has-[:checked]:bg-red-900/30">
                  <input type="radio" value="EMERGENCY_DECEASED" {...register('urgency_status')} className="sr-only" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-red-600 dark:text-red-400">긴급 출동 (임종)</span>
                    <span className="text-xs text-brand-500 mt-1">즉시 도움이 필요하신 분</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-800 dark:text-brand-200">성함</label>
                <input
                  {...register('name')}
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-xl border border-brand-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 dark:bg-brand-800/50 dark:border-brand-700 dark:text-white"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-800 dark:text-brand-200">연락처</label>
                <div className="relative">
                  <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" />
                  <input
                    {...register('phone')}
                    placeholder="010-0000-0000"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 dark:bg-brand-800/50 dark:border-brand-700 dark:text-white"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-brand-800 dark:text-brand-200">장례 지역</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" />
                <input
                  {...register('region')}
                  placeholder="예: 서울시 강남구, 경기도 수원시"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 dark:bg-brand-800/50 dark:border-brand-700 dark:text-white"
                />
              </div>
              {errors.region && <p className="text-red-500 text-xs">{errors.region.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-brand-800 dark:text-brand-200">희망 장례식장 (선택)</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" />
                <input
                  {...register('preferred_parlor')}
                  placeholder="원하시는 장례식장이 있다면 입력해주세요"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 dark:bg-brand-800/50 dark:border-brand-700 dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-brand-800 dark:text-brand-200">요청사항 (선택)</label>
              <div className="relative">
                <FileText className="absolute left-4 top-4 w-4 h-4 text-brand-400" />
                <textarea
                  {...register('memo')}
                  rows={3}
                  placeholder="추가로 전달하실 내용을 자유롭게 적어주세요."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 dark:bg-brand-800/50 dark:border-brand-700 dark:text-white resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative overflow-hidden group bg-gradient-to-r from-brand-800 to-brand-900 text-white font-semibold py-4 rounded-xl flex items-center justify-center transition-all disabled:opacity-70"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  접수 중...
                </>
              ) : (
                '무료 상담 신청하기'
              )}
            </button>
            <p className="text-center text-xs text-brand-500 mt-4">
              접수 즉시 전문가가 배정되어 신속하게 연락드립니다.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
