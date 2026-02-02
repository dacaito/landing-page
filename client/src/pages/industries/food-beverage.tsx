import IndustryTemplate, { IndustryContent } from "./IndustryTemplate";

const foodBeverageContent: IndustryContent = {
  intro: {
    headline: "Food & Beverage",
    subheadline: "Your ERP. The physical truth for food and beverage operations.",
    description: "Real-time inventory visibility for food and beverage producers to reduce waste, avoid stockouts, and protect service levels across pallets of raw materials, WIP, and finished goods. Built for high-volume environments where freshness, availability, and inventory accuracy directly impact margins and customer trust.",
    heroImage: "/images/hero-food-beverage.png"
  },
  provenResults: {
    metrics: [
      { value: ">99%", label: "Inventory Accuracy" },
      { value: "6-Figure", label: "Waste Reduction" },
      { value: ">5pp", label: "OTIF Improvement" },
      { value: "Double-digit", label: "Working Capital Reduction" }
    ]
  },
  problem: {
    headline: "When physical pallet reality diverges from what systems report",
    description: "Inventory sits at the center of food and beverage operations, where freshness, availability, and service levels define performance.",
    issues: [
      "Waste and write-offs from expired or forgotten pallets",
      "Stockouts leading to incomplete orders and OTIF misses",
      "Excess buffers built to protect service levels",
      "Teams constantly checking pallets, dates, and locations to keep orders moving"
    ],
    closing: "Despite ERP, these issues persist because system inventory is often disconnected from what is physically on pallets, in staging areas, and at outbound docks."
  },
  outcome: {
    headline: "What changes when ERP reflects physical reality",
    description: "Continuous physical verification transforms operations from reactive to predictable.",
    benefits: [
      "Inventory accuracy you can trust by SKU, quantity, and expiration date",
      "Lower waste through better FIFO/FEFO execution",
      "Higher service levels by avoiding missing or mislocated pallets",
      "Lower working capital tied up in protective buffers",
      "More productive use of workforce time, with fewer manual checks and firefighting"
    ]
  },
  howItWorks: {
    headline: "A freshness and flow protection layer for food & beverage plants",
    description: "Vexgen adds a continuous visual verification layer on top of your existing ERP. By continuously aligning physical pallet reality with system data, Vexgen helps food and beverage teams:",
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
    headline: "Designed for food and beverage organizations that:",
    criteria: [
      "Manage large volumes of palletized finished goods and ingredients",
      "Depend on FIFO/FEFO to control waste and freshness",
      "Experience service issues despite \"available\" system inventory",
      "Rely on manual pallet checks and buffers to protect OTIF"
    ]
  },
  getStarted: {
    headline: "Explore whether this is relevant for your food & beverage operations",
    description: "A short conversation is often enough to assess whether physical inventory visibility is limiting freshness, service levels, or capital efficiency in your current setup."
  }
};

export default function FoodBeverageIndustry() {
  return <IndustryTemplate content={foodBeverageContent} />;
}
