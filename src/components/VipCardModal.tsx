'use client';

import { useState } from 'react';
import { X, Check } from 'lucide-react';
import Image from 'next/image';

interface VipCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VipCardModal({ isOpen, onClose }: VipCardModalProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className={`bg-white rounded-2xl shadow-2xl w-full relative overflow-hidden transition-all duration-300 ${
          step === 1 ? 'max-w-md' : 'max-w-2xl'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">특별 할인카드 신청</h2>
              <p className="text-gray-500 text-sm">정보를 입력하시면 즉시 카드가 발급됩니다.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">성함</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1a5eff] focus:border-[#1a5eff] outline-none" 
                  placeholder="홍길동" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">연락처</label>
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1a5eff] focus:border-[#1a5eff] outline-none" 
                  placeholder="010-0000-0000" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-4 bg-[#1a5eff] hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl shadow-md transition-colors flex justify-center items-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  '무료 발급받기'
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-6 md:p-10 bg-gray-50 flex flex-col items-center">
            <div className="flex items-center gap-2 text-green-600 font-bold mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              발급이 완료되었습니다!
            </div>
            
            {/* VIP Card Design */}
            <div className="w-full aspect-[1.6/1] max-w-[600px] bg-white border border-gray-200 rounded-lg shadow-xl relative overflow-hidden flex flex-col pt-8 pb-4 px-6 md:px-12 justify-between">
              
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="font-serif text-lg md:text-2xl tracking-tight text-gray-900">
                  Membership <span className="font-black text-2xl md:text-3xl">VIP</span> Card
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-sm md:text-base font-bold text-gray-700">
                  {name} <span className="font-normal text-gray-500">님 전용</span>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mt-2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#005b9f] tracking-tight">
                  대한민국 공무원 전용 특별 할인카드
                </h3>
              </div>

              {/* Price */}
              <div className="text-center flex justify-center items-end gap-1 mt-2 mb-4">
                <div 
                  className="font-serif font-black text-6xl md:text-[100px] leading-none"
                  style={{
                    background: 'linear-gradient(to bottom, #e3000f 50%, #005b9f 50%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  100,000
                </div>
                <span className="font-serif font-black text-3xl md:text-5xl text-black mb-1 md:mb-3">원</span>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-end">
                <div></div> {/* spacer */}
                
                <div className="flex flex-col items-center ml-20">
                  <div className="text-xs md:text-sm font-bold text-gray-800 tracking-tighter mb-1">
                    대한민국 공무원 장례서비스
                  </div>
                  <div className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter">
                    (주)공무원라이프
                  </div>
                </div>

                {/* Stamp */}
                <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-red-600 p-1">
                  <div className="w-full h-full border border-red-600 flex flex-wrap content-center justify-center text-red-600 font-black text-[10px] md:text-xs leading-none text-center" style={{fontFamily: 'Batang, serif'}}>
                    <div className="w-full">공무원</div>
                    <div className="w-full mt-1">라이프</div>
                    <div className="w-full mt-1">대표인</div>
                  </div>
                </div>
              </div>

            </div>
            
            <p className="mt-6 text-sm text-gray-500 text-center">
              해당 화면을 캡처하여 상담 시 제시해주시면 즉시 10만원 할인이 적용됩니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
