import React from 'react';
import { Check, Lock, Clock, Zap } from 'lucide-react';
import { CONTENT } from '../constants';

interface PricingProps {
  onOpenModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const t = CONTENT.pricing;
  
  const totalValue = t.items.reduce((acc, item) => acc + item.value, 0);

  return (
    <section id="pricing" className="py-12 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.headline}</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">{t.subheadline}</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* The Stack List */}
            <div className="flex-1 space-y-8 w-full">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold">{t.listHeader}</h3>
                <span className="text-slate-400 text-sm font-medium">Value</span>
              </div>
              
              <ul className="space-y-5">
                {t.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start gap-4 group">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 p-1 rounded-full shrink-0 group-hover:bg-green-500/30 transition-colors">
                        <Check size={14} className="text-green-400" />
                      </div>
                      <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{item.name}</span>
                    </div>
                    <span className="text-slate-500 font-medium shrink-0 group-hover:text-slate-400">${item.value}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-8">
                <span className="text-lg font-bold text-slate-300">{t.totalValue}</span>
                <span className="text-2xl font-bold text-red-400 line-through decoration-2 decoration-red-400/50">${totalValue}</span>
              </div>
            </div>

            {/* The Offer Card */}
            <div className="w-full lg:w-[400px] flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 text-slate-900 rounded-3xl p-8 border-4 border-white/10 shadow-2xl relative overflow-hidden transform lg:scale-105">
              
              {/* Urgency Ribbon */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-pulse"></div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wide mb-6 animate-pulse">
                <Clock size={14} />
                {t.urgency}
              </div>

              <span className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">{t.offerLabel}</span>
              <div className="flex items-start gap-1 mb-4">
                <span className="text-3xl font-bold text-slate-400 mt-2">$</span>
                <span className="text-7xl font-extrabold text-slate-900 tracking-tighter">97</span>
              </div>
              
              <button 
                onClick={onOpenModal}
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-xl shadow-slate-900/20 transition-all hover:scale-105 hover:bg-slate-800 active:scale-95 mb-4 text-lg flex items-center justify-center gap-2 group"
              >
                {t.cta}
                <Zap size={20} className="text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium bg-white/50 px-4 py-2 rounded-full">
                <Lock size={12} />
                <span>{t.secureLabel}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{t.subtext}</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};