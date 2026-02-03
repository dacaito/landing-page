import { createContext, useContext, ReactNode } from 'react';
import { useLocation } from 'wouter';
import { Language } from './translations';

interface LanguageContextType {
  language: Language;
  getLocalizedPath: (path: string) => string;
  switchLanguagePath: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  
  const language: Language = location.startsWith('/de') ? 'de' : 'en';
  
  const getLocalizedPath = (path: string): string => {
    if (path.startsWith('/en') || path.startsWith('/de')) {
      return path;
    }
    const cleanPath = path === '/' ? '' : path;
    return `/${language}${cleanPath}`;
  };
  
  const switchLanguagePath = (): string => {
    const newLang = language === 'en' ? 'de' : 'en';
    const currentPath = location.replace(/^\/(en|de)/, '') || '';
    return `/${newLang}${currentPath}`;
  };
  
  return (
    <LanguageContext.Provider value={{ language, getLocalizedPath, switchLanguagePath }}>
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
