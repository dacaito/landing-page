import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PlasticsIndustry from "@/pages/industries/plastics";
import FoodBeverageIndustry from "@/pages/industries/food-beverage";
import CosmeticsIndustry from "@/pages/industries/cosmetics";
import PharmaIndustry from "@/pages/industries/pharma";
import Company from "@/pages/company";
import Privacy from "@/pages/privacy";
import Imprint from "@/pages/imprint";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/industries/plastics" component={PlasticsIndustry} />
      <Route path="/industries/food-beverage" component={FoodBeverageIndustry} />
      <Route path="/industries/cosmetics" component={CosmeticsIndustry} />
      <Route path="/industries/pharma" component={PharmaIndustry} />
      <Route path="/company" component={Company} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/imprint" component={Imprint} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
