import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Features';
import Portfolio from './components/Sections/Portfolio';
import TechStack from './components/Sections/TechStack';
import CTASection from './components/Sections/CTASection';
import Modal from './components/UI/Modal';
import { CONTACT_INFO, APP_NAME } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-navy-900 text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar onOpenModal={openModal} />
      
      <main>
        <Hero onCtaClick={openModal} />
        <Services />
        <TechStack />
        <Portfolio />
        <CTASection onCtaClick={openModal} />
      </main>

      <footer className="bg-navy-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-2">{APP_NAME}</h3>
            <p className="text-slate-500 text-sm">
              Email: {CONTACT_INFO.email} <br/>
              Tel: {CONTACT_INFO.phone}
            </p>
            <div className="text-slate-600 text-xs mt-4">
              © {new Date().getFullYear()} HwanCoding. All rights reserved.
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors">Blog</a>
            <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors">Github</a>
            <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;