
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeRobot from './ThreeRobot';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#F5F5F7]">
      {/* 3D Background Container - React Three Fiber for full interactivity */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-[#F5F5F7]">
            <div className="w-12 h-12 border-4 border-black/5 border-t-black rounded-full animate-spin"></div>
          </div>
        }>
          <Canvas 
            gl={{ antialias: true, alpha: true }} 
            dpr={[1, 2]}
            shadows
          >
            <ThreeRobot />
          </Canvas>
        </Suspense>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 flex flex-col items-center text-center pointer-events-none">
        {/* Status Badge */}
        <div className="mb-8 animate-fade-in [animation-delay:200ms]">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-premium rounded-full text-[11px] font-bold text-black/70 uppercase tracking-[0.2em] pointer-events-auto">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
              HwanCoding AI Intelligence V2.5
           </div>
        </div>

        {/* Main Headline */}
        <div className="mb-6 animate-fade-in [animation-delay:400ms]">
           <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter text-black leading-[1.05] drop-shadow-sm">
              AI 기술을 접목한<br/>
              <span className="text-black/30">차세대 크리에이티브</span>
           </h1>
        </div>
        
        <p className="max-w-2xl text-lg md:text-xl text-black/50 font-medium mb-12 leading-relaxed animate-fade-in [animation-delay:600ms]">
           안녕하세요, <strong>HwanCoding</strong>입니다.<br className="hidden md:block"/>
           단순한 웹 제작을 넘어 AI 시스템 개발, 브랜딩, 교육까지.<br className="hidden md:block"/>
           비즈니스의 가치를 높이는 올인원 테크 솔루션을 제공합니다.
        </p>

        {/* Action Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in [animation-delay:800ms] pointer-events-auto">
          <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-zinc-800 transition-all shadow-2xl shadow-black/10 active:scale-95">
            프로젝트 문의
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="glass-premium text-black px-10 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/80 transition-all active:scale-95">
            <Play className="w-4 h-4 fill-black" />
            Watch Showreel
          </button>
        </div>
      </div>

      {/* Technical Overlay */}
      <div className="absolute bottom-10 left-0 w-full px-10 z-10 animate-fade-in [animation-delay:1000ms] pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-end gap-8 border-t border-black/5 pt-8">
           <div className="hidden md:block">
              <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">Architecture</p>
              <p className="text-sm font-bold text-black/60 uppercase tracking-tighter">Scalable AI Infrastructure</p>
           </div>
           <div className="flex gap-12 ml-auto">
              <div className="text-center">
                 <div className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">Projects</div>
                 <div className="text-xl font-bold font-heading">100+</div>
              </div>
              <div className="text-center">
                 <div className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">Latency</div>
                 <div className="text-xl font-bold font-heading">&lt; 0.1s</div>
              </div>
              <div className="text-center">
                 <div className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">Accuracy</div>
                 <div className="text-xl font-bold font-heading">99.9%</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
