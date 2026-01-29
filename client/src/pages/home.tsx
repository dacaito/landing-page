import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, Camera, RefreshCw, Database, Factory, Warehouse, Users, Building2, ChevronRight, Check, Loader2, Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { translations, Language } from "@/lib/translations";
import dashboardImage from "@assets/dash-board-kpi.png";
import stockImage from "@assets/image_1_1767949813510.png";
import demoVideo from "@assets/Landing-Page-Reel-876x512.mp4";
import vixgenLogo from "@assets/Vexgen-owl.png";

export default function Home() {
  const { toast } = useToast();
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vexgen-lang');
      if (saved === 'de' || saved === 'en') return saved;
    }
    return 'en';
  });
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('vexgen-lang', lang);
  }, [lang]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojjqzqj";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setIsSubmitting(true);
    try {
      const fd = new FormData();
      // Honeypot: bots often fill this; humans won't see it.
      fd.append("_gotcha", "");
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("company", formData.company);
      fd.append("message", formData.message);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      toast({
        title: t.contact.toast.successTitle,
        description: t.contact.toast.successDescription,
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      toast({
        title: t.contact.toast.errorTitle,
        description: t.contact.toast.errorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'de' : 'en');
  };

  const howItWorksIcons = [Camera, RefreshCw, Database];
  const whoItsForIcons = [Factory, Warehouse, Users, Building2];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-primary" data-testid="text-logo">Vexgen AI</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("results")} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-results"
            >
              {t.nav.results}
            </button>
            <button 
              onClick={() => scrollToSection("solution")} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-solution"
            >
              {t.nav.solution}
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-how-it-works"
            >
              {t.nav.howItWorks}
            </button>
            <button 
              onClick={() => scrollToSection("company")} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-company"
            >
              {t.nav.company}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              data-testid="button-language-toggle"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{lang}</span>
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="rounded-full px-4 sm:px-6 text-sm"
              data-testid="button-request-demo-nav"
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
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-16">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 text-lg text-muted-foreground"
              data-testid="button-language-toggle-mobile"
            >
              <Globe className="w-5 h-5" />
              <span className="uppercase font-medium">{lang === 'en' ? 'English' : 'Deutsch'}</span>
            </button>
            <button 
              onClick={() => scrollToSection("results")} 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-results-mobile"
            >
              {t.nav.results}
            </button>
            <button 
              onClick={() => scrollToSection("solution")} 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-solution-mobile"
            >
              {t.nav.solution}
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")} 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-how-it-works-mobile"
            >
              {t.nav.howItWorks}
            </button>
            <button 
              onClick={() => scrollToSection("company")} 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-company-mobile"
            >
              {t.nav.company}
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="rounded-full px-8 py-6 text-lg mt-4"
              data-testid="button-request-demo-mobile"
            >
              {t.cta.requestDemo}
            </Button>
          </div>
        </div>
      )}

      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 whitespace-pre-line text-primary" data-testid="text-hero-headline">
            {t.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-3 sm:mb-4 leading-relaxed px-2">
            {t.hero.subheadline}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            {t.hero.tagline}
          </p>
          
          <div className="relative max-w-4xl mx-auto mb-8 sm:mb-12 group">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 bg-card shadow-2xl">
              <video 
                src={demoVideo}
                className="w-full aspect-video object-cover"
                playsInline
                autoPlay
                loop
                muted
                data-testid="video-demo"
              />
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={() => scrollToSection("contact")} 
            className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
            data-testid="button-request-demo-hero"
          >
            {t.cta.requestDemo}
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => scrollToSection("results")}
              className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
              aria-label="Scroll down"
              data-testid="button-scroll-down"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <section id="results" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 text-center" data-testid="text-results-label">{t.results.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-4 sm:mb-6" data-testid="text-results-headline">
            {t.results.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
            {t.results.description}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
            <Card className="p-6 sm:p-8 md:p-10 text-center border-border/50">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 sm:mb-3 whitespace-nowrap" data-testid="text-metric-accuracy">{t.results.metrics.accuracy.value}</p>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{t.results.metrics.accuracy.label}</p>
            </Card>
            <Card className="p-6 sm:p-8 md:p-10 text-center border-border/50">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 sm:mb-3 whitespace-nowrap" data-testid="text-metric-writeoff">{t.results.metrics.writeoff.value}</p>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{t.results.metrics.writeoff.label}</p>
            </Card>
            <Card className="p-6 sm:p-8 md:p-10 text-center border-border/50">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 sm:mb-3 whitespace-nowrap" data-testid="text-metric-time">{t.results.metrics.time.value}</p>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{t.results.metrics.time.label}</p>
            </Card>
            <Card className="p-6 sm:p-8 md:p-10 text-center border-border/50">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 sm:mb-3 whitespace-nowrap" data-testid="text-metric-roi">{t.results.metrics.roi.value}</p>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{t.results.metrics.roi.label}</p>
            </Card>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-50" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              <img 
                src={dashboardImage} 
                alt="Vexgen AI KPI Dashboard showing warehouse and stock metrics"
                className="w-full"
                data-testid="img-dashboard"
              />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-3 sm:mt-4">
              {t.results.dashboardCaption}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4" data-testid="text-problem-label">{t.problem.label}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight" data-testid="text-problem-headline">
            {t.problem.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-2">
            {t.problem.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left mb-8 sm:mb-12">
            {t.problem.issues.map((item, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-destructive/5 border border-destructive/20">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic px-2">
            {t.problem.closing}
          </p>
        </div>
      </section>

      <section id="solution" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4" data-testid="text-outcome-label">{t.outcome.label}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8" data-testid="text-outcome-headline">
                {t.outcome.headline}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                {t.outcome.description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {t.outcome.benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                    </div>
                    <span className="text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mt-6 sm:mt-8 italic border-l-2 border-primary pl-3 sm:pl-4">
                {t.outcome.closing}
              </p>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-50" />
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <img 
                  src={stockImage} 
                  alt="Vexgen AI showing stock comparison between measured weight and SAP records"
                  className="w-full"
                  data-testid="img-stock-comparison"
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground text-center mt-3 sm:mt-4">
                {t.stockComparison}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 text-center" data-testid="text-how-label">{t.howItWorks.label}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-center mb-4 sm:mb-6 leading-tight" data-testid="text-how-headline">
            {t.howItWorks.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
            {t.howItWorks.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t.howItWorks.steps.map((item, i) => {
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

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 sm:mt-16">
            {t.howItWorks.tags.map((tag, i) => (
              <div key={i} className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border/50 text-sm sm:text-base text-muted-foreground">{tag}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4" data-testid="text-who-label">{t.whoItsFor.label}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight" data-testid="text-who-headline">
            {t.whoItsFor.headline}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {t.whoItsFor.industries.map((item, i) => {
              const Icon = whoItsForIcons[i];
              return (
                <div key={i} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border/50 bg-background">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-base sm:text-lg font-medium text-left">{item.label}</span>
                </div>
              );
            })}
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-8 sm:mt-12 italic px-2">
            {t.whoItsFor.closing}
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4" data-testid="text-cta-label">{t.contact.label}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6" data-testid="text-cta-headline">
              {t.contact.headline}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {t.contact.description}
            </p>
          </div>

          <Card className="p-6 sm:p-8 md:p-12 border-border/50 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2">{t.contact.form.name} *</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.form.namePlaceholder}
                  required
                  className="h-11 sm:h-12"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2">{t.contact.form.email} *</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                  className="h-11 sm:h-12"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1.5 sm:mb-2">{t.contact.form.company} *</label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={t.contact.form.companyPlaceholder}
                  required
                  className="h-11 sm:h-12"
                  data-testid="input-company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2">{t.contact.form.message}</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={4}
                  data-testid="textarea-message"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full py-5 sm:py-6 text-base sm:text-lg"
                disabled={isSubmitting}
                data-testid="button-submit-demo"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t.contact.form.submitting}
                  </>
                ) : (
                  t.contact.form.submit
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section id="company" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-card border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4" data-testid="text-company-label">{t.company.label}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 sm:mb-8" data-testid="text-company-headline">
            {t.company.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            {t.company.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <Card className="p-5 sm:p-6 md:p-8 text-left border-border/50">
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">{t.company.team.ceo.name}</h3>
              <p className="text-primary text-xs sm:text-sm mb-2 sm:mb-3">{t.company.team.ceo.role}</p>
              <p className="text-sm sm:text-base text-muted-foreground">{t.company.team.ceo.bio}</p>
            </Card>
            <Card className="p-5 sm:p-6 md:p-8 text-left border-border/50">
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">{t.company.team.cto.name}</h3>
              <p className="text-primary text-xs sm:text-sm mb-2 sm:mb-3">{t.company.team.cto.role}</p>
              <p className="text-sm sm:text-base text-muted-foreground">{t.company.team.cto.bio}</p>
            </Card>
            <Card className="p-5 sm:p-6 md:p-8 text-left border-border/50">
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">{t.company.team.advisor.name}</h3>
              <p className="text-primary text-xs sm:text-sm mb-2 sm:mb-3">{t.company.team.advisor.role}</p>
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

      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border/50 pb-20 sm:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <img src={vixgenLogo} alt="Vexgen AI Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
            <span className="font-bold text-lg sm:text-xl tracking-tight">Vexgen AI</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            contact@vexgen.ai
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-lg border-t border-border/50 sm:hidden z-40">
        <Button 
          onClick={() => scrollToSection("contact")} 
          className="w-full rounded-full py-3 text-base"
          data-testid="button-sticky-cta"
        >
          {t.cta.requestDemo}
        </Button>
      </div>
    </div>
  );
}
