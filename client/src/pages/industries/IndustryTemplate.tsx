import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Check, Camera, RefreshCw, Database, Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { translations, Language } from "@/lib/translations";
import vixgenLogo from "@assets/Vexgen-owl.png";

export type LayoutVariant = 'A' | 'B' | 'C' | 'D';

export interface IndustryContent {
  slug: string;
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
  layoutVariant?: LayoutVariant;
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
  const [, setLocation] = useLocation();

  useEffect(() => {
    localStorage.setItem('vexgen-lang', lang);
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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
  const layoutVariant = content.layoutVariant || 'A';

  const navigateToHomeSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setLocation('/');
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

  const canonicalUrl = `https://vexgen.ai/industries/${content.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet htmlAttributes={{ lang }}>
        <title>{content.intro.headline} - Vexgen AI</title>
        <meta name="description" content={content.intro.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${content.intro.headline} - Vexgen AI`} />
        <meta property="og:description" content={content.intro.description} />
      </Helmet>
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
              <button 
                className="text-sm text-foreground font-medium flex items-center gap-1 py-2"
              >
                {t.nav.industries}
                <ChevronDown className={`w-3 h-3 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 z-50 pt-1">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                    <Link href="/industries/chemical" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      {t.industries.chemical}
                    </Link>
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
            <button onClick={() => navigateToHomeSection("results")} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">
              {t.nav.results}
            </button>
            <button onClick={() => navigateToHomeSection("solution")} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">
              {t.nav.solution}
            </button>
            <button onClick={() => navigateToHomeSection("how-it-works")} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">
              {t.nav.howItWorks}
            </button>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-medium text-foreground">{t.nav.industries}</span>
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/industries/chemical" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-sm rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  {t.industries.chemical}
                </Link>
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
            <Link href="/company" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">
              {t.nav.company}
            </Link>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="rounded-full px-8 py-6 text-lg mt-4"
            >
              {t.cta.requestDemo}
            </Button>
          </div>
        </div>
      )}

      <section className="px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">{content.intro.headline}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-primary">
              {content.intro.subheadline}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                {content.intro.description}
              </p>
            </div>
            {content.intro.heroImage && (
              <div>
                <img 
                  src={content.intro.heroImage} 
                  alt={`${content.intro.headline} - Vexgen AI`}
                  width="600"
                  height="400"
                  loading="eager" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")} 
              className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
            >
              {t.cta.requestDemo}
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* LAYOUT A: Classic Cards - Used by Plastics */}
      {layoutVariant === 'A' && (
        <>
          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">The Challenge</p>
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

          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 text-center">The Solution</p>
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

          <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
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
        </>
      )}

      {/* LAYOUT B: Horizontal Timeline - Used by All Industries */}
      {layoutVariant === 'B' && (
        <>
          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-destructive mb-3">The Reality Today</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                    {content.problem.headline}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    {content.problem.description}
                  </p>
                  <p className="text-base text-muted-foreground italic border-l-4 border-destructive/30 pl-4">
                    {content.problem.closing}
                  </p>
                </div>
                <div className="space-y-3">
                  {content.problem.issues.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border-l-4 border-destructive">
                      <span className="text-base sm:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3">The Transformation</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                  {content.outcome.headline}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                  {content.outcome.description}
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
                {content.provenResults.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mt-2">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.outcome.benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border-l-4 border-primary">
                    <span className="text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3">The Process</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {content.howItWorks.headline}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  {content.howItWorks.description}
                </p>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  {content.howItWorks.steps.map((item, i) => {
                    const Icon = howItWorksIcons[i];
                    return (
                      <div key={i} className="text-center relative">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-primary flex items-center justify-center bg-background">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-base text-muted-foreground text-center mt-12 italic">
                {content.howItWorks.closing}
              </p>
            </div>
          </section>
        </>
      )}

      {/* LAYOUT C: Centered Minimal - Used by Cosmetics */}
      {layoutVariant === 'C' && (
        <>
          <section className="py-20 sm:py-32 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                {content.problem.headline}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
                {content.problem.description}
              </p>
              <div className="grid grid-cols-1 gap-4 text-left max-w-2xl mx-auto">
                {content.problem.issues.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-border/50 last:border-0">
                    <span className="text-2xl font-light text-destructive/50">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-32 px-4 sm:px-6 bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto">
              <p className="text-sm uppercase tracking-widest opacity-70 mb-8 text-center">Measured Impact</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {content.provenResults.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-light mb-2">{metric.value}</p>
                    <p className="text-sm uppercase tracking-wider opacity-70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-32 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm uppercase tracking-widest text-primary mb-4">What Changes</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
                {content.outcome.headline}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-12">
                {content.outcome.description}
              </p>
              <div className="inline-flex flex-col gap-4 text-left">
                {content.outcome.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-32 px-4 sm:px-6 bg-card border-y border-border/50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm uppercase tracking-widest text-primary mb-4">Three Steps</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  {content.howItWorks.headline}
                </h2>
              </div>
              <div className="space-y-16">
                {content.howItWorks.steps.map((item, i) => {
                  const Icon = howItWorksIcons[i];
                  return (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-lg text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* LAYOUT D: Data Dashboard - Used by Pharma */}
      {layoutVariant === 'D' && (
        <>
          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {content.provenResults.metrics.map((metric, i) => (
                  <div key={i} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1">{metric.value}</p>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-destructive mb-3">Current State</p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 leading-tight">
                    {content.problem.headline}
                  </h2>
                  <p className="text-base text-muted-foreground mb-6">
                    {content.problem.description}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {content.problem.closing}
                  </p>
                </div>
                <div className="lg:col-span-3 space-y-2">
                  {content.problem.issues.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border/50">
                      <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-1 rounded">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-2 order-2 lg:order-1">
                  {content.outcome.benefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3">Target State</p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 leading-tight">
                    {content.outcome.headline}
                  </h2>
                  <p className="text-base text-muted-foreground">
                    {content.outcome.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3">Implementation</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {content.howItWorks.headline}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  {content.howItWorks.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.howItWorks.steps.map((item, i) => {
                  const Icon = howItWorksIcons[i];
                  return (
                    <div key={i} className="p-6 rounded-2xl bg-background border border-border/50 relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="text-4xl font-bold text-muted-foreground/20">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <p className="text-base text-muted-foreground text-center mt-10 italic">
                {content.howItWorks.closing}
              </p>
            </div>
          </section>
        </>
      )}

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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Get Started</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              {content.getStarted.headline}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {content.getStarted.description}
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div 
              className="calendly-inline-widget rounded-xl overflow-hidden" 
              data-url="https://calendly.com/sebastian-freijo-vexgen/30min?hide_gdpr_banner=1&primary_color=0063BF"
              style={{ minWidth: '320px', height: '950px' }}
            />
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
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
