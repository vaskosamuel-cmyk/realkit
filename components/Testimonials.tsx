import React from 'react';
import { Star } from 'lucide-react';
import { CONTENT } from '../constants';

export const Testimonials: React.FC = () => {
  const t = CONTENT.testimonials;
  
  // Duplicate items to ensure smooth infinite scroll on wide screens.
  const baseItems = [...t.list, ...t.list]; 
  const scrollItems = [...baseItems, ...baseItems];

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          {t.headline}
        </h2>
      </div>
      
      <div className="relative w-full">
        {/* Gradient masks for seamless edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <div className="flex w-max animate-scroll py-4">
          {scrollItems.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`} 
              className="w-[320px] md:w-[450px] px-4 md:px-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-blue-200 group cursor-default relative hover:z-10">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 flex-1 text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-blue-100 transition-all" 
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};