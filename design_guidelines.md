# Vexgen AI Design Guidelines

## Design Approach

**Reference-Based: Apple + Tesla Aesthetic**

Drawing inspiration from Apple's premium minimalism and Tesla's bold confidence. Large-scale typography, generous whitespace, and data-driven credibility markers. This creates a sophisticated technical product that appeals to both PE investors (showing traction/metrics) and enterprise clients (showing capability).

## Typography

**Primary Font:** Inter or SF Pro Display (via Google Fonts)
**Secondary Font:** Inter for body text

**Hierarchy:**
- Hero Headlines: text-6xl to text-8xl (96px-128px), font-bold, tracking-tight, leading-none
- Section Headlines: text-5xl to text-6xl (48px-72px), font-bold
- Subheadlines: text-2xl to text-3xl (24px-36px), font-medium
- Body Large: text-xl (20px), font-normal, leading-relaxed
- Body Standard: text-base to text-lg (16px-18px)
- Metrics/Stats: text-4xl to text-5xl, font-bold (for numerical displays)

## Layout System

**Spacing Units:** Tailwind 8, 12, 16, 20, 24, 32 for primary spacing
**Section Padding:** py-24 to py-32 (desktop), py-16 to py-20 (mobile)
**Container:** max-w-7xl for full sections, max-w-4xl for content-focused areas

**Grid Strategy:**
- Hero: Single column, centered
- Metrics: 3-4 column grid (grid-cols-3 lg:grid-cols-4)
- Features: 2-3 column layouts
- Mobile: Always single column stacking

## Component Library

### Navigation
Minimal top bar with logo left, "Request Demo" CTA right. Sticky on scroll. Ultra-clean, almost invisible until needed.

### Hero Section
**Full viewport height (min-h-screen)** with:
- Massive headline (text-7xl/text-8xl) 
- Brief subheadline (text-2xl, max-w-3xl)
- Video player (rounded-2xl, shadow-2xl) showing product in action
- Single prominent CTA button below video
- Subtle scroll indicator at bottom

### Metrics/Results Cards
Large numerical displays in 3-4 column grid:
- Stat number (text-5xl, font-bold)
- Label below (text-sm, uppercase, tracking-wider, opacity-70)
- Minimal card styling (subtle border or background)
- Generous padding (p-8 to p-12)

### Content Sections
Alternating full-width layouts:
- Text-heavy: max-w-4xl, centered
- Text + Image: 2-column grid (1fr 1fr), image on alternating sides
- Process steps: Vertical timeline or numbered cards

### CTA Sections
Full-width with centered content:
- Bold headline (text-4xl to text-5xl)
- Supporting text (text-xl, max-w-2xl)
- Large button (px-8 py-4, text-lg)

### Buttons
- Primary: Large rounded buttons (rounded-full or rounded-xl), px-8 py-4
- On images: backdrop-blur-md background, semi-transparent
- Hover: Subtle transform (scale-105) and opacity changes

## Images

**Hero Section:** 
Use the provided product demo video as the centerpiece. Position it prominently below the headline in a contained player (max-w-5xl, rounded-2xl, with shadow).

**Dashboard Screenshots:**
- Display KPI dashboard screenshot (image.png) in Results section
- Show ERP comparison screenshot (image 1.png) in Outcome section
- Full-width or 2/3 width, rounded corners, subtle shadow
- Caption below describing what's shown

**Video Integration:**
Primary hero element. Modern video player with controls, subtle rounded corners, prominent positioning.

## Section-by-Section Layout

1. **Hero:** Full viewport, centered massive text, video player below, single CTA
2. **Results:** Dark/contrasting section, 4-column metric grid, bold numbers
3. **Problem:** Text-focused, max-w-4xl centered, bullet points with generous spacing
4. **Outcome:** Split layout - text left, screenshot right
5. **How it Works:** 3-step process cards or timeline, numbered
6. **Who It's For:** Centered text with industry tags
7. **Final CTA:** Full-width, bold, clean

## Key Principles

- **Bold Typography:** Never shy away from massive headlines
- **Whitespace:** Generous padding between all sections (py-24+)
- **Data-First:** Metrics and numbers prominently displayed
- **Asymmetry:** Vary layouts between sections to maintain visual interest
- **Minimal Animation:** Only subtle hover states, no distracting scroll effects
- **Premium Polish:** Rounded corners, soft shadows, refined details throughout

This creates an Apple/Tesla-inspired aesthetic: confident, premium, technically sophisticated, and data-driven.