import IndustryTemplate, { IndustryContent, LayoutVariant } from "./IndustryTemplate";

const foodBeverageContent: IndustryContent = {
  slug: 'food-beverage',
  layoutVariant: 'B' as LayoutVariant,
  intro: {
    headline: "Food & Beverage",
    subheadline: "Your ERP. The physical truth for food and beverage operations.",
    description: "Real-time inventory visibility across pallets of raw materials, WIP, and finished goods to reduce waste and protect service levels.\n\nBuilt for high-volume environments where freshness and availability define performance.",
    heroImage: "/images/hero-food-beverage.png"
  },
  provenResults: {
    metrics: [
      { value: ">99%", label: "Inventory Accuracy" },
      { value: "40%", label: "Less Waste" },
      { value: "5pp", label: "OTIF Improvement" },
      { value: "90%", label: "Less Manual Checks" }
    ]
  },
  problem: {
    headline: "When pallet reality diverges from system data",
    description: "Freshness, availability, and service levels depend on knowing exactly what's where.",
    issues: [
      "Waste from expired or forgotten pallets",
      "Stockouts causing incomplete orders and OTIF misses",
      "Excess buffers to protect service levels",
      "Constant pallet and date checks to keep orders moving"
    ],
    closing: "These issues persist because ERP data is disconnected from physical pallet reality."
  },
  outcome: {
    headline: "What changes with physical verification",
    description: "Continuous alignment between system and reality transforms operations.",
    benefits: [
      "Trusted accuracy by SKU, quantity, and expiration",
      "Lower waste through better FIFO/FEFO execution",
      "Higher service levels, fewer missing pallets",
      "Less capital tied up in protective buffers"
    ]
  },
  howItWorks: {
    headline: "A freshness protection layer for F&B operations",
    description: "Vexgen AI continuously aligns physical pallet reality with your ERP. All data is processed locally and never leaves your premises.",
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
    processImage: "/images/process-food-beverage.png"
  },
  whoItsFor: {
    headline: "Built for food & beverage organizations that:",
    criteria: [
      "Manage large volumes of palletized goods and ingredients",
      "Depend on FIFO/FEFO to control waste and freshness",
      "Experience service issues despite 'available' inventory",
      "Rely on manual checks and buffers to protect OTIF"
    ]
  },
  getStarted: {
    headline: "Is this relevant for your operations?",
    description: "A short conversation can assess whether physical inventory visibility could improve freshness, service levels, or capital efficiency."
  }
};

export default function FoodBeverageIndustry() {
  return <IndustryTemplate content={foodBeverageContent} />;
}
