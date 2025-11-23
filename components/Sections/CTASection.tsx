import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import Button from '../UI/Button';
import { CONTACT_INFO } from '../../constants';

interface CTASectionProps {
  onCtaClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onCtaClick }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Decorative gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          성공적인 프로젝트의 시작
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          준비중인 프로젝트가 있으신가요? <br/>
          HwanCoding과 함께 구체적인 실행 방안을 논의해보세요.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-navy-800/50 border border-slate-800">
                <Mail className="w-8 h-8 text-teal-400 mb-3" />
                <span className="text-slate-400 text-sm mb-1">Email</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold text-white hover:text-teal-300 transition-colors">{CONTACT_INFO.email}</a>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-navy-800/50 border border-slate-800">
                <Phone className="w-8 h-8 text-teal-400 mb-3" />
                <span className="text-slate-400 text-sm mb-1">Phone</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold text-white hover:text-teal-300 transition-colors">{CONTACT_INFO.phone}</a>
            </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={onCtaClick} className="w-full sm:w-auto px-12 py-4 text-lg shadow-lg shadow-teal-500/20">
              <MessageSquare className="w-5 h-5 mr-2" />
              온라인 문의 남기기
            </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;