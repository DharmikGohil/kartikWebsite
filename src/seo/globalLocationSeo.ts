// ─── Global/International Location SEO Data Generator ─────────────

import type { SEOPageData, FAQItem, BreadcrumbItem } from "./types";
import { SITE_NAME } from "./config";
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from "./schema";
import { industries } from "../data/industries";
import { getCountryBySlug, getCityInCountry, countries } from "../data/locations";

export function getGlobalLocationPageSEO(countrySlug: string, citySlug?: string): SEOPageData | null {
  const country = getCountryBySlug(countrySlug);
  if (!country) return null;

  const city = citySlug ? getCityInCountry(countrySlug, citySlug) : undefined;
  if (citySlug && !city) return null;

  const locationName = city ? `${city.city.name}, ${country.name}` : country.name;
  const path = city ? `/global/${countrySlug}/${citySlug}` : `/global/${countrySlug}`;

  const relevantIndustries = industries.filter((i) =>
    country.majorIndustries.includes(i.slug)
  );
  const industryNames = relevantIndustries.map((i) => i.name).join(", ");

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Global", url: "/global" },
    ...(city
      ? [
          { name: country.name, url: `/global/${countrySlug}` },
          { name: city.city.name, url: path },
        ]
      : [{ name: country.name, url: path }]),
  ];

  const faqs: FAQItem[] = [
    {
      question: `What foam control solutions are available in ${locationName}?`,
      answer: `ChemAssure Global provides engineered defoamer and antifoam solutions for ${industryNames} in ${locationName}. We configure solutions based on your specific process conditions.`,
    },
    {
      question: `Which industries does ChemAssure serve in ${country.name}?`,
      answer: `We serve ${industryNames} across ${country.name}. ${country.industrialProfile}`,
    },
    {
      question: `How can I get a defoamer supplier in ${locationName}?`,
      answer: `Contact our technical team to discuss your foam challenge. We serve industrial clients across ${country.name} with application-specific foam control solutions.`,
    },
  ];

  return {
    meta: {
      title: `Foam Control Solutions in ${locationName} | Defoamer Supplier | ${SITE_NAME}`,
      description: `Industrial defoamer and antifoam solutions for ${industryNames} in ${locationName}. ${country.industrialProfile.split(".")[0]}.`,
      canonical: path,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(
        `Foam Control Solutions in ${locationName}`,
        `Industrial defoamer solutions for ${industryNames} in ${locationName}.`,
        path,
        "Foam Control"
      ),
    ],
    relatedPages: relevantIndustries.slice(0, 3).map((i) => ({
      href: `/solutions/${i.slug}`,
      label: `${i.name} Foam Control`,
      description: i.shortDesc,
    })),
    hubPage: { href: "/global", label: "All global locations" },
  };
}

export function getGlobalHubSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Global", url: "/global" },
  ];
  const faqs: FAQItem[] = [
    {
      question: "Does ChemAssure Global operate internationally?",
      answer: `Yes. We serve industrial clients across ${countries.length}+ countries worldwide, providing application-specific foam control solutions for diverse industrial processes.`,
    },
    {
      question: "How do I get foam control solutions in my country?",
      answer: "Contact our technical team with details about your process. We work with industrial clients globally to understand foam challenges and configure solutions for local conditions.",
    },
  ];

  return {
    meta: {
      title: `Global Foam Control Solutions | Defoamer Supplier Worldwide | ${SITE_NAME}`,
      description: `Industrial defoamer and antifoam solutions across ${countries.length}+ countries. Find foam control solutions for your industrial process anywhere in the world.`,
      canonical: "/global",
    },
    breadcrumbs,
    faqs,
    schemas: [buildBreadcrumbSchema(breadcrumbs), buildFAQSchema(faqs)!],
    relatedPages: countries.slice(0, 6).map((c) => ({
      href: `/global/${c.slug}`,
      label: `Foam Control in ${c.name}`,
      description: c.industrialProfile.split(".")[0] + ".",
    })),
  };
}
