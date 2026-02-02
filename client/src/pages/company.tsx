import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Factory, Globe, Menu, X, ChevronDown, Linkedin, ExternalLink, Target, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { translations, Language } from "@/lib/translations";
import vixgenLogo from "@assets/Vexgen-owl.png";
import companyVisionImage from "/images/company-vision.png";

export default function Company() {
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
            <Link href="/#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline">
              {t.nav.results}
            </Link>
            <Link href="/#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline">
              {t.nav.solution}
            </Link>
            <Link href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline">
              {t.nav.howItWorks}
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
            <Link href="/company" className="text-sm text-foreground font-medium transition-colors">
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
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg font-medium text-muted-foreground">{t.nav.industries}</span>
              <Link href="/industries/plastics" className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.plastics}</Link>
              <Link href="/industries/food-beverage" className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.foodBeverage}</Link>
              <Link href="/industries/cosmetics" className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.cosmetics}</Link>
              <Link href="/industries/pharma" className="text-base text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{t.industries.pharma}</Link>
            </div>
            <Link href="/company" className="text-lg font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>{t.nav.company}</Link>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Button className="rounded-full px-8 py-3 text-base mt-4">
                {t.cta.requestDemo}
              </Button>
            </Link>
          </div>
        </div>
      )}

      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">{t.company.label}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8 text-primary">
            {t.company.headline}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-2">
            {t.company.description}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <img 
                src={companyVisionImage} 
                alt="AI-powered warehouse operations" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Our Vision</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                Bridging the gap between digital records and physical reality
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that operational excellence starts with trust in your data. When ERP systems accurately reflect what's physically on the floor, everything changes: planning becomes predictable, waste disappears, and teams can focus on value creation instead of firefighting.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Mission</h3>
                    <p className="text-sm text-muted-foreground">Make inventory movements continuously observable and verifiable in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Vision</h3>
                    <p className="text-sm text-muted-foreground">A world where every physical asset is digitally visible, driving zero-waste operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Leadership</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Meet the Team
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A team of operators, engineers, and industry veterans united by a shared belief: manufacturing deserves better data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            <Card className="p-5 sm:p-6 md:p-8 text-left border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{t.company.team.ceo.name}</h3>
                  <p className="text-primary text-xs sm:text-sm">{t.company.team.ceo.role}</p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/sfreijo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">{t.company.team.ceo.bio}</p>
            </Card>
            <Card className="p-5 sm:p-6 md:p-8 text-left border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{t.company.team.cto.name}</h3>
                  <p className="text-primary text-xs sm:text-sm">{t.company.team.cto.role}</p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/caodandres/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">{t.company.team.cto.bio}</p>
            </Card>
            <Card className="p-5 sm:p-6 md:p-8 text-left border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{t.company.team.advisor.name}</h3>
                  <p className="text-primary text-xs sm:text-sm">{t.company.team.advisor.role}</p>
                </div>
                <a 
                  href="https://stefankalmund.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">{t.company.team.advisor.bio}</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{t.company.location}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{t.company.focus}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
              <span className="font-bold text-lg sm:text-xl tracking-tight text-primary">Vexgen AI</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <span>Baumackerstrasse 42, 8050 Zurich, Switzerland</span>
              <span>contact@vexgen.ai</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-sm">
              <Link href="/company" className="text-muted-foreground hover:text-foreground transition-colors">Company</Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/imprint" className="text-muted-foreground hover:text-foreground transition-colors">Imprint</Link>
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
