import React from 'react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { CONTENT } from '../constants';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const t = CONTENT.hero;

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.4]"></div>
      
      {/* Radial Gradient */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[radial-gradient(circle_400px_at_50%_300px,#e0f2fe,transparent)] opacity-40 blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-[radial-gradient(circle_400px_at_50%_300px,#f1f5f9,transparent)] opacity-60 blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Social Proof Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ring-1 ring-slate-100">
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
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
          {t.headline} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">{t.headlineGradient}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex justify-center w-full">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 text-lg"
          >
            {t.ctaPrimary}
            <ArrowRight size={20} />
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