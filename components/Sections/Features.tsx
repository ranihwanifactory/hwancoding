import React from 'react';
import { SERVICES } from '../../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            제공 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">서비스</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            HwanCoding은 단순 개발을 넘어 비즈니스의 성공을 위한 파트너입니다.
            최적의 기술 스택으로 당신의 아이디어를 현실로 만듭니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative p-8 rounded-2xl bg-navy-800 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-navy-900/80 backdrop-blur-sm flex items-center justify-center mb-6 ring-1 ring-slate-700 group-hover:ring-teal-500 transition-all duration-300 shadow-lg shadow-black/20">
                  <service.icon className="w-7 h-7 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;