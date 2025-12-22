import React from 'react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { CONTENT } from '../constants';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const t = CONTENT.hero;

  return (
    <section id="hero" className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.4]"></div>
      
      {/* Radial Gradient */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[radial-gradient(circle_400px_at_50%_300px,#e0f2fe,transparent)] opacity-40 blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-[radial-gradient(circle_400px_at_50%_300px,#f1f5f9,transparent)] opacity-60 blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Social Proof Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 ring-1 ring-slate-100">
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <img key={i} src={`https://picsum.photos/30/30?random=${i + 10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-700">{t.trustedBadge}</span>
          <div className="flex gap-0.5 text-yellow-500">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
          {t.headline} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">{t.headlineGradient}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full mb-12">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 text-lg"
          >
            {t.ctaPrimary}
            <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all text-lg"
          >
            {t.ctaSecondary}
          </button>
        </div>

        {/* Value Props */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base font-medium text-slate-500 mb-8">
          {t.valueProps.map((prop, i) => (
             <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-600" />
                <span>{prop}</span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};