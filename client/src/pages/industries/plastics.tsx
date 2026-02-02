import IndustryTemplate, { IndustryContent, LayoutVariant } from "./IndustryTemplate";

const plasticsContent: IndustryContent = {
  layoutVariant: 'A' as LayoutVariant,
  intro: {
    headline: "Plastics Manufacturing",
    subheadline: "Your ERP. The physical truth for plastics manufacturing.",
    description: "Real-time inventory visibility for plastics manufacturers to keep injection molding, extrusion, and assembly lines running without interruptions, across raw materials, WIP, and finished goods.\n\nBuilt for high-mix, high-volume environments where piece availability, SKU accuracy, and line uptime directly drive throughput and margins.",
    heroImage: "/images/hero-plastics.png"
  },
  provenResults: {
    metrics: [
      { value: ">99%", label: "Inventory Accuracy" },
      { value: "6-Figure", label: "Write-off Reduction" },
      { value: "Double-digit", label: "DIO Reduction" },
      { value: ">90%", label: "Less Manual Checks" }
    ]
  },
  problem: {
    headline: "When physical inventory diverges from system data, the impact is immediate",
    description: "Inventory sits at the center of plastics operations, where throughput depends on having the right parts, in the right quantity, at the right machine, at the right time.",
    issues: [
      "Injection or extrusion lines waiting for material that \"exists\" in the system",
      "Excess buffers built to protect against uncertainty",
      "Finished goods piling up while the wrong SKUs are missing",
      "Teams constantly checking boxes, pallets, and WIP to keep production moving"
    ],
    closing: "Despite mature ERP and planning systems, these issues persist because system inventory is often disconnected from what is physically available at machines, staging areas, and warehouses."
  },
  outcome: {
    headline: "What changes when ERP reflects physical reality",
    description: "Continuous physical verification transforms operations from reactive to predictable.",
    benefits: [
      "Inventory accuracy you can trust by SKU, piece count, and physical location",
      "Higher line uptime by eliminating material-related stoppages",
      "Lower working capital tied up in oversized buffers and slow-moving SKUs",
      "Urgent rescheduling and recovery actions eliminated at the source",
      "More productive use of workforce time, with fewer manual checks and expediting"
    ]
  },
  howItWorks: {
    headline: "A flow protection layer for plastics plants",
    description: "Vexgen AI adds a continuous visual verification layer on top of your existing ERP. By continuously aligning physical inventory reality with system data, Vexgen AI helps teams:",
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
    headline: "Designed for plastics manufacturers that:",
    criteria: [
      "Run injection molding, extrusion, or assembly lines with tight sequencing",
      "Manage high number of SKUs across boxes, pallets, and WIP areas",
      "Experience line stoppages despite \"available\" system inventory",
      "Use buffers, safety stock, or manual checks to protect throughput"
    ]
  },
  getStarted: {
    headline: "Explore whether this is relevant for your plastics operations",
    description: "A short conversation is often enough to assess whether physical inventory visibility is limiting line uptime, throughput, or capital efficiency in your current setup."
  }
};

export default function PlasticsIndustry() {
  return <IndustryTemplate content={plasticsContent} />;
}
