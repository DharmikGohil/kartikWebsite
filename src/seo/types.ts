// ─── Core SEO Types ───────────────────────────────────────────────

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
  noindex?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SchemaMarkup {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export interface InternalLink {
  href: string;
  label: string;
  description?: string;
}

export interface SEOPageData {
  meta: PageMeta;
  breadcrumbs: BreadcrumbItem[];
  faqs: FAQItem[];
  schemas: SchemaMarkup[];
  relatedPages: InternalLink[];
  hubPage?: InternalLink;
}
