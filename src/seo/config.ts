// ─── Site-wide SEO Configuration ──────────────────────────────────

export const SITE_URL = "https://chemassureglobal.com";
export const SITE_NAME = "ChemAssure Global";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/apple-touch-icon.png`;
export const DEFAULT_TWITTER_CARD = "summary_large_image" as const;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description:
    "Industrial foam control solutions company providing application-specific defoamers and antifoams for textiles, wastewater, paints, paper, construction, fermentation and sensitive water systems.",
  url: SITE_URL,
  telephone: "+91-9313749421",
  areaServed: "Worldwide",
  serviceType: "Foam Control Solutions",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Kartik Radadiya",
    jobTitle: "Founder & Technical Lead",
  },
};
