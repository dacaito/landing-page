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
    stockComparison: "Per-lot weight comparison: Vexgen AI vs. SAP",
    industryPages: {
      sections: {
        realityToday: "The Reality Today",
        transformation: "The Transformation",
        theProcess: "The Process",
        whoItsFor: "Who It's For",
        getStarted: "Get Started"
      },
      common: {
        inventoryAccuracy: "Inventory Accuracy",
        dioReduction: "DIO Reduction",
        writeOffReduction: "Write-off Reduction",
        workingCapitalFreed: "Working Capital Freed",
        lessManualChecks: "Less Manual Checks",
        whatChanges: "What changes with physical verification",
        continuousAlignment: "Continuous alignment between system and reality transforms operations.",
        captureTitle: "Capture every movement",
        captureDesc: "Cameras monitor inventory flows continuously.",
        validateTitle: "Validate automatically",
        validateDesc: "Vision AI identifies materials and quantities in real time.",
        syncTitle: "Sync your ERP instantly",
        syncDesc: "Discrepancies corrected automatically. No manual input.",
        closing: "No system replacement. No process redesign. Minimal friction.",
        isRelevant: "Is this relevant for your operations?"
      },
      chemical: {
        headline: "Chemical",
        subheadline: "Your ERP. The physical truth for chemical operations.",
        description: "Real-time inventory visibility across raw materials, WIP, and finished goods to reduce write-offs, avoid stockouts, and protect production flow.\n\nBuilt for environments with high working capital exposure, strict traceability, and shelf-life constraints.",
        problemHeadline: "When system inventory doesn't match physical reality",
        problemDescription: "Materials dominate cost, risk, and production continuity. Divergence has immediate impact.",
        issues: [
          "Working capital tied up in inflated buffers",
          "Write-offs from expired or mislocated materials",
          "Stockouts affecting customer commitments",
          "Teams spending time on manual checks and firefighting"
        ],
        problemClosing: "These issues persist because ERP data is disconnected from physical reality on the floor.",
        benefits: [
          "Trusted accuracy by material, lot, and location",
          "Lower working capital in inflated buffers",
          "Fewer downtimes from missing materials",
          "No more urgent purchasing or fire-drills"
        ],
        processHeadline: "A risk protection layer for chemical plants",
        processDescription: "Vexgen AI continuously aligns physical inventory with your ERP. All data is processed locally and never leaves your premises.",
        whoHeadline: "Built for chemical organizations where:",
        criteria: [
          "Inventory accuracy affects working capital and risk",
          "Shelf life, batch tracking, and traceability are critical",
          "Production plans depend on material availability",
          "Teams rely on manual checks or buffers to manage uncertainty"
        ],
        getStartedDescription: "A short conversation can assess whether physical inventory visibility could improve capital efficiency or reduce operational risk."
      },
      plastics: {
        headline: "Plastics Manufacturing",
        subheadline: "Your ERP. The physical truth for plastics manufacturing.",
        description: "Real-time inventory visibility across raw materials, WIP, and finished goods to keep injection molding, extrusion, and assembly lines running.\n\nBuilt for high-mix, high-volume environments where uptime and accuracy drive margins.",
        higherLineUptime: "Higher Line Uptime",
        problemHeadline: "When system inventory doesn't match physical reality",
        problemDescription: "Throughput depends on having the right parts, at the right machine, at the right time.",
        issues: [
          "Lines waiting for material that 'exists' in the system",
          "Excess buffers built to protect against uncertainty",
          "Wrong SKUs piling up while critical ones are missing",
          "Constant manual checks to keep production moving"
        ],
        problemClosing: "These issues persist because ERP data is disconnected from what's actually on the floor.",
        benefits: [
          "Trusted accuracy by SKU, piece, and location",
          "Higher uptime, fewer material stoppages",
          "Lower working capital in buffers",
          "No more fire-drills or manual reconciliation"
        ],
        processHeadline: "A verification layer for plastics plants",
        processDescription: "Vexgen AI continuously aligns physical inventory with your ERP. All data is processed locally and never leaves your premises.",
        whoHeadline: "Built for plastics manufacturers that:",
        criteria: [
          "Run injection molding, extrusion, or assembly with tight sequencing",
          "Manage high SKU counts across boxes, pallets, and WIP",
          "Experience stoppages despite 'available' inventory",
          "Rely on buffers and manual checks to protect throughput"
        ],
        getStartedDescription: "A short conversation can assess whether physical inventory visibility could improve uptime, accuracy, or capital efficiency."
      },
      foodBeverage: {
        headline: "Food & Beverage",
        subheadline: "Your ERP. The physical truth for food and beverage operations.",
        description: "Real-time inventory visibility across pallets of raw materials, WIP, and finished goods to reduce waste and protect service levels.\n\nBuilt for high-volume environments where freshness and availability define performance.",
        lessWaste: "Less Waste",
        otifImprovement: "OTIF Improvement",
        problemHeadline: "When pallet reality diverges from system data",
        problemDescription: "Freshness, availability, and service levels depend on knowing exactly what's where.",
        issues: [
          "Waste from expired or forgotten pallets",
          "Stockouts causing incomplete orders and OTIF misses",
          "Excess buffers to protect service levels",
          "Constant pallet and date checks to keep orders moving"
        ],
        problemClosing: "These issues persist because ERP data is disconnected from physical pallet reality.",
        benefits: [
          "Trusted accuracy by SKU, quantity, and expiration",
          "Lower waste through better FIFO/FEFO execution",
          "Higher service levels, fewer missing pallets",
          "Teams freed from constant manual pallet checks"
        ],
        processHeadline: "A freshness protection layer for F&B operations",
        processDescription: "Vexgen AI continuously aligns physical pallet reality with your ERP. All data is processed locally and never leaves your premises.",
        whoHeadline: "Built for food & beverage organizations that:",
        criteria: [
          "Manage large volumes of palletized goods and ingredients",
          "Depend on FIFO/FEFO to control waste and freshness",
          "Experience service issues despite 'available' inventory",
          "Rely on manual checks and buffers to protect OTIF"
        ],
        getStartedDescription: "A short conversation can assess whether physical inventory visibility could improve freshness, service levels, or capital efficiency."
      },
      cosmetics: {
        headline: "Cosmetics",
        subheadline: "Your ERP. The physical truth for cosmetics operations.",
        description: "Real-time inventory visibility across production, warehousing, and distribution to protect launches and reduce write-offs.\n\nBuilt for high-mix environments where SKU accuracy and timing drive revenue.",
        launchOnTimeRate: "Launch On-Time Rate",
        obsoleteReduction: "Obsolete Reduction",
        problemHeadline: "When system inventory doesn't match physical reality",
        problemDescription: "Availability, accuracy, and timing define success in cosmetics.",
        issues: [
          "Launches delayed by missing or misallocated SKUs",
          "Wrong variants in stock while high-demand SKUs are out",
          "Write-offs from obsolete packaging or canceled campaigns",
          "Manual checks needed to confirm launch readiness"
        ],
        problemClosing: "These issues persist because ERP lacks real-time alignment with physical stock.",
        benefits: [
          "Trusted accuracy by SKU, variant, and location",
          "On-time launches with fewer surprises",
          "Reduced write-offs from misallocated inventory",
          "Less capital tied up in protective buffers"
        ],
        processHeadline: "A launch protection layer for cosmetics operations",
        processDescription: "Vexgen AI continuously aligns physical inventory with your ERP. All data is processed locally and never leaves your premises.",
        whoHeadline: "Built for cosmetics organizations that:",
        criteria: [
          "Manage large SKU portfolios with packaging variants",
          "Run frequent launches and campaign-driven demand",
          "Experience availability issues despite 'in-stock' data",
          "Use manual checks to protect launches and service"
        ],
        getStartedDescription: "A short conversation can assess whether physical inventory visibility could improve launch readiness or capital efficiency."
      },
      pharma: {
        headline: "Pharmaceutical",
        subheadline: "Your ERP. The physical truth for pharmaceutical operations.",
        description: "Real-time inventory visibility across raw materials, WIP, and finished goods to improve batch confidence and reduce compliance risk.\n\nBuilt for regulated environments where accuracy and traceability are non-negotiable.",
        fasterBatchRelease: "Faster Batch Release",
        fewerStockouts: "Fewer Stockouts",
        auditConfidence: "Audit Confidence",
        problemHeadline: "When system inventory doesn't match physical reality",
        problemDescription: "Accuracy, status, and traceability directly affect compliance and patient supply.",
        issues: [
          "Batches delayed by missing or mislocated inventory",
          "Manual investigations to reconcile system vs. reality",
          "Conservative buffers to protect availability",
          "Audit risk from assumptions instead of verification"
        ],
        problemClosing: "These issues persist because ERP isn't continuously aligned with physical reality.",
        benefits: [
          "Trusted accuracy by batch, status, and location",
          "Faster, more reliable batch releases",
          "Lower compliance and audit risk",
          "Less reliance on conservative buffers"
        ],
        processHeadline: "A compliance layer for pharmaceutical operations",
        processDescription: "Vexgen AI continuously aligns physical inventory with your ERP. All data is processed locally and never leaves your premises.",
        whoHeadline: "Built for pharmaceutical organizations that:",
        criteria: [
          "Operate in GMP-regulated environments",
          "Manage batch-controlled inventory across locations",
          "Experience release delays despite 'available' inventory",
          "Rely on manual verification for compliance"
        ],
        getStartedDescription: "A short conversation can assess whether physical inventory verification could improve release confidence or compliance posture."
      }
    }
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
    stockComparison: "Gewichtsvergleich pro Los: Vexgen AI vs. SAP",
    industryPages: {
      sections: {
        realityToday: "Die Realität heute",
        transformation: "Die Transformation",
        theProcess: "Der Prozess",
        whoItsFor: "Für wen",
        getStarted: "Jetzt starten"
      },
      common: {
        inventoryAccuracy: "Bestandsgenauigkeit",
        dioReduction: "DIO-Reduktion",
        writeOffReduction: "Weniger Abschreibungen",
        workingCapitalFreed: "Freigesetztes Working Capital",
        lessManualChecks: "Weniger manuelle Prüfungen",
        whatChanges: "Was sich mit physischer Verifizierung ändert",
        continuousAlignment: "Kontinuierlicher Abgleich zwischen System und Realität transformiert den Betrieb.",
        captureTitle: "Jede Bewegung erfassen",
        captureDesc: "Kameras überwachen Bestandsbewegungen kontinuierlich.",
        validateTitle: "Automatisch validieren",
        validateDesc: "Vision-KI identifiziert Materialien und Mengen in Echtzeit.",
        syncTitle: "ERP sofort synchronisieren",
        syncDesc: "Abweichungen werden automatisch korrigiert. Keine manuelle Eingabe.",
        closing: "Kein Systemwechsel. Keine Prozessumstellung. Minimale Reibung.",
        isRelevant: "Ist das relevant für Ihren Betrieb?"
      },
      chemical: {
        headline: "Chemie",
        subheadline: "Ihr ERP. Die physische Wahrheit für Chemiebetriebe.",
        description: "Echtzeit-Bestandstransparenz über Rohstoffe, WIP und Fertigwaren zur Reduktion von Abschreibungen, Vermeidung von Fehlbeständen und zum Schutz des Produktionsflusses.\n\nEntwickelt für Umgebungen mit hoher Working-Capital-Bindung, strenger Rückverfolgbarkeit und Mindesthaltbarkeitsanforderungen.",
        problemHeadline: "Wenn Systembestand nicht mit der physischen Realität übereinstimmt",
        problemDescription: "Materialien dominieren Kosten, Risiko und Produktionskontinuität. Abweichungen haben sofortige Auswirkungen.",
        issues: [
          "Working Capital gebunden in überhöhten Sicherheitsbeständen",
          "Abschreibungen durch abgelaufene oder falsch platzierte Materialien",
          "Fehlbestände beeinträchtigen Kundenzusagen",
          "Teams verbringen Zeit mit manuellen Prüfungen und Krisenmanagement"
        ],
        problemClosing: "Diese Probleme bestehen fort, weil ERP-Daten von der physischen Realität in der Produktion entkoppelt sind.",
        benefits: [
          "Verlässliche Genauigkeit nach Material, Charge und Lagerort",
          "Weniger Working Capital in überhöhten Puffern",
          "Weniger Stillstände durch fehlende Materialien",
          "Keine Notbestellungen oder Krisenmanagement mehr"
        ],
        processHeadline: "Eine Risikoschutzebene für Chemieanlagen",
        processDescription: "Vexgen AI gleicht physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
        whoHeadline: "Entwickelt für Chemieunternehmen, bei denen:",
        criteria: [
          "Bestandsgenauigkeit Working Capital und Risiko beeinflusst",
          "Mindesthaltbarkeit, Chargenverfolgung und Rückverfolgbarkeit kritisch sind",
          "Produktionspläne von Materialverfügbarkeit abhängen",
          "Teams auf manuelle Prüfungen oder Puffer zur Unsicherheitsbewältigung angewiesen sind"
        ],
        getStartedDescription: "Ein kurzes Gespräch kann klären, ob physische Bestandstransparenz die Kapitaleffizienz verbessern oder operatives Risiko reduzieren könnte."
      },
      plastics: {
        headline: "Kunststofffertigung",
        subheadline: "Ihr ERP. Die physische Wahrheit für die Kunststofffertigung.",
        description: "Echtzeit-Bestandstransparenz über Rohstoffe, WIP und Fertigwaren, um Spritzguss-, Extrusions- und Montagelinien am Laufen zu halten.\n\nEntwickelt für High-Mix-, High-Volume-Umgebungen, in denen Verfügbarkeit und Genauigkeit die Margen bestimmen.",
        higherLineUptime: "Höhere Linienverfügbarkeit",
        problemHeadline: "Wenn Systembestand nicht mit der physischen Realität übereinstimmt",
        problemDescription: "Durchsatz hängt davon ab, die richtigen Teile zur richtigen Zeit an der richtigen Maschine zu haben.",
        issues: [
          "Linien warten auf Material, das im System 'vorhanden' ist",
          "Überhöhte Puffer zum Schutz gegen Unsicherheit",
          "Falsche Artikel häufen sich an, während kritische fehlen",
          "Ständige manuelle Prüfungen, um die Produktion am Laufen zu halten"
        ],
        problemClosing: "Diese Probleme bestehen fort, weil ERP-Daten von dem entkoppelt sind, was tatsächlich in der Produktion ist.",
        benefits: [
          "Verlässliche Genauigkeit nach Artikel, Stück und Lagerort",
          "Höhere Verfügbarkeit, weniger Materialstopps",
          "Weniger Working Capital in Puffern",
          "Keine Notfallaktionen oder manuellen Abgleiche mehr"
        ],
        processHeadline: "Eine Verifizierungsebene für Kunststoffwerke",
        processDescription: "Vexgen AI gleicht physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
        whoHeadline: "Entwickelt für Kunststoffhersteller, die:",
        criteria: [
          "Spritzguss, Extrusion oder Montage mit enger Taktung betreiben",
          "Hohe Artikelzahlen über Kartons, Paletten und WIP verwalten",
          "Stillstände trotz 'verfügbarem' Bestand erleben",
          "Auf Puffer und manuelle Prüfungen zum Schutz des Durchsatzes angewiesen sind"
        ],
        getStartedDescription: "Ein kurzes Gespräch kann klären, ob physische Bestandstransparenz Verfügbarkeit, Genauigkeit oder Kapitaleffizienz verbessern könnte."
      },
      foodBeverage: {
        headline: "Lebensmittel & Getränke",
        subheadline: "Ihr ERP. Die physische Wahrheit für Lebensmittel- und Getränkebetriebe.",
        description: "Echtzeit-Bestandstransparenz über Paletten mit Rohstoffen, WIP und Fertigwaren zur Reduktion von Ausschuss und zum Schutz der Servicelevels.\n\nEntwickelt für Hochvolumen-Umgebungen, in denen Frische und Verfügbarkeit die Leistung definieren.",
        lessWaste: "Weniger Ausschuss",
        otifImprovement: "OTIF-Verbesserung",
        problemHeadline: "Wenn Palettenrealität von Systemdaten abweicht",
        problemDescription: "Frische, Verfügbarkeit und Servicelevels hängen davon ab, genau zu wissen, was wo ist.",
        issues: [
          "Ausschuss durch abgelaufene oder vergessene Paletten",
          "Fehlbestände verursachen unvollständige Aufträge und OTIF-Verfehlung",
          "Überhöhte Puffer zum Schutz der Servicelevels",
          "Ständige Paletten- und Datumsprüfungen, um Aufträge abzuwickeln"
        ],
        problemClosing: "Diese Probleme bestehen fort, weil ERP-Daten von der physischen Palettenrealität entkoppelt sind.",
        benefits: [
          "Verlässliche Genauigkeit nach Artikel, Menge und Verfallsdatum",
          "Weniger Ausschuss durch bessere FIFO/FEFO-Ausführung",
          "Höhere Servicelevels, weniger fehlende Paletten",
          "Teams befreit von ständigen manuellen Palettenprüfungen"
        ],
        processHeadline: "Eine Frischeschutzebene für F&B-Betriebe",
        processDescription: "Vexgen AI gleicht physische Palettenrealität kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
        whoHeadline: "Entwickelt für Lebensmittel- und Getränkeunternehmen, die:",
        criteria: [
          "Grosse Mengen palettierter Waren und Zutaten verwalten",
          "Auf FIFO/FEFO zur Kontrolle von Ausschuss und Frische angewiesen sind",
          "Serviceprobleme trotz 'verfügbarem' Bestand erleben",
          "Auf manuelle Prüfungen und Puffer zum Schutz von OTIF angewiesen sind"
        ],
        getStartedDescription: "Ein kurzes Gespräch kann klären, ob physische Bestandstransparenz Frische, Servicelevels oder Kapitaleffizienz verbessern könnte."
      },
      cosmetics: {
        headline: "Kosmetik",
        subheadline: "Ihr ERP. Die physische Wahrheit für Kosmetikbetriebe.",
        description: "Echtzeit-Bestandstransparenz über Produktion, Lagerung und Distribution zum Schutz von Produktlaunches und zur Reduktion von Abschreibungen.\n\nEntwickelt für High-Mix-Umgebungen, in denen Artikelgenauigkeit und Timing den Umsatz bestimmen.",
        launchOnTimeRate: "Pünktliche Launch-Rate",
        obsoleteReduction: "Reduktion Obsoleter Bestände",
        problemHeadline: "Wenn Systembestand nicht mit der physischen Realität übereinstimmt",
        problemDescription: "Verfügbarkeit, Genauigkeit und Timing definieren Erfolg in der Kosmetik.",
        issues: [
          "Launches verzögert durch fehlende oder falsch zugeordnete Artikel",
          "Falsche Varianten auf Lager, während nachgefragte Artikel fehlen",
          "Abschreibungen durch veraltete Verpackungen oder abgesagte Kampagnen",
          "Manuelle Prüfungen zur Bestätigung der Launch-Bereitschaft erforderlich"
        ],
        problemClosing: "Diese Probleme bestehen fort, weil dem ERP der Echtzeit-Abgleich mit physischem Bestand fehlt.",
        benefits: [
          "Verlässliche Genauigkeit nach Artikel, Variante und Lagerort",
          "Pünktliche Launches mit weniger Überraschungen",
          "Weniger Abschreibungen durch falsch zugeordneten Bestand",
          "Weniger Kapital in Sicherheitspuffern gebunden"
        ],
        processHeadline: "Eine Launch-Schutzebene für Kosmetikbetriebe",
        processDescription: "Vexgen AI gleicht physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
        whoHeadline: "Entwickelt für Kosmetikunternehmen, die:",
        criteria: [
          "Grosse Artikelportfolios mit Verpackungsvarianten verwalten",
          "Häufige Launches und kampagnengetriebene Nachfrage betreiben",
          "Verfügbarkeitsprobleme trotz 'auf Lager'-Daten erleben",
          "Manuelle Prüfungen zum Schutz von Launches und Service nutzen"
        ],
        getStartedDescription: "Ein kurzes Gespräch kann klären, ob physische Bestandstransparenz Launch-Bereitschaft oder Kapitaleffizienz verbessern könnte."
      },
      pharma: {
        headline: "Pharma",
        subheadline: "Ihr ERP. Die physische Wahrheit für Pharmabetriebe.",
        description: "Echtzeit-Bestandstransparenz über Rohstoffe, WIP und Fertigwaren zur Verbesserung der Chargenfreigabe-Sicherheit und Reduktion von Compliance-Risiken.\n\nEntwickelt für regulierte Umgebungen, in denen Genauigkeit und Rückverfolgbarkeit nicht verhandelbar sind.",
        fasterBatchRelease: "Schnellere Chargenfreigabe",
        fewerStockouts: "Weniger Fehlbestände",
        auditConfidence: "Audit-Sicherheit",
        problemHeadline: "Wenn Systembestand nicht mit der physischen Realität übereinstimmt",
        problemDescription: "Genauigkeit, Status und Rückverfolgbarkeit beeinflussen direkt Compliance und Patientenversorgung.",
        issues: [
          "Chargen verzögert durch fehlenden oder falsch platzierten Bestand",
          "Manuelle Untersuchungen zur Abstimmung von System und Realität",
          "Konservative Puffer zum Schutz der Verfügbarkeit",
          "Audit-Risiko durch Annahmen statt Verifizierung"
        ],
        problemClosing: "Diese Probleme bestehen fort, weil das ERP nicht kontinuierlich mit der physischen Realität abgeglichen wird.",
        benefits: [
          "Verlässliche Genauigkeit nach Charge, Status und Lagerort",
          "Schnellere, zuverlässigere Chargenfreigaben",
          "Geringeres Compliance- und Audit-Risiko",
          "Weniger Abhängigkeit von konservativen Puffern"
        ],
        processHeadline: "Eine Compliance-Ebene für Pharmabetriebe",
        processDescription: "Vexgen AI gleicht physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
        whoHeadline: "Entwickelt für Pharmaunternehmen, die:",
        criteria: [
          "In GMP-regulierten Umgebungen arbeiten",
          "Chargengesteuerten Bestand über Standorte verwalten",
          "Freigabeverzögerungen trotz 'verfügbarem' Bestand erleben",
          "Auf manuelle Verifizierung für Compliance angewiesen sind"
        ],
        getStartedDescription: "Ein kurzes Gespräch kann klären, ob physische Bestandsverifizierung die Freigabesicherheit oder Compliance-Position verbessern könnte."
      }
    }
  }
} as const;

export type Translations = typeof translations.en;
