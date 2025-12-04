import React from 'react';
import { APP_NAME, CONTENT } from '../constants';

export const Footer: React.FC = () => {
  const t = CONTENT.footer;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkText: string) => {
    // If the link is "Contact Support" (in any language, assuming it's the 3rd item), scroll to contact section
    const isContactLink = linkText === t.links[2];
    
    if (isContactLink) {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">E</span>
          </div>
          <span className="text-white font-bold tracking-tight">{APP_NAME}</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} {APP_NAME}. {t.rights}
        </div>
        <div className="flex gap-6 text-sm font-medium">
          {t.links.map((link, i) => (
             <a 
               key={i} 
               href={i === 2 ? "#contact" : "#"} 
               onClick={(e) => handleLinkClick(e, link)}
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