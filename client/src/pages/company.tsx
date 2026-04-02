import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Factory, Globe, Menu, X, ChevronDown, Linkedin, Target, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { SeoHead } from "@/components/SeoHead";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { getDomain, track } from "@/lib/analytics";
import vixgenLogo from "@assets/Vexgen-owl.png";
import companyVisionImage from "@assets/company-dispatch.png";

export default function Company() {
  const { language: lang, getLocalizedPath, switchLanguagePath } = useLanguage();
  const [, setLocation] = useLocation();
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const externalProfiles = {
    en: {
      sentenceStart: "Company profiles available on ",
      andWord: "and",
    },
    de: {
      sentenceStart: "Unternehmensprofile verfügbar auf ",
      andWord: "und",
    },
    es: {
      sentenceStart: "Perfiles de la empresa disponibles en ",
      andWord: "y",
    },
  } as const;

  const profilesCopy = externalProfiles[lang];
  const profileLinks = {
    linkedin: "https://www.linkedin.com/company/vexgen-ai/",
    crunchbase: "https://www.crunchbase.com/organization/vexgen-ai",
    dealroom: "https://app.dealroom.co/companies/vexgen_ai",
    github: "https://github.com/vexgen-ai",
  } as const;

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

  const canonicalUrl = `https://vexgen.ai/${lang}/company`;
  const alternateEn = `https://vexgen.ai/en/company`;
  const alternateDe = `https://vexgen.ai/de/company`;
  const alternateEs = `https://vexgen.ai/es/company`;

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        lang={lang}
        title={t.meta.companyTitle}
        description={t.meta.companyDescription}
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
            <button
              onClick={() => {
                track("nav_click", { item: "results", label: t.nav.results, href: getLocalizedPath("/"), kind: "route", hash: "#results" });
                navigateToHomeSection("results");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.results}
            </button>
            <button
              onClick={() => {
                track("nav_click", { item: "solution", label: t.nav.solution, href: getLocalizedPath("/"), kind: "route", hash: "#solution" });
                navigateToHomeSection("solution");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.solution}
            </button>
            <button
              onClick={() => {
                track("nav_click", { item: "how_it_works", label: t.nav.howItWorks, href: getLocalizedPath("/"), kind: "route", hash: "#how-it-works" });
                navigateToHomeSection("how-it-works");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.howItWorks}
            </button>
            <div 
              className="relative group"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 py-2"
                onClick={() => track("nav_click", { item: "industries", label: t.nav.industries, href: "", kind: "anchor", hash: "industries_menu" })}
              >
                {t.nav.industries}
                <ChevronDown className={`w-3 h-3 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 z-50 pt-1">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                    <Link
                      href={getLocalizedPath('/industries/chemical')}
                      onClick={() =>
                        track("nav_click", {
                          item: "industry_chemical",
                          label: t.industries.chemical,
                          href: getLocalizedPath("/industries/chemical"),
                          kind: "route",
                        })
                      }
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {t.industries.chemical}
                    </Link>
                    <Link
                      href={getLocalizedPath('/industries/plastics')}
                      onClick={() =>
                        track("nav_click", {
                          item: "industry_plastics",
                          label: t.industries.plastics,
                          href: getLocalizedPath("/industries/plastics"),
                          kind: "route",
                        })
                      }
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {t.industries.plastics}
                    </Link>
                    <Link
                      href={getLocalizedPath('/industries/food-beverage')}
                      onClick={() =>
                        track("nav_click", {
                          item: "industry_food_beverage",
                          label: t.industries.foodBeverage,
                          href: getLocalizedPath("/industries/food-beverage"),
                          kind: "route",
                        })
                      }
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {t.industries.foodBeverage}
                    </Link>
                    <Link
                      href={getLocalizedPath('/industries/cosmetics')}
                      onClick={() =>
                        track("nav_click", {
                          item: "industry_cosmetics",
                          label: t.industries.cosmetics,
                          href: getLocalizedPath("/industries/cosmetics"),
                          kind: "route",
                        })
                      }
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {t.industries.cosmetics}
                    </Link>
                    <Link
                      href={getLocalizedPath('/industries/pharma')}
                      onClick={() =>
                        track("nav_click", {
                          item: "industry_pharma",
                          label: t.industries.pharma,
                          href: getLocalizedPath("/industries/pharma"),
                          kind: "route",
                        })
                      }
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {t.industries.pharma}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href={getLocalizedPath('/company')}
              onClick={() =>
                track("nav_click", { item: "company", label: t.nav.company, href: getLocalizedPath("/company"), kind: "route" })
              }
              className="text-sm text-foreground font-medium transition-colors"
            >
              {t.nav.company}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <LanguageDropdown />
            <Link
              href={getLocalizedPath('/')}
              onClick={() => {
                track("nav_click", { item: "demo", label: t.cta.requestDemo, href: getLocalizedPath("/"), kind: "route" });
                track("demo_request_click", { placement: "nav" });
              }}
            >
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
            <button
              onClick={() => {
                track("nav_click", { item: "results", label: t.nav.results, href: "#results" });
                navigateToHomeSection("results");
              }}
              className="text-lg font-medium"
            >
              {t.nav.results}
            </button>
            <button
              onClick={() => {
                track("nav_click", { item: "solution", label: t.nav.solution, href: "#solution" });
                navigateToHomeSection("solution");
              }}
              className="text-lg font-medium"
            >
              {t.nav.solution}
            </button>
            <button
              onClick={() => {
                track("nav_click", { item: "how_it_works", label: t.nav.howItWorks, href: "#how-it-works" });
                navigateToHomeSection("how-it-works");
              }}
              className="text-lg font-medium"
            >
              {t.nav.howItWorks}
            </button>
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg font-medium text-muted-foreground">{t.nav.industries}</span>
              <Link
                href={getLocalizedPath('/industries/chemical')}
                className="text-base text-muted-foreground"
                onClick={() => {
                  track("nav_click", { item: "industry_chemical", label: t.industries.chemical, href: getLocalizedPath("/industries/chemical") });
                  setMobileMenuOpen(false);
                }}
              >
                {t.industries.chemical}
              </Link>
              <Link
                href={getLocalizedPath('/industries/plastics')}
                className="text-base text-muted-foreground"
                onClick={() => {
                  track("nav_click", { item: "industry_plastics", label: t.industries.plastics, href: getLocalizedPath("/industries/plastics") });
                  setMobileMenuOpen(false);
                }}
              >
                {t.industries.plastics}
              </Link>
              <Link
                href={getLocalizedPath('/industries/food-beverage')}
                className="text-base text-muted-foreground"
                onClick={() => {
                  track("nav_click", { item: "industry_food_beverage", label: t.industries.foodBeverage, href: getLocalizedPath("/industries/food-beverage") });
                  setMobileMenuOpen(false);
                }}
              >
                {t.industries.foodBeverage}
              </Link>
              <Link
                href={getLocalizedPath('/industries/cosmetics')}
                className="text-base text-muted-foreground"
                onClick={() => {
                  track("nav_click", { item: "industry_cosmetics", label: t.industries.cosmetics, href: getLocalizedPath("/industries/cosmetics") });
                  setMobileMenuOpen(false);
                }}
              >
                {t.industries.cosmetics}
              </Link>
              <Link
                href={getLocalizedPath('/industries/pharma')}
                className="text-base text-muted-foreground"
                onClick={() => {
                  track("nav_click", { item: "industry_pharma", label: t.industries.pharma, href: getLocalizedPath("/industries/pharma") });
                  setMobileMenuOpen(false);
                }}
              >
                {t.industries.pharma}
              </Link>
            </div>
            <Link
              href={getLocalizedPath('/company')}
              className="text-lg font-medium text-primary"
              onClick={() => {
                track("nav_click", { item: "company", label: t.nav.company, href: getLocalizedPath("/company") });
                setMobileMenuOpen(false);
              }}
            >
              {t.nav.company}
            </Link>
            <Link
              href={getLocalizedPath('/')}
              onClick={() => {
                track("nav_click", { item: "demo", label: t.cta.requestDemo, href: getLocalizedPath("/") });
                track("demo_request_click", { placement: "mobile_menu" });
                setMobileMenuOpen(false);
              }}
            >
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
            <span className="block mt-4">{t.company.entitySentence}</span>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <img 
                src={companyVisionImage} 
                alt="AI-powered warehouse operations with Vexgen AI" 
                width="600"
                height="400"
                loading="lazy"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">{t.company.vision.label}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                {t.company.vision.headline}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                {t.company.vision.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">{t.company.vision.mission}</h3>
                    <p className="text-sm text-muted-foreground">{t.company.vision.missionText}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">{t.company.vision.visionLabel}</h3>
                    <p className="text-sm text-muted-foreground">{t.company.vision.visionText}</p>
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
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">{t.company.leadership.label}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t.company.leadership.headline}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.company.leadership.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
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

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">{t.company.careers.label}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {t.company.careers.headline}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                {t.company.careers.description}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                {t.company.careers.description2}
              </p>
              <a
                href="mailto:jobs@vexgen.ai"
                onClick={() => track("contact_click", { method: "email", email: "jobs@vexgen.ai" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                {t.company.careers.cta}
              </a>
            </div>
            <div className="lg:col-span-2">
              <img
                src="/images/careers-team.png"
                alt="Join the Vexgen AI team"
                width="400"
                height="256"
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-lg max-h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground">
            {profilesCopy.sentenceStart}
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("outbound_click", { domain: getDomain(profileLinks.linkedin), url: profileLinks.linkedin })
              }
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href={profileLinks.crunchbase}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("outbound_click", { domain: getDomain(profileLinks.crunchbase), url: profileLinks.crunchbase })
              }
              className="text-primary hover:underline"
            >
              Crunchbase
            </a>
            ,{" "}
            <a
              href={profileLinks.dealroom}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("outbound_click", { domain: getDomain(profileLinks.dealroom), url: profileLinks.dealroom })
              }
              className="text-primary hover:underline"
            >
              Dealroom
            </a>{" "}
            {profilesCopy.andWord}{" "}
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("outbound_click", { domain: getDomain(profileLinks.github), url: profileLinks.github })
              }
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            .
          </p>
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
              <Link
                href={getLocalizedPath('/company')}
                onClick={() => track("nav_click", { item: "company", label: t.footer.company, href: getLocalizedPath("/company"), kind: "route" })}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.company}
              </Link>
              <Link
                href={getLocalizedPath('/privacy')}
                onClick={() => track("nav_click", { item: "privacy", label: t.footer.privacyPolicy, href: getLocalizedPath("/privacy"), kind: "route" })}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.privacyPolicy}
              </Link>
              <Link
                href={getLocalizedPath('/imprint')}
                onClick={() => track("nav_click", { item: "imprint", label: t.footer.imprint, href: getLocalizedPath("/imprint"), kind: "route" })}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.imprint}
              </Link>
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
