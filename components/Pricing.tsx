import React from 'react';
import { Check, Lock } from 'lucide-react';
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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.headline}</h2>
          <p className="text-slate-400 text-lg">{t.subheadline}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* The Stack List */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold mb-6">{t.listHeader}</h3>
              <ul className="space-y-4">
                {t.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 p-1 rounded-full">
                        <Check size={14} className="text-green-400" />
                      </div>
                      <span className="font-medium text-slate-200">{item.name}</span>
                    </div>
                    <span className="text-slate-400 font-semibold">${item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center pt-6 text-xl">
                <span className="font-bold text-slate-300">{t.totalValue}</span>
                <span className="font-bold text-red-400 line-through decoration-2">${totalValue}</span>
              </div>
            </div>

            {/* The Offer */}
            <div className="md:w-80 flex flex-col justify-center items-center bg-white/5 rounded-2xl p-6 border border-white/10">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-2">{t.offerLabel}</span>
              <div className="text-6xl font-extrabold mb-2 text-white">$97</div>
              <span className="text-slate-400 text-sm mb-8">{t.subtext}</span>
              
              <button 
                onClick={onOpenModal}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg shadow-blue-900/50 transition-all hover:scale-105 active:scale-95 mb-4 text-lg"
              >
                {t.cta}
              </button>
              
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Lock size={12} />
                <span>{t.secureLabel}</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};