export type AnalyticsEventName =
  | "demo_request_click"
  | "contact_click"
  | "language_switch"
  | "outbound_click"
  | "nav_click"
  | "pageview";

type AnalyticsPayload = Record<string, unknown>;

declare global {
  interface Window {
    __vexgenEvents?: Array<{ name: AnalyticsEventName; payload: AnalyticsPayload }>;
    umami?: {
      track?: (eventName: string, eventData?: Record<string, unknown>) => void;
      trackView?: (url?: string, referrer?: string, title?: string) => void;
    };
  }
}

export function getLanguageFromPath(pathname: string): "en" | "de" | "es" | "unknown" {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "en" || seg === "de" || seg === "es") return seg;
  return "unknown";
}

export function isExternalUrl(url: string): boolean {
  try {
    // Handles absolute, relative, protocol-relative, etc.
    const u = new URL(url, window.location.origin);
    const host = u.hostname.toLowerCase();
    if (host === "vexgen.ai" || host.endsWith(".vexgen.ai")) return false;
    return u.origin !== window.location.origin;
  } catch {
    return false;
  }
}

export function getDomain(url: string): string {
  try {
    const u = new URL(url, window.location.origin);
    return u.hostname.toLowerCase();
  } catch {
    return "";
  }
}

const RECENT_DEDUPE_WINDOW_MS = 250;
const recent = new Map<string, number>();

function shouldDedupe(key: string) {
  const now = Date.now();
  const last = recent.get(key);
  if (typeof last === "number" && now - last < RECENT_DEDUPE_WINDOW_MS) return true;
  recent.set(key, now);
  // Best-effort cleanup
  if (recent.size > 200) {
    recent.forEach((ts, k) => {
      if (now - ts > 10_000) recent.delete(k);
    });
  }
  return false;
}

export function track(name: AnalyticsEventName, props: Record<string, unknown> = {}): void {
  try {
    const path = window.location.pathname;
    const language = getLanguageFromPath(path);
    const payload: AnalyticsPayload = { ...props, path, language, ts: Date.now() };

    const dedupeKey =
      `${name}|${path}|` +
      String(
        // Use the most common identifiers to avoid accidental double-fires.
        (props["href"] ?? props["url"] ?? props["domain"] ?? props["item"] ?? "") as unknown
      );
    if (shouldDedupe(dedupeKey)) return;

    window.__vexgenEvents = window.__vexgenEvents ?? [];
    window.__vexgenEvents.push({ name, payload });

    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log("[analytics]", name, payload);
    }

    const umami = window.umami;
    if (!umami) return;

    // Prefer Umami's pageview API when available.
    if (name === "pageview" && typeof umami.trackView === "function") {
      umami.trackView(window.location.pathname, document.referrer, document.title);
      return;
    }

    if (typeof umami.track === "function") {
      umami.track(name, payload);
    }
  } catch {
    // Never throw from analytics.
  }
}

