import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AppContent, Language } from '../types';
import { INITIAL_CONTENT } from '../constants';
import { translateAppContent } from '../services/aiService';

interface LanguageContextType {
  language: Language;
  content: AppContent;
  setLanguage: (lang: Language) => Promise<void>;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [content, setContent] = useState<AppContent>(INITIAL_CONTENT);
  const [translations, setTranslations] = useState<Record<string, AppContent>>({
    en: INITIAL_CONTENT
  });
  const [isTranslating, setIsTranslating] = useState(false);

  const setLanguage = async (lang: Language) => {
    if (lang === language) return;

    setLanguageState(lang);

    // Check cache first
    if (translations[lang]) {
      setContent(translations[lang]);
      return;
    }

    // Translate if not in cache
    setIsTranslating(true);
    try {
      const translatedContent = await translateAppContent(INITIAL_CONTENT, lang);
      setTranslations(prev => ({ ...prev, [lang]: translatedContent }));
      setContent(translatedContent);
    } catch (error) {
      console.error("Translation failed:", error);
      // Fallback to English if failed, but keep selected language state to try again or show error
      // Ideally show a toast here, but for now we just log it.
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, content, setLanguage, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
