import IndustryTemplate, { IndustryContent, LayoutVariant } from "./IndustryTemplate";

const pharmaContent: IndustryContent = {
  layoutVariant: 'B' as LayoutVariant,
  intro: {
    headline: "Pharmaceutical",
    subheadline: "Your ERP. The physical truth for pharmaceutical operations.",
    description: "Real-time inventory visibility for pharmaceutical manufacturers to improve batch confidence and reduce compliance risk across raw materials, WIP, and finished goods.\n\nBuilt for regulated environments where inventory accuracy, physical traceability, and release confidence are non-negotiable.",
    heroImage: "/images/hero-pharma.png"
  },
  provenResults: {
    metrics: [
      { value: ">99%", label: "Inventory Accuracy" },
      { value: ">30%", label: "Release Delay Reduction" },
      { value: "6-Figure", label: "Write-off Reduction" },
      { value: ">50%", label: "Stockout Reduction" }
    ]
  },
  problem: {
    headline: "When physical inventory diverges from what systems report",
    description: "Inventory sits at the center of pharmaceutical operations, where accuracy, status, and traceability directly affect compliance and patient supply.",
    issues: [
      "Batches delayed or blocked due to missing or mislocated inventory",
      "Manual investigations to reconcile system data and physical reality",
      "Conservative buffers introduced to protect availability and compliance",
      "Increased audit risk driven by reliance on assumptions rather than verification"
    ],
    closing: "Despite mature ERP, these issues persist because system data is often not continuously aligned with physical inventory reality on the shop floor and in warehouses."
  },
  outcome: {
    headline: "What changes when ERP reflects physical reality",
    description: "Continuous physical verification transforms operations from reactive to predictable.",
    benefits: [
      "Inventory accuracy you can trust by batch, status, and physical location",
      "Faster and more reliable batch release decisions",
      "Lower compliance and audit risk through continuous verification",
      "Reduced reliance on conservative buffers to protect availability",
      "More productive use of QA and operations time, with fewer manual reconciliations"
    ]
  },
  howItWorks: {
    headline: "A compliance and release confidence layer for pharmaceutical operations",
    description: "Vexgen AI adds a continuous visual verification layer on top of your existing ERP. By continuously aligning physical inventory reality with system data, Vexgen AI helps pharma teams:",
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
    headline: "Designed for pharmaceutical organizations that:",
    criteria: [
      "Operate in GMP-regulated environments",
      "Manage batch-controlled inventory across multiple physical locations",
      "Experience release delays despite \"available\" system inventory",
      "Rely on manual verification to maintain compliance and audit readiness"
    ]
  },
  getStarted: {
    headline: "Explore whether this is relevant for your pharmaceutical operations",
    description: "A short conversation is often enough to assess whether continuous physical inventory verification could improve release confidence, compliance posture, or operational efficiency."
  }
};

export default function PharmaIndustry() {
  return <IndustryTemplate content={pharmaContent} />;
}
