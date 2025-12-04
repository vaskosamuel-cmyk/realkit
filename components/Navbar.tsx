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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">EstateOS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => scrollToSection('features')} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all">
            {content.features}
          </button>
          <button onClick={() => scrollToSection('preview')} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all">
            {content.preview}
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all">
            {content.reviews}
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all">
            {content.contact}
          </button>

          <div className="w-px h-6 bg-slate-200 mx-2"></div>

          <button 
            onClick={() => scrollToSection('pricing')}
            className="group flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/30"
          >
            {content.cta}
            <ShoppingBag size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
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
          <button onClick={() => scrollToSection('features')} className="text-left px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{content.features}</button>
          <button onClick={() => scrollToSection('preview')} className="text-left px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{content.preview}</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-left px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{content.reviews}</button>
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