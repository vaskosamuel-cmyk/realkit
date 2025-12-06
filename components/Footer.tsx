import React from 'react';
import { APP_NAME, CONTENT } from '../constants';

export const Footer: React.FC = () => {
  const t = CONTENT.footer;

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-3 items-center gap-6">
        
        {/* Logo Section (Left) */}
        <div className="flex items-center gap-2 group cursor-default justify-center md:justify-start">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg shadow-black/20 group-hover:bg-slate-700 transition-colors">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">RealKit&trade;</span>
        </div>

        {/* Rights (Center) */}
        <div className="text-sm text-center">
          &copy; {new Date().getFullYear()} {APP_NAME}. {t.rights}
        </div>
        
        {/* Links (Right) */}
        <div className="flex gap-6 text-sm font-medium justify-center md:justify-end">
          {t.links.map((link, i) => (
             <a 
               key={i} 
               href="#" 
               className="hover:text-white transition-colors"
             >
               {link}
             </a>
          ))}
        </div>
      </div>
    </footer>
  );
};