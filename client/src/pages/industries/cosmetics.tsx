import IndustryTemplate, { IndustryContent, LayoutVariant } from "./IndustryTemplate";

const cosmeticsContent: IndustryContent = {
  slug: 'cosmetics',
  layoutVariant: 'B' as LayoutVariant,
  intro: {
    headline: "Cosmetics",
    subheadline: "Your ERP. The physical truth for cosmetics operations.",
    description: "Real-time inventory visibility across production, warehousing, and distribution to protect launches and reduce write-offs.\n\nBuilt for high-mix environments where SKU accuracy and timing drive revenue.",
    heroImage: "/images/hero-cosmetics.png"
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
    closing: "No system replacement. No process redesign. Minimal friction.",
    processImage: "/images/process-cosmetics.png"
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
};

export default function CosmeticsIndustry() {
  return <IndustryTemplate content={cosmeticsContent} />;
}
