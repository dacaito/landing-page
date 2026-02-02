import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Check, Camera, RefreshCw, Database, Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { translations, Language } from "@/lib/translations";
import vixgenLogo from "@assets/Vexgen-owl.png";

export interface IndustryContent {
  intro: {
    headline: string;
    subheadline: string;
    description: string;
    heroImage?: string;
  };
  provenResults: {
    metrics: Array<{ value: string; label: string }>;
  };
  problem: {
    headline: string;
    description: string;
    issues: string[];
    closing: string;
  };
  outcome: {
    headline: string;
    description: string;
    benefits: string[];
  };
  howItWorks: {
    headline: string;
    description: string;
    steps: Array<{ step: string; title: string; description: string }>;
    closing: string;
  };
  whoItsFor: {
    headline: string;
    criteria: string[];
  };
  getStarted: {
    headline: string;
    description: string;
  };
}

interface IndustryTemplateProps {
  content: IndustryContent;
}

export default function IndustryTemplate({ content }: IndustryTemplateProps) {
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

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const nav = document.querySelector("nav");
      const navHeight = nav?.getBoundingClientRect().height ?? 0;
      const extraGap = 12;
      const top = window.scrollY + el.getBoundingClientRect().top - navHeight - extraGap;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, 100);
  };

  const howItWorksIcons = [Camera, RefreshCw, Database];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
          >
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
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button 
                className="text-sm text-foreground font-medium flex items-center gap-1"
              >
                {t.nav.industries}
                <ChevronDown className={`w-3 h-3 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
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
              )}
            </div>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.howItWorks}
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="rounded-full px-4 sm:px-6 text-sm"
            >
              <span className="hidden sm:inline">{t.nav.requestDemo}</span>
              <span className="sm:hidden">{t.nav.demo}</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-16">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 text-lg text-muted-foreground"
            >
              <Globe className="w-5 h-5" />
              <span className="uppercase font-medium">{lang === 'en' ? 'English' : 'Deutsch'}</span>
            </button>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-medium text-foreground">{t.nav.industries}</span>
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/industries/plastics" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-sm rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  {t.industries.plastics}
                </Link>
                <Link href="/industries/food-beverage" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-sm rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  {t.industries.foodBeverage}
                </Link>
                <Link href="/industries/cosmetics" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-sm rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  {t.industries.cosmetics}
                </Link>
                <Link href="/industries/pharma" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-sm rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  {t.industries.pharma}
                </Link>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="rounded-full px-8 py-6 text-lg mt-4"
            >
              {t.cta.requestDemo}
            </Button>
          </div>
        </div>
      )}

      <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">{content.intro.headline}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 text-primary">
            {content.intro.subheadline}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed px-2">
            {content.intro.description}
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection("contact")} 
            className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg mt-6"
          >
            {t.cta.requestDemo}
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
          {content.intro.heroImage && (
            <div className="mt-12 sm:mt-16">
              <img 
                src={content.intro.heroImage} 
                alt="Industry illustration" 
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">The Problem</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight">
            {content.problem.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-2">
            {content.problem.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left mb-8 sm:mb-12">
            {content.problem.issues.map((item, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-destructive/5 border border-destructive/20">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic px-2">
            {content.problem.closing}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 text-center">Proven Results</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {content.provenResults.metrics.map((metric, i) => (
              <Card key={i} className="p-6 sm:p-8 text-center border-border/50">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 text-center">The Outcome</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8 text-center">
            {content.outcome.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-center">
            {content.outcome.description}
          </p>
          <div className="space-y-3 sm:space-y-4">
            {content.outcome.benefits.map((item, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                </div>
                <span className="text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 text-center">How It Works</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-4 sm:mb-6">
            {content.howItWorks.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
            {content.howItWorks.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {content.howItWorks.steps.map((item, i) => {
              const Icon = howItWorksIcons[i];
              return (
                <Card key={i} className="p-6 sm:p-8 md:p-10 border-border/50 relative overflow-visible">
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-muted-foreground/20 mb-3 sm:mb-4">{item.step}</p>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
          <p className="text-base sm:text-lg text-muted-foreground text-center mt-8 sm:mt-12 italic max-w-3xl mx-auto">
            {content.howItWorks.closing}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Who It Is For</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8">
            {content.whoItsFor.headline}
          </h2>
          <div className="space-y-3 sm:space-y-4 text-left max-w-2xl mx-auto">
            {content.whoItsFor.criteria.map((item, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                </div>
                <span className="text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Get Started</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            {content.getStarted.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 px-2">
            {content.getStarted.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg">
                {t.cta.requestDemo}
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-6 h-6 object-contain" />
            <span className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {t.footer.copyright}</span>
          </div>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
