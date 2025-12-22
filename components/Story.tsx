import React from 'react';
import { CONTENT } from '../constants';
import { XCircle, ArrowDown } from 'lucide-react';

export const Story: React.FC = () => {
  const t = CONTENT.story;

  return (
    <section id="story" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="text-left flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              {t.headline}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              {t.subheadline}
            </p>
          </div>

          {/* Right Column: Bullets */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col h-full relative justify-center">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-red-50 rounded-full blur-2xl opacity-60"></div>
            
            <ul className="space-y-6 relative z-10">
              {t.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                  <span className="text-slate-700 text-lg font-medium leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bridge Sentence */}
        <div className="mt-20 md:mt-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 max-w-3xl mx-auto tracking-tight leading-tight">
            {t.bridge}
          </p>
          <div className="flex justify-center">
            <div className="animate-bounce p-3 bg-blue-50 text-blue-600 rounded-full">
              <ArrowDown size={32} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};