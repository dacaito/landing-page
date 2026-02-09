import IndustryTemplate, { IndustryContent } from "./IndustryTemplate";

const cosmeticsContent: IndustryContent = {
  slug: 'cosmetics',
  heroImage: "/images/hero-cosmetics.png",
  processImage: "/images/process-cosmetics.png",
  layoutVariant: 'B',
  en: {
    intro: {
      headline: "Cosmetics",
      subheadline: "Your ERP. The physical truth for cosmetics operations.",
      description: "Real-time inventory visibility across production, warehousing, and distribution to protect launches and reduce write-offs.\n\nBuilt for high-mix environments where SKU accuracy and timing drive revenue."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Inventory Accuracy" },
        { value: "5pp", label: "Launch On-Time Rate" },
        { value: "6-Figure", label: "Obsolete Reduction" },
        { value: "10+ Days", label: "DIO Reduction" }
      ]
    },
    problem: {
      headline: "When system inventory doesn't match physical reality",
      description: "Availability, accuracy, and timing define success in cosmetics.",
      issues: [
        "Launches delayed by missing or misallocated SKUs",
        "Wrong variants in stock while high-demand SKUs are out",
        "Write-offs from obsolete packaging or canceled campaigns",
        "Manual checks needed to confirm launch readiness"
      ],
      closing: "These issues persist because ERP lacks real-time alignment with physical stock."
    },
    outcome: {
      headline: "What changes with physical verification",
      description: "Continuous alignment between system and reality transforms operations.",
      benefits: [
        "Trusted accuracy by SKU, variant, and location",
        "On-time launches with fewer surprises",
        "Reduced write-offs from misallocated inventory",
        "Less capital tied up in protective buffers"
      ]
    },
    howItWorks: {
      headline: "A launch protection layer for cosmetics operations",
      description: "Vexgen AI continuously aligns physical inventory with your ERP. All data is processed locally and never leaves your premises.",
      steps: [
        { step: "01", title: "Capture every movement", description: "Cameras monitor inventory flows continuously." },
        { step: "02", title: "Validate automatically", description: "Vision AI identifies materials and quantities in real time." },
        { step: "03", title: "Sync your ERP instantly", description: "Discrepancies corrected automatically. No manual input." }
      ],
      closing: "No system replacement. No process redesign. Minimal friction."
    },
    whoItsFor: {
      headline: "Built for cosmetics organizations that:",
      criteria: [
        "Manage large SKU portfolios with packaging variants",
        "Run frequent launches and campaign-driven demand",
        "Experience availability issues despite 'in-stock' data",
        "Use manual checks to protect launches and service"
      ]
    },
    getStarted: {
      headline: "Is this relevant for your operations?",
      description: "A short conversation can assess whether physical inventory visibility could improve launch readiness or capital efficiency."
    }
  },
  de: {
    intro: {
      headline: "Kosmetik",
      subheadline: "Ihr ERP. Die physische Wahrheit für Kosmetikbetriebe.",
      description: "Echtzeit-Bestandstransparenz über Produktion, Lagerung und Distribution zum Schutz von Produktlaunches und zur Reduktion von Abschreibungen.\n\nEntwickelt für High-Mix-Umgebungen, in denen Artikelgenauigkeit und Timing den Umsatz bestimmen."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Bestandsgenauigkeit" },
        { value: "5pp", label: "Pünktliche Launch-Rate" },
        { value: "6-stellig", label: "Einsparungen bei obsoleten Beständen" },
        { value: "10+ Tage", label: "DIO-Reduktion" }
      ]
    },
    problem: {
      headline: "Wenn der Systembestand nicht der physischen Realität entspricht",
      description: "Verfügbarkeit, Genauigkeit und Timing definieren Erfolg in der Kosmetik.",
      issues: [
        "Launches verzögert durch fehlende oder falsch zugeordnete Artikel",
        "Falsche Varianten auf Lager, während nachgefragte Artikel fehlen",
        "Abschreibungen durch veraltete Verpackungen oder abgesagte Kampagnen",
        "Manuelle Prüfungen zur Bestätigung der Launch-Bereitschaft erforderlich"
      ],
      closing: "Diese Probleme bestehen fort, weil dem ERP der Echtzeit-Abgleich mit physischem Bestand fehlt."
    },
    outcome: {
      headline: "Was sich mit physischer Verifizierung ändert",
      description: "Kontinuierlicher Abgleich zwischen System und Realität sorgt für stabile und planbare Prozesse.",
      benefits: [
        "Verlässliche Bestandsgenauigkeit auf Artikel-, Varianten- und Lagerortebene",
        "Pünktliche Launches mit weniger Überraschungen",
        "Weniger Abschreibungen durch falsch zugeordneten Bestand",
        "Weniger Kapital in Sicherheitspuffern gebunden"
      ]
    },
    howItWorks: {
      headline: "Eine zusätzliche Sicherheitsebene für Produktlaunches",
      description: "Vexgen AI gleicht den physischen Bestand kontinuierlich mit Ihrem ERP ab. Alle Daten werden lokal verarbeitet und verlassen niemals Ihr Gelände.",
      steps: [
        { step: "01", title: "Jede Bewegung erfassen", description: "Kameras überwachen Bestandsbewegungen kontinuierlich." },
        { step: "02", title: "Automatisch validieren", description: "Vision-KI identifiziert Materialien und Mengen in Echtzeit." },
        { step: "03", title: "ERP sofort synchronisieren", description: "Abweichungen werden automatisch korrigiert. Keine manuelle Eingabe." }
      ],
      closing: "Kein Systemwechsel. Keine Prozessumstellung. Minimale Reibung."
    },
    whoItsFor: {
      headline: "Entwickelt für Kosmetikunternehmen, die:",
      criteria: [
        "Grosse Artikelportfolios mit Verpackungsvarianten verwalten",
        "Häufige Launches und kampagnengetriebene Nachfrage betreiben",
        "Verfügbarkeitsprobleme trotz 'auf Lager'-Daten erleben",
        "Manuelle Prüfungen zum Schutz von Launches und Service nutzen"
      ]
    },
    getStarted: {
      headline: "Ist das relevant für Ihren Betrieb?",
      description: "Ein kurzes Gespräch kann klären, ob physische Bestandstransparenz Launch-Bereitschaft oder Kapitaleffizienz verbessern könnte."
    }
  },
  es: {
    intro: {
      headline: "Cosmética",
      subheadline: "Su ERP. La realidad física de las operaciones cosméticas.",
      description: "Visibilidad de inventario en tiempo real en producción, almacenamiento y distribución para proteger lanzamientos y reducir depreciaciones.\n\nDesarrollado para entornos de alta variedad donde la precisión de referencias y el timing determinan los ingresos."
    },
    provenResults: {
      metrics: [
        { value: ">99%", label: "Precisión de inventario" },
        { value: "5pp", label: "Tasa de lanzamiento puntual" },
        { value: "6 cifras", label: "Reducción de obsoletos" },
        { value: "10+", label: "Días Reducción DIO" }
      ]
    },
    problem: {
      headline: "Cuando el inventario del sistema no coincide con la realidad física",
      description: "La disponibilidad, la precisión y el timing definen el éxito en cosmética.",
      issues: [
        "Lanzamientos retrasados por referencias faltantes o mal asignadas",
        "Variantes incorrectas en stock mientras faltan las de alta demanda",
        "Depreciaciones por packaging obsoleto o campañas canceladas",
        "Verificaciones manuales necesarias para confirmar la preparación del lanzamiento"
      ],
      closing: "Estos problemas persisten porque al ERP le falta el alineamiento en tiempo real con el stock físico."
    },
    outcome: {
      headline: "Qué cambia con la verificación física",
      description: "El alineamiento continuo entre sistema y realidad transforma las operaciones.",
      benefits: [
        "Precisión fiable por referencia, variante y ubicación",
        "Lanzamientos puntuales con menos sorpresas",
        "Menos depreciaciones por inventario mal asignado",
        "Menos capital inmovilizado en buffers de protección"
      ]
    },
    howItWorks: {
      headline: "Una capa de protección de lanzamientos para operaciones cosméticas",
      description: "Vexgen AI alinea continuamente el inventario físico con su ERP. Todos los datos se procesan localmente y nunca abandonan sus instalaciones.",
      steps: [
        { step: "01", title: "Capturar cada movimiento", description: "Cámaras monitorizan flujos de inventario de forma continua." },
        { step: "02", title: "Validar automáticamente", description: "La IA de visión identifica materiales y cantidades en tiempo real." },
        { step: "03", title: "Sincronizar su ERP al instante", description: "Discrepancias corregidas automáticamente. Sin intervención manual." }
      ],
      closing: "Sin reemplazo de sistemas. Sin rediseño de procesos. Fricción mínima."
    },
    whoItsFor: {
      headline: "Desarrollado para organizaciones cosméticas que:",
      criteria: [
        "Gestionan amplios portfolios de referencias con variantes de packaging",
        "Realizan lanzamientos frecuentes y demanda por campañas",
        "Experimentan problemas de disponibilidad pese a datos de 'en stock'",
        "Utilizan verificaciones manuales para proteger lanzamientos y servicio"
      ]
    },
    getStarted: {
      headline: "¿Es relevante para sus operaciones?",
      description: "Una breve conversación puede evaluar si la visibilidad física de inventario podría mejorar la preparación de lanzamientos o la eficiencia de capital."
    }
  }
};

export default function CosmeticsIndustry() {
  return <IndustryTemplate content={cosmeticsContent} />;
}
