import IndustryTemplate, { IndustryContent } from "./IndustryTemplate";

const cosmeticsContent: IndustryContent = {
  intro: {
    headline: "Cosmetics",
    subheadline: "Your ERP. The physical truth for cosmetics operations.",
    description: "Real-time inventory visibility for cosmetics manufacturers to protect product launches, reduce write-offs, and ensure the right SKUs are available across production, warehousing, and distribution.\n\nBuilt for high-mix environments where SKU accuracy, variant complexity, and time-to-market directly impact revenue and brand reputation.",
    heroImage: "/images/hero-cosmetics.png"
  },
  provenResults: {
    metrics: [
      { value: ">5pp", label: "Launch Readiness" },
      { value: ">99%", label: "Inventory Accuracy" },
      { value: "6-Figure", label: "Obsolete Stock Reduction" },
      { value: "Double-digit", label: "Working Capital Reduction" }
    ]
  },
  problem: {
    headline: "When physical inventory diverges from what systems report",
    description: "Inventory sits at the center of cosmetics operations, where availability, accuracy, and timing define success.",
    issues: [
      "Product launches delayed due to missing or misallocated SKUs",
      "Excess stock in the wrong variants while high-demand SKUs are unavailable",
      "Write-offs from obsolete packaging, expired products, or canceled campaigns",
      "Teams relying on manual checks to confirm launch and order readiness"
    ],
    closing: "Despite ERP, these issues persist because system inventory often lacks reliable, real-time alignment with physical stock by SKU, variant, and location."
  },
  outcome: {
    headline: "What changes when ERP reflects physical reality",
    description: "Continuous physical verification transforms operations from reactive to predictable.",
    benefits: [
      "Inventory accuracy you can trust by SKU, variant, batch, and physical location",
      "On-time product launches and promotions with fewer last-minute surprises",
      "Reduced write-offs from obsolete, expired, or misallocated inventory",
      "Lower working capital tied up in protective buffers",
      "More productive use of workforce time, with fewer manual checks and launch reconciliations"
    ]
  },
  howItWorks: {
    headline: "A launch and availability protection layer for cosmetics operations",
    description: "Vexgen AI adds a continuous visual verification layer on top of your existing ERP. By continuously aligning physical inventory reality with system data, Vexgen AI helps cosmetics teams:",
    steps: [
      {
        step: "01",
        title: "Capture every movement",
        description: "Cameras continuously monitor inventory flows. Nothing goes untracked."
      },
      {
        step: "02",
        title: "Validate automatically",
        description: "Vision technology identifies materials, movements and quantities in real time."
      },
      {
        step: "03",
        title: "Sync your ERP instantly",
        description: "Discrepancies detected and corrected automatically. No operator input needed."
      }
    ],
    closing: "No system replacement. No process redesign. Minimal operational friction."
  },
  whoItsFor: {
    headline: "Designed for cosmetics organizations that:",
    criteria: [
      "Manage large SKU portfolios driven by packaging and market variants",
      "Run frequent launches, promotions, and campaign-driven demand",
      "Experience availability issues despite \"in-stock\" system data",
      "Use manual checks and buffers to protect launches and service levels"
    ]
  },
  getStarted: {
    headline: "Explore whether this is relevant for your cosmetics operations",
    description: "A short conversation is often enough to assess whether physical inventory visibility is limiting launch readiness, service levels, or capital efficiency in your current setup."
  }
};

export default function CosmeticsIndustry() {
  return <IndustryTemplate content={cosmeticsContent} />;
}
