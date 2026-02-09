import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { Link, useLocation } from "wouter";

type NotFoundCopy = {
  title: string;
  body: string;
  subtext: string;
  cta: string;
};

function getLangFromPathname(pathname: string): "en" | "de" | "es" {
  if (pathname.startsWith("/de")) return "de";
  if (pathname.startsWith("/es")) return "es";
  return "en";
}

const COPY: Record<"en" | "de" | "es", NotFoundCopy> = {
  en: {
    title: "404 — Page Not Found",
    body: "The requested page could not be found.",
    subtext: "Please check the URL or return to the homepage.",
    cta: "Return to Homepage",
  },
  de: {
    title: "404 — Seite nicht gefunden",
    body: "Die angeforderte Seite konnte nicht gefunden werden.",
    subtext: "Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.",
    cta: "Zur Startseite",
  },
  es: {
    title: "404 — Página no encontrada",
    body: "La página solicitada no pudo ser encontrada.",
    subtext: "Por favor, verifique la URL o vuelva a la página principal.",
    cta: "Volver a la página principal",
  },
};

export default function NotFound() {
  const [location] = useLocation();
  const lang = getLangFromPathname(location);
  const copy = COPY[lang];
  const homeHref = `/${lang}`;
  const suffix = location.replace(/^\/(en|de|es)/, "") || "";
  const normalizedSuffix = suffix !== "/" ? suffix.replace(/\/+$/, "") : "";
  const canonicalUrl = `https://vexgen.ai/${lang}${normalizedSuffix}`;
  const alternateEn = `https://vexgen.ai/en${normalizedSuffix}`;
  const alternateDe = `https://vexgen.ai/de${normalizedSuffix}`;
  const alternateEs = `https://vexgen.ai/es${normalizedSuffix}`;
  const description = `${copy.body} ${copy.subtext}`.trim();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <SeoHead
        lang={lang}
        title={copy.title}
        description={description}
        canonicalUrl={canonicalUrl}
        alternates={{ en: alternateEn, de: alternateDe, es: alternateEs, xDefault: alternateEn }}
        robots="noindex, follow"
        ogType="website"
      />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 pb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-muted-foreground mt-0.5" />
            <div className="space-y-2">
              <h1 className="text-xl font-semibold text-foreground">{copy.title}</h1>
              <p className="text-sm text-muted-foreground">{copy.body}</p>
              <p className="text-sm text-muted-foreground">{copy.subtext}</p>

              <div className="pt-2">
                <Button asChild>
                  <Link href={homeHref}>{copy.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
