import React, { useState, useEffect } from 'react';
import { Check, Lock, Clock, Gift } from 'lucide-react';
import { CONTENT } from '../constants';

interface PricingProps {
  onOpenModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const t = CONTENT.pricing;
  
  const totalValue = t.items.reduce((acc, item) => acc + item.value, 0);

  // Timer Logic
  const [timeLeft, setTimeLeft] = useState({ h: 11, m: 45, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, h: prev.h, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (v: number) => v.toString().padStart(2, '0');

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.headline}</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{t.subheadline}</p>
        </div>

        {/* Separated Container */}
        <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Top Section: The Value Stack Card */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-8">
                <h3 className="text-2xl font-bold">{t.listHeader}</h3>
                <span className="text-slate-400 text-sm font-medium">Value</span>
              </div>
              
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5">
                {t.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start gap-4 group">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 p-1 rounded-full shrink-0 group-hover:bg-green-500/30 transition-colors">
                        <Check size={14} className="text-green-400" />
                      </div>
                      <span className="font-medium text-slate-200 group-hover:text-white transition-colors text-base md:text-lg">{item.name}</span>
                    </div>
                    <span className="text-slate-500 font-medium shrink-0 group-hover:text-slate-400 text-right">${item.value}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-center items-center gap-4 pt-10 mt-2 border-t border-white/5">
                <span className="text-slate-400 font-medium uppercase tracking-wide text-sm">Total Value</span>
                <span className="text-3xl font-bold text-slate-300 line-through decoration-red-500/60 decoration-2">${totalValue}</span>
              </div>
            </div>

            {/* Bottom Section: The Offer Box */}
            <div className="bg-white text-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl ring-4 ring-blue-500/20">
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-blue-50 opacity-80 pointer-events-none"></div>
               
               <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                 
                 {/* Left Column: What You Get Recap */}
                 <div className="space-y-8">
                   <div className="space-y-4">
                     <h4 className="text-xl font-bold text-slate-900">What's Inside:</h4>
                     <ul className="space-y-3">
                       {t.mainFeatures.map((feature, i) => (
                         <li key={i} className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                             <Check size={14} className="text-green-600 stroke-[3]" />
                           </div>
                           <span className="text-slate-700 font-medium text-lg">{feature}</span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                     <div className="flex items-center gap-2 text-blue-600 font-bold">
                       <Gift size={20} />
                       <h4 className="uppercase tracking-wide text-sm">Fast Action Bonuses</h4>
                     </div>
                     <ul className="space-y-3">
                       {t.bonuses.map((bonus, i) => (
                         <li key={i} className="flex items-start gap-3">
                           <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase mt-1">Free</span>
                           <div className="flex flex-col">
                             <span className="text-slate-900 font-bold">{bonus.title}</span>
                             <span className="text-slate-500 text-xs">Value: {bonus.value}</span>
                           </div>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>

                 {/* Right Column: Close */}
                 <div className="flex flex-col items-center text-center">
                    {/* Urgency Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold uppercase tracking-wide animate-pulse shadow-sm mb-6">
                      <Clock size={16} />
                      <span>Price increases in {format(timeLeft.h)}:{format(timeLeft.m)}:{format(timeLeft.s)}</span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tighter drop-shadow-sm">$97</span>
                      <span className="text-3xl font-bold text-slate-400 line-through decoration-4 decoration-red-400/50">${totalValue}</span>
                    </div>

                    <button 
                      onClick={onOpenModal}
                      className="w-full px-8 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/30 transition-all hover:scale-105 hover:bg-slate-800 active:scale-95 text-xl mb-4"
                    >
                      {t.cta}
                    </button>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                      <Lock size={14} className="text-green-600" />
                      <span>{t.secureLabel}</span>
                    </div>
                 </div>

               </div>
            </div>

        </div>
      </div>
    </section>
  );
};