import IndustryTemplate, { IndustryContent, LayoutVariant } from "./IndustryTemplate";

const plasticsContent: IndustryContent = {
  slug: 'plastics',
  layoutVariant: 'B' as LayoutVariant,
  intro: {
    headline: "Plastics Manufacturing",
    subheadline: "Your ERP. The physical truth for plastics manufacturing.",
    description: "Real-time inventory visibility across raw materials, WIP, and finished goods to keep injection molding, extrusion, and assembly lines running.\n\nBuilt for high-mix, high-volume environments where uptime and accuracy drive margins.",
    heroImage: "/images/hero-plastics.png"
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
};

export default function PlasticsIndustry() {
  return <IndustryTemplate content={plasticsContent} />;
}
