import { createContext, useContext, useState, useCallback } from 'react';
import { languages, defaultLanguage } from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || defaultLanguage;
    }
    return defaultLanguage;
  });

  const toggleLanguage = useCallback(() => {
    setLang(prev => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('language', next);
      return next;
    });
  }, []);

  const t = useCallback((path) => {
    const keys = path.split('.');
    let value = languages[lang];
    for (const key of keys) {
      value = value?.[key];
    }
    return value ?? path;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
