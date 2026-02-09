import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { SeoHead } from "@/components/SeoHead";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import vixgenLogo from "@assets/Vexgen-owl.png";

export default function Privacy() {
  const { language: lang, getLocalizedPath, switchLanguagePath } = useLanguage();
  const [, setLocation] = useLocation();
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const navigateToHomeSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setLocation(getLocalizedPath('/'));
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = 72;
        const extraGap = 12;
        const top = window.scrollY + el.getBoundingClientRect().top - navHeight - extraGap;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const canonicalUrl = `https://vexgen.ai/${lang}/privacy`;
  const alternateEn = `https://vexgen.ai/en/privacy`;
  const alternateDe = `https://vexgen.ai/de/privacy`;
  const alternateEs = `https://vexgen.ai/es/privacy`;

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        lang={lang}
        title={t.meta.privacyTitle}
        description={t.meta.privacyDescription}
        canonicalUrl={canonicalUrl}
        alternates={{ en: alternateEn, de: alternateDe, es: alternateEs, xDefault: alternateEn }}
        ogType="website"
      />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
          <Link href={getLocalizedPath('/')} className="flex items-center gap-2 cursor-pointer">
            <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-primary">Vexgen AI</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => navigateToHomeSection("results")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.results}
            </button>
            <button onClick={() => navigateToHomeSection("solution")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.solution}
            </button>
            <button onClick={() => navigateToHomeSection("how-it-works")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.howItWorks}
            </button>
            <div 
              className="relative group"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 py-2">
                {t.nav.industries}
                <ChevronDown className={`w-3 h-3 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 z-50 pt-1">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                    <Link href={getLocalizedPath('/industries/chemical')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.chemical}
                    </Link>
                    <Link href={getLocalizedPath('/industries/plastics')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.plastics}
                    </Link>
                    <Link href={getLocalizedPath('/industries/food-beverage')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.foodBeverage}
                    </Link>
                    <Link href={getLocalizedPath('/industries/cosmetics')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.cosmetics}
                    </Link>
                    <Link href={getLocalizedPath('/industries/pharma')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.pharma}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href={getLocalizedPath('/company')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.company}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <LanguageDropdown />
            <Link href={getLocalizedPath('/')}>
              <Button size="sm" className="hidden sm:flex rounded-full px-4 sm:px-6">
                {t.cta.requestDemo}
              </Button>
            </Link>
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <Link href={getLocalizedPath('/')} className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg tracking-tight text-primary">Vexgen AI</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
            <button onClick={() => navigateToHomeSection("results")} className="text-lg font-medium">{t.nav.results}</button>
            <button onClick={() => navigateToHomeSection("solution")} className="text-lg font-medium">{t.nav.solution}</button>
            <button onClick={() => navigateToHomeSection("how-it-works")} className="text-lg font-medium">{t.nav.howItWorks}</button>
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg font-medium text-muted-foreground">{t.nav.industries}</span>
              <Link href={getLocalizedPath('/industries/chemical')} className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.chemical}</Link>
              <Link href={getLocalizedPath('/industries/plastics')} className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.plastics}</Link>
              <Link href={getLocalizedPath('/industries/food-beverage')} className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.foodBeverage}</Link>
              <Link href={getLocalizedPath('/industries/cosmetics')} className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.cosmetics}</Link>
              <Link href={getLocalizedPath('/industries/pharma')} className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.pharma}</Link>
            </div>
            <Link href={getLocalizedPath('/company')} className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.company}</Link>
          </div>
        </div>
      )}

      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 sm:mb-12 text-primary">
            {t.privacy.title}
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t.privacy.consent}</h2>
              <p className="leading-relaxed">
                {t.privacy.consentText1}
              </p>
              <p className="leading-relaxed mt-4">
                {t.privacy.consentText2}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t.privacy.purposes}</h2>
              <p className="leading-relaxed">
                {t.privacy.purposesText}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t.privacy.logFiles}</h2>
              <p className="leading-relaxed">
                {t.privacy.logFilesText}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t.privacy.cookies}</h2>
              <p className="leading-relaxed">
                {t.privacy.cookiesText}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t.privacy.contact}</h2>
              <p className="leading-relaxed">
                {t.privacy.contactText} <a href="mailto:contact@vexgen.ai" className="text-primary hover:underline">contact@vexgen.ai</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href={getLocalizedPath('/')} className="flex items-center gap-2 cursor-pointer">
              <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
              <span className="font-bold text-lg sm:text-xl tracking-tight text-primary">Vexgen AI</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <span>Baumackerstrasse 42, 8050 Zurich, Switzerland</span>
              <span>contact@vexgen.ai</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-sm">
              <Link href={getLocalizedPath('/company')} className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.company}</Link>
              <Link href={getLocalizedPath('/privacy')} className="text-foreground font-medium transition-colors">{t.footer.privacyPolicy}</Link>
              <Link href={getLocalizedPath('/imprint')} className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.imprint}</Link>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
