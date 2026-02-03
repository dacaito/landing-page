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
- `/en/` - Home page (English)
- `/en/industries/chemical` - Chemical industry page
- `/en/industries/plastics` - Plastics industry page
- `/en/industries/food-beverage` - Food & Beverage industry page
- `/en/industries/cosmetics` - Cosmetics industry page
- `/en/industries/pharma` - Pharmaceutical industry page
- `/en/company` - Company/About page
- `/en/privacy` - Privacy Policy page
- `/en/imprint` - Imprint/Legal page

### German Routes (`/de/`)
- `/de/` - Home page (German)
- `/de/industries/chemical` - Chemie page
- `/de/industries/plastics` - Kunststoffe page
- `/de/industries/food-beverage` - Lebensmittel & Getränke page
- `/de/industries/cosmetics` - Kosmetik page
- `/de/industries/pharma` - Pharma page
- `/de/company` - Unternehmen page
- `/de/privacy` - Datenschutz page
- `/de/imprint` - Impressum page

### Root Route (`/`)
- Redirects to `/en/` or `/de/` based on browser language detection

## Scripts
- `npm run dev:web` - Start development server on port 5000
- `npm run build:web` - Build for production (outputs to dist/public)
- `npm run check` - TypeScript type checking

## Deployment
- **Type**: Static site
- **Build Output**: dist/public

## SEO Configuration
- **Sitemap**: `/public/sitemap.xml` - All 18 routes (9 EN + 9 DE) with hreflang annotations
- **Robots.txt**: `/public/robots.txt` - Configured for all major search bots
- **Canonical URLs**: Per-page language-prefixed canonical URLs via react-helmet-async
- **Hreflang Tags**: All pages include hreflang="en", hreflang="de", and hreflang="x-default" for international SEO
- **Open Graph**: Full OG meta tags with og:locale (en_US/de_DE), per-page titles and descriptions
- **Structured Data**: JSON-LD schema for Organization and WebSite in index.html
- **Fonts**: Optimized to single font (Inter) for performance
- **Per-page Meta Tags**: Each page has unique title/description via react-helmet-async
- **Image Optimization**: Lazy loading on below-fold images with explicit width/height dimensions

## Internationalization (i18n)
- **Languages**: English (EN) and German (DE)
- **URL-Based Language Routing**: Language determined from URL path prefix (`/en/` or `/de/`) for SEO
- **LanguageContext**: Centralized in `client/src/lib/LanguageContext.tsx` - provides `useLanguage()` hook with `language`, `getLocalizedPath()`, and `switchLanguagePath()`
- **Translation System**: Centralized in `client/src/lib/translations.ts`
- **Industry Pages**: Full bilingual support with industry-specific business terminology
- **Language Toggle**: Available in navigation, switches URL path between `/en/` and `/de/`
- **Browser Language Detection**: Root path (`/`) redirects to `/en/` or `/de/` based on browser language preference

## Recent Changes
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
