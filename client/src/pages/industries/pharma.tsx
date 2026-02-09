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
        { value: "30 %", label: "schnellere Chargenfreigabe" },
        { value: "50%", label: "Weniger Fehlbestände" },
        { value: "Doppelte", label: "Audit-Sicherheit" }
      ]
    },
    problem: {
      headline: "Wenn der Systembestand nicht der physischen Realität entspricht",
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
      description: "Kontinuierlicher Abgleich zwischen System und Realität sorgt für stabile und planbare Prozesse.",
      benefits: [
        "Verlässliche Bestandsgenauigkeit auf Chargen-, Status- und Lagerortebene",
        "Schnellere, zuverlässigere Chargenfreigaben",
        "Geringeres Compliance- und Audit-Risiko",
        "Weniger Abhängigkeit von konservativen Puffern"
      ]
    },
    howItWorks: {
      headline: "Eine Compliance-Ebene für Pharmabetriebe",
      description: "Vexgen AI gleicht den physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
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
  },
  es: {
    intro: {
      headline: "Farmacéutica",
      subheadline: "Su ERP. La realidad física de las operaciones farmacéuticas.",
      description: "Visibilidad de inventario en tiempo real en materias primas, WIP y producto terminado para mejorar la confianza en la liberación de lotes y reducir el riesgo de cumplimiento normativo.\n\nDesarrollado para entornos regulados donde la precisión y la trazabilidad son innegociables."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Precisión de inventario" },
        { value: "30%", label: "Liberación de lotes más rápida" },
        { value: "50%", label: "Menos roturas de stock" },
        { value: "2x", label: "Confianza en auditorías" }
      ]
    },
    problem: {
      headline: "Cuando el inventario del sistema no coincide con la realidad física",
      description: "La precisión, el estado y la trazabilidad afectan directamente al cumplimiento normativo y al suministro al paciente.",
      issues: [
        "Lotes retrasados por inventario faltante o mal ubicado",
        "Investigaciones manuales para conciliar sistema vs. realidad",
        "Buffers conservadores para proteger la disponibilidad",
        "Riesgo de auditoría por suposiciones en lugar de verificación"
      ],
      closing: "Estos problemas persisten porque el ERP no está alineado continuamente con la realidad física."
    },
    outcome: {
      headline: "Qué cambia con la verificación física",
      description: "El alineamiento continuo entre sistema y realidad transforma las operaciones.",
      benefits: [
        "Precisión fiable por lote, estado y ubicación",
        "Liberaciones de lotes más rápidas y fiables",
        "Menor riesgo de cumplimiento normativo y auditoría",
        "Menos dependencia de buffers conservadores"
      ]
    },
    howItWorks: {
      headline: "Una capa de cumplimiento normativo para operaciones farmacéuticas",
      description: "Vexgen AI alinea continuamente el inventario físico con su ERP. Todos los datos se procesan localmente y nunca abandonan sus instalaciones.",
      steps: [
        { step: "01", title: "Capturar cada movimiento", description: "Cámaras monitorizan flujos de inventario de forma continua." },
        { step: "02", title: "Validar automáticamente", description: "La IA de visión identifica materiales y cantidades en tiempo real." },
        { step: "03", title: "Sincronizar su ERP al instante", description: "Discrepancias corregidas automáticamente. Sin intervención manual." }
      ],
      closing: "Sin reemplazo de sistemas. Sin rediseño de procesos. Fricción mínima."
    },
    whoItsFor: {
      headline: "Desarrollado para organizaciones farmacéuticas que:",
      criteria: [
        "Operan en entornos regulados GMP",
        "Gestionan inventario controlado por lotes en múltiples ubicaciones",
        "Experimentan retrasos en la liberación pese a inventario 'disponible'",
        "Dependen de verificación manual para el cumplimiento normativo"
      ]
    },
    getStarted: {
      headline: "¿Es relevante para sus operaciones?",
      description: "Una breve conversación puede evaluar si la verificación física de inventario podría mejorar la confianza en la liberación o la posición de cumplimiento normativo."
    }
  }
};

export default function PharmaIndustry() {
  return <IndustryTemplate content={pharmaContent} />;
}
