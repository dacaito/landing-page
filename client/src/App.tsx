import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./lib/LanguageContext";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { Suspense, lazy, useEffect, useRef } from "react";
import Home from "@/pages/home";
import { track } from "@/lib/analytics";

// Route-level code splitting to reduce initial bundle size for /en,/de,/es.
const NotFound = lazy(() => import("@/pages/not-found"));
const PlasticsIndustry = lazy(() => import("@/pages/industries/plastics"));
const FoodBeverageIndustry = lazy(() => import("@/pages/industries/food-beverage"));
const CosmeticsIndustry = lazy(() => import("@/pages/industries/cosmetics"));
const PharmaIndustry = lazy(() => import("@/pages/industries/pharma"));
const ChemicalIndustry = lazy(() => import("@/pages/industries/chemical"));
const LogisticsIndustry = lazy(() => import("@/pages/industries/logistics"));
const Company = lazy(() => import("@/pages/company"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Imprint = lazy(() => import("@/pages/imprint"));

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/en" component={Home} />
        <Route path="/en/inventory-management" component={Home} />
        <Route path="/en/industries/plastics" component={PlasticsIndustry} />
        <Route path="/en/industries/food-beverage" component={FoodBeverageIndustry} />
        <Route path="/en/industries/cosmetics" component={CosmeticsIndustry} />
        <Route path="/en/industries/pharma" component={PharmaIndustry} />
        <Route path="/en/industries/chemical" component={ChemicalIndustry} />
        <Route path="/en/industries/logistics" component={LogisticsIndustry} />
        <Route path="/en/company" component={Company} />
        <Route path="/en/privacy" component={Privacy} />
        <Route path="/en/imprint" component={Imprint} />

        <Route path="/de" component={Home} />
        <Route path="/de/inventory-management" component={Home} />
        <Route path="/de/industries/plastics" component={PlasticsIndustry} />
        <Route path="/de/industries/food-beverage" component={FoodBeverageIndustry} />
        <Route path="/de/industries/cosmetics" component={CosmeticsIndustry} />
        <Route path="/de/industries/pharma" component={PharmaIndustry} />
        <Route path="/de/industries/chemical" component={ChemicalIndustry} />
        <Route path="/de/industries/logistics" component={LogisticsIndustry} />
        <Route path="/de/company" component={Company} />
        <Route path="/de/privacy" component={Privacy} />
        <Route path="/de/imprint" component={Imprint} />

        <Route path="/es" component={Home} />
        <Route path="/es/inventory-management" component={Home} />
        <Route path="/es/industries/plastics" component={PlasticsIndustry} />
        <Route path="/es/industries/food-beverage" component={FoodBeverageIndustry} />
        <Route path="/es/industries/cosmetics" component={CosmeticsIndustry} />
        <Route path="/es/industries/pharma" component={PharmaIndustry} />
        <Route path="/es/industries/chemical" component={ChemicalIndustry} />
        <Route path="/es/industries/logistics" component={LogisticsIndustry} />
        <Route path="/es/company" component={Company} />
        <Route path="/es/privacy" component={Privacy} />
        <Route path="/es/imprint" component={Imprint} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function AnalyticsPageviews() {
  const [location] = useLocation();
  const didInit = useRef(false);
  useEffect(() => {
    // Umami auto-tracks the initial pageview; we only need SPA navigations.
    if (!didInit.current) {
      didInit.current = true;
      return;
    }
    track("pageview", { title: document.title, hash: window.location.hash || "" });
  }, [location]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <SiteJsonLd />
          <AnalyticsPageviews />
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
