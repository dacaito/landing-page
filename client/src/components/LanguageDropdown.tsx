import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, LANGUAGES, LANGUAGE_LABELS } from '@/lib/LanguageContext';
import { track } from '@/lib/analytics';

export function LanguageDropdown({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const { language: lang, getPathForLang } = useLanguage();
  const [, setLocation] = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (targetLang: typeof lang) => {
    setOpen(false);
    if (targetLang !== lang) {
      track("language_switch", { from: lang, to: targetLang });
      setLocation(getPathForLang(targetLang));
    }
  };

  if (variant === 'mobile') {
    return (
      <div className="flex flex-col items-center gap-2">
        {LANGUAGES.map((l) => (
          <button
            key={l}
            onClick={() => handleSelect(l)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-lg transition-colors ${
              l === lang
                ? 'border-primary text-primary font-medium'
                : 'border-border/50 text-muted-foreground hover:text-foreground hover:border-border'
            }`}
          >
            <span>{LANGUAGE_LABELS[l]}</span>
            {l === lang && <Check className="w-4 h-4" />}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase font-medium">{lang}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-36 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
          {LANGUAGES.map((l) => (
            <button
              key={l}
              onClick={() => handleSelect(l)}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${
                l === lang
                  ? 'text-primary font-medium bg-primary/5'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <span>{LANGUAGE_LABELS[l]}</span>
              {l === lang && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
