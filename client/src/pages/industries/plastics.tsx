import IndustryTemplate, { IndustryContent } from "./IndustryTemplate";

const plasticsContent: IndustryContent = {
  slug: 'plastics',
  heroImage: "/images/hero-plastics.png",
  processImage: "/images/process-plastics.png",
  layoutVariant: 'B',
  en: {
    intro: {
      headline: "Plastics Manufacturing",
      subheadline: "Your ERP. The physical truth for plastics manufacturing.",
      description: "Real-time inventory visibility across raw materials, WIP, and finished goods to keep injection molding, extrusion, and assembly lines running.\n\nBuilt for high-mix, high-volume environments where uptime and accuracy drive margins."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Inventory Accuracy" },
        { value: "12+ Days", label: "DIO Reduction" },
        { value: "25%", label: "Higher Line Uptime" },
        { value: "90%", label: "Less Manual Checks" }
      ]
    },
    problem: {
      headline: "When system inventory doesn't match physical reality",
      description: "Throughput depends on having the right parts, at the right machine, at the right time.",
      issues: [
        "Lines waiting for material that 'exists' in the system",
        "Excess buffers built to protect against uncertainty",
        "Wrong SKUs piling up while critical ones are missing",
        "Constant manual checks to keep production moving"
      ],
      closing: "These issues persist because ERP data is disconnected from what's actually on the floor."
    },
    outcome: {
      headline: "What changes with physical verification",
      description: "Continuous alignment between system and reality transforms operations.",
      benefits: [
        "Trusted accuracy by SKU, piece, and location",
        "Higher uptime, fewer material stoppages",
        "Lower working capital in buffers",
        "No more fire-drills or manual reconciliation"
      ]
    },
    howItWorks: {
      headline: "A verification layer for plastics plants",
      description: "Vexgen AI continuously aligns physical inventory with your ERP. All data is processed locally and never leaves your premises.",
      steps: [
        { step: "01", title: "Capture every movement", description: "Cameras monitor inventory flows continuously." },
        { step: "02", title: "Validate automatically", description: "Vision AI identifies materials and quantities in real time." },
        { step: "03", title: "Sync your ERP instantly", description: "Discrepancies corrected automatically. No manual input." }
      ],
      closing: "No system replacement. No process redesign. Minimal friction."
    },
    whoItsFor: {
      headline: "Built for plastics manufacturers that:",
      criteria: [
        "Run injection molding, extrusion, or assembly with tight sequencing",
        "Manage high SKU counts across boxes, pallets, and WIP",
        "Experience stoppages despite 'available' inventory",
        "Rely on buffers and manual checks to protect throughput"
      ]
    },
    getStarted: {
      headline: "Is this relevant for your operations?",
      description: "A short conversation can assess whether physical inventory visibility could improve uptime, accuracy, or capital efficiency."
    }
  },
  de: {
    intro: {
      headline: "Kunststofffertigung",
      subheadline: "Ihr ERP. Die physische Wahrheit für die Kunststofffertigung.",
      description: "Echtzeit-Bestandstransparenz über Rohstoffe, WIP und Fertigwaren, um Spritzguss-, Extrusions- und Montagelinien am Laufen zu halten.\n\nEntwickelt für High-Mix-, High-Volume-Umgebungen, in denen Verfügbarkeit und Genauigkeit die Margen bestimmen."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Bestandsgenauigkeit" },
        { value: "12+ Tage", label: "DIO-Reduktion" },
        { value: "25%", label: "Höhere Linienverfügbarkeit" },
        { value: "90%", label: "Weniger manuelle Prüfungen" }
      ]
    },
    problem: {
      headline: "Wenn der Systembestand nicht der physischen Realität entspricht",
      description: "Durchsatz hängt davon ab, die richtigen Teile zur richtigen Zeit an der richtigen Maschine zu haben.",
      issues: [
        "Linien warten auf Material, das im System 'vorhanden' ist",
        "Überhöhte Puffer zur Absicherung gegen Unsicherheiten",
        "Falsche Artikel häufen sich an, während kritische fehlen",
        "Ständige manuelle Prüfungen, um die Produktion am Laufen zu halten"
      ],
      closing: "Diese Probleme bestehen fort, weil ERP-Daten von dem entkoppelt sind, was tatsächlich in der Produktion ist."
    },
    outcome: {
      headline: "Was sich mit physischer Verifizierung ändert",
      description: "Kontinuierlicher Abgleich zwischen System und Realität sorgt für stabile und planbare Prozesse.",
      benefits: [
        "Verlässliche Bestandsgenauigkeit auf Artikel-, Stück- und Lagerortebene",
        "Höhere Verfügbarkeit, weniger Materialstopps",
        "Weniger Working Capital in Puffern",
        "Keine Notfallaktionen oder manuellen Abgleiche mehr"
      ]
    },
    howItWorks: {
      headline: "Eine Verifizierungsebene für Kunststoffwerke",
      description: "Vexgen AI gleicht den physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
      steps: [
        { step: "01", title: "Jede Bewegung erfassen", description: "Kameras überwachen Bestandsbewegungen kontinuierlich." },
        { step: "02", title: "Automatisch validieren", description: "Vision-KI identifiziert Materialien und Mengen in Echtzeit." },
        { step: "03", title: "ERP sofort synchronisieren", description: "Abweichungen werden automatisch korrigiert. Keine manuelle Eingabe." }
      ],
      closing: "Kein Systemwechsel. Keine Prozessumstellung. Minimale Reibung."
    },
    whoItsFor: {
      headline: "Entwickelt für Kunststoffhersteller, die:",
      criteria: [
        "Spritzguss, Extrusion oder Montage mit enger Taktung betreiben",
        "Hohe Artikelzahlen über Kartons, Paletten und WIP verwalten",
        "Stillstände trotz 'verfügbarem' Bestand erleben",
        "Auf Puffer und manuelle Prüfungen zum Schutz des Durchsatzes angewiesen sind"
      ]
    },
    getStarted: {
      headline: "Ist das relevant für Ihren Betrieb?",
      description: "Ein kurzes Gespräch kann klären, ob physische Bestandstransparenz Verfügbarkeit, Genauigkeit oder Kapitaleffizienz verbessern könnte."
    }
  }
};

export default function PlasticsIndustry() {
  return <IndustryTemplate content={plasticsContent} />;
}
