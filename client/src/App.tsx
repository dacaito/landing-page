import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./lib/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PlasticsIndustry from "@/pages/industries/plastics";
import FoodBeverageIndustry from "@/pages/industries/food-beverage";
import CosmeticsIndustry from "@/pages/industries/cosmetics";
import PharmaIndustry from "@/pages/industries/pharma";
import ChemicalIndustry from "@/pages/industries/chemical";
import LogisticsIndustry from "@/pages/industries/logistics";
import Company from "@/pages/company";
import Privacy from "@/pages/privacy";
import Imprint from "@/pages/imprint";

function detectBrowserLanguage(): 'en' | 'de' {
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  return browserLang.toLowerCase().startsWith('de') ? 'de' : 'en';
}

function RootRedirect() {
  const lang = detectBrowserLanguage();
  return <Redirect to={`/${lang}`} />;
}

function LegacyRedirect({ path }: { path: string }) {
  const lang = detectBrowserLanguage();
  return <Redirect to={`/${lang}${path}`} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={RootRedirect} />
      
      <Route path="/en" component={Home} />
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
      <Route path="/de/industries/plastics" component={PlasticsIndustry} />
      <Route path="/de/industries/food-beverage" component={FoodBeverageIndustry} />
      <Route path="/de/industries/cosmetics" component={CosmeticsIndustry} />
      <Route path="/de/industries/pharma" component={PharmaIndustry} />
      <Route path="/de/industries/chemical" component={ChemicalIndustry} />
      <Route path="/de/industries/logistics" component={LogisticsIndustry} />
      <Route path="/de/company" component={Company} />
      <Route path="/de/privacy" component={Privacy} />
      <Route path="/de/imprint" component={Imprint} />
      
      <Route path="/industries/plastics">{() => <LegacyRedirect path="/industries/plastics" />}</Route>
      <Route path="/industries/food-beverage">{() => <LegacyRedirect path="/industries/food-beverage" />}</Route>
      <Route path="/industries/cosmetics">{() => <LegacyRedirect path="/industries/cosmetics" />}</Route>
      <Route path="/industries/pharma">{() => <LegacyRedirect path="/industries/pharma" />}</Route>
      <Route path="/industries/chemical">{() => <LegacyRedirect path="/industries/chemical" />}</Route>
      <Route path="/industries/logistics">{() => <LegacyRedirect path="/industries/logistics" />}</Route>
      <Route path="/company">{() => <LegacyRedirect path="/company" />}</Route>
      <Route path="/privacy">{() => <LegacyRedirect path="/privacy" />}</Route>
      <Route path="/imprint">{() => <LegacyRedirect path="/imprint" />}</Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
