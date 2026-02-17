// ─── Universal SEO Head Component ─────────────────────────────────
// Renders <title>, meta tags, canonical, OG, Twitter, and JSON-LD
// for every page. Drop-in replacement for scattered meta logic.

import { Helmet } from "react-helmet-async";
import type { PageMeta, SchemaMarkup } from "./types";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, DEFAULT_TWITTER_CARD } from "./config";

interface SEOHeadProps {
  meta: PageMeta;
  schemas?: SchemaMarkup[];
}

export default function SEOHead({ meta, schemas = [] }: SEOHeadProps) {
  const canonical = meta.canonical.startsWith("http")
    ? meta.canonical
    : `${SITE_URL}${meta.canonical}`;

  const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      {meta.noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={meta.ogTitle || meta.title} />
      <meta property="og:description" content={meta.ogDescription || meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={meta.ogType || "website"} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content={meta.twitterCard || DEFAULT_TWITTER_CARD} />
      <meta name="twitter:title" content={meta.ogTitle || meta.title} />
      <meta name="twitter:description" content={meta.ogDescription || meta.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
