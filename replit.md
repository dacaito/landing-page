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
│   ├── src/          # React components and pages
│   ├── public/       # Static assets
│   └── index.html    # HTML entry point
├── attached_assets/  # Project assets
├── vite.config.ts    # Vite configuration
├── tailwind.config.ts # Tailwind configuration
└── package.json      # Dependencies and scripts
```

## Scripts
- `npm run dev:web` - Start development server on port 5000
- `npm run build:web` - Build for production (outputs to dist/public)
- `npm run check` - TypeScript type checking

## Deployment
- **Type**: Static site
- **Build Output**: dist/public
