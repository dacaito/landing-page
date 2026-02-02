# Vexgen AI Landing Page

## Overview
A Vite + React landing page for Vexgen AI, a company offering real-time visibility solutions that bridge the gap between ERP systems and physical inventory.

## Project Architecture
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS with Radix UI components
- **Routing**: Wouter

## Project Structure
```
├── client/           # Frontend source
│   ├── src/
│   │   ├── pages/
│   │   │   ├── home.tsx          # Main landing page
│   │   │   ├── industries/       # Industry-specific pages
│   │   │   │   ├── IndustryTemplate.tsx  # Shared template
│   │   │   │   ├── plastics.tsx
│   │   │   │   ├── food-beverage.tsx
│   │   │   │   ├── cosmetics.tsx
│   │   │   │   └── pharma.tsx
│   │   │   └── not-found.tsx
│   │   ├── components/ui/  # Radix UI components
│   │   └── lib/            # Utilities and translations
│   ├── public/       # Static assets
│   └── index.html    # HTML entry point
├── attached_assets/  # Project assets
├── vite.config.ts    # Vite configuration
├── tailwind.config.ts # Tailwind configuration
└── package.json      # Dependencies and scripts
```

## Routes
- `/` - Home page
- `/industries/plastics` - Plastics industry page
- `/industries/food-beverage` - Food & Beverage industry page
- `/industries/cosmetics` - Cosmetics industry page
- `/industries/pharma` - Pharmaceutical industry page
- `/industries/chemical` - Chemical industry page
- `/company` - Company/About page
- `/privacy` - Privacy Policy page
- `/imprint` - Imprint/Legal page

## Scripts
- `npm run dev:web` - Start development server on port 5000
- `npm run build:web` - Build for production (outputs to dist/public)
- `npm run check` - TypeScript type checking

## Deployment
- **Type**: Static site
- **Build Output**: dist/public

## SEO Configuration
- **Sitemap**: `/public/sitemap.xml` - All 9 routes with priority and update frequency
- **Robots.txt**: `/public/robots.txt` - Configured for all major search bots
- **Canonical URLs**: Configured in index.html
- **Open Graph**: Full OG meta tags with image dimensions
- **Structured Data**: JSON-LD schema for Organization and WebSite
- **Fonts**: Optimized to single font (Inter) for performance

## Recent Changes
- SEO audit and optimization: updated sitemap with all 9 routes, added canonical URLs, og:url meta tags, JSON-LD structured data (Organization and WebSite schema), reduced fonts to just Inter, added image dimensions
- Added Industries dropdown navigation between Solution and How It Works
- Created 4 industry-specific pages with shared template (Plastics, Food & Beverage, Cosmetics, Pharma)
- Added EN/DE translations for industry names
- Moved Company section to separate /company page
- Created Privacy Policy page (/privacy)
- Created Imprint page (/imprint)
- Updated footer with address, Company, Privacy Policy, and Imprint links
