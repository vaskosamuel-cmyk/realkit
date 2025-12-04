import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AiDemo } from './components/AiDemo';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EmailModal } from './components/EmailModal';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Loader2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { isTranslating } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-blue-100">
      {/* Global Translation Loader */}
      {isTranslating && (
        <div className="fixed inset-0 z-[100] bg-white/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 border border-slate-100 animate-in zoom-in-95">
            <Loader2 className="animate-spin text-blue-600" size={48} />
            <p className="text-slate-600 font-medium animate-pulse">Translating EstateOS...</p>
          </div>
        </div>
      )}

      <Navbar />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Features />
        <AiDemo />
        <Testimonials />
        <Pricing onOpenModal={() => setIsModalOpen(true)} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;