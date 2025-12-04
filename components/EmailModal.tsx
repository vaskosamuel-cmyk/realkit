import React, { useState } from 'react';
import { X, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const { content } = useLanguage();
  const t = content.modal;
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
        alert("There was an error submitting the form. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
        >
          <X size={20} className="text-slate-600" />
        </button>

        {/* Left Column: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          {isSuccess ? (
             <div className="text-center py-12">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 size={32} className="text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">You're in!</h3>
               <p className="text-slate-600">Redirecting you to the offer...</p>
             </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6 w-fit">
                <Lock size={12} />
                Exclusive Offer
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.headline}</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {t.subheadline}
              </p>

              <form 
                name="popup-form" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-4"
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
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 text-lg"
                >
                  {isSubmitting ? 'Processing...' : (
                    <>
                      {t.submitButton}
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center mt-4">
                  {t.disclaimer}
                </p>
              </form>
            </>
          )}
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 bg-slate-50 relative min-h-[300px] md:min-h-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="EstateOS Bundle"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <div className="flex -space-x-2 mb-4">
                 {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Member" />
                 ))}
              </div>
              <p className="font-medium text-white/90">Join 2,400+ agents scaling with EstateOS.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};