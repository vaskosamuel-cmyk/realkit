import React from 'react';
import { CONTENT } from '../constants';
import { ArrowRight, Check, ShieldCheck, Tag } from 'lucide-react';

interface FinalCtaProps {
  onOpenModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenModal }) => {
  const t = CONTENT.finalCta;

  return (
    <section className="py-20 md:py-24 bg-blue-600 relative overflow-hidden text-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
          {t.headline}
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.subheadline}
        </p>

        {/* Value Strip */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 text-sm md:text-base font-semibold bg-blue-700/30 inline-flex md:inline-flex p-4 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Tag size={18} className="text-yellow-300" />
            <span className="text-yellow-300">{t.pricing.today}</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-blue-500/40"></div>
          <div className="flex items-center gap-2">
            <Check size={18} className="text-blue-200" />
            <span className="text-blue-100">{t.pricing.value}</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-blue-500/40"></div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-200" />
            <span className="text-blue-100">{t.pricing.guarantee}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={onOpenModal}
            className="w-full md:w-auto px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl text-xl shadow-xl shadow-blue-900/20 hover:bg-blue-50 hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            {t.cta}
            <ArrowRight size={24} />
          </button>
          
          <p className="text-blue-200 text-sm md:text-base font-medium opacity-90">
            {t.subtext}
          </p>
        </div>
      </div>
    </section>
  );
};