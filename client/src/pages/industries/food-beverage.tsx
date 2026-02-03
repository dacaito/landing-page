import IndustryTemplate, { IndustryContent } from "./IndustryTemplate";

const foodBeverageContent: IndustryContent = {
  slug: 'food-beverage',
  heroImage: "/images/hero-food-beverage.png",
  processImage: "/images/process-food-beverage.png",
  layoutVariant: 'B',
  en: {
    intro: {
      headline: "Food & Beverage",
      subheadline: "Your ERP. The physical truth for food and beverage operations.",
      description: "Real-time inventory visibility across pallets of raw materials, WIP, and finished goods to reduce waste and protect service levels.\n\nBuilt for high-volume environments where freshness and availability define performance."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Inventory Accuracy" },
        { value: "40%", label: "Less Waste" },
        { value: "5pp", label: "OTIF Improvement" },
        { value: "90%", label: "Less Manual Checks" }
      ]
    },
    problem: {
      headline: "When pallet reality diverges from system data",
      description: "Freshness, availability, and service levels depend on knowing exactly what's where.",
      issues: [
        "Waste from expired or forgotten pallets",
        "Stockouts causing incomplete orders and OTIF misses",
        "Excess buffers to protect service levels",
        "Constant pallet and date checks to keep orders moving"
      ],
      closing: "These issues persist because ERP data is disconnected from physical pallet reality."
    },
    outcome: {
      headline: "What changes with physical verification",
      description: "Continuous alignment between system and reality transforms operations.",
      benefits: [
        "Trusted accuracy by SKU, quantity, and expiration",
        "Lower waste through better FIFO/FEFO execution",
        "Higher service levels, fewer missing pallets",
        "Teams freed from constant manual pallet checks"
      ]
    },
    howItWorks: {
      headline: "A freshness protection layer for F&B operations",
      description: "Vexgen AI continuously aligns physical pallet reality with your ERP. All data is processed locally and never leaves your premises.",
      steps: [
        { step: "01", title: "Capture every movement", description: "Cameras monitor inventory flows continuously." },
        { step: "02", title: "Validate automatically", description: "Vision AI identifies materials and quantities in real time." },
        { step: "03", title: "Sync your ERP instantly", description: "Discrepancies corrected automatically. No manual input." }
      ],
      closing: "No system replacement. No process redesign. Minimal friction."
    },
    whoItsFor: {
      headline: "Built for food & beverage organizations that:",
      criteria: [
        "Manage large volumes of palletized goods and ingredients",
        "Depend on FIFO/FEFO to control waste and freshness",
        "Experience service issues despite 'available' inventory",
        "Rely on manual checks and buffers to protect OTIF"
      ]
    },
    getStarted: {
      headline: "Is this relevant for your operations?",
      description: "A short conversation can assess whether physical inventory visibility could improve freshness, service levels, or capital efficiency."
    }
  },
  de: {
    intro: {
      headline: "Lebensmittel & Getränke",
      subheadline: "Ihr ERP. Die physische Wahrheit für Lebensmittel- und Getränkebetriebe.",
      description: "Echtzeit-Bestandstransparenz über Paletten mit Rohstoffen, WIP und Fertigwaren zur Reduktion von Ausschuss und zum Schutz der Servicelevel.\n\nEntwickelt für Hochvolumen-Umgebungen, in denen Frische und Verfügbarkeit die Leistung definieren."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Bestandsgenauigkeit" },
        { value: "40%", label: "Weniger Ausschuss" },
        { value: "5pp", label: "OTIF-Verbesserung" },
        { value: "90%", label: "Weniger manuelle Prüfungen" }
      ]
    },
    problem: {
      headline: "Wenn die Palettenrealität von den Systemdaten abweicht",
      description: "Frische, Verfügbarkeit und Servicelevel hängen davon ab, genau zu wissen, was wo ist.",
      issues: [
        "Ausschuss durch abgelaufene oder vergessene Paletten",
        "Fehlbestände verursachen unvollständige Aufträge und OTIF-Verfehlung",
        "Überhöhte Puffer zum Schutz der Servicelevel",
        "Ständige Paletten- und Datumsprüfungen, um Aufträge abzuwickeln"
      ],
      closing: "Diese Probleme bestehen fort, weil ERP-Daten von der physischen Palettenrealität entkoppelt sind."
    },
    outcome: {
      headline: "Was sich mit physischer Verifizierung ändert",
      description: "Kontinuierlicher Abgleich zwischen System und Realität sorgt für stabile und planbare Prozesse.",
      benefits: [
        "Verlässliche Bestandsgenauigkeit auf Artikel-, Mengen- und Verfallsdatumsebene",
        "Weniger Ausschuss durch bessere FIFO/FEFO-Ausführung",
        "Höhere Servicelevel, weniger fehlende Paletten",
        "Teams befreit von ständigen manuellen Palettenprüfungen"
      ]
    },
    howItWorks: {
      headline: "Eine zusätzliche Transparenzebene für F&B-Betriebe",
      description: "Vexgen AI gleicht die physische Palettenrealität kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
      steps: [
        { step: "01", title: "Jede Bewegung erfassen", description: "Kameras überwachen Bestandsbewegungen kontinuierlich." },
        { step: "02", title: "Automatisch validieren", description: "Vision-KI identifiziert Materialien und Mengen in Echtzeit." },
        { step: "03", title: "ERP sofort synchronisieren", description: "Abweichungen werden automatisch korrigiert. Keine manuelle Eingabe." }
      ],
      closing: "Kein Systemwechsel. Keine Prozessumstellung. Minimale Reibung."
    },
    whoItsFor: {
      headline: "Entwickelt für Lebensmittel- und Getränkeunternehmen, die:",
      criteria: [
        "Grosse Mengen palettierter Waren und Zutaten verwalten",
        "Auf FIFO/FEFO zur Kontrolle von Ausschuss und Frische angewiesen sind",
        "Serviceprobleme trotz 'verfügbarem' Bestand erleben",
        "Auf manuelle Prüfungen und Puffer zum Schutz von OTIF angewiesen sind"
      ]
    },
    getStarted: {
      headline: "Ist das relevant für Ihren Betrieb?",
      description: "Ein kurzes Gespräch kann klären, ob physische Bestandstransparenz Frische, Servicelevel oder Kapitaleffizienz verbessern könnte."
    }
  }
};

export default function FoodBeverageIndustry() {
  return <IndustryTemplate content={foodBeverageContent} />;
}
