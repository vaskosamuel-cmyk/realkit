import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

export const Navbar: React.FC = () => {
  const { content, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Click outside handler for lang menu
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">EstateOS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.nav.features}
          </button>
          <button onClick={() => scrollToSection('preview')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.nav.preview}
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.nav.stories}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {content.nav.contact}
          </button>

          {/* Language Selector */}
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-full hover:bg-slate-100"
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-slate-50 transition-colors ${
                        language === lang.code ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-600'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => scrollToSection('pricing')}
            className="group flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20"
          >
            {content.nav.cta}
            <ShoppingBag size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Language Toggle (Simplified) */}
          <button 
             onClick={() => {
                const nextLang = language === 'en' ? 'es' : language === 'es' ? 'de' : language === 'de' ? 'fr' : 'en';
                setLanguage(nextLang);
             }}
             className="text-slate-600 flex items-center gap-1 text-sm font-semibold"
          >
            <Globe size={18} />
            <span className="uppercase">{language}</span>
          </button>

          <button 
            className="text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-5">
          <button onClick={() => scrollToSection('features')} className="text-left text-lg font-medium text-slate-900">{content.nav.features}</button>
          <button onClick={() => scrollToSection('preview')} className="text-left text-lg font-medium text-slate-900">{content.nav.preview}</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-left text-lg font-medium text-slate-900">{content.nav.stories}</button>
          <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-medium text-slate-900">{content.nav.contact}</button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl"
          >
            {content.nav.mobileCta}
          </button>
        </div>
      )}
    </nav>
  );
};