import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CONTENT } from '../constants';

export const FAQ: React.FC = () => {
  const t = CONTENT.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-20 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">{t.headline}</h2>
        <div className="space-y-4">
          {t.items.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{item.question}</span>
                {openIndex === index ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
              </button>
              <div 
                className={`px-6 text-slate-600 bg-slate-50 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};