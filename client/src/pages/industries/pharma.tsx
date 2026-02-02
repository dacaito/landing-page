import IndustryTemplate, { IndustryContent, LayoutVariant } from "./IndustryTemplate";

const pharmaContent: IndustryContent = {
  slug: 'pharma',
  layoutVariant: 'B' as LayoutVariant,
  intro: {
    headline: "Pharmaceutical",
    subheadline: "Your ERP. The physical truth for pharmaceutical operations.",
    description: "Real-time inventory visibility across raw materials, WIP, and finished goods to improve batch confidence and reduce compliance risk.\n\nBuilt for regulated environments where accuracy and traceability are non-negotiable.",
    heroImage: "/images/hero-pharma.png"
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
};

export default function PharmaIndustry() {
  return <IndustryTemplate content={pharmaContent} />;
}
