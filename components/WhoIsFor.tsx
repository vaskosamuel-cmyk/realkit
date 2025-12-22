import React from 'react';
import { CONTENT } from '../constants';
import { Check, X } from 'lucide-react';

export const WhoIsFor: React.FC = () => {
  const t = CONTENT.whoIsFor;

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Perfect For You */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                <Check size={32} className="text-green-600 stroke-[3]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{t.perfectFor.title}</h3>
            </div>

            <ul className="space-y-6">
              {t.perfectFor.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1.5 shrink-0 bg-green-50 rounded-full p-1">
                    <Check size={18} className="text-green-600 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-lg font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-slate-100 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-inner relative overflow-hidden h-full opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                <X size={32} className="text-slate-500 stroke-[3]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{t.notFor.title}</h3>
            </div>

            <ul className="space-y-6">
              {t.notFor.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1.5 shrink-0 bg-slate-200 rounded-full p-1">
                    <X size={18} className="text-slate-500 stroke-[3]" />
                  </div>
                  <span className="text-slate-500 text-lg font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};