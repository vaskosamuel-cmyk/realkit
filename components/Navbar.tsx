import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { CONTENT } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const content = CONTENT.nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    const start = window.scrollY;
    const offset = 100; // Header offset
    const elementPosition = element.getBoundingClientRect().top;
    const targetPosition = elementPosition + window.scrollY - offset;
    const distance = targetPosition - start;
    
    // Constant speed calculation: 1.2 pixels per millisecond
    const speed = 1.2; 
    const calculatedDuration = Math.abs(distance) / speed;
    
    // Ensure a minimum duration so extremely short scrolls aren't instant
    const duration = Math.max(calculatedDuration, 500);

    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      
      // Linear easing for constant speed (no acceleration/deceleration)
      const ease = (t: number, b: number, c: number, d: number) => {
        return c * (t / d) + b;
      };

      const nextScroll = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, nextScroll);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Ensure we land exactly on target at the end
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* Logo (Left) */}
        <div className="flex items-center gap-2 cursor-pointer group z-20 relative" onClick={() => scrollToSection('hero')}>
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">RealKit™</span>
        </div>

        {/* Desktop Nav Links (Absolute Center) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button onClick={() => scrollToSection('story')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.about}
          </button>
          <button onClick={() => scrollToSection('showcase')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.features}
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.reviews}
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.pricing}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.contact}
          </button>
        </div>

        {/* Desktop CTA (Right) */}
        <div className="hidden md:flex items-center z-20 relative">
          <button 
            onClick={() => scrollToSection('pricing')}
            className="group flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/30"
          >
            {content.cta}
            <ShoppingBag size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle (Right) */}
        <div className="flex items-center gap-4 md:hidden z-20 relative ml-auto">
          <button 
            className="text-slate-900 p-2 hover:bg-slate-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden shadow-xl flex flex-col gap-2 animate-in slide-in-from-top-5">
          <button onClick={() => scrollToSection('story')} className="text-left px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{content.about}</button>
          <button onClick={() => scrollToSection('showcase')} className="text-left px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{content.features}</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-left px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{content.reviews}</button>
          <button onClick={() => scrollToSection('pricing')} className="text-left px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{content.pricing}</button>
          <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{content.contact}</button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white font-semibold rounded-xl shadow-lg shadow-slate-900/20"
          >
            {content.mobileCta}
          </button>
        </div>
      )}
    </nav>
  );
};