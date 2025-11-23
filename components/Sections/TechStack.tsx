import React from 'react';
import { TECH_STACK } from '../../constants';
import { Sparkles } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-left max-w-xl">
             <div className="flex items-center gap-2 text-teal-400 mb-2">
                <Sparkles size={20} />
                <span className="text-sm font-semibold tracking-wider uppercase">Core Technologies</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
               Technical <span className="text-teal-400">Expertise</span>
             </h2>
             <p className="text-slate-400 leading-relaxed">
               최신 트렌드와 안정성을 모두 고려한 기술 스택을 활용하여<br className="hidden md:block"/> 
               확장 가능하고 유지보수가 용이한 시스템을 구축합니다.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {TECH_STACK.map((tech) => (
              <div 
                key={tech.name} 
                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-navy-900/50 border border-slate-800 backdrop-blur-sm hover:bg-navy-800 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 p-3 rounded-full bg-navy-950 border border-slate-700 group-hover:border-teal-500/50 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-slate-400 group-hover:text-teal-400 transition-colors" />
                </div>
                <span className="text-base font-bold text-slate-200 group-hover:text-white mb-1 transition-colors">{tech.name}</span>
                <span className="text-xs font-medium text-teal-500/70 group-hover:text-teal-400 uppercase tracking-wide">{tech.level}</span>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;