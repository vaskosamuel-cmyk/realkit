import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { CONTENT } from '../constants';

export const Contact: React.FC = () => {
  const t = CONTENT.contact;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-24 items-start">
          
          {/* Info Side */}
          <div className="md:col-span-2 md:sticky md:top-32">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.headline}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              {t.subheadline}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover:border-blue-100 transition-colors">
                  <Mail size={28} className="text-slate-700" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">{t.info.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover:border-blue-100 transition-colors">
                  <MessageSquare size={28} className="text-slate-700" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">Živá podpora</h4>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">{t.info.support}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              {isSubmitted ? (
                <div className="min-h-[440px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-8">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Správa odoslaná!</h3>
                  <p className="text-slate-600 max-w-xs mx-auto text-lg">{t.form.successMessage}</p>
                </div>
              ) : (
                <form 
                  name="contact" 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label 
                      htmlFor="name" 
                      className={`text-sm font-bold transition-colors ${focusedField === 'name' ? 'text-blue-600' : 'text-slate-700'}`}
                    >
                      {t.form.nameLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-6 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 text-lg"
                        placeholder="napr. Ján Kováč"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="email" 
                      className={`text-sm font-bold transition-colors ${focusedField === 'email' ? 'text-blue-600' : 'text-slate-700'}`}
                    >
                      {t.form.emailLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-6 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 text-lg"
                        placeholder="napr. jan@kovac.sk"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="message" 
                      className={`text-sm font-bold transition-colors ${focusedField === 'message' ? 'text-blue-600' : 'text-slate-700'}`}
                    >
                      {t.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none text-lg"
                      placeholder="Ako vám môžeme pomôcť rásť?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4 text-xl"
                  >
                    {isSubmitting ? (
                      "Odosielam správu..."
                    ) : (
                      <>
                        {t.form.submitButton}
                        <Send size={24} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};