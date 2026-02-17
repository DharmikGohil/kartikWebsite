// ─── Schema Markup Generators ─────────────────────────────────────

import type { BreadcrumbItem, FAQItem, SchemaMarkup } from "./types";
import { SITE_URL, SITE_NAME, ORGANIZATION_SCHEMA } from "./config";

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildFAQSchema(faqs: FAQItem[]): SchemaMarkup | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(
  name: string,
  description: string,
  url: string,
  category?: string
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    provider: {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(category ? { category } : {}),
    areaServed: "Worldwide",
  };
}

export function buildWebPageSchema(
  name: string,
  description: string,
  url: string
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

export { ORGANIZATION_SCHEMA };
