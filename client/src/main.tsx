import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Missing #root element");

const app = (
  <HelmetProvider>
    <Router>
      <App />
    </Router>
  </HelmetProvider>
);

// If prerendered markup exists, hydrate it; otherwise do a normal client render.
// Use firstElementChild (not hasChildNodes) so that comment nodes like <!--ssr-outlet-->
// in dev mode don't falsely trigger hydrateRoot and cause a hydration mismatch.
if (rootEl.firstElementChild !== null) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
