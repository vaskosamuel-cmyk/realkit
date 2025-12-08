import React, { useState, useEffect } from 'react';
import { Check, Lock, Clock, Gift, ArrowRight } from 'lucide-react';
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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.headline}</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{t.subheadline}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: The Value Stack (7 cols) */}
            <div className="lg:col-span-7 space-y-8 order-1 lg:order-1">
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 md:p-10 relative">
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{t.listHeader}</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {t.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center gap-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-3 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-500/20 p-1 rounded-full shrink-0">
                          <Check size={14} className="text-green-400 stroke-[3]" />
                        </div>
                        <span className="text-slate-200 font-medium text-base md:text-lg">{item.name}</span>
                      </div>
                      <span className="text-slate-500 font-semibold shrink-0">{item.value}€</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center pt-8 mt-4 border-t border-white/10 relative">
                  <span className="text-slate-400 uppercase tracking-widest text-sm font-bold">{t.totalValue}</span>
                  <span className="text-3xl md:text-4xl font-bold text-slate-300">{totalValue}€</span>
                </div>
              </div>
            </div>

            {/* Right Column: The Checkout/Offer Card (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 order-2 lg:order-2">
              <div className="bg-white text-slate-900 rounded-[2rem] shadow-2xl shadow-black/50 overflow-hidden relative ring-4 ring-blue-500/20">
                
                <div className="p-8 md:p-10 text-center">
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800">Váš kompletný balík obsahuje:</h3>

                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 relative text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <Gift size={18} className="text-blue-600" />
                      <span className="text-blue-800 font-bold text-sm uppercase">Bonusy Zadarmo</span>
                    </div>
                    <div className="space-y-2">
                      {t.bonuses.map((bonus, i) => (
                        <div key={i} className="flex justify-between items-center gap-2 text-sm">
                          <span className="text-slate-700 font-medium truncate">{bonus.title}</span>
                          <span className="text-slate-400 font-semibold line-through shrink-0">{bonus.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Stack */}
                  <div className="flex flex-col items-center justify-center gap-0 mb-4 relative">
                    <div className="flex flex-col items-center">
                      <span className="text-slate-400 text-3xl font-bold relative inline-block mb-2 text-red-500 line-through decoration-2">
                        {totalValue}€
                      </span>
                      <span className="text-7xl md:text-8xl font-extrabold text-slate-900 tracking-tighter leading-none">
                        97€
                      </span>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="inline-block bg-yellow-400 text-slate-900 text-sm font-extrabold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
                    Ušetríte 92%
                  </div>

                  {/* Urgency Timer */}
                  <div className="flex items-center justify-center gap-2 text-red-600 font-bold uppercase tracking-wide text-sm mb-6 animate-pulse">
                    <Clock size={16} />
                    <span>{t.urgency} {format(timeLeft.h)}:{format(timeLeft.m)}:{format(timeLeft.s)}</span>
                  </div>
                  
                  <button 
                    onClick={onOpenModal}
                    className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl shadow-xl hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all text-xl flex items-center justify-center gap-2 mb-6"
                  >
                    {t.cta}
                    <ArrowRight size={24} />
                  </button>

                  <div className="space-y-3 text-sm text-slate-500 font-medium">
                    <div className="flex items-center justify-center gap-2">
                      <Lock size={14} className="text-green-600" />
                      <span>{t.secureLabel}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check size={14} className="text-blue-600" />
                      <span>30-dňová garancia vrátenia peňazí</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check size={14} className="text-blue-600" />
                      <span>Okamžitý prístup k súborom</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border-t border-slate-100 p-4 text-center">
                   <div className="flex justify-center -space-x-2 mb-2">
                      {[1,2,3,4,5].map(i => (
                        <img key={i} src={`https://picsum.photos/30/30?random=${i+20}`} className="w-6 h-6 rounded-full border-2 border-white" alt="Buyer" />
                      ))}
                   </div>
                   <p className="text-xs text-slate-400 font-medium">Kúpilo už viac ako 2,400+ maklérov</p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};