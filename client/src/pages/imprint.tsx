import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { translations, Language } from "@/lib/translations";
import vixgenLogo from "@assets/Vexgen-owl.png";

export default function Imprint() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vexgen-lang');
      if (saved === 'de' || saved === 'en') return saved;
    }
    return 'en';
  });
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('vexgen-lang', lang);
  }, [lang]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'de' : 'en');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-primary">Vexgen AI</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.results}
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.solution}
            </Link>
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
                    <Link href="/industries/plastics" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.plastics}
                    </Link>
                    <Link href="/industries/food-beverage" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.foodBeverage}
                    </Link>
                    <Link href="/industries/cosmetics" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.cosmetics}
                    </Link>
                    <Link href="/industries/pharma" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.pharma}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.howItWorks}
            </Link>
            <Link href="/company" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.company}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{lang}</span>
            </button>
            <Link href="/">
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
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg tracking-tight text-primary">Vexgen AI</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
            <Link href="/" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.results}</Link>
            <Link href="/" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.solution}</Link>
            <Link href="/" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.howItWorks}</Link>
            <Link href="/company" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.company}</Link>
          </div>
        </div>
      )}

      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 sm:mb-12 text-primary">
            Imprint
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
              <p className="leading-relaxed">
                We strive to provide correct and complete information on this website. All texts and links have been carefully checked and are constantly updated. Vexgen AI assumes no responsibility for the completeness, accuracy, actuality, reliability, or correctness of the information provided. Liability claims for damage arising from use of the information provided, including information which is incomplete or incorrect, are therefore excluded. All offers are non-binding. Individual pages, sections thereof or the entire website, including all offers and information, may be expanded, changed or deleted by Vexgen AI without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Liability for links</h2>
              <p className="leading-relaxed mb-4">
                All links to external providers were checked for accuracy at the time of their inclusion. However, we are not liable for the content and availability of websites that can be reached by hyperlink. Vexgen AI assumes no responsibility for the correctness, completeness and legality of the contents and links to other websites, nor for any offers, products or services contained therein, as these are no longer under the control of Vexgen AI. This is the case even if these websites contain the Vexgen AI logo or any other protected name. Access and use of linked websites is at the user's own risk.
              </p>
              <p className="leading-relaxed">
                The provider of the linked website is solely responsible for any illegal, incorrect or incomplete contents of linked websites, and especially for damage caused by the contents. It is irrelevant whether the damage is of a direct, indirect or financial nature, or any other type of damage that could result from loss of data, loss of use or other circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Copyrights</h2>
              <p className="leading-relaxed">
                Copyrights and all other rights to content, images, photos, or other files on the website belong exclusively to Vexgen AI or the specifically named rights holders. Should you become aware of any copyright infringement on our pages, please notify us at <a href="mailto:contact@vexgen.ai" className="text-primary hover:underline">contact@vexgen.ai</a> and we will immediately review the circumstances, contact the author and, if necessary, delete the infringing content. Reproduction of any elements requires the advance, written consent of the copyright holder.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Applicable law</h2>
              <p className="leading-relaxed">
                Any disputes or claims arising from the use of our pages are subject to Swiss law. The exclusive place of jurisdiction is Zurich, Switzerland.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
              <span className="font-bold text-lg sm:text-xl tracking-tight text-primary">Vexgen AI</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <span>Baumackerstrasse 42, 8050 Zurich, Switzerland</span>
              <span>contact@vexgen.ai</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-sm">
              <Link href="/company" className="text-muted-foreground hover:text-foreground transition-colors">Company</Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/imprint" className="text-foreground font-medium transition-colors">Imprint</Link>
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
