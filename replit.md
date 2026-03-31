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

## Routes (SEO-Friendly Multilingual)
All routes use language prefixes for SEO-friendly internationalization:

### English Routes (`/en/`)
- `/en/` - Redirects to `/en/inventory-management`
- `/en/inventory-management` - Home/Landing page (English)
- `/en/industries/chemical` - Chemical industry page
- `/en/industries/plastics` - Plastics industry page
- `/en/industries/food-beverage` - Food & Beverage industry page
- `/en/industries/cosmetics` - Cosmetics industry page
- `/en/industries/pharma` - Pharmaceutical industry page
- `/en/industries/logistics` - Logistics & Fulfillment industry page
- `/en/company` - Company/About page
- `/en/privacy` - Privacy Policy page
- `/en/imprint` - Imprint/Legal page

### German Routes (`/de/`)
- `/de/` - Redirects to `/de/inventory-management`
- `/de/inventory-management` - Home/Landing page (German)
- `/de/industries/chemical` - Chemie page
- `/de/industries/plastics` - Kunststoffe page
- `/de/industries/food-beverage` - Lebensmittel & Getränke page
- `/de/industries/cosmetics` - Kosmetik page
- `/de/industries/pharma` - Pharma page
- `/de/industries/logistics` - Logistik & Fulfillment page
- `/de/company` - Unternehmen page
- `/de/privacy` - Datenschutz page
- `/de/imprint` - Impressum page

### Spanish Routes (`/es/`)
- `/es/` - Redirects to `/es/inventory-management`
- `/es/inventory-management` - Home/Landing page (Spanish)
- `/es/industries/chemical` - Química page
- `/es/industries/plastics` - Plásticos page
- `/es/industries/food-beverage` - Alimentación y bebidas page
- `/es/industries/cosmetics` - Cosmética page
- `/es/industries/pharma` - Farmacéutica page
- `/es/industries/logistics` - Logística y fulfillment page
- `/es/company` - Empresa page
- `/es/privacy` - Política de privacidad page
- `/es/imprint` - Aviso legal page

### Root Route (`/`)
- Redirects to `/en/`, `/de/`, or `/es/` based on browser language detection (then further redirects to `/inventory-management`)

## Scripts
- `npm run dev:web` - Start development server on port 5000
- `npm run build:web` - Build for production (outputs to dist/public)
- `npm run check` - TypeScript type checking

## Deployment
- **Type**: Static site
- **Build Output**: dist/public

## SEO Configuration
- **Sitemap**: `/public/sitemap.xml` - All 30 routes (10 EN + 10 DE + 10 ES) with hreflang annotations
- **Robots.txt**: `/public/robots.txt` - Configured for all major search bots
- **Canonical URLs**: Per-page language-prefixed canonical URLs via react-helmet-async
- **Hreflang Tags**: All pages include hreflang="en", hreflang="de", hreflang="es", and hreflang="x-default" for international SEO
- **Open Graph**: Full OG meta tags with og:locale (en_US/de_DE/es_ES), per-page titles and descriptions
- **Structured Data**: JSON-LD schema for Organization and WebSite in index.html
- **Fonts**: Optimized to single font (Inter) for performance
- **Per-page Meta Tags**: Each page has unique title/description via react-helmet-async
- **Image Optimization**: Lazy loading on below-fold images with explicit width/height dimensions

## Internationalization (i18n)
- **Languages**: English (EN), German (DE), and Spanish (ES)
- **URL-Based Language Routing**: Language determined from URL path prefix (`/en/`, `/de/`, or `/es/`) for SEO
- **LanguageContext**: Centralized in `client/src/lib/LanguageContext.tsx` - provides `useLanguage()` hook with `language`, `getLocalizedPath()`, and `switchLanguagePath()`
- **Translation System**: Centralized in `client/src/lib/translations.ts`
- **Industry Pages**: Full trilingual support with industry-specific business terminology
- **Language Toggle**: Available in navigation, cycles through EN → DE → ES → EN
- **Browser Language Detection**: Root path (`/`) redirects to `/en/`, `/de/`, or `/es/` based on browser language preference

## Recent Changes
- **2026-03-31**: Updated English page content to outbound truck verification template (DE/ES translation pending)
  - Hero: "Verify every truck before it leaves the plant" — AI-based outbound shipment verification for long products
  - Problem: manual truck verification with 4 dispatch issues
  - Results: >99% Shipment Accuracy, >50% Claim Reduction, >1,000 Hours Labor Saved, <90 Days ROI
  - Outcome: 5 benefits of real-time dispatch verification
  - How It Works: expanded to 4 steps (added ShieldCheck icon for "Approve or block dispatch")
  - Who It's For: steel/plastic/aluminum/industrial plants shipping long products
  - Grid updated to sm:grid-cols-2 xl:grid-cols-4 for 4-step layout
  - Added whitespace-pre-line to tagline, problem description, and outcome description
- **2026-03-31**: Restructured routing and removed Industries from navigation (setup work)
  - Home page remains at `/en/`, `/de/`, `/es/` as the canonical home route
  - Same content also accessible at `/en/inventory-management`, `/de/inventory-management`, `/es/inventory-management` (identical for now)
  - Canonical URL is path-aware — each URL gets its own correct canonical tag
  - Removed Industries dropdown from all headers (desktop + mobile) in both `home.tsx` and `IndustryTemplate.tsx`
  - Industry pages (`/industries/*`) remain fully accessible — links exist and work, just not in the nav
- **2026-02-09**: Added Spanish (ES) as third language across entire site
  - Added full Spanish translations to translations.ts (nav, home, all industry page strings)
  - Updated Language type to include 'es', LanguageContext cycles EN → DE → ES → EN
  - Added all /es routes to App.tsx (10 routes: home, 6 industries, company, privacy, imprint)
  - Added Spanish content blocks to all 6 industry page files (chemical, plastics, food-beverage, cosmetics, pharma, logistics)
  - Updated hreflang tags on all pages to include es + es_ES og:locale
  - Regenerated sitemap.xml with 30 URLs (10 pages × 3 languages) and 4-language hreflang annotations
  - Spanish uses European Spanish (neutral) with B2B industrial tone
- **2026-02-03**: Added Logistics & Fulfillment industry page (6th industry) with bilingual content focused on reducing manual labor, improving reliability, and reducing errors
  - Created `/en/industries/logistics` and `/de/industries/logistics` routes
  - Added navigation links in both desktop and mobile menus
  - Updated sitemap.xml with new routes and hreflang tags
- **2026-02-03**: Implemented SEO-friendly multilingual routing with `/en/` and `/de/` URL prefixes
  - Created LanguageContext for URL-based language detection
  - Updated all pages (home, industries, company, privacy, imprint) to use LanguageContext
  - Added hreflang tags (en, de, x-default) to all pages for international SEO
  - Added og:locale meta tags for social sharing
  - Updated sitemap.xml with all 18 language-prefixed routes and hreflang annotations
  - Root path (`/`) redirects based on browser language detection
- Added full German translations for all 5 industry pages (Chemical, Plastics, Food & Beverage, Cosmetics, Pharma) with proper business and industry terminology
- Restructured industry content to support bilingual content (en/de) in each industry file
- Extended SEO optimization: added react-helmet-async for per-page meta tags (unique title, description, canonical, og:url for each route), lazy loading on below-fold images, improved alt text
- SEO audit and optimization: updated sitemap with all 9 routes, added canonical URLs, og:url meta tags, JSON-LD structured data (Organization and WebSite schema), reduced fonts to just Inter, added image dimensions
- Added Industries dropdown navigation between Solution and How It Works
- Created 4 industry-specific pages with shared template (Plastics, Food & Beverage, Cosmetics, Pharma)
- Added EN/DE translations for industry names
- Moved Company section to separate /company page
- Created Privacy Policy page (/privacy)
- Created Imprint page (/imprint)
- Updated footer with address, Company, Privacy Policy, and Imprint links
