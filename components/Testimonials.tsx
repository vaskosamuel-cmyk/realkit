import React from 'react';
import { Star } from 'lucide-react';
import { CONTENT } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="w-[280px] md:w-[380px] px-3 md:px-4">
    <div className="bg-slate-50 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-200 group cursor-default relative hover:z-10">
      <div className="flex gap-1 mb-4 text-yellow-400">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-slate-700 leading-relaxed mb-6 flex-1 text-base md:text-lg font-medium">"{testimonial.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-4 ring-white shadow-sm" 
        />
        <div>
          <h4 className="text-base md:text-lg font-bold text-slate-900">{testimonial.name}</h4>
          <span className="text-xs text-blue-600 font-bold uppercase tracking-wide">{testimonial.role}</span>
        </div>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const t = CONTENT.testimonials;
  
  // Create two sets of items for the two rows
  const row1Items = [...t.list, ...t.list, ...t.list, ...t.list]; 
  const row2Items = [...t.list].reverse(); // Reverse content for variety
  const row2ScrollItems = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 tracking-tight">
          {t.headline}
        </h2>
      </div>
      
      <div className="relative w-full space-y-6 md:space-y-8">
        {/* Gradient masks for seamless edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scroll Left */}
        <div className="flex w-max animate-scroll hover:pause-on-hover">
          {row1Items.map((testimonial, idx) => (
            <TestimonialCard key={`row1-${idx}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Row 2: Scroll Right */}
        <div className="flex w-max animate-scroll-reverse hover:pause-on-hover">
          {row2ScrollItems.map((testimonial, idx) => (
            <TestimonialCard key={`row2-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};