import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { 
  Palette, 
  Home, 
  MessageSquareText, 
  Video, 
  CheckCircle2
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const t = CONTENT.showcase;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'marketing': return Palette;
      case 'systems': return Home;
      case 'scripts': return MessageSquareText;
      case 'crm': return Video;
      default: return Palette;
    }
  };

  return (
    <section id="showcase" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
            Detailný Obsah
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t.headline}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {t.subheadline}
          </p>
        </div>

        {/* Desktop Layout - 50/50 Split */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-stretch min-h-[600px]">
          
          {/* Left Column: Navigation List */}
          <div className="space-y-4 flex flex-col justify-center">
            {t.modules.map((module, index) => {
              const Icon = getIcon(module.id);
              const isActive = activeTab === index;
              
              return (
                <div 
                  key={module.id}
                  onClick={() => handleTabClick(index)}
                  className={`
                    group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2
                    ${isActive 
                      ? 'bg-blue-50/50 border-blue-600 shadow-sm transform scale-[1.02] z-10' 
                      : 'bg-white border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                    }
                  `}
                >
                  <div className="flex items-start gap-5">
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                      ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'}
                    `}>
                      <Icon size={26} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors ${isActive ? 'text-blue-900' : 'text-slate-700'}`}>
                        {module.title}
                      </h3>
                      
                      <div className={`
                        grid transition-all duration-300 ease-in-out overflow-hidden
                        ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}
                      `}>
                        <div className="min-h-0">
                          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4">
                            {module.description}
                          </p>
                          <ul className="space-y-3">
                             {module.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm md:text-base text-slate-700 font-medium">
                                   <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                   {feature}
                                </li>
                             ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Preview */}
          <div className="relative h-full min-h-[600px] bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-2xl">
            {t.modules.map((module, index) => (
              <div 
                key={module.id}
                className={`
                  absolute inset-0 transition-all duration-500 ease-in-out
                  ${activeTab === index ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}
                `}
              >
                <div className="relative w-full h-full group">
                  <img 
                    src={module.image} 
                    alt={module.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar -mx-6 px-6">
            {t.modules.map((module, index) => {
              const Icon = getIcon(module.id);
              return (
                <div 
                  key={module.id}
                  className="snap-center shrink-0 w-[85vw] sm:w-[400px] flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg h-[680px]"
                >
                  <div className="h-[280px] relative overflow-hidden bg-slate-100 shrink-0">
                    <img src={module.image} alt={module.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-xl p-2 shadow-sm">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 overflow-y-auto">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{module.title}</h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 flex-1">
                      {module.description}
                    </p>
                    <div className="space-y-3 mb-4 border-t border-slate-100 pt-6 shrink-0">
                      {module.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-3 text-base text-slate-700 font-medium">
                          <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-4">
             {t.modules.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all ${idx === activeTab ? 'bg-blue-600 w-6' : 'bg-slate-300'}`}
                />
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};