import React, { useEffect, useState } from 'react';
import { X, Send, User, MessageSquare, Phone } from 'lucide-react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !contact || !message) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 이메일 본문 구성
    const subject = `[HwanCoding 프로젝트 문의] ${name}님`;
    const body = `
[문의 내용]
--------------------------------------------------
성함/업체명: ${name}
연락처: ${contact}
--------------------------------------------------

문의 내용:
${message}
    `.trim();

    // mailto 링크 생성 및 실행
    window.location.href = `mailto:hwanace@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // 모달 닫기 및 초기화
    onClose();
    setName('');
    setContact('');
    setMessage('');
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-navy-800 border border-teal-500/30 p-8 shadow-[0_0_50px_rgba(45,212,191,0.15)] transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"></div>
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">프로젝트 문의하기</h3>
          <p className="text-slate-400 text-sm">작성해주신 내용은 <span className="text-teal-400 font-semibold">hwanace@naver.com</span>으로 직접 전송됩니다.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">성함 / 업체명</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                <User size={18} />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-navy-900 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                placeholder="홍길동 / (주)컴퍼니"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">연락처 (전화 또는 이메일)</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                <Phone size={18} />
              </div>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full bg-navy-900 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                placeholder="010-0000-0000 or email@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">문의 내용</label>
            <div className="relative group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-navy-900 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                placeholder="프로젝트 개요, 예산, 일정 등을 간략히 적어주세요."
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            <span>메일로 문의 보내기</span>
            <Send size={18} className="ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;