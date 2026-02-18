// ─── Location Page SEO Data Generator ─────────────────────────────

import type { SEOPageData, FAQItem, BreadcrumbItem } from "./types";
import { SITE_NAME } from "./config";
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from "./schema";
import { industries } from "../data/industries";
import { getStateBySlug, getCityInState, states } from "../data/locations";

export function getLocationPageSEO(stateSlug: string, citySlug?: string): SEOPageData | null {
  const state = getStateBySlug(stateSlug);
  if (!state) return null;

  const city = citySlug ? getCityInState(stateSlug, citySlug) : undefined;
  if (citySlug && !city) return null;

  const locationName = city ? `${city.city.name}, ${state.name}` : state.name;
  const path = city
    ? `/locations/${stateSlug}/${citySlug}`
    : `/locations/${stateSlug}`;

  const relevantIndustries = industries.filter((i) =>
    state.majorIndustries.includes(i.slug)
  );
  const industryNames = relevantIndustries.map((i) => i.name).join(", ");

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    ...(city
      ? [
          { name: state.name, url: `/locations/${stateSlug}` },
          { name: city.city.name, url: path },
        ]
      : [{ name: state.name, url: path }]),
  ];

  const faqs: FAQItem[] = [
    {
      question: `What foam control solutions are available in ${locationName}?`,
      answer: `ChemAssure Global provides engineered defoamer and antifoam solutions for ${industryNames} in ${locationName}. We configure solutions based on your specific process conditions — temperature, pH, shear level, and chemistry compatibility.`,
    },
    {
      question: `Which industries does ChemAssure serve in ${state.name}?`,
      answer: `We serve ${industryNames} across ${state.name}. ${state.industrialProfile}`,
    },
    {
      question: `How can I get a defoamer supplier in ${locationName}?`,
      answer: `Contact our technical team to discuss your foam challenge. We serve industrial clients across ${state.name} with application-specific foam control solutions. Our engineering approach starts with understanding your process before recommending chemistry.`,
    },
    {
      question: `Does ChemAssure offer on-site support in ${locationName}?`,
      answer: `Yes. We work directly with plant teams across ${state.name} for process evaluation, solution configuration, and field validation. Our founder and technical team are available for plant visits and technical discussions.`,
    },
  ];

  return {
    meta: {
      title: `Foam Control Solutions in ${locationName} | Defoamer Supplier | ${SITE_NAME}`,
      description: `Industrial defoamer and antifoam solutions for ${industryNames} in ${locationName}. Application-specific foam control engineered for local process conditions. ${state.industrialProfile.split(".")[0]}.`,
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
    hubPage: { href: "/locations", label: "All locations" },
  };
}

export function getLocationsHubSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
  ];
  const faqs: FAQItem[] = [
    {
      question: "Where does ChemAssure Global operate?",
      answer: `We serve industrial clients across ${states.length} Indian states including ${states.slice(0, 5).map((s) => s.name).join(", ")}, and more. Our headquarters is in Ahmedabad, Gujarat.`,
    },
    {
      question: "Do you provide on-site technical support?",
      answer: "Yes. Our technical team is available for plant visits, process evaluation, and field validation across India. We work directly with plant teams to understand foam challenges and configure solutions.",
    },
  ];

  return {
    meta: {
      title: `Foam Control Solutions Across India | Defoamer Supplier by Location | ${SITE_NAME}`,
      description: `Industrial defoamer and antifoam solutions across ${states.length} Indian states. Find foam control solutions for your local industrial process. Application-specific engineering for every region.`,
      canonical: "/locations",
    },
    breadcrumbs,
    faqs,
    schemas: [buildBreadcrumbSchema(breadcrumbs), buildFAQSchema(faqs)!],
    relatedPages: states.slice(0, 6).map((s) => ({
      href: `/locations/${s.slug}`,
      label: `Foam Control in ${s.name}`,
      description: s.industrialProfile.split(".")[0] + ".",
    })),
  };
}
