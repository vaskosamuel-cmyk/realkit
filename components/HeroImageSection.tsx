import React from 'react';

export const HeroImageSection: React.FC = () => {
  // Path to your local image in the new folder
  const localImageUrl = "./images/kon.jpg";
  // Backup URL in case local file is missing
  const fallbackUrl = "https://images.unsplash.com/photo-1724083750482-62968846747b?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative px-6 pb-20">
      <div className="max-w-6xl mx-auto group animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-100 ring-8 ring-slate-50 min-h-[300px] md:min-h-[400px]">
          {/* Main Image */}
          <img 
            src={localImageUrl}
            alt="Realitná sloboda a životný štýl s RealKit™" 
            className="w-full aspect-[21/9] object-cover hover:scale-105 transition-transform duration-[2500ms] ease-out"
            loading="eager"
            onError={(e) => {
              // If ./images/kon.jpg is not found, it swaps to the online fallback
              const target = e.target as HTMLImageElement;
              if (target.src !== fallbackUrl) {
                target.src = fallbackUrl;
              }
            }}
          />
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
          
          {/* Modernist Floating Card */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 p-6 md:p-8 bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[2rem] hidden md:block max-w-sm text-left shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-slate-900 font-bold tracking-tight text-lg">Váš čas je váš najcennejší majetok</span>
            </div>
            <p className="text-slate-900 text-sm md:text-base font-semibold leading-relaxed opacity-90">
              Automatizujte svoj marketing a získajte späť hodiny drahocenného času pre seba a svoje záľuby. RealKit™ pracuje, kým vy žijete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};