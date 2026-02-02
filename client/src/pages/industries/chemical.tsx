import IndustryTemplate, { IndustryContent, LayoutVariant } from "./IndustryTemplate";

const chemicalContent: IndustryContent = {
  slug: 'chemical',
  layoutVariant: 'B' as LayoutVariant,
  intro: {
    headline: "Chemical",
    subheadline: "Your ERP. The physical truth for chemical operations.",
    description: "Real-time inventory visibility across raw materials, WIP, and finished goods to reduce write-offs, avoid stockouts, and protect production flow.\n\nBuilt for environments with high working capital exposure, strict traceability, and shelf-life constraints.",
    heroImage: "/images/hero-chemical.png"
  },
  provenResults: {
    metrics: [
      { value: ">99%", label: "Inventory Accuracy" },
      { value: "6-Figure", label: "Write-off Reduction" },
      { value: "Double-digit", label: "DIO Reduction" },
      { value: ">90%", label: "Less Cycle Counting" }
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
      {
        step: "01",
        title: "Capture every movement",
        description: "Cameras monitor inventory flows continuously."
      },
      {
        step: "02",
        title: "Validate automatically",
        description: "Vision AI identifies materials and quantities in real time."
      },
      {
        step: "03",
        title: "Sync your ERP instantly",
        description: "Discrepancies corrected automatically. No manual input."
      }
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
};

export default function ChemicalIndustry() {
  return <IndustryTemplate content={chemicalContent} />;
}
