import { Helmet } from "react-helmet-async";

const ORGANIZATION_SAME_AS = [
  "https://www.linkedin.com/company/vexgen-ai/",
  "https://www.crunchbase.com/organization/vexgen-ai",
  "https://github.com/vexgen-ai",
] as const;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Vexgen AI",
      url: "https://vexgen.ai",
      logo: "https://vexgen.ai/og-default.png",
      sameAs: [...ORGANIZATION_SAME_AS],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressCountry: "CH",
      },
    },
    {
      "@type": "WebSite",
      name: "Vexgen AI",
      url: "https://vexgen.ai",
      inLanguage: ["en", "de", "es"],
    },
  ],
} as const;

export function SiteJsonLd() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
    </Helmet>
  );
}

