import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import Button from '../UI/Button';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-900">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold tracking-wide uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              AI 기술을 접목한<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                차세대 웹 크리에이티브
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              안녕하세요, <strong className="text-teal-300">HwanCoding</strong>입니다. <br/>
              단순한 웹 제작을 넘어 AI 시스템 개발, 온라인 브랜딩, 교육까지.<br/> 
              비즈니스의 가치를 높이는 올인원 테크 솔루션을 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" onClick={onCtaClick} className="w-full sm:w-auto">
                프로젝트 무료 상담
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth'})}>
                포트폴리오 보기
              </Button>
            </div>
          </div>

          {/* Right: Abstract Code Visual */}
          <div className="relative mt-12 lg:mt-0 group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl bg-navy-800 border border-slate-700 shadow-2xl overflow-hidden aspect-square md:aspect-[4/3] flex flex-col">
              {/* Fake IDE Header */}
              <div className="bg-navy-950 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">HwanCoding_AI_Agent.tsx</div>
                <div className="w-4"></div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm md:text-base overflow-hidden relative flex-1 bg-navy-900/50">
                <div className="text-slate-400">
                  <span className="text-pink-400">import</span> <span className="text-teal-300">{`{ AI_Solution }`}</span> <span className="text-pink-400">from</span> <span className="text-yellow-300">'@hwancoding/core'</span>;<br/><br/>
                  
                  <span className="text-blue-400">const</span> <span className="text-yellow-300">Project</span> = <span className="text-purple-400">async</span> () ={'>'} {`{`}<br/>
                  &nbsp;&nbsp;<span className="text-slate-500">// Your Business Logic meets AI</span><br/>
                  &nbsp;&nbsp;<span className="text-blue-400">const</span> result = <span className="text-purple-400">await</span> AI_Solution.<span className="text-blue-300">create</span>({`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;type: <span className="text-yellow-300">'Web_Platform'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;performance: <span className="text-purple-400">Infinity</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;design: <span className="text-yellow-300">'Futuristic'</span><br/>
                  &nbsp;&nbsp;{`}`});<br/><br/>
                  
                  &nbsp;&nbsp;<span className="text-pink-400">return</span> result;<br/>
                  {`}`};
                </div>
                
                {/* Floating Elements */}
                <div className="absolute bottom-8 right-8 bg-navy-800 p-4 rounded-lg border border-teal-500/30 shadow-lg shadow-teal-500/10 animate-bounce delay-1000">
                    <Code className="text-teal-400 w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;