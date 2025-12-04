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

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-blue-100">
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

export default App;