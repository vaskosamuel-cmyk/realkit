import React from 'react';
import { FEATURE_ICONS, CONTENT } from '../constants';
import { Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  const t = CONTENT.features;

  return (
    <section id="features" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t.headline}</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            {t.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((feature, idx) => {
            const Icon = FEATURE_ICONS[idx % FEATURE_ICONS.length];
            return (
              <div 
                key={idx}
                className={`group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${idx === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-slate-700 group-hover:text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
          
          {/* Special "AI Ready" Bento Box - Always fits in the remaining slot */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                <Sparkles className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.aiBox.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t.aiBox.description}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-300 group-hover:text-blue-200 cursor-pointer">
              <span>{t.aiBox.link}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};