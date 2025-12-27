
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      isScrolled ? 'py-4 glass-premium border-b border-black/5' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-7 h-7 bg-black rounded flex items-center justify-center group-hover:scale-110 transition-transform">
             <span className="text-white text-[10px] font-black">H</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-black font-heading">HwanCoding</span>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-black/40 hover:text-black transition-all text-[12px] font-bold tracking-widest uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center px-4 py-1.5 bg-black/5 rounded-full text-[10px] font-black text-black/40 border border-black/5 uppercase tracking-widest">
            AI SYNCING
          </div>
          <button className="bg-black text-white px-8 py-2.5 rounded-full text-[12px] font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-black/10">
            상담하기
          </button>
          <button className="lg:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-[110] flex flex-col p-10 animate-in fade-in slide-in-from-top duration-500">
           <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-black font-heading tracking-tighter">HwanCoding</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
           </div>
           <div className="flex flex-col gap-10">
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-4xl font-bold tracking-tighter border-b border-black/5 pb-4">{item.label}</a>
              ))}
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
