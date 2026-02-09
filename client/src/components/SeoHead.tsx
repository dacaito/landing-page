import { Helmet } from "react-helmet-async";

type SeoAlternates = {
  en: string;
  de: string;
  es: string;
  xDefault?: string;
};

type SeoHeadProps = {
  lang: "en" | "de" | "es";
  title: string;
  description: string;
  canonicalUrl: string;
  alternates: SeoAlternates;
  robots?: string;
  ogType?: "website" | "article";
  ogImage?: string;
};

const DEFAULT_OG_IMAGE = "https://vexgen.ai/og-default.png";
const SITE_NAME = "Vexgen AI";

function ogLocaleForLang(lang: SeoHeadProps["lang"]) {
  if (lang === "de") return "de_DE";
  if (lang === "es") return "es_ES";
  return "en_US";
}

export function SeoHead({
  lang,
  title,
  description,
  canonicalUrl,
  alternates,
  robots,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
}: SeoHeadProps) {
  const xDefault = alternates.xDefault ?? alternates.en;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {robots ? <meta name="robots" content={robots} /> : null}

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={alternates.en} />
      <link rel="alternate" hrefLang="de" href={alternates.de} />
      <link rel="alternate" hrefLang="es" href={alternates.es} />
      <link rel="alternate" hrefLang="x-default" href={xDefault} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocaleForLang(lang)} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

