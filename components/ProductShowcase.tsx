import React, { useState, useEffect, useRef } from 'react';
import { CONTENT } from '../constants';
import { 
  CheckCircle2, 
  LayoutDashboard, 
  MessageSquareQuote, 
  Megaphone, 
  Workflow,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const t = CONTENT.showcase;
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Mobile Scroll State
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-rotate tabs if not paused (Desktop only effect)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % t.modules.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [isPaused, t.modules.length]);

  // Check scroll bounds for mobile arrows
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Allow a small buffer (5px) for calculation variances
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollButtons);
      // Initial check
      checkScrollButtons();
      // Handle resize just in case
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        el.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case 'crm': return LayoutDashboard;
      case 'scripts': return MessageSquareQuote;
      case 'marketing': return Megaphone;
      case 'systems': return Workflow;
      default: return LayoutDashboard;
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Safety check to prevent scrolling if already at bounds
      if (direction === 'left' && scrollLeft <= 0) return;
      if (direction === 'right' && scrollLeft >= scrollWidth - clientWidth) return;

      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="showcase" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t.headline}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {t.subheadline}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="flex flex-col relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Navigation Pills (Desktop Only) */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="flex gap-0 p-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
              {t.modules.map((module, index) => {
                const Icon = getIcon(module.id);
                const isActive = activeTab === index;
                return (
                  <button
                    key={module.id}
                    ref={el => tabsRef.current[index] = el}
                    onClick={() => setActiveTab(index)}
                    className={`
                      flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300
                      ${isActive 
                        ? 'bg-slate-900 text-white shadow-md' 
                        : 'bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }
                    `}
                  >
                    <Icon size={18} className={isActive ? 'text-blue-400' : 'opacity-70'} />
                    <span>{module.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-slate-200 text-slate-700 -ml-2 transition-opacity duration-300"
              aria-label="Previous module"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-slate-200 text-slate-700 -mr-2 transition-opacity duration-300"
              aria-label="Next module"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Main Content Stage */}
          <div 
            ref={scrollContainerRef}
            className="
              bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 
              flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar [&::-webkit-scrollbar]:hidden
              md:block md:overflow-hidden md:min-h-[500px] md:relative
            "
          >
            {t.modules.map((module, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={module.id}
                  className={`
                    w-full flex-shrink-0 snap-center flex flex-col md:flex-row 
                    md:absolute md:inset-0 md:h-full md:transition-all md:duration-700 md:ease-in-out
                    ${isActive 
                      ? 'md:opacity-100 md:translate-x-0 md:z-10' 
                      : 'md:opacity-0 md:translate-x-8 md:z-0 md:pointer-events-none'
                    }
                  `}
                >
                  
                  {/* Left Column: Text Content */}
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white order-2 md:order-1">
                    <div className="space-y-8 max-w-lg mx-auto md:mx-0">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4">
                          Modul 0{index + 1}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                          {module.title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {module.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {module.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                              <CheckCircle2 size={12} className="text-green-600 stroke-[3]" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <button 
                          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                          className="group inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                        >
                          Preskúmať funkcie {module.title.split(' ')[0]}
                          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual */}
                  <div className="w-full md:w-1/2 bg-white relative order-1 md:order-2 h-[300px] md:h-full overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                      <div className="relative w-full h-full max-h-[400px] shadow-2xl rounded-2xl overflow-hidden border border-slate-200/60 bg-white transform transition-transform duration-700 hover:scale-[1.02] group">
                        <img 
                          src={module.image} 
                          alt={module.title} 
                          className="w-full h-full object-cover"
                        />
                        {/* Glass Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};