import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            주요 <span className="text-teal-400">프로젝트</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            다양한 도메인에서 성공적으로 수행한 프로젝트 사례입니다.<br/>
            비즈니스 목표 달성을 위한 최적의 UI/UX와 기술을 적용했습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden bg-navy-800 shadow-xl"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-navy-900/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content Overlay - Slide up effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                <div className="transform transition-transform duration-300 delay-75">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold tracking-wider mb-3 border border-teal-500/20">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-2">
                    최신 웹 기술을 활용하여 구축된 {item.category} 프로젝트입니다. 
                    사용자 경험을 최우선으로 고려하여 설계되었습니다.
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-white font-semibold hover:text-teal-400 transition-colors group/btn">
                    <span>자세히 보기</span>
                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Mobile Fallback (Visible when not hovering on touch devices, simpler view) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-950 to-transparent md:hidden">
                 <span className="text-teal-400 text-xs font-bold block mb-1">{item.category}</span>
                 <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;