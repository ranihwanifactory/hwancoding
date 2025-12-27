
import React from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-heading font-bold tracking-tighter mb-6">
              제공 <span className="text-black/30">서비스</span>.
            </h2>
            <p className="text-black/50 text-xl font-medium">
              HwanCoding은 단순 개발을 넘어 비즈니스의 성공을 위한 파트너입니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-10 rounded-[2.5rem] bg-white border border-black/5 hover:border-black/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-10 shadow-xl shadow-black/10 group-hover:scale-110 transition-transform duration-500">
                <div className="text-white">
                    {getIcon(service.icon, "w-6 h-6")}
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-black/40 text-sm leading-relaxed mb-10 font-medium">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/20 group-hover:text-black transition-colors">
                 더 알아보기 <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
