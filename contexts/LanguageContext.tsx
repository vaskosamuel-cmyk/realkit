import React from 'react';

// This file is deprecated. The app now uses English only.
// Keeping a dummy export to ensure any lingering imports don't break the build immediately,
// though all usages should have been removed.

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const useLanguage = () => {
  return { language: 'en', setLanguage: () => {} };
};