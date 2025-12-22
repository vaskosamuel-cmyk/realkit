import React, { useState } from 'react';
import { X, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const t = CONTENT.modal;
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const myForm = e.currentTarget;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Optional: redirect to pricing or checkout after success
        setTimeout(() => {
          onClose();
          // Scroll to pricing if not already there, or perform checkout logic
          const pricingSection = document.getElementById('pricing');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 2000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setIsSubmitting(false);
        alert("Pri odosielaní formulára sa vyskytla chyba. Skúste to prosím znova.");
      });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200 max-h-[90vh] md:max-h-none">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-2 bg-slate-100/50 hover:bg-slate-100 rounded-full transition-colors backdrop-blur-sm"
        >
          <X size={20} className="text-slate-500" />
        </button>

        {/* Left Column: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center overflow-y-auto">
          {isSuccess ? (
             <div className="text-center py-12">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 size={32} className="text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Ste prihlásený!</h3>
               <p className="text-slate-600">Presmerúvame vás k ponuke...</p>
             </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4 md:mb-6 w-fit">
                <Lock size={12} />
                Exkluzívna ponuka
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-4">{t.headline}</h2>
              <p className="text-slate-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                {t.subheadline}
              </p>

              <form 
                name="popup-form" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-3 md:space-y-4"
              >
                <input type="hidden" name="form-name" value="popup-form" />
                
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-base md:text-lg placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 md:py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 text-base md:text-lg"
                >
                  {isSubmitting ? 'Spracovávam...' : (
                    <>
                      {t.submitButton}
                      <ArrowRight size={18} className="md:w-5 md:h-5" />
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center mt-2 md:mt-4">
                  {t.disclaimer}
                </p>
              </form>
            </>
          )}
        </div>

        {/* Right Column: Image */}
        <div className="hidden md:block w-1/2 bg-slate-50 relative">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="RealKit™ Bundle"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <div className="flex -space-x-2 mb-4">
                 {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Člen" />
                 ))}
              </div>
              <p className="font-medium text-white/90">Pridajte sa k 2,400+ maklérom rastúcim s RealKitom™.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};