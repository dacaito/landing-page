import IndustryTemplate, { IndustryContent } from "./IndustryTemplate";

const pharmaContent: IndustryContent = {
  slug: 'pharma',
  heroImage: "/images/hero-pharma.png",
  processImage: "/images/process-pharma.png",
  layoutVariant: 'B',
  en: {
    intro: {
      headline: "Pharmaceutical",
      subheadline: "Your ERP. The physical truth for pharmaceutical operations.",
      description: "Real-time inventory visibility across raw materials, WIP, and finished goods to improve batch confidence and reduce compliance risk.\n\nBuilt for regulated environments where accuracy and traceability are non-negotiable."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Inventory Accuracy" },
        { value: "30%", label: "Faster Batch Release" },
        { value: "50%", label: "Fewer Stockouts" },
        { value: "2x", label: "Audit Confidence" }
      ]
    },
    problem: {
      headline: "When system inventory doesn't match physical reality",
      description: "Accuracy, status, and traceability directly affect compliance and patient supply.",
      issues: [
        "Batches delayed by missing or mislocated inventory",
        "Manual investigations to reconcile system vs. reality",
        "Conservative buffers to protect availability",
        "Audit risk from assumptions instead of verification"
      ],
      closing: "These issues persist because ERP isn't continuously aligned with physical reality."
    },
    outcome: {
      headline: "What changes with physical verification",
      description: "Continuous alignment between system and reality transforms operations.",
      benefits: [
        "Trusted accuracy by batch, status, and location",
        "Faster, more reliable batch releases",
        "Lower compliance and audit risk",
        "Less reliance on conservative buffers"
      ]
    },
    howItWorks: {
      headline: "A compliance layer for pharmaceutical operations",
      description: "Vexgen AI continuously aligns physical inventory with your ERP. All data is processed locally and never leaves your premises.",
      steps: [
        { step: "01", title: "Capture every movement", description: "Cameras monitor inventory flows continuously." },
        { step: "02", title: "Validate automatically", description: "Vision AI identifies materials and quantities in real time." },
        { step: "03", title: "Sync your ERP instantly", description: "Discrepancies corrected automatically. No manual input." }
      ],
      closing: "No system replacement. No process redesign. Minimal friction."
    },
    whoItsFor: {
      headline: "Built for pharmaceutical organizations that:",
      criteria: [
        "Operate in GMP-regulated environments",
        "Manage batch-controlled inventory across locations",
        "Experience release delays despite 'available' inventory",
        "Rely on manual verification for compliance"
      ]
    },
    getStarted: {
      headline: "Is this relevant for your operations?",
      description: "A short conversation can assess whether physical inventory verification could improve release confidence or compliance posture."
    }
  },
  de: {
    intro: {
      headline: "Pharma",
      subheadline: "Ihr ERP. Die physische Wahrheit für Pharmabetriebe.",
      description: "Echtzeit-Bestandstransparenz über Rohstoffe, WIP und Fertigwaren zur Verbesserung der Chargenfreigabe-Sicherheit und Reduktion von Compliance-Risiken.\n\nEntwickelt für regulierte Umgebungen, in denen Genauigkeit und Rückverfolgbarkeit nicht verhandelbar sind."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Bestandsgenauigkeit" },
        { value: "30%", label: "Schnellere Chargenfreigabe" },
        { value: "50%", label: "Weniger Fehlbestände" },
        { value: "2x", label: "Audit-Sicherheit" }
      ]
    },
    problem: {
      headline: "Wenn Systembestand nicht mit der physischen Realität übereinstimmt",
      description: "Genauigkeit, Status und Rückverfolgbarkeit beeinflussen direkt Compliance und Patientenversorgung.",
      issues: [
        "Chargen verzögert durch fehlenden oder falsch platzierten Bestand",
        "Manuelle Untersuchungen zur Abstimmung von System und Realität",
        "Konservative Puffer zum Schutz der Verfügbarkeit",
        "Audit-Risiko durch Annahmen statt Verifizierung"
      ],
      closing: "Diese Probleme bestehen fort, weil das ERP nicht kontinuierlich mit der physischen Realität abgeglichen wird."
    },
    outcome: {
      headline: "Was sich mit physischer Verifizierung ändert",
      description: "Kontinuierlicher Abgleich zwischen System und Realität transformiert den Betrieb.",
      benefits: [
        "Verlässliche Genauigkeit nach Charge, Status und Lagerort",
        "Schnellere, zuverlässigere Chargenfreigaben",
        "Geringeres Compliance- und Audit-Risiko",
        "Weniger Abhängigkeit von konservativen Puffern"
      ]
    },
    howItWorks: {
      headline: "Eine Compliance-Ebene für Pharmabetriebe",
      description: "Vexgen AI gleicht physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
      steps: [
        { step: "01", title: "Jede Bewegung erfassen", description: "Kameras überwachen Bestandsbewegungen kontinuierlich." },
        { step: "02", title: "Automatisch validieren", description: "Vision-KI identifiziert Materialien und Mengen in Echtzeit." },
        { step: "03", title: "ERP sofort synchronisieren", description: "Abweichungen werden automatisch korrigiert. Keine manuelle Eingabe." }
      ],
      closing: "Kein Systemwechsel. Keine Prozessumstellung. Minimale Reibung."
    },
    whoItsFor: {
      headline: "Entwickelt für Pharmaunternehmen, die:",
      criteria: [
        "In GMP-regulierten Umgebungen arbeiten",
        "Chargengesteuerten Bestand über Standorte verwalten",
        "Freigabeverzögerungen trotz 'verfügbarem' Bestand erleben",
        "Auf manuelle Verifizierung für Compliance angewiesen sind"
      ]
    },
    getStarted: {
      headline: "Ist das relevant für Ihren Betrieb?",
      description: "Ein kurzes Gespräch kann klären, ob physische Bestandsverifizierung die Freigabesicherheit oder Compliance-Position verbessern könnte."
    }
  }
};

export default function PharmaIndustry() {
  return <IndustryTemplate content={pharmaContent} />;
}
