import React from 'react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { CONTENT } from '../constants';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const t = CONTENT.hero;

  return (
    <section id="hero" className="relative pt-32 pb-12 md:pt-48 md:pb-20 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent -z-10 opacity-60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Social Proof Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <img key={i} src={`https://picsum.photos/30/30?random=${i + 10}`} alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-600">{t.trustedBadge}</span>
          <div className="flex gap-0.5 text-yellow-500">
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          {t.headline} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">{t.headlineGradient}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 text-lg"
          >
            {t.ctaPrimary}
            <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2 text-lg"
          >
            {t.ctaSecondary}
          </button>
        </div>

        {/* Value Props */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
          {t.valueProps.map((prop, i) => (
             <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>{prop}</span>
             </div>
          ))}
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-20 relative w-full max-w-5xl mx-auto perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-32 bottom-0 w-full" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-100">
             {/* Mockup UI representation */}
             <div className="aspect-[16/9] bg-slate-50 relative overflow-hidden flex">
                {/* Sidebar Mockup */}
                <div className="w-1/4 h-full border-r border-slate-200 bg-white p-6 hidden md:block">
                  <div className="h-8 w-24 bg-slate-200 rounded mb-8"></div>
                  <div className="space-y-4">
                     <div className="h-4 w-full bg-slate-100 rounded"></div>
                     <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                     <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                  </div>
                  <div className="mt-8 space-y-4">
                     <div className="h-4 w-full bg-slate-100 rounded"></div>
                     <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
                  </div>
                </div>
                {/* Main Content Mockup */}
                <div className="flex-1 p-6 md:p-10">
                   <div className="flex justify-between items-center mb-10">
                      <div className="h-10 w-1/3 bg-slate-200 rounded-lg"></div>
                      <div className="flex gap-2">
                         <div className="h-10 w-10 bg-blue-100 rounded-full"></div>
                         <div className="h-10 w-10 bg-slate-100 rounded-full"></div>
                      </div>
                   </div>
                   <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="h-32 rounded-xl bg-white shadow-sm border border-slate-100"></div>
                      <div className="h-32 rounded-xl bg-white shadow-sm border border-slate-100"></div>
                      <div className="h-32 rounded-xl bg-white shadow-sm border border-slate-100"></div>
                   </div>
                   <div className="h-64 rounded-xl bg-white shadow-sm border border-slate-100 w-full"></div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};