import IndustryTemplate, { IndustryContent } from "./IndustryTemplate";

const chemicalContent: IndustryContent = {
  slug: 'chemical',
  heroImage: "/images/hero-chemical.png",
  processImage: "/images/process-chemical.png",
  layoutVariant: 'B',
  en: {
    intro: {
      headline: "Chemical",
      subheadline: "Your ERP. The physical truth for chemical operations.",
      description: "Real-time inventory visibility across raw materials, WIP, and finished goods to reduce write-offs, avoid stockouts, and protect production flow.\n\nBuilt for environments with high working capital exposure, strict traceability, and shelf-life constraints."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Inventory Accuracy" },
        { value: "15+ Days", label: "DIO Reduction" },
        { value: "6-Figure", label: "Write-off Reduction" },
        { value: "12%", label: "Working Capital Freed" }
      ]
    },
    problem: {
      headline: "When system inventory doesn't match physical reality",
      description: "Materials dominate cost, risk, and production continuity. Divergence has immediate impact.",
      issues: [
        "Working capital tied up in inflated buffers",
        "Write-offs from expired or mislocated materials",
        "Stockouts affecting customer commitments",
        "Teams spending time on manual checks and firefighting"
      ],
      closing: "These issues persist because ERP data is disconnected from physical reality on the floor."
    },
    outcome: {
      headline: "What changes with physical verification",
      description: "Continuous alignment between system and reality transforms operations.",
      benefits: [
        "Trusted accuracy by material, lot, and location",
        "Lower working capital in inflated buffers",
        "Fewer downtimes from missing materials",
        "No more urgent purchasing or fire-drills"
      ]
    },
    howItWorks: {
      headline: "A risk protection layer for chemical plants",
      description: "Vexgen AI continuously aligns physical inventory with your ERP. All data is processed locally and never leaves your premises.",
      steps: [
        { step: "01", title: "Capture every movement", description: "Cameras monitor inventory flows continuously." },
        { step: "02", title: "Validate automatically", description: "Vision AI identifies materials and quantities in real time." },
        { step: "03", title: "Sync your ERP instantly", description: "Discrepancies corrected automatically. No manual input." }
      ],
      closing: "No system replacement. No process redesign. Minimal friction."
    },
    whoItsFor: {
      headline: "Built for chemical organizations where:",
      criteria: [
        "Inventory accuracy affects working capital and risk",
        "Shelf life, batch tracking, and traceability are critical",
        "Production plans depend on material availability",
        "Teams rely on manual checks or buffers to manage uncertainty"
      ]
    },
    getStarted: {
      headline: "Is this relevant for your operations?",
      description: "A short conversation can assess whether physical inventory visibility could improve capital efficiency or reduce operational risk."
    }
  },
  de: {
    intro: {
      headline: "Chemie",
      subheadline: "Ihr ERP. Die physische Wahrheit für Chemiebetriebe.",
      description: "Echtzeit-Bestandstransparenz über Rohstoffe, WIP und Fertigwaren zur Reduktion von Abschreibungen, Vermeidung von Fehlbeständen und zum Schutz des Produktionsflusses.\n\nEntwickelt für Umgebungen mit hoher Working-Capital-Bindung, strenger Rückverfolgbarkeit und Mindesthaltbarkeitsanforderungen."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Bestandsgenauigkeit" },
        { value: "15+ Tage", label: "DIO-Reduktion" },
        { value: "6-stellig", label: "Einsparungen bei Abschreibungen" },
        { value: "12%", label: "Freigesetztes Working Capital" }
      ]
    },
    problem: {
      headline: "Wenn der Systembestand nicht der physischen Realität entspricht",
      description: "Materialien dominieren Kosten, Risiko und Produktionskontinuität. Abweichungen haben sofortige Auswirkungen.",
      issues: [
        "Working Capital ist in überhöhten Sicherheitsbeständen gebunden",
        "Abschreibungen durch abgelaufene oder falsch platzierte Materialien",
        "Fehlbestände beeinträchtigen Kundenzusagen",
        "Teams verbringen Zeit mit manuellen Prüfungen und Krisenmanagement"
      ],
      closing: "Diese Probleme bestehen fort, weil ERP-Daten von der physischen Realität in der Produktion entkoppelt sind."
    },
    outcome: {
      headline: "Was sich mit physischer Verifizierung ändert",
      description: "Kontinuierlicher Abgleich zwischen System und Realität sorgt für stabile und planbare Prozesse.",
      benefits: [
        "Verlässliche Bestandsgenauigkeit auf Material-, Chargen- und Lagerortebene",
        "Weniger Working Capital in überhöhten Puffern",
        "Weniger Stillstände durch fehlende Materialien",
        "Keine Notbestellungen oder Krisenmanagement mehr"
      ]
    },
    howItWorks: {
      headline: "Eine zusätzliche Sicherheitsebene für Chemieanlagen",
      description: "Vexgen AI gleicht den physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
      steps: [
        { step: "01", title: "Jede Bewegung erfassen", description: "Kameras überwachen Bestandsbewegungen kontinuierlich." },
        { step: "02", title: "Automatisch validieren", description: "Vision-KI identifiziert Materialien und Mengen in Echtzeit." },
        { step: "03", title: "ERP sofort synchronisieren", description: "Abweichungen werden automatisch korrigiert. Keine manuelle Eingabe." }
      ],
      closing: "Kein Systemwechsel. Keine Prozessumstellung. Minimale Reibung."
    },
    whoItsFor: {
      headline: "Entwickelt für Chemieunternehmen, bei denen:",
      criteria: [
        "Bestandsgenauigkeit Working Capital und Risiko beeinflusst",
        "Mindesthaltbarkeit, Chargenverfolgung und Rückverfolgbarkeit kritisch sind",
        "Produktionspläne von Materialverfügbarkeit abhängen",
        "Teams auf manuelle Prüfungen oder Puffer zur Unsicherheitsbewältigung angewiesen sind"
      ]
    },
    getStarted: {
      headline: "Ist das relevant für Ihren Betrieb?",
      description: "Ein kurzes Gespräch kann klären, ob physische Bestandstransparenz die Kapitaleffizienz verbessern oder operatives Risiko reduzieren könnte."
    }
  },
  es: {
    intro: {
      headline: "Química",
      subheadline: "Su ERP. La realidad física de sus operaciones químicas.",
      description: "Visibilidad de inventario en tiempo real en materias primas, WIP y producto terminado para reducir depreciaciones, evitar roturas de stock y proteger el flujo productivo.\n\nDesarrollado para entornos con alta exposición de capital de trabajo, trazabilidad estricta y requisitos de vida útil."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Precisión de inventario" },
        { value: "15+", label: "Días Reducción DIO" },
        { value: "6 cifras", label: "Reducción de depreciaciones" },
        { value: "12%", label: "Capital de trabajo liberado" }
      ]
    },
    problem: {
      headline: "Cuando el inventario del sistema no coincide con la realidad física",
      description: "Los materiales dominan costes, riesgos y continuidad productiva. Las divergencias tienen impacto inmediato.",
      issues: [
        "Capital de trabajo inmovilizado en buffers inflados",
        "Depreciaciones por materiales caducados o mal ubicados",
        "Roturas de stock que afectan compromisos con clientes",
        "Equipos dedicando tiempo a verificaciones manuales y gestión de urgencias"
      ],
      closing: "Estos problemas persisten porque los datos del ERP están desconectados de la realidad física en planta."
    },
    outcome: {
      headline: "Qué cambia con la verificación física",
      description: "El alineamiento continuo entre sistema y realidad transforma las operaciones.",
      benefits: [
        "Precisión fiable por material, lote y ubicación",
        "Menor capital de trabajo en buffers inflados",
        "Menos paradas por materiales faltantes",
        "Fin de las compras urgentes y gestión de crisis"
      ]
    },
    howItWorks: {
      headline: "Una capa de protección para plantas químicas",
      description: "Vexgen AI alinea continuamente el inventario físico con su ERP. Todos los datos se procesan localmente y nunca abandonan sus instalaciones.",
      steps: [
        { step: "01", title: "Capturar cada movimiento", description: "Cámaras monitorizan flujos de inventario de forma continua." },
        { step: "02", title: "Validar automáticamente", description: "La IA de visión identifica materiales y cantidades en tiempo real." },
        { step: "03", title: "Sincronizar su ERP al instante", description: "Discrepancias corregidas automáticamente. Sin intervención manual." }
      ],
      closing: "Sin reemplazo de sistemas. Sin rediseño de procesos. Fricción mínima."
    },
    whoItsFor: {
      headline: "Desarrollado para organizaciones químicas donde:",
      criteria: [
        "La precisión de inventario afecta al capital de trabajo y al riesgo",
        "La vida útil, el seguimiento de lotes y la trazabilidad son críticos",
        "Los planes de producción dependen de la disponibilidad de materiales",
        "Los equipos dependen de verificaciones manuales o buffers para gestionar la incertidumbre"
      ]
    },
    getStarted: {
      headline: "¿Es relevante para sus operaciones?",
      description: "Una breve conversación puede evaluar si la visibilidad física de inventario podría mejorar la eficiencia de capital o reducir el riesgo operativo."
    }
  }
};

export default function ChemicalIndustry() {
  return <IndustryTemplate content={chemicalContent} />;
}
