import IndustryTemplate, { IndustryContent } from "./IndustryTemplate";

const logisticsContent: IndustryContent = {
  slug: 'logistics',
  heroImage: "/images/hero-logistics.png",
  processImage: "/images/process-logistics.png",
  layoutVariant: 'B',
  en: {
    intro: {
      headline: "Logistics & Fulfillment",
      subheadline: "Your ERP. The physical truth for logistics operations.",
      description: "Real-time inventory visibility that eliminates manual labor, reduces errors, and ensures reliable fulfillment across warehouses and distribution centers.\n\nBuilt for high-volume operations where accuracy and speed determine customer satisfaction."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Order Accuracy" },
        { value: "75%", label: "Less Manual Labor" },
        { value: "90%", label: "Fewer Picking Errors" },
        { value: "<24h", label: "Discrepancy Resolution" }
      ]
    },
    problem: {
      headline: "When inventory errors become customer problems",
      description: "Fulfillment reliability depends on knowing exactly what's available, where it is, and that it matches system records.",
      issues: [
        "Manual cycle counts consuming hours of labor daily",
        "Picking errors leading to returns and customer complaints",
        "Inventory discrepancies discovered only at shipping",
        "Staff constantly verifying what the system should already know"
      ],
      closing: "These issues persist because ERP data diverges from physical reality between updates."
    },
    outcome: {
      headline: "What changes with continuous verification",
      description: "Automatic alignment between physical inventory and system data transforms fulfillment operations.",
      benefits: [
        "Eliminate routine manual counts and spot-checks",
        "Catch discrepancies before they reach customers",
        "Free staff for value-adding tasks instead of verification",
        "Build customer trust through consistent order accuracy"
      ]
    },
    howItWorks: {
      headline: "A verification layer for logistics operations",
      description: "Vexgen AI continuously aligns physical inventory with your WMS/ERP. All data is processed locally and never leaves your premises.",
      steps: [
        { step: "01", title: "Capture every movement", description: "Cameras monitor inventory flows across receiving, storage, and shipping." },
        { step: "02", title: "Validate automatically", description: "Vision AI identifies items, quantities, and locations in real time." },
        { step: "03", title: "Sync your systems instantly", description: "Discrepancies corrected automatically. No manual reconciliation." }
      ],
      closing: "No workflow changes. No barcode dependency. Minimal disruption."
    },
    whoItsFor: {
      headline: "Built for logistics operations that:",
      criteria: [
        "Process high order volumes with tight delivery windows",
        "Spend significant labor hours on manual inventory checks",
        "Experience picking errors despite trained staff",
        "Need to improve accuracy without adding headcount"
      ]
    },
    getStarted: {
      headline: "Is this relevant for your operations?",
      description: "A short conversation can assess whether automated inventory verification could reduce labor, improve accuracy, or enhance reliability."
    }
  },
  de: {
    intro: {
      headline: "Logistik & Fulfillment",
      subheadline: "Ihr ERP. Die physische Wahrheit für Logistikbetriebe.",
      description: "Echtzeit-Bestandstransparenz, die manuelle Arbeit eliminiert, Fehler reduziert und zuverlässige Auftragsabwicklung in Lagern und Distributionszentren gewährleistet.\n\nEntwickelt für Hochvolumen-Betriebe, in denen Genauigkeit und Geschwindigkeit die Kundenzufriedenheit bestimmen."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Auftragsgenauigkeit" },
        { value: "75%", label: "Weniger manuelle Arbeit" },
        { value: "90%", label: "Weniger Kommissionierfehler" },
        { value: "<24h", label: "Abweichungsbehebung" }
      ]
    },
    problem: {
      headline: "Wenn Bestandsfehler zu Kundenproblemen werden",
      description: "Zuverlässige Auftragsabwicklung erfordert genaues Wissen darüber, was verfügbar ist, wo es sich befindet und dass es mit den Systemdaten übereinstimmt.",
      issues: [
        "Manuelle Inventuren, die täglich Stunden an Arbeitszeit verbrauchen",
        "Kommissionierfehler, die zu Retouren und Kundenbeschwerden führen",
        "Bestandsabweichungen, die erst beim Versand entdeckt werden",
        "Mitarbeiter, die ständig verifizieren, was das System bereits wissen sollte"
      ],
      closing: "Diese Probleme bestehen fort, weil ERP-Daten zwischen Updates von der physischen Realität abweichen."
    },
    outcome: {
      headline: "Was sich mit kontinuierlicher Verifizierung ändert",
      description: "Automatischer Abgleich zwischen physischem Bestand und Systemdaten sorgt für stabile und planbare Prozesse.",
      benefits: [
        "Routinemäßige manuelle Zählungen und Stichproben eliminieren",
        "Abweichungen erkennen, bevor sie beim Kunden ankommen",
        "Mitarbeiter für wertschöpfende Aufgaben statt Verifizierung einsetzen",
        "Kundenvertrauen durch konstante Auftragsgenauigkeit aufbauen"
      ]
    },
    howItWorks: {
      headline: "Eine Verifizierungsebene für Logistikbetriebe",
      description: "Vexgen AI gleicht den physischen Bestand kontinuierlich mit Ihrem WMS/ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
      steps: [
        { step: "01", title: "Jede Bewegung erfassen", description: "Kameras überwachen Bestandsbewegungen in Wareneingang, Lager und Versand." },
        { step: "02", title: "Automatisch validieren", description: "Vision-KI identifiziert Artikel, Mengen und Lagerorte in Echtzeit." },
        { step: "03", title: "Systeme sofort synchronisieren", description: "Abweichungen werden automatisch korrigiert. Keine manuelle Abstimmung." }
      ],
      closing: "Keine Workflow-Änderungen. Keine Barcode-Abhängigkeit. Minimale Unterbrechung."
    },
    whoItsFor: {
      headline: "Entwickelt für Logistikbetriebe, die:",
      criteria: [
        "Hohe Auftragsvolumen mit engen Lieferfenstern verarbeiten",
        "Erhebliche Arbeitsstunden für manuelle Bestandsprüfungen aufwenden",
        "Trotz geschultem Personal Kommissionierfehler erleben",
        "Genauigkeit verbessern müssen, ohne Personal aufzustocken"
      ]
    },
    getStarted: {
      headline: "Ist das relevant für Ihren Betrieb?",
      description: "Ein kurzes Gespräch kann klären, ob automatisierte Bestandsverifizierung Arbeitsaufwand reduzieren, Genauigkeit verbessern oder Zuverlässigkeit erhöhen könnte."
    }
  }
};

export default function LogisticsIndustry() {
  return <IndustryTemplate content={logisticsContent} />;
}
