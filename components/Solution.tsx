import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { MessageSquareText, Magnet, Workflow, ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  const t = CONTENT.solution;
  const pillars = t.pillars;
  // Use images from the showcase section for the carousel
  const carouselImages = CONTENT.showcase.modules.map(m => m.image).slice(0, 3);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return MessageSquareText;
      case 1: return Magnet;
      case 2: return Workflow;
      default: return Workflow;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Headline & Description Centered Top */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            {t.headline}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Pillars */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {pillars.map((pillar, idx) => {
                const Icon = getIcon(idx);
                return (
                  <div key={idx} className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon className="text-blue-600" size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <button 
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 text-lg"
              >
                {t.cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Stacked Image Carousel */}
          <div className="w-full lg:w-1/2 relative perspective-1000 min-h-[400px] flex items-center justify-center">
             {/* Abstract background blobs */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
             
             <div className="relative w-full max-w-[500px] aspect-[4/3]">
                {carouselImages.map((img, idx) => {
                  // Determine position relative to active index
                  // We want 3 states:
                  // 0: Active (Front)
                  // 1: Next (Waiting Right)
                  // 2: Last (Stacked Left/Behind)
                  
                  // Simple distance logic for 3 items
                  let positionClass = "";
                  let zIndex = 0;

                  if (idx === activeIndex) {
                    // Active Item: Slides in, Center
                    positionClass = "translate-x-0 rotate-0 scale-100 opacity-100";
                    zIndex = 30;
                  } else if (idx === (activeIndex + 1) % carouselImages.length) {
                    // Next Item: Waiting offscreen right (ready to slide in)
                    positionClass = "translate-x-[120%] rotate-6 scale-95 opacity-0";
                    zIndex = 20;
                  } else {
                    // Last/Previous Item: Moves to back stack
                    positionClass = "-translate-x-6 -translate-y-4 -rotate-6 scale-90 opacity-80 grayscale-[0.3]";
                    zIndex = 10;
                  }

                  return (
                    <div 
                      key={idx}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${positionClass}`}
                      style={{ zIndex }}
                    >
                      <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white transform">
                         <img src={img} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  );
                })}
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};