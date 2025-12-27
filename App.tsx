
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import { PROJECTS } from './constants';
import { ArrowUpRight, ArrowRight, CircleCheck, Loader2, CircleAlert } from 'lucide-react';

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('모든 필드를 입력해 주세요.');
      setFormStatus('error');
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('유효한 이메일 주소를 입력해 주세요.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');
    
    try {
      // Formspree 고유 엔드포인트 'xojqdvyn' 적용
      const response = await fetch('https://formspree.io/f/xojqdvyn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[HwanCoding 문의] ${formData.name}님의 신규 프로젝트 의뢰`
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || '전송 중 서버 오류가 발생했습니다.');
      }
    } catch (error: any) {
      console.error("Form Submission Error:", error);
      setErrorMessage(error.message || '시스템 오류로 인해 메시지를 보낼 수 없습니다.');
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formStatus === 'error') setFormStatus('idle');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-black selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Core Technologies */}
        <section id="tech" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-10">
             <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                <div className="max-w-xl">
                   <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tighter">Technical<br/><span className="text-black/20">Expertise</span>.</h2>
                   <p className="text-black/50 text-xl font-medium leading-relaxed">
                      최신 트렌드와 안정성을 모두 고려한 기술 스택으로 확장 가능하고 유지보수가 용이한 시스템을 구축합니다.
                   </p>
                </div>
                <div className="w-full md:w-auto">
                   <div className="inline-block p-4 glass-premium rounded-3xl">
                      <div className="flex items-center gap-4 mb-2">
                         <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                         <span className="text-xs font-bold uppercase tracking-widest">Active Stack</span>
                      </div>
                      <p className="text-[10px] text-black/40 font-bold uppercase">Updated 2025</p>
                   </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "React / Next.js", level: "Advanced", icon: "⚛️" },
                  { name: "AI Integration", level: "Specialist", icon: "🤖" },
                  { name: "Node.js API", level: "Advanced", icon: "⚙️" },
                  { name: "Responsive Web", level: "Expert", icon: "📱" },
                  { name: "App Development", level: "Intermediate", icon: "📦" },
                  { name: "UI/UX Design", level: "Specialist", icon: "🎨" }
                ].map((tech, i) => (
                  <div key={i} className="group p-10 bg-[#F9F9FB] rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-700">
                     <div className="text-3xl mb-6">{tech.icon}</div>
                     <div className="flex justify-between items-center mb-4">
                        <h4 className="text-2xl font-bold font-heading">{tech.name}</h4>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 group-hover:bg-white/10 px-3 py-1.5 rounded-full">
                           {tech.level}
                        </span>
                     </div>
                     <p className="text-sm opacity-50 group-hover:opacity-70 leading-relaxed">비즈니스 요구사항에 최적화된 엔지니어링 솔루션을 제공합니다.</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <Services />

        {/* Major Projects */}
        <section id="projects" className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
             <div className="text-center mb-24">
                <h2 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-8">Selected <span className="text-black/10">Works</span>.</h2>
                <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-black/40 text-xl font-medium max-w-2xl mx-auto">도메인별 최적의 UI/UX와 기술이 적용된 성공 사례입니다.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {PROJECTS.map((project, i) => (
                  <div key={i} className="group block">
                     <div className="relative overflow-hidden rounded-[3rem] bg-[#F5F5F7] aspect-[16/10] mb-8 border border-black/5">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all"></div>
                        <div className="absolute top-8 left-8">
                           <span className="px-4 py-1.5 glass-premium rounded-full text-[10px] font-black uppercase tracking-widest text-black/60">
                              {project.category}
                           </span>
                        </div>
                        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                           <button className="bg-white text-black p-5 rounded-full shadow-2xl">
                              <ArrowUpRight className="w-6 h-6" />
                           </button>
                        </div>
                     </div>
                     <div className="px-4">
                        <h3 className="text-3xl font-heading font-bold mb-4 tracking-tighter">{project.title}</h3>
                        <p className="text-black/40 text-lg leading-relaxed max-w-lg mb-6">{project.description}</p>
                        <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                           View Case Study <ArrowRight className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 bg-[#F5F5F7]">
          <div className="max-w-7xl mx-auto px-10">
             <div className="glass-premium rounded-[4rem] p-16 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border border-black/5">
                <div className="flex-1">
                   <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-10">성공적인 프로젝트의<br/><span className="text-black/30">시작.</span></h2>
                   <p className="text-black/50 text-xl font-medium mb-12 leading-relaxed">
                      준비중인 프로젝트가 있으신가요?<br/>
                      HwanCoding과 함께 구체적인 실행 방안을 논의해보세요.
                   </p>
                   <div className="flex flex-wrap gap-10">
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Email</p>
                         <p className="text-xl font-bold border-b border-black pb-1">hwanace@naver.com</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Office</p>
                         <p className="text-xl font-bold border-b border-black pb-1">010-7545-0038</p>
                      </div>
                   </div>
                </div>
                
                <div className="w-full lg:w-[450px] relative">
                   {formStatus === 'success' ? (
                     <div className="bg-white border border-black/5 rounded-[3rem] p-12 flex flex-col items-center text-center animate-in zoom-in duration-500 shadow-2xl">
                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                           <CircleCheck className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">전송 성공</h3>
                        <p className="text-black/50 mb-8 leading-relaxed">
                          메시지가 성공적으로 전달되었습니다.<br/>
                          검토 후 빠르게 연락드리겠습니다.
                        </p>
                        <button 
                          onClick={() => setFormStatus('idle')}
                          className="text-xs font-black uppercase tracking-widest border-b border-black pb-1 hover:text-black/40 transition-colors"
                        >
                          다시 작성하기
                        </button>
                     </div>
                   ) : (
                     <form className="space-y-4" onSubmit={handleSubmit}>
                        {formStatus === 'error' && (
                          <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex items-center gap-3 text-rose-600 text-sm font-medium animate-in slide-in-from-top-2 duration-300">
                             <CircleAlert className="w-4 h-4" />
                             {errorMessage}
                          </div>
                        )}
                        <div className="relative group">
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="성함" 
                            autoComplete="name"
                            disabled={formStatus === 'submitting'}
                            className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-black transition-all disabled:opacity-50" 
                          />
                        </div>
                        <div className="relative group">
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="이메일 주소" 
                            autoComplete="email"
                            disabled={formStatus === 'submitting'}
                            className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-black transition-all disabled:opacity-50" 
                          />
                        </div>
                        <div className="relative group">
                          <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="문의 내용 (AI 시스템, 쇼핑몰, 브랜드 등)" 
                            rows={4} 
                            disabled={formStatus === 'submitting'}
                            className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-black transition-all disabled:opacity-50 resize-none"
                          ></textarea>
                        </div>
                        <button 
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 active:scale-95 disabled:bg-zinc-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                        >
                          {formStatus === 'submitting' ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              전송 중...
                            </>
                          ) : (
                            '문의 전송하기'
                          )}
                        </button>
                        <p className="text-[10px] text-center text-black/20 font-medium uppercase tracking-widest mt-4">
                          SECURE END-TO-END TRANSMISSION
                        </p>
                     </form>
                   )}
                </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-10">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-16 border-b border-black/5">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                    <span className="text-white text-xs font-black">H</span>
                 </div>
                 <span className="text-2xl font-bold text-black font-heading tracking-tighter">HwanCoding</span>
              </div>
              <div className="flex gap-12 text-sm font-bold text-black/40">
                 <a href="#" className="hover:text-black transition-colors">Instagram</a>
                 <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                 <a href="#" className="hover:text-black transition-colors">Github</a>
              </div>
           </div>
           <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-black text-black/20 tracking-[0.2em] uppercase">
              <p>© 2025 HWANCODING ROBOTICS & SYSTEMS. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-10">
                 <a href="#">Privacy</a>
                 <a href="#">Security</a>
                 <a href="#">Legal</a>
              </div>
           </div>
        </div>
      </footer>

      <AIConsultant />
    </div>
  );
};

export default App;
