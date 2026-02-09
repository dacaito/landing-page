import { createContext, useContext, ReactNode } from 'react';
import { useLocation } from 'wouter';
import { Language } from './translations';

interface LanguageContextType {
  language: Language;
  getLocalizedPath: (path: string) => string;
  switchLanguagePath: () => string;
  getPathForLang: (targetLang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LANGUAGES: Language[] = ['en', 'de', 'es'];

const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
};

export { LANGUAGE_LABELS };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  
  const language: Language = location.startsWith('/de') ? 'de' : location.startsWith('/es') ? 'es' : 'en';
  
  const getLocalizedPath = (path: string): string => {
    if (path.startsWith('/en') || path.startsWith('/de') || path.startsWith('/es')) {
      return path;
    }
    const cleanPath = path === '/' ? '' : path;
    return `/${language}${cleanPath}`;
  };
  
  const getPathForLang = (targetLang: Language): string => {
    const currentPath = location.replace(/^\/(en|de|es)/, '') || '';
    return `/${targetLang}${currentPath}`;
  };

  const switchLanguagePath = (): string => {
    const currentIndex = LANGUAGES.indexOf(language);
    const nextLang = LANGUAGES[(currentIndex + 1) % LANGUAGES.length];
    return getPathForLang(nextLang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, getLocalizedPath, switchLanguagePath, getPathForLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
