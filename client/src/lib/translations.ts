export type Language = 'en' | 'de' | 'es';

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
      chemical: "Chemical",
      logistics: "Logistics & Fulfillment"
    },
    hero: {
      headline: "Automate dispatch checks.\nSave time.",
      subheadline: "",
      tagline: "Catch errors before trucks leave and\nkeep a clear record of every shipment.\n\nNo manual checks. Same process. Less time."
    },
    results: {
      label: "Proven Results",
      headline: "Reality delivers returns",
      description: "Deployed in real operational environments. Measurable ROI from day one.",
      metrics: {
        accuracy: { value: ">99%", label: "Shipment Accuracy" },
        writeoff: { value: ">50%", label: "Claim Reduction" },
        time: { value: ">1,000", label: "Hours Labor Saved" },
        roi: { value: "<30 Days", label: "Time to ROI" }
      },
      dashboardCaption: "Live dashboard from active deployment"
    },
    problem: {
      label: "The Problem",
      headline: "Manual dispatch checks slow everything down",
      description: "In many plants handling tubes, pipes, and profiles, dispatch still relies on manual counting, visual checks, or trust. This slows down shipments and adds extra work.\n\nAs a result, teams deal with:",
      issues: [
        "Manual counting under time pressure",
        "Rechecks that delay trucks from leaving",
        "Loading errors that turn into claims",
        "Rework and investigations after dispatch"
      ],
      closing: "Time lost at dispatch shows up later — in delays, extra work, and customer issues."
    },
    outcome: {
      label: "The Outcome",
      headline: "What changes when dispatch checks are automated",
      description: "Shipments are verified in real time, removing manual work at dispatch and freeing up time for more important tasks.\n\nWith Vexgen AI, teams optimize dispatch operations:",
      benefits: [
        "Less time spent on repetitive verification work",
        "Loading errors are caught before they become customer claims",
        "Dispatch runs without manual checks",
        "Clear record of what shipped — without manual effort"
      ],
      closing: "Spend less time checking. More time running operations."
    },
    howItWorks: {
      label: "How It Works",
      headline: "Automated verification\nat the point of dispatch",
      description: "Vexgen AI verifies every outbound shipment before it leaves the site.",
      steps: [
        {
          step: "01",
          title: "Capture the loaded truck",
          description: "Cameras monitor the truck at the dispatch point."
        },
        {
          step: "02",
          title: "Detect and count what is loaded",
          description: "Vision-based models detect and count loaded materials directly from the truck."
        },
        {
          step: "03",
          title: "Compare against the shipment order",
          description: "The system matches detected quantities with the expected shipment from the ERP."
        },
        {
          step: "04",
          title: "Approve or block dispatch",
          description: "If everything matches, the truck is cleared. If not, the shipment is flagged and held before leaving the plant."
        }
      ],
      tags: ["No manual checks", "Same process", "Less time"]
    },
    whoItsFor: {
      label: "Who It Is For",
      headline: "Built for operations handling outbound shipments of tubes, pipes, and profiles",
      industries: [
        { label: "Steel pipe and tube producers" },
        { label: "Plastic pipe and profile manufacturers" },
        { label: "Aluminum and extrusion companies" },
        { label: "Distributor of tubes, pipes, and profiles" }
      ],
      closing: "If your operation depends on loading trucks correctly before dispatch, Vexgen AI is for you."
    },
    contact: {
      label: "Get Started",
      headline: "See Vexgen AI in action",
      description: "The fastest way to understand the impact is to see it applied to your operation.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        company: "Company",
        companyPlaceholder: "Company name",
        message: "Message (optional)",
        messagePlaceholder: "Tell us about your dispatch challenges...",
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
      description: "Vexgen AI was founded to eliminate manual dispatch errors in industrial operations. We automate outbound shipment verification so plants can ship with confidence, without relying on manual checks.",
      entitySentence: "Vexgen AI is a Swiss industrial AI company headquartered in Zurich, Switzerland.",
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
      focus: "Manufacturing and Warehouse Focus",
      vision: {
        label: "Our Vision",
        headline: "Automating dispatch verification so shipments always leave correctly",
        description: "We believe efficient operations start with reliable processes. When dispatch verification runs automatically, teams spend less time checking and more time managing what matters. We build the tools that make this possible without disrupting how your operation works.",
        mission: "Mission",
        missionText: "Automate dispatch verification so every shipment leaves the plant correctly, without manual effort.",
        visionLabel: "Vision",
        visionText: "A world where every outbound shipment is automatically verified before it leaves the plant."
      },
      careers: {
        label: "Careers",
        headline: "Join Our Team",
        description: "We currently have no open positions, but we're always interested in hearing from talented individuals who share our passion for transforming manufacturing through technology.",
        description2: "If you're a highly motivated engineer, operator, or industry expert looking to make an impact, we'd love to hear from you.",
        cta: "Send your application to jobs@vexgen.ai"
      },
      leadership: {
        label: "Leadership",
        headline: "Meet the Team",
        description: "A team of operators, engineers, and industry veterans united by a shared belief: manufacturing deserves better data."
      }
    },
    meta: {
      homeTitle: "Vexgen AI – Real-Time Dispatch Verification for Industrial Operations",
      homeDescription: "Automated outbound shipment verification in real time. No manual checks. Fewer errors. More time to run operations.",
      companyTitle: "Vexgen AI – About the Company (Zurich, Switzerland)",
      companyDescription: "Learn about Vexgen AI, a Swiss industrial AI company headquartered in Zurich, Switzerland, bridging the gap between ERP records and physical reality with AI-powered inventory visibility.",
      privacyTitle: "Data Privacy - Vexgen AI",
      privacyDescription: "How Vexgen AI handles privacy, data processing, retention, and security to protect operational information.",
      imprintTitle: "Imprint - Vexgen AI",
      imprintDescription: "Legal disclosure and company information for Vexgen AI (Zurich, Switzerland).",
    },
    footer: {
      copyright: "Vexgen AI. All rights reserved.",
      company: "Company",
      privacyPolicy: "Privacy Policy",
      imprint: "Imprint"
    },
    privacy: {
      title: "Data Privacy",
      consent: "Consent",
      consentText1: "By using our products and services, you agree to this privacy policy and consent to the features specified therein, specifically the use of cookies, analysis tools and resources that facilitate targeted/personalized advertising. If you do not agree to these features, you can utilize the opt-out methods described below. You can control or prevent the use of cookies in the current versions of all popular web browsers (e.g. Firefox, Chrome, Internet Explorer and Safari).",
      consentText2: "The providers of the above-mentioned analysis and marketing tools also provide their own resources and tools (e.g. special browser add-ons or opt-out cookies) for changing your cookie preferences.",
      purposes: "Purposes",
      purposesText: "We use the data we collect in order to maintain our relationship with our customers and potential customers; e.g. to develop our website and adapt it to new requirements, and to provide you with relevant information and services.",
      logFiles: "Log Files",
      logFilesText: "When you visit our website and view pages or content, you leave behind information about the nature of your visit, such as your choice of pages (URL), the date and time of your visit, the IP address of your computer, and information about your device type, operating system and browser ID (user agent string). This information is collected in server log files on our web server and stored for one year for debugging purposes.",
      cookies: "Cookies",
      cookiesText: "We use cookies to optimize the user experience on the site.",
      contact: "Contact",
      contactText: "If you have any questions about this privacy policy, please contact us at:"
    },
    imprint: {
      title: "Imprint",
      disclaimer: "Disclaimer",
      disclaimerText: "We strive to provide correct and complete information on this website. All texts and links have been carefully checked and are constantly updated. Vexgen AI assumes no responsibility for the completeness, accuracy, actuality, reliability, or correctness of the information provided. Liability claims for damage arising from use of the information provided, including information which is incomplete or incorrect, are therefore excluded. All offers are non-binding. Individual pages, sections thereof or the entire website, including all offers and information, may be expanded, changed or deleted by Vexgen AI without notice.",
      liabilityForLinks: "Liability for links",
      liabilityForLinksText1: "All links to external providers were checked for accuracy at the time of their inclusion. However, we are not liable for the content and availability of websites that can be reached by hyperlink. Vexgen AI assumes no responsibility for the correctness, completeness and legality of the contents and links to other websites, nor for any offers, products or services contained therein, as these are no longer under the control of Vexgen AI. This is the case even if these websites contain the Vexgen AI logo or any other protected name. Access and use of linked websites is at the user's own risk.",
      liabilityForLinksText2: "The provider of the linked website is solely responsible for any illegal, incorrect or incomplete contents of linked websites, and especially for damage caused by the contents. It is irrelevant whether the damage is of a direct, indirect or financial nature, or any other type of damage that could result from loss of data, loss of use or other circumstances.",
      copyrights: "Copyrights",
      copyrightsText: "Copyrights and all other rights to content, images, photos, or other files on the website belong exclusively to Vexgen AI or the specifically named rights holders. Should you become aware of any copyright infringement on our pages, please notify us at",
      copyrightsText2: "and we will immediately review the circumstances, contact the author and, if necessary, delete the infringing content. Reproduction of any elements requires the advance, written consent of the copyright holder.",
      applicableLaw: "Applicable law",
      applicableLawText: "Any disputes or claims arising from the use of our pages are subject to Swiss law. The exclusive place of jurisdiction is Zurich, Switzerland."
    },
    cta: {
      requestDemo: "Request a Demo"
    },
    stockComparison: "Live dispatch verification feed — Vexgen AI",
    industryPages: {
      sections: {
        realityToday: "The Reality Today",
        transformation: "The Transformation",
        theProcess: "The Process",
        whoItsFor: "Who It's For",
        getStarted: "Get Started",
        theChallenge: "The Challenge",
        provenResults: "Proven Results",
        theSolution: "The Solution",
        howItWorks: "How It Works",
        measuredImpact: "Measured Impact",
        threeSteps: "Three Steps",
        currentState: "Current State",
        targetState: "Target State",
        implementation: "Implementation"
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
      logistics: "Logistik & Fulfillment",
      pharma: "Pharma",
      chemical: "Chemie"
    },
    hero: {
      headline: "Versandkontrollen automatisieren.\nZeit sparen.",
      subheadline: "",
      tagline: "Fehler erkennen, bevor LKWs das Werk verlassen,\nund jede Lieferung lückenlos dokumentieren.\n\nKeine manuellen Kontrollen. Gleicher Prozess. Weniger Zeit."
    },
    results: {
      label: "Bewährte Ergebnisse",
      headline: "Realität zahlt sich aus",
      description: "Im Einsatz in realen Betriebsumgebungen. Messbarer ROI ab dem ersten Tag.",
      metrics: {
        accuracy: { value: ">99%", label: "Versandgenauigkeit" },
        writeoff: { value: ">50%", label: "Weniger Reklamationen" },
        time: { value: ">1.000", label: "Eingesparte Arbeitsstunden" },
        roi: { value: "<30\u00A0Tage", label: "Zeit bis ROI" }
      },
      dashboardCaption: "Live-Dashboard aus aktivem Einsatz"
    },
    problem: {
      label: "Das Problem",
      headline: "Manuelle Versandkontrollen verlangsamen alles",
      description: "In vielen Werken, die Rohre, Profile und Schläuche verarbeiten, basiert der Versand noch immer auf manuellem Zählen, Sichtprüfungen oder Vertrauen. Das verlangsamt Lieferungen und erzeugt Mehraufwand.\n\nDadurch entstehen für Teams folgende Probleme:",
      issues: [
        "Manuelles Zählen unter Zeitdruck",
        "Nachkontrollen, die LKWs am Abfahren hindern",
        "Beladefehler, die zu Reklamationen führen",
        "Nacharbeiten und Nachforschungen nach dem Versand"
      ],
      closing: "Zeitverlust beim Versand zeigt sich später – in Verzögerungen, Mehraufwand und Reklamationen."
    },
    outcome: {
      label: "Das Ergebnis",
      headline: "Was sich ändert, wenn Versandkontrollen automatisiert werden",
      description: "Lieferungen werden in Echtzeit geprüft, manueller Aufwand beim Versand entfällt und Zeit wird für wichtigere Aufgaben frei.\n\nMit Vexgen AI optimieren Teams den Versandprozess:",
      benefits: [
        "Weniger Zeit für repetitive Prüfaufgaben",
        "Beladefehler werden erkannt, bevor sie zu Reklamationen werden",
        "Versand läuft ohne manuelle Kontrollen",
        "Klare Dokumentation jeder Lieferung — ohne manuellen Aufwand"
      ],
      closing: "Weniger Zeit kontrollieren. Mehr Zeit für den Betrieb."
    },
    howItWorks: {
      label: "So funktioniert es",
      headline: "Automatisierte Verifizierung\nam Versandpunkt",
      description: "Vexgen AI prüft jede ausgehende Lieferung, bevor sie das Werk verlässt.",
      steps: [
        {
          step: "01",
          title: "Den beladenen LKW erfassen",
          description: "Kameras überwachen den LKW am Versandpunkt."
        },
        {
          step: "02",
          title: "Ladung erkennen und zählen",
          description: "Bildverarbeitungsmodelle erkennen und zählen die geladenen Materialien direkt am LKW."
        },
        {
          step: "03",
          title: "Mit dem Lieferauftrag abgleichen",
          description: "Das System gleicht die erkannten Mengen mit der erwarteten Lieferung aus dem ERP ab."
        },
        {
          step: "04",
          title: "Versand freigeben oder sperren",
          description: "Bei Übereinstimmung wird der LKW freigegeben. Stimmt etwas nicht, wird die Lieferung markiert und vor dem Verlassen des Werks gestoppt."
        }
      ],
      tags: ["Keine manuellen Kontrollen", "Gleicher Prozess", "Weniger Zeit"]
    },
    whoItsFor: {
      label: "Für wen",
      headline: "Entwickelt für Betriebe, die Rohre, Profile und Schläuche versenden",
      industries: [
        { label: "Hersteller von Stahlrohren und -profilen" },
        { label: "Kunststoffrohr- und Profilhersteller" },
        { label: "Aluminium- und Extrusionsunternehmen" },
        { label: "Distributoren von Rohren, Profilen und Schläuchen" }
      ],
      closing: "Wenn Ihr Betrieb davon abhängt, LKWs vor dem Versand korrekt zu beladen, ist Vexgen AI für Sie gemacht."
    },
    contact: {
      label: "Jetzt starten",
      headline: "Vexgen AI in Aktion erleben",
      description: "Der schnellste Weg, die Wirkung zu verstehen, ist sie in Ihrem Betrieb zu sehen.",
      form: {
        name: "Name",
        namePlaceholder: "Ihr Name",
        email: "E-Mail",
        emailPlaceholder: "sie@unternehmen.com",
        company: "Unternehmen",
        companyPlaceholder: "Firmenname",
        message: "Nachricht (optional)",
        messagePlaceholder: "Erzählen Sie uns von Ihren Versandherausforderungen...",
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
      description: "Vexgen AI wurde gegründet, um manuelle Versandfehler in industriellen Betrieben zu beseitigen. Wir automatisieren die Prüfung ausgehender Lieferungen, damit Werke sicher versenden können – ohne manuelle Kontrollen.",
      entitySentence: "Vexgen AI ist ein Schweizer Industrial-AI-Unternehmen mit Sitz in Zürich, Schweiz.",
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
      focus: "Fokus: Fertigung und Lager",
      vision: {
        label: "Unsere Vision",
        headline: "Versandverifizierung automatisieren, damit Lieferungen immer korrekt abgehen",
        description: "Wir glauben, dass effiziente Abläufe mit zuverlässigen Prozessen beginnen. Wenn die Versandverifizierung automatisch läuft, verbringen Teams weniger Zeit mit Kontrollen und mehr Zeit mit dem, was wirklich zählt. Wir bauen die Werkzeuge, die das möglich machen – ohne Ihren Betrieb zu unterbrechen.",
        mission: "Mission",
        missionText: "Versandverifizierung automatisieren, damit jede Lieferung korrekt das Werk verlässt – ohne manuellen Aufwand.",
        visionLabel: "Vision",
        visionText: "Eine Welt, in der jede ausgehende Lieferung automatisch geprüft wird, bevor sie das Werk verlässt."
      },
      careers: {
        label: "Karriere",
        headline: "Werden Sie Teil unseres Teams",
        description: "Derzeit haben wir keine offenen Stellen, aber wir sind immer daran interessiert, von talentierten Menschen zu hören, die unsere Leidenschaft für die Transformation der Fertigung durch Technologie teilen.",
        description2: "Wenn Sie ein hochmotivierter Ingenieur, Betriebsexperte oder Branchenkenner sind, der etwas bewegen möchte, würden wir uns freuen, von Ihnen zu hören.",
        cta: "Senden Sie Ihre Bewerbung an jobs@vexgen.ai"
      },
      leadership: {
        label: "Führungsteam",
        headline: "Unser Team",
        description: "Ein Team aus Betriebsexperten, Ingenieuren und Branchenveteranen, vereint durch eine gemeinsame Überzeugung: Die Fertigung verdient bessere Daten."
      }
    },
    meta: {
      homeTitle: "Vexgen AI – Automatisierte Versandkontrolle für Industriebetriebe",
      homeDescription: "Automatisierte Prüfung ausgehender Lieferungen in Echtzeit. Keine manuellen Kontrollen. Weniger Fehler. Mehr Zeit für den Betrieb.",
      companyTitle: "Vexgen AI – Über uns (Zürich, Schweiz)",
      companyDescription: "Erfahren Sie mehr über Vexgen AI, ein Schweizer Industrial-AI-Unternehmen mit Sitz in Zürich, Schweiz, das ERP-Daten und physische Realität mit KI-gestützter Bestands-Transparenz verbindet.",
      privacyTitle: "Datenschutz - Vexgen AI",
      privacyDescription: "Wie Vexgen AI Datenschutz, Datenverarbeitung, Aufbewahrung und Sicherheit zum Schutz betrieblicher Informationen umsetzt.",
      imprintTitle: "Impressum - Vexgen AI",
      imprintDescription: "Rechtliche Angaben und Unternehmensinformationen zu Vexgen AI (Zürich, Schweiz).",
    },
    footer: {
      copyright: "Vexgen AI. Alle Rechte vorbehalten.",
      company: "Unternehmen",
      privacyPolicy: "Datenschutz",
      imprint: "Impressum"
    },
    privacy: {
      title: "Datenschutz",
      consent: "Einwilligung",
      consentText1: "Durch die Nutzung unserer Produkte und Dienstleistungen stimmen Sie dieser Datenschutzrichtlinie zu und willigen in die darin spezifizierten Funktionen ein, insbesondere die Verwendung von Cookies, Analysetools und Ressourcen, die zielgerichtete/personalisierte Werbung ermöglichen. Wenn Sie diesen Funktionen nicht zustimmen, können Sie die unten beschriebenen Opt-out-Methoden nutzen. Sie können die Verwendung von Cookies in den aktuellen Versionen aller gängigen Webbrowser (z. B. Firefox, Chrome, Internet Explorer und Safari) kontrollieren oder verhindern.",
      consentText2: "Die Anbieter der oben genannten Analyse- und Marketing-Tools stellen auch eigene Ressourcen und Tools (z. B. spezielle Browser-Add-ons oder Opt-out-Cookies) zur Änderung Ihrer Cookie-Einstellungen bereit.",
      purposes: "Zwecke",
      purposesText: "Wir verwenden die von uns erhobenen Daten, um unsere Beziehung zu unseren Kunden und potenziellen Kunden zu pflegen; z. B. um unsere Website weiterzuentwickeln und an neue Anforderungen anzupassen sowie um Ihnen relevante Informationen und Dienstleistungen bereitzustellen.",
      logFiles: "Log-Dateien",
      logFilesText: "Wenn Sie unsere Website besuchen und Seiten oder Inhalte ansehen, hinterlassen Sie Informationen über die Art Ihres Besuchs, wie z. B. Ihre Seitenwahl (URL), Datum und Uhrzeit Ihres Besuchs, die IP-Adresse Ihres Computers sowie Informationen über Ihren Gerätetyp, Ihr Betriebssystem und Ihre Browser-ID (User-Agent-String). Diese Informationen werden in Server-Log-Dateien auf unserem Webserver erfasst und für ein Jahr zu Debugging-Zwecken gespeichert.",
      cookies: "Cookies",
      cookiesText: "Wir verwenden Cookies, um die Benutzererfahrung auf der Website zu optimieren.",
      contact: "Kontakt",
      contactText: "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter:"
    },
    imprint: {
      title: "Impressum",
      disclaimer: "Haftungsausschluss",
      disclaimerText: "Wir sind bestrebt, auf dieser Website korrekte und vollständige Informationen bereitzustellen. Alle Texte und Links wurden sorgfältig geprüft und werden laufend aktualisiert. Vexgen AI übernimmt keine Verantwortung für die Vollständigkeit, Richtigkeit, Aktualität, Zuverlässigkeit oder Korrektheit der bereitgestellten Informationen. Haftungsansprüche für Schäden, die aus der Nutzung der bereitgestellten Informationen entstehen, einschliesslich unvollständiger oder fehlerhafter Informationen, sind daher ausgeschlossen. Alle Angebote sind unverbindlich. Einzelne Seiten, Teile davon oder die gesamte Website, einschliesslich aller Angebote und Informationen, können von Vexgen AI ohne Vorankündigung erweitert, geändert oder gelöscht werden.",
      liabilityForLinks: "Haftung für Links",
      liabilityForLinksText1: "Alle Links zu externen Anbietern wurden zum Zeitpunkt ihrer Aufnahme auf Richtigkeit geprüft. Wir haften jedoch nicht für den Inhalt und die Verfügbarkeit von Websites, die über Hyperlinks erreichbar sind. Vexgen AI übernimmt keine Verantwortung für die Richtigkeit, Vollständigkeit und Rechtmässigkeit der Inhalte und Links zu anderen Websites, noch für darin enthaltene Angebote, Produkte oder Dienstleistungen, da diese nicht mehr unter der Kontrolle von Vexgen AI stehen. Dies gilt auch dann, wenn diese Websites das Vexgen AI-Logo oder einen anderen geschützten Namen enthalten. Der Zugang zu und die Nutzung verlinkter Websites erfolgen auf eigene Gefahr des Nutzers.",
      liabilityForLinksText2: "Der Anbieter der verlinkten Website ist allein verantwortlich für rechtswidrige, fehlerhafte oder unvollständige Inhalte verlinkter Websites, insbesondere für Schäden, die durch die Inhalte verursacht werden. Es ist unerheblich, ob der Schaden direkter, indirekter oder finanzieller Natur ist oder ob es sich um einen anderen Schadenstyp handelt, der aus Datenverlust, Nutzungsausfall oder anderen Umständen resultieren könnte.",
      copyrights: "Urheberrechte",
      copyrightsText: "Urheberrechte und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich Vexgen AI oder den ausdrücklich genannten Rechteinhabern. Sollten Sie auf unseren Seiten eine Urheberrechtsverletzung feststellen, benachrichtigen Sie uns bitte unter",
      copyrightsText2: "und wir werden die Umstände unverzüglich prüfen, den Autor kontaktieren und gegebenenfalls den rechtsverletzenden Inhalt entfernen. Die Vervielfältigung jeglicher Elemente erfordert die vorherige schriftliche Zustimmung des Urheberrechtsinhabers.",
      applicableLaw: "Anwendbares Recht",
      applicableLawText: "Alle Streitigkeiten oder Ansprüche, die aus der Nutzung unserer Seiten entstehen, unterliegen dem Schweizer Recht. Ausschliesslicher Gerichtsstand ist Zürich, Schweiz."
    },
    cta: {
      requestDemo: "Demo anfordern"
    },
    stockComparison: "Live-Versandprüfung — Vexgen AI",
    industryPages: {
      sections: {
        realityToday: "Die aktuelle Realität",
        transformation: "Die operative Verbesserung",
        theProcess: "Der Prozess",
        whoItsFor: "Für wen es konzipiert ist",
        getStarted: "Jetzt Kontakt aufnehmen",
        theChallenge: "Die operative Herausforderung",
        provenResults: "Nachweisbare Ergebnisse",
        theSolution: "Die Lösung",
        howItWorks: "So funktioniert es",
        measuredImpact: "Messbarer Impact",
        threeSteps: "Drei zentrale Schritte",
        currentState: "Ist-Zustand",
        targetState: "Zielzustand",
        implementation: "Implementierung"
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
  },
  es: {
    nav: {
      results: "Resultados",
      solution: "Solución",
      industries: "Industrias",
      howItWorks: "Cómo funciona",
      company: "Empresa",
      requestDemo: "Solicitar demo",
      demo: "Demo"
    },
    industries: {
      plastics: "Plásticos",
      foodBeverage: "Alimentación y bebidas",
      cosmetics: "Cosmética",
      logistics: "Logística y fulfillment",
      pharma: "Farmacéutica",
      chemical: "Química"
    },
    hero: {
      headline: "Automatice el control de despacho.\nAhorre tiempo.",
      subheadline: "",
      tagline: "Detecte errores antes de que los camiones salgan\ny mantenga un registro claro de cada envío.\n\nSin controles manuales. Mismo proceso. Menos tiempo."
    },
    results: {
      label: "Resultados confirmados",
      headline: "La realidad genera resultados",
      description: "Desplegado en entornos operativos reales. ROI medible desde el primer día.",
      metrics: {
        accuracy: { value: ">99%", label: "Precisión de envíos" },
        writeoff: { value: ">50%", label: "Reducción de reclamos" },
        time: { value: ">1.000", label: "Horas de trabajo ahorradas" },
        roi: { value: "<30\u00A0días", label: "Tiempo hasta ROI" }
      },
      dashboardCaption: "Dashboard en vivo de un sitio operativo"
    },
    problem: {
      label: "El problema",
      headline: "Los controles manuales de despachos ralentizan todo",
      description: "En muchas plantas que trabajan con tubos, perfiles y extrusiones, los despachos sigue dependiendo del conteo manual, inspecciones visuales o la confianza. Esto ralentiza los envíos y genera trabajo adicional.\n\nComo resultado, los equipos se enfrentan a:",
      issues: [
        "Conteo manual bajo presión de tiempo",
        "Verificaciones que retrasan la salida de los camiones",
        "Errores de carga que se convierten en reclamos",
        "Reprocesos e investigaciones tras el despacho"
      ],
      closing: "El tiempo perdido en los despachos aparece después: en retrasos, trabajo extra y problemas con clientes."
    },
    outcome: {
      label: "El resultado",
      headline: "Qué cambia cuando los controles de despacho se automatizan",
      description: "Los envíos se verifican en tiempo real, eliminando el trabajo manual en expedición y liberando tiempo para tareas más importantes.\n\nCon Vexgen AI, los equipos optimizan las operaciones de expedición:",
      benefits: [
        "Menos tiempo dedicado a tareas de verificación repetitivas",
        "Los errores de carga se detectan antes de convertirse en reclamos",
        "Los despachos funcionan sin controles manuales",
        "Registro claro de lo envíado — sin esfuerzo manual"
      ],
      closing: "Menos tiempo verificando. Más tiempo gestionando operaciones."
    },
    howItWorks: {
      label: "Cómo funciona",
      headline: "Verificación automatizada\nen el punto de despacho",
      description: "Vexgen AI verifica cada despacho antes de salir.",
      steps: [
        {
          step: "01",
          title: "Capturar del camión cargado",
          description: "Las cámaras monitorean el camión en el punto de despacho."
        },
        {
          step: "02",
          title: "Detectar y contar la carga",
          description: "Los modelos de visión detectan y cuentan los materiales cargados directamente desde el camión."
        },
        {
          step: "03",
          title: "Comparar con el pedido de envío",
          description: "El sistema compara las cantidades detectadas con el envío esperado del ERP."
        },
        {
          step: "04",
          title: "Aprobar o bloquear el envío",
          description: "Si todo coincide, el camión recibe luz verde. Si no, se retiene antes de salir de planta."
        }
      ],
      tags: ["Sin controles manuales", "El mismo proceso", "Menos tiempo"]
    },
    whoItsFor: {
      label: "Para quién es",
      headline: "Desarrollado para operaciones que gestionan envíos de tubos, perfiles y extrusiones",
      industries: [
        { label: "Productores de tubos y perfiles de acero" },
        { label: "Fabricantes de tubos y perfiles de plástico" },
        { label: "Empresas de aluminio y extrusión" },
        { label: "Distribuidores de tubos, perfiles y extrusiones" }
      ],
      closing: "Si su operación depende de cargar los camiones correctamente antes del despacho, Vexgen AI es para usted."
    },
    contact: {
      label: "Empezar",
      headline: "Descubra Vexgen AI en acción",
      description: "La manera más rápida de entender el impacto es verlo aplicado a su operación.",
      form: {
        name: "Nombre",
        namePlaceholder: "Su nombre",
        email: "Correo electrónico",
        emailPlaceholder: "usted@empresa.com",
        company: "Empresa",
        companyPlaceholder: "Nombre de la empresa",
        message: "Mensaje (opcional)",
        messagePlaceholder: "Cuéntenos sobre sus desafíos de expedición...",
        submit: "Solicitar una demo",
        submitting: "Enviando..."
      },
      toast: {
        successTitle: "Solicitud enviada",
        successDescription: "Nos pondremos en contacto pronto para programar su demo.",
        errorTitle: "Algo salió mal",
        errorDescription: "Por favor, inténtelo de nuevo más tarde."
      }
    },
    company: {
      label: "Sobre Vexgen AI",
      headline: "Desarrollado para operaciones industriales reales",
      description: "Vexgen AI fue fundada para eliminar los errores manuales de expedición en operaciones industriales. Automatizamos la verificación de envíos salientes para que las plantas puedan expedir con confianza, sin depender de controles manuales.",
      entitySentence: "Vexgen AI es una empresa suiza de IA industrial con sede en Zúrich, Suiza.",
      team: {
        ceo: {
          name: "Sebastian Freijo",
          role: "Cofundador y CEO",
          bio: "Experiencia en operaciones industriales, gestión de calidad y mejora de procesos basada en datos en entornos de fabricación."
        },
        cto: {
          name: "Andrés Cao",
          role: "Cofundador y CTO",
          bio: "Experto en ingeniería y visión por computadora, enfocado en construir sistemas fiables y de grado industrial."
        },
        advisor: {
          name: "Stefan Kalmund",
          role: "Asesor Senior",
          bio: "Amplia experiencia ejecutiva en fabricación industrial y liderazgo operativo en empresas globales."
        }
      },
      location: "Baumackerstrasse 42, 8050, Zúrich, Suiza",
      focus: "Enfoque: Fabricación y almacén",
      vision: {
        label: "Nuestra visión",
        headline: "Automatizando la verificación de despachos para que los envíos siempre salgan correctamente",
        description: "Creemos que las operaciones eficientes comienzan con procesos fiables. Cuando la verificación de expedición funciona de forma automática, los equipos dedican menos tiempo a revisar y más tiempo a gestionar lo que importa. Construimos las herramientas que hacen esto posible sin interrumpir el funcionamiento de su operación.",
        mission: "Misión",
        missionText: "Automatizar la verificación de expedición para que cada envío salga correctamente de la planta, sin esfuerzo manual.",
        visionLabel: "Visión",
        visionText: "Un mundo donde cada envío saliente se verifica automáticamente antes de abandonar la planta."
      },
      careers: {
        label: "Carreras",
        headline: "Únase a nuestro equipo",
        description: "Actualmente no tenemos posiciones abiertas, pero siempre estamos interesados en conocer a personas con talento que compartan nuestra pasión por transformar la fabricación a través de la tecnología.",
        description2: "Si es un ingeniero, operador o experto del sector altamente motivado que busca generar impacto, nos encantaría saber de usted.",
        cta: "Envíe su candidatura a jobs@vexgen.ai"
      },
      leadership: {
        label: "Liderazgo",
        headline: "Conozca al equipo",
        description: "Un equipo de operadores, ingenieros y veteranos del sector unidos por una convicción compartida: la fabricación merece mejores datos."
      }
    },
    meta: {
      homeTitle: "Vexgen AI – Verificación de expedición en tiempo real para plantas industriales",
      homeDescription: "Verificación automatizada de envíos salientes en tiempo real. Sin controles manuales. Menos errores. Más tiempo para operar.",
      companyTitle: "Vexgen AI – Sobre la empresa (Zúrich, Suiza)",
      companyDescription: "Conozca Vexgen AI, una empresa suiza de IA industrial con sede en Zúrich, Suiza, que cierra la brecha entre los registros ERP y la realidad física con visibilidad de inventario impulsada por IA.",
      privacyTitle: "Protección de datos - Vexgen AI",
      privacyDescription: "Cómo Vexgen AI gestiona la privacidad, el tratamiento de datos, la retención y la seguridad para proteger la información operativa.",
      imprintTitle: "Aviso legal - Vexgen AI",
      imprintDescription: "Información legal y datos de la empresa Vexgen AI (Zúrich, Suiza).",
    },
    footer: {
      copyright: "Vexgen AI. Todos los derechos reservados.",
      company: "Empresa",
      privacyPolicy: "Política de privacidad",
      imprint: "Aviso legal"
    },
    privacy: {
      title: "Protección de datos",
      consent: "Consentimiento",
      consentText1: "Al utilizar nuestros productos y servicios, usted acepta esta política de privacidad y consiente las funcionalidades especificadas en la misma, específicamente el uso de cookies, herramientas de análisis y recursos que facilitan la publicidad dirigida/personalizada. Si no está de acuerdo con estas funcionalidades, puede utilizar los métodos de exclusión descritos a continuación. Puede controlar o impedir el uso de cookies en las versiones actuales de todos los navegadores web populares (p. ej., Firefox, Chrome, Internet Explorer y Safari).",
      consentText2: "Los proveedores de las herramientas de análisis y marketing mencionadas anteriormente también proporcionan sus propios recursos y herramientas (p. ej., complementos especiales del navegador o cookies de exclusión) para modificar sus preferencias de cookies.",
      purposes: "Finalidades",
      purposesText: "Utilizamos los datos que recopilamos para mantener nuestra relación con nuestros clientes y clientes potenciales; p. ej., para desarrollar nuestro sitio web y adaptarlo a nuevos requisitos, y para proporcionarle información y servicios relevantes.",
      logFiles: "Archivos de registro",
      logFilesText: "Cuando visita nuestro sitio web y visualiza páginas o contenido, deja información sobre la naturaleza de su visita, como su selección de páginas (URL), la fecha y hora de su visita, la dirección IP de su ordenador e información sobre el tipo de dispositivo, sistema operativo e identificador del navegador (cadena de agente de usuario). Esta información se recopila en archivos de registro del servidor en nuestro servidor web y se almacena durante un año con fines de depuración.",
      cookies: "Cookies",
      cookiesText: "Utilizamos cookies para optimizar la experiencia del usuario en el sitio.",
      contact: "Contacto",
      contactText: "Si tiene alguna pregunta sobre esta política de privacidad, contáctenos en:"
    },
    imprint: {
      title: "Aviso legal",
      disclaimer: "Descargo de responsabilidad",
      disclaimerText: "Nos esforzamos por proporcionar información correcta y completa en este sitio web. Todos los textos y enlaces han sido cuidadosamente verificados y se actualizan constantemente. Vexgen AI no asume ninguna responsabilidad por la integridad, exactitud, actualidad, fiabilidad o corrección de la información proporcionada. Las reclamaciones de responsabilidad por daños derivados del uso de la información proporcionada, incluyendo información incompleta o incorrecta, quedan por tanto excluidas. Todas las ofertas son no vinculantes. Páginas individuales, secciones de las mismas o el sitio web completo, incluyendo todas las ofertas e información, pueden ser ampliados, modificados o eliminados por Vexgen AI sin previo aviso.",
      liabilityForLinks: "Responsabilidad por enlaces",
      liabilityForLinksText1: "Todos los enlaces a proveedores externos fueron verificados en cuanto a su exactitud en el momento de su inclusión. Sin embargo, no somos responsables del contenido y la disponibilidad de sitios web accesibles mediante hipervínculos. Vexgen AI no asume ninguna responsabilidad por la corrección, integridad y legalidad de los contenidos y enlaces a otros sitios web, ni por las ofertas, productos o servicios contenidos en ellos, ya que estos ya no están bajo el control de Vexgen AI. Esto aplica incluso si estos sitios web contienen el logotipo de Vexgen AI o cualquier otro nombre protegido. El acceso y uso de sitios web enlazados es bajo la propia responsabilidad del usuario.",
      liabilityForLinksText2: "El proveedor del sitio web enlazado es el único responsable de cualquier contenido ilegal, incorrecto o incompleto de los sitios web enlazados, y especialmente de los daños causados por los contenidos. Es irrelevante si el daño es de naturaleza directa, indirecta o financiera, o cualquier otro tipo de daño que pueda resultar de la pérdida de datos, la pérdida de uso u otras circunstancias.",
      copyrights: "Derechos de autor",
      copyrightsText: "Los derechos de autor y todos los demás derechos sobre contenidos, imágenes, fotos u otros archivos del sitio web pertenecen exclusivamente a Vexgen AI o a los titulares de derechos expresamente nombrados. Si detecta alguna infracción de derechos de autor en nuestras páginas, notifíquenos en",
      copyrightsText2: "y revisaremos inmediatamente las circunstancias, contactaremos al autor y, si es necesario, eliminaremos el contenido infractor. La reproducción de cualquier elemento requiere el consentimiento previo y por escrito del titular de los derechos de autor.",
      applicableLaw: "Legislación aplicable",
      applicableLawText: "Cualquier disputa o reclamación derivada del uso de nuestras páginas está sujeta a la legislación suiza. El fuero exclusivo es Zúrich, Suiza."
    },
    cta: {
      requestDemo: "Solicitar una demo"
    },
    stockComparison: "Registro de verificación de despachos en vivo — Vexgen AI",
    industryPages: {
      sections: {
        realityToday: "La realidad actual",
        transformation: "La mejora operativa",
        theProcess: "El proceso",
        whoItsFor: "Para quién está diseñado",
        getStarted: "Solicitar información",
        theChallenge: "El reto operativo",
        provenResults: "Resultados demostrados",
        theSolution: "La solución",
        howItWorks: "Cómo funciona",
        measuredImpact: "Impacto cuantificado",
        threeSteps: "Tres pasos clave",
        currentState: "Estado actual",
        targetState: "Estado objetivo",
        implementation: "Implantación"
      },
      common: {
        inventoryAccuracy: "Precisión de inventario",
        dioReduction: "Reducción DIO",
        writeOffReduction: "Reducción de depreciaciones",
        workingCapitalFreed: "Capital de trabajo liberado",
        lessManualChecks: "Menos verificaciones manuales",
        whatChanges: "Qué cambia con la verificación física",
        continuousAlignment: "El alineamiento continuo entre sistema y realidad transforma las operaciones.",
        captureTitle: "Capturar cada movimiento",
        captureDesc: "Cámaras monitorizan flujos de inventario de forma continua.",
        validateTitle: "Validar automáticamente",
        validateDesc: "La IA de visión identifica materiales y cantidades en tiempo real.",
        syncTitle: "Sincronizar su ERP al instante",
        syncDesc: "Discrepancias corregidas automáticamente. Sin intervención manual.",
        closing: "Sin reemplazo de sistemas. Sin rediseño de procesos. Fricción mínima.",
        isRelevant: "¿Es relevante para sus operaciones?"
      },
      chemical: {
        headline: "Química",
        subheadline: "Su ERP. La realidad física de sus operaciones químicas.",
        description: "Visibilidad de inventario en tiempo real en materias primas, WIP y producto terminado para reducir depreciaciones, evitar roturas de stock y proteger el flujo productivo.\n\nDesarrollado para entornos con alta exposición de capital de trabajo, trazabilidad estricta y requisitos de vida útil.",
        problemHeadline: "Cuando el inventario del sistema no coincide con la realidad física",
        problemDescription: "Los materiales dominan costes, riesgos y continuidad productiva. Las divergencias tienen impacto inmediato.",
        issues: [
          "Capital de trabajo inmovilizado en buffers inflados",
          "Depreciaciones por materiales caducados o mal ubicados",
          "Roturas de stock que afectan compromisos con clientes",
          "Equipos dedicando tiempo a verificaciones manuales y gestión de urgencias"
        ],
        problemClosing: "Estos problemas persisten porque los datos del ERP están desconectados de la realidad física en planta.",
        benefits: [
          "Precisión fiable por material, lote y ubicación",
          "Menor capital de trabajo en buffers inflados",
          "Menos paradas por materiales faltantes",
          "Fin de las compras urgentes y gestión de crisis"
        ],
        processHeadline: "Una capa de protección para plantas químicas",
        processDescription: "Vexgen AI alinea continuamente el inventario físico con su ERP. Todos los datos se procesan localmente y nunca abandonan sus instalaciones.",
        whoHeadline: "Desarrollado para organizaciones químicas donde:",
        criteria: [
          "La precisión de inventario afecta al capital de trabajo y al riesgo",
          "La vida útil, el seguimiento de lotes y la trazabilidad son críticos",
          "Los planes de producción dependen de la disponibilidad de materiales",
          "Los equipos dependen de verificaciones manuales o buffers para gestionar la incertidumbre"
        ],
        getStartedDescription: "Una breve conversación puede evaluar si la visibilidad física de inventario podría mejorar la eficiencia de capital o reducir el riesgo operativo."
      },
      plastics: {
        headline: "Fabricación de plásticos",
        subheadline: "Su ERP. La realidad física de la fabricación de plásticos.",
        description: "Visibilidad de inventario en tiempo real en materias primas, WIP y producto terminado para mantener en funcionamiento las líneas de inyección, extrusión y montaje.\n\nDesarrollado para entornos de alta variedad y alto volumen donde la disponibilidad y la precisión determinan los márgenes.",
        higherLineUptime: "Mayor disponibilidad de línea",
        problemHeadline: "Cuando el inventario del sistema no coincide con la realidad física",
        problemDescription: "El rendimiento productivo depende de tener las piezas correctas, en la máquina correcta, en el momento correcto.",
        issues: [
          "Líneas esperando material que 'existe' en el sistema",
          "Buffers excesivos construidos para proteger contra la incertidumbre",
          "Referencias incorrectas acumulándose mientras faltan las críticas",
          "Verificaciones manuales constantes para mantener la producción en marcha"
        ],
        problemClosing: "Estos problemas persisten porque los datos del ERP están desconectados de lo que realmente hay en planta.",
        benefits: [
          "Precisión fiable por referencia, pieza y ubicación",
          "Mayor disponibilidad, menos paradas por material",
          "Menor capital de trabajo en buffers",
          "Fin de las urgencias y conciliaciones manuales"
        ],
        processHeadline: "Una capa de verificación para plantas de plásticos",
        processDescription: "Vexgen AI alinea continuamente el inventario físico con su ERP. Todos los datos se procesan localmente y nunca abandonan sus instalaciones.",
        whoHeadline: "Desarrollado para fabricantes de plásticos que:",
        criteria: [
          "Operan inyección, extrusión o montaje con secuenciación ajustada",
          "Gestionan alto número de referencias en cajas, palés y WIP",
          "Experimentan paradas pese a inventario 'disponible'",
          "Dependen de buffers y verificaciones manuales para proteger el rendimiento"
        ],
        getStartedDescription: "Una breve conversación puede evaluar si la visibilidad física de inventario podría mejorar la disponibilidad, la precisión o la eficiencia de capital."
      },
      foodBeverage: {
        headline: "Alimentación y bebidas",
        subheadline: "Su ERP. La realidad física de las operaciones de alimentación y bebidas.",
        description: "Visibilidad de inventario en tiempo real en palés de materias primas, WIP y producto terminado para reducir desperdicios y proteger niveles de servicio.\n\nDesarrollado para entornos de alto volumen donde la frescura y la disponibilidad definen el rendimiento.",
        lessWaste: "Menos desperdicios",
        otifImprovement: "Mejora OTIF",
        problemHeadline: "Cuando la realidad de los palés diverge de los datos del sistema",
        problemDescription: "La frescura, la disponibilidad y los niveles de servicio dependen de saber exactamente qué hay y dónde.",
        issues: [
          "Desperdicios por palés caducados u olvidados",
          "Roturas de stock causando pedidos incompletos y fallos de OTIF",
          "Buffers excesivos para proteger niveles de servicio",
          "Verificaciones constantes de palés y fechas para mantener los pedidos en movimiento"
        ],
        problemClosing: "Estos problemas persisten porque los datos del ERP están desconectados de la realidad física de los palés.",
        benefits: [
          "Precisión fiable por referencia, cantidad y fecha de caducidad",
          "Menos desperdicios mediante mejor ejecución FIFO/FEFO",
          "Mayores niveles de servicio, menos palés faltantes",
          "Equipos liberados de verificaciones manuales constantes de palés"
        ],
        processHeadline: "Una capa de protección de frescura para operaciones de alimentación y bebidas",
        processDescription: "Vexgen AI alinea continuamente la realidad física de los palés con su ERP. Todos los datos se procesan localmente y nunca abandonan sus instalaciones.",
        whoHeadline: "Desarrollado para organizaciones de alimentación y bebidas que:",
        criteria: [
          "Gestionan grandes volúmenes de mercancía paletizada e ingredientes",
          "Dependen de FIFO/FEFO para controlar desperdicios y frescura",
          "Experimentan problemas de servicio pese a inventario 'disponible'",
          "Dependen de verificaciones manuales y buffers para proteger OTIF"
        ],
        getStartedDescription: "Una breve conversación puede evaluar si la visibilidad física de inventario podría mejorar la frescura, los niveles de servicio o la eficiencia de capital."
      },
      cosmetics: {
        headline: "Cosmética",
        subheadline: "Su ERP. La realidad física de las operaciones cosméticas.",
        description: "Visibilidad de inventario en tiempo real en producción, almacenamiento y distribución para proteger lanzamientos y reducir depreciaciones.\n\nDesarrollado para entornos de alta variedad donde la precisión de referencias y el timing determinan los ingresos.",
        launchOnTimeRate: "Tasa de lanzamiento puntual",
        obsoleteReduction: "Reducción de obsoletos",
        problemHeadline: "Cuando el inventario del sistema no coincide con la realidad física",
        problemDescription: "La disponibilidad, la precisión y el timing definen el éxito en cosmética.",
        issues: [
          "Lanzamientos retrasados por referencias faltantes o mal asignadas",
          "Variantes incorrectas en stock mientras faltan las de alta demanda",
          "Depreciaciones por packaging obsoleto o campañas canceladas",
          "Verificaciones manuales necesarias para confirmar la preparación del lanzamiento"
        ],
        problemClosing: "Estos problemas persisten porque al ERP le falta el alineamiento en tiempo real con el stock físico.",
        benefits: [
          "Precisión fiable por referencia, variante y ubicación",
          "Lanzamientos puntuales con menos sorpresas",
          "Menos depreciaciones por inventario mal asignado",
          "Menos capital inmovilizado en buffers de protección"
        ],
        processHeadline: "Una capa de protección de lanzamientos para operaciones cosméticas",
        processDescription: "Vexgen AI alinea continuamente el inventario físico con su ERP. Todos los datos se procesan localmente y nunca abandonan sus instalaciones.",
        whoHeadline: "Desarrollado para organizaciones cosméticas que:",
        criteria: [
          "Gestionan amplios portfolios de referencias con variantes de packaging",
          "Realizan lanzamientos frecuentes y demanda por campañas",
          "Experimentan problemas de disponibilidad pese a datos de 'en stock'",
          "Utilizan verificaciones manuales para proteger lanzamientos y servicio"
        ],
        getStartedDescription: "Una breve conversación puede evaluar si la visibilidad física de inventario podría mejorar la preparación de lanzamientos o la eficiencia de capital."
      },
      pharma: {
        headline: "Farmacéutica",
        subheadline: "Su ERP. La realidad física de las operaciones farmacéuticas.",
        description: "Visibilidad de inventario en tiempo real en materias primas, WIP y producto terminado para mejorar la confianza en la liberación de lotes y reducir el riesgo de cumplimiento normativo.\n\nDesarrollado para entornos regulados donde la precisión y la trazabilidad son innegociables.",
        fasterBatchRelease: "Liberación de lotes más rápida",
        fewerStockouts: "Menos roturas de stock",
        auditConfidence: "Confianza en auditorías",
        problemHeadline: "Cuando el inventario del sistema no coincide con la realidad física",
        problemDescription: "La precisión, el estado y la trazabilidad afectan directamente al cumplimiento normativo y al suministro al paciente.",
        issues: [
          "Lotes retrasados por inventario faltante o mal ubicado",
          "Investigaciones manuales para conciliar sistema vs. realidad",
          "Buffers conservadores para proteger la disponibilidad",
          "Riesgo de auditoría por suposiciones en lugar de verificación"
        ],
        problemClosing: "Estos problemas persisten porque el ERP no está alineado continuamente con la realidad física.",
        benefits: [
          "Precisión fiable por lote, estado y ubicación",
          "Liberaciones de lotes más rápidas y fiables",
          "Menor riesgo de cumplimiento normativo y auditoría",
          "Menos dependencia de buffers conservadores"
        ],
        processHeadline: "Una capa de cumplimiento normativo para operaciones farmacéuticas",
        processDescription: "Vexgen AI alinea continuamente el inventario físico con su ERP. Todos los datos se procesan localmente y nunca abandonan sus instalaciones.",
        whoHeadline: "Desarrollado para organizaciones farmacéuticas que:",
        criteria: [
          "Operan en entornos regulados GMP",
          "Gestionan inventario controlado por lotes en múltiples ubicaciones",
          "Experimentan retrasos en la liberación pese a inventario 'disponible'",
          "Dependen de verificación manual para el cumplimiento normativo"
        ],
        getStartedDescription: "Una breve conversación puede evaluar si la verificación física de inventario podría mejorar la confianza en la liberación o la posición de cumplimiento normativo."
      }
    }
  }
} as const;

export type Translations = typeof translations.en;
