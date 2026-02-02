export type Language = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      results: "Results",
      solution: "Solution",
      industries: "Industries",
      howItWorks: "How It Works",
      company: "Company",
      requestDemo: "Request Demo",
      demo: "Demo"
    },
    industries: {
      plastics: "Plastics",
      foodBeverage: "Food & Beverage",
      cosmetics: "Cosmetics",
      pharma: "Pharma",
      chemical: "Chemical"
    },
    hero: {
      headline: "Your ERP.\nThe Truth.",
      subheadline: "Real-time visibility that bridges the gap between what your ERP says and what is actually on your floor.",
      tagline: "No manual counts. No tags. No disruption."
    },
    results: {
      label: "Proven Results",
      headline: "Reality delivers returns",
      description: "Deployed in real manufacturing environments. Measurable ROI from day one.",
      metrics: {
        accuracy: { value: ">99%", label: "Inventory Accuracy" },
        writeoff: { value: "6-Figure", label: "Write-off Reduction" },
        time: { value: "<1 Hour", label: "ERP Reconciliation" },
        roi: { value: "<90 Days", label: "Time to ROI" }
      },
      dashboardCaption: "Live dashboard from active deployment"
    },
    problem: {
      label: "The Problem",
      headline: "Phantom inventory stays hidden until it costs you millions.",
      description: "Manufacturing and warehouse operations run on ERP data that rarely reflects the physical reality of the shop floor.",
      issues: [
        "Emergency purchases and stockouts",
        "Excess inventory and costly write-offs",
        "Hours wasted on manual recounts",
        "Critical decisions based on unreliable data"
      ],
      closing: "Your ERP is only as accurate as the data feeding it. Today, that data is broken."
    },
    outcome: {
      label: "The Outcome",
      headline: "When ERP reflects reality, everything changes",
      description: "Continuous physical verification transforms operations from reactive to predictable.",
      benefits: [
        "Inventory accuracy you can trust, without manual counts",
        "Stockouts and panic purchases eliminated at the source",
        "Capital freed from safety buffers and excess stock",
        "Audits completed in hours, not weeks",
        "ERP data your teams can actually rely on"
      ],
      closing: "This is not periodic checking. This is continuous operational truth."
    },
    howItWorks: {
      label: "How It Works",
      headline: "Continuous reconciliation. Zero manual effort.",
      description: "Vexgen AI securely and automatically connects physical movements to digital records. All your data is processed locally and never leaves your premises. Operator identity is automatically blurred.",
      steps: [
        {
          step: "01",
          title: "Capture every movement",
          description: "Cameras continuously monitor inventory flows. Nothing goes untracked."
        },
        {
          step: "02",
          title: "Validate automatically",
          description: "Vision technology identifies materials, movements and quantities in real time."
        },
        {
          step: "03",
          title: "Sync your ERP instantly",
          description: "Discrepancies detected and corrected automatically. No operator input needed."
        }
      ],
      tags: ["No scanners", "No tags", "No manual processes"]
    },
    whoItsFor: {
      label: "Who It Is For",
      headline: "Built for operations that move physical inventory",
      industries: [
        { label: "Manufacturing plants" },
        { label: "Warehouses and logistics centers" },
        { label: "Operations and supply chain teams" },
        { label: "Industrial enterprises on SAP or ERP" }
      ],
      closing: "If inventory accuracy impacts your bottom line, Vexgen AI was built for you."
    },
    contact: {
      label: "Get Started",
      headline: "See Vexgen AI in action",
      description: "The fastest path to understanding impact? See it applied to your operation.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        company: "Company",
        companyPlaceholder: "Company name",
        message: "Message (optional)",
        messagePlaceholder: "Tell us about your inventory challenges...",
        submit: "Request a Demo",
        submitting: "Submitting..."
      },
      toast: {
        successTitle: "Request submitted",
        successDescription: "We will be in touch shortly to schedule your demo.",
        errorTitle: "Something went wrong",
        errorDescription: "Please try again later."
      }
    },
    company: {
      label: "About Vexgen AI",
      headline: "Built for real industrial operations",
      description: "Vexgen AI was founded to solve a persistent, costly problem: the gap between ERP records and physical reality. We restore trust in operational data by making inventory movements continuously observable and verifiable.",
      team: {
        ceo: {
          name: "Sebastian Freijo",
          role: "Co-Founder and CEO",
          bio: "Background in industrial operations, quality management, and data-driven process improvement in manufacturing environments."
        },
        cto: {
          name: "Andrés Cao",
          role: "Co-Founder and CTO",
          bio: "Expert in engineering and computer vision, focused on building reliable, production-grade systems for industrial use."
        },
        advisor: {
          name: "Stefan Kalmund",
          role: "Senior Advisor",
          bio: "Extensive executive experience in industrial manufacturing and operations leadership across global enterprises."
        }
      },
      location: "Baumackerstrasse 42, 8050, Zurich, Switzerland",
      focus: "Manufacturing and Warehouse Focus"
    },
    footer: {
      copyright: "Vexgen AI. All rights reserved."
    },
    cta: {
      requestDemo: "Request a Demo"
    },
    stockComparison: "Per-lot weight comparison: Vexgen AI vs. SAP"
  },
  de: {
    nav: {
      results: "Ergebnisse",
      solution: "Lösung",
      industries: "Branchen",
      howItWorks: "So funktioniert es",
      company: "Unternehmen",
      requestDemo: "Demo anfordern",
      demo: "Demo"
    },
    industries: {
      plastics: "Kunststoffe",
      foodBeverage: "Lebensmittel & Getränke",
      cosmetics: "Kosmetik",
      pharma: "Pharma",
      chemical: "Chemie"
    },
    hero: {
      headline: "Ihr ERP.\nDie Wahrheit.",
      subheadline: "Echtzeit-Transparenz, die die Lücke zwischen ERP-Daten und der physischen Realität in Ihrem Lager schliesst.",
      tagline: "Keine manuellen Zählungen. Keine Tags. Keine Unterbrechung."
    },
    results: {
      label: "Bewiesene Ergebnisse",
      headline: "Realität zahlt sich aus",
      description: "Im Einsatz in echten Produktionsumgebungen. Messbarer ROI ab dem ersten Tag.",
      metrics: {
        accuracy: { value: ">99%", label: "Bestandsgenauigkeit" },
        writeoff: { value: "6‑stellig", label: "Weniger Abschreibungen" },
        time: { value: "<1\u00A0Stunde", label: "ERP-Abgleich" },
        roi: { value: "<90\u00A0Tage", label: "Zeit bis ROI" }
      },
      dashboardCaption: "Live-Dashboard aus aktivem Einsatz"
    },
    problem: {
      label: "Das Problem",
      headline: "Phantombestand bleibt unsichtbar, bis er Millionen kostet.",
      description: "Fertigung und Lager arbeiten mit ERP-Daten, die selten die physische Realität in der Produktion widerspiegeln.",
      issues: [
        "Notbestellungen und Lieferengpässe",
        "Überbestände und teure Abschreibungen",
        "Stunden verschwendet mit manuellen Nachzählungen",
        "Kritische Entscheidungen auf Basis unzuverlässiger Daten"
      ],
      closing: "Ihr ERP ist nur so genau wie die Daten, die es speisen. Heute sind diese Daten fehlerhaft."
    },
    outcome: {
      label: "Das Ergebnis",
      headline: "Wenn das ERP die Realität abbildet, ändert sich alles",
      description: "Kontinuierliche physische Verifizierung verwandelt reaktive Abläufe in planbare Prozesse.",
      benefits: [
        "Bestandsgenauigkeit, der Sie vertrauen können, ohne manuelle Zählungen",
        "Lieferengpässe und Panikbestellungen an der Quelle eliminiert",
        "Kapital befreit von Sicherheitspuffern und Überbeständen",
        "Audits in Stunden abgeschlossen, nicht in Wochen",
        "ERP-Daten, auf die sich Ihre Teams wirklich verlassen können"
      ],
      closing: "Das ist keine periodische Prüfung. Das ist kontinuierliche operative Wahrheit."
    },
    howItWorks: {
      label: "So funktioniert es",
      headline: "Kontinuierlicher Abgleich. Null manueller Aufwand.",
      description: "Vexgen AI verbindet physische Bewegungen sicher und automatisch mit digitalen Aufzeichnungen. Alle Ihre Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände. Die Identität der Mitarbeiter wird automatisch unkenntlich gemacht.",
      steps: [
        {
          step: "01",
          title: "Jede Bewegung erfassen",
          description: "Kameras überwachen kontinuierlich Bestandsbewegungen. Nichts bleibt unerfasst."
        },
        {
          step: "02",
          title: "Automatisch validieren",
          description: "Die Vision-Technologie identifiziert Materialien, Bewegungen und Mengen in Echtzeit."
        },
        {
          step: "03",
          title: "ERP sofort synchronisieren",
          description: "Abweichungen werden automatisch erkannt und korrigiert. Keine Bediener-Eingabe nötig."
        }
      ],
      tags: ["Keine Scanner", "Keine Tags", "Keine manuellen Prozesse"]
    },
    whoItsFor: {
      label: "Für wen",
      headline: "Entwickelt für Betriebe, die physischen Bestand bewegen",
      industries: [
        { label: "Fertigungsanlagen" },
        { label: "Lager und Logistikzentren" },
        { label: "Operations- und Supply-Chain-Teams" },
        { label: "Industrieunternehmen mit SAP oder ERP" }
      ],
      closing: "Wenn Bestandsgenauigkeit Ihr Ergebnis beeinflusst, wurde Vexgen AI für Sie entwickelt."
    },
    contact: {
      label: "Jetzt starten",
      headline: "Vexgen AI in Aktion erleben",
      description: "Der schnellste Weg, die Wirkung zu verstehen? Sehen Sie es in Ihrem Betrieb angewendet.",
      form: {
        name: "Name",
        namePlaceholder: "Ihr Name",
        email: "E-Mail",
        emailPlaceholder: "sie@unternehmen.com",
        company: "Unternehmen",
        companyPlaceholder: "Firmenname",
        message: "Nachricht (optional)",
        messagePlaceholder: "Erzählen Sie uns von Ihren Bestandsherausforderungen...",
        submit: "Demo anfordern",
        submitting: "Wird gesendet..."
      },
      toast: {
        successTitle: "Anfrage gesendet",
        successDescription: "Wir melden uns in Kürze, um Ihre Demo zu planen.",
        errorTitle: "Etwas ist schiefgelaufen",
        errorDescription: "Bitte versuchen Sie es später erneut."
      }
    },
    company: {
      label: "Über Vexgen AI",
      headline: "Entwickelt für echte industrielle Abläufe",
      description: "Vexgen AI wurde gegründet, um ein hartnäckiges, kostspieliges Problem zu lösen: die Lücke zwischen ERP-Daten und physischer Realität. Wir stellen das Vertrauen in Betriebsdaten wieder her, indem wir Bestandsbewegungen kontinuierlich beobachtbar und verifizierbar machen.",
      team: {
        ceo: {
          name: "Sebastian Freijo",
          role: "Mitgründer und CEO",
          bio: "Erfahrung in industriellen Abläufen, Qualitätsmanagement und datengetriebener Prozessoptimierung in Fertigungsumgebungen."
        },
        cto: {
          name: "Andrés Cao",
          role: "Mitgründer und CTO",
          bio: "Experte für Engineering und Computer Vision, fokussiert auf zuverlässige, produktionsreife Systeme für industrielle Anwendungen."
        },
        advisor: {
          name: "Stefan Kalmund",
          role: "Senior Advisor",
          bio: "Umfassende Führungserfahrung in der industriellen Fertigung und im operativen Management globaler Unternehmen."
        }
      },
      location: "Baumackerstrasse 42, 8050, Zürich, Schweiz",
      focus: "Fokus: Fertigung und Lager"
    },
    footer: {
      copyright: "Vexgen AI. Alle Rechte vorbehalten."
    },
    cta: {
      requestDemo: "Demo anfordern"
    },
    stockComparison: "Gewichtsvergleich pro Los: Vexgen AI vs. SAP"
  }
} as const;

export type Translations = typeof translations.en;
