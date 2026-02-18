// ─── Chemistry Page SEO Data Generator ────────────────────────────

import type { SEOPageData, FAQItem, BreadcrumbItem } from "./types";
import { SITE_NAME } from "./config";
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from "./schema";
import { industries } from "../data/industries";
import { getChemistryBySlug, chemistryPlatforms } from "../data/chemistryPlatforms";

export function getChemistryPageSEO(chemistrySlug?: string): SEOPageData {
  if (!chemistrySlug) {
    // Hub page
    const breadcrumbs: BreadcrumbItem[] = [
      { name: "Home", url: "/" },
      { name: "Chemistry Platforms", url: "/chemistry" },
    ];
    const faqs: FAQItem[] = [
      {
        question: "What defoamer chemistry platforms does ChemAssure offer?",
        answer: `We work with ${chemistryPlatforms.length} chemistry platforms: ${chemistryPlatforms.map((c) => c.shortName).join(", ")}. Each is selected based on your process conditions, compatibility requirements, and environmental profile.`,
      },
      {
        question: "How do you choose the right chemistry for my process?",
        answer: "We analyze your foam mechanism, operating temperature, pH, shear level, and downstream requirements. The chemistry platform is selected to match your actual plant conditions — not theoretical ones.",
      },
    ];
    return {
      meta: {
        title: `Defoamer Chemistry Platforms | Silicone, Polyether, Fatty Ester | ${SITE_NAME}`,
        description: `Explore ${chemistryPlatforms.length} defoamer chemistry platforms: ${chemistryPlatforms.map((c) => c.shortName).join(", ")}. Each engineered for specific process conditions, temperature ranges, and environmental profiles.`,
        canonical: "/chemistry",
      },
      breadcrumbs,
      faqs,
      schemas: [buildBreadcrumbSchema(breadcrumbs), buildFAQSchema(faqs)!],
      relatedPages: chemistryPlatforms.map((c) => ({
        href: `/chemistry/${c.slug}`,
        label: c.name,
        description: c.description.split(".")[0] + ".",
      })),
    };
  }

  const chem = getChemistryBySlug(chemistrySlug);
  if (!chem) return getChemistryPageSEO(); // fallback to hub

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Chemistry", url: "/chemistry" },
    { name: chem.shortName, url: `/chemistry/${chemistrySlug}` },
  ];

  const faqs: FAQItem[] = [
    {
      question: `What are ${chem.shortName.toLowerCase()} defoamers?`,
      answer: chem.description,
    },
    {
      question: `How do ${chem.shortName.toLowerCase()} defoamers work?`,
      answer: chem.mechanism,
    },
    {
      question: `What temperature range do ${chem.shortName.toLowerCase()} defoamers work in?`,
      answer: `${chem.shortName} defoamers are effective in the range of ${chem.temperatureRange}, with pH tolerance of ${chem.phRange}. Biodegradability: ${chem.biodegradability}.`,
    },
    {
      question: `What industries use ${chem.shortName.toLowerCase()} defoamers?`,
      answer: `${chem.shortName} defoamers are commonly used in ${chem.typicalApplications.join(", ")}.`,
    },
  ];

  const otherPlatforms = chemistryPlatforms
    .filter((c) => c.slug !== chemistrySlug)
    .map((c) => ({
      href: `/chemistry/${c.slug}`,
      label: c.name,
      description: c.description.split(".")[0] + ".",
    }));

  return {
    meta: {
      title: `${chem.name} | ${chem.temperatureRange} | ${SITE_NAME}`,
      description: `${chem.description.split(".").slice(0, 2).join(".")}. Temperature: ${chem.temperatureRange}. pH: ${chem.phRange}. Applications: ${chem.typicalApplications.slice(0, 3).join(", ")}.`,
      canonical: `/chemistry/${chemistrySlug}`,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(chem.name, chem.description, `/chemistry/${chemistrySlug}`, "Defoamer Chemistry"),
    ],
    relatedPages: otherPlatforms,
    hubPage: { href: "/chemistry", label: "All chemistry platforms" },
  };
}

export function getChemistryIndustryPageSEO(
  chemistrySlug: string,
  industrySlug: string
): SEOPageData | null {
  const chem = getChemistryBySlug(chemistrySlug);
  if (!chem) return null;
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Chemistry", url: "/chemistry" },
    { name: chem.shortName, url: `/chemistry/${chemistrySlug}` },
    { name: industry.name, url: `/chemistry/${chemistrySlug}/${industrySlug}` },
  ];

  const faqs: FAQItem[] = [
    {
      question: `Why use ${chem.shortName.toLowerCase()} defoamers for ${industry.name.toLowerCase()}?`,
      answer: `${chem.shortName} chemistry is selected for ${industry.name.toLowerCase()} because of its ${chem.advantages.slice(0, 2).join(" and ").toLowerCase()}. It operates effectively at ${chem.temperatureRange} and pH ${chem.phRange}, matching typical ${industry.name.toLowerCase()} process conditions.`,
    },
    {
      question: `What ${industry.name.toLowerCase()} processes use ${chem.shortName.toLowerCase()} defoamers?`,
      answer: `In ${industry.name.toLowerCase()}, ${chem.shortName.toLowerCase()} defoamers are used in ${industry.subProcesses.map((sp) => sp.name).join(", ")}. The specific formulation is configured based on each process stage's operating conditions.`,
    },
    {
      question: `Are there alternatives to ${chem.shortName.toLowerCase()} for ${industry.name.toLowerCase()}?`,
      answer: `Yes. Depending on your specific process conditions, alternatives include ${chemistryPlatforms.filter((c) => c.slug !== chemistrySlug && c.applicableIndustries.includes(industrySlug)).map((c) => c.shortName).join(", ")}. We select the optimal chemistry based on your temperature, pH, shear, and environmental requirements.`,
    },
  ];

  // Related: same chemistry, different industries
  const sameChemLinks = industries
    .filter((i) => i.slug !== industrySlug && chem.applicableIndustries.includes(i.slug))
    .slice(0, 2)
    .map((i) => ({
      href: `/chemistry/${chemistrySlug}/${i.slug}`,
      label: `${chem.shortName} for ${i.name}`,
      description: i.shortDesc,
    }));

  // Related: same industry, different chemistry
  const sameIndLinks = chemistryPlatforms
    .filter((c) => c.slug !== chemistrySlug && c.applicableIndustries.includes(industrySlug))
    .slice(0, 2)
    .map((c) => ({
      href: `/chemistry/${c.slug}/${industrySlug}`,
      label: `${c.shortName} for ${industry.name}`,
      description: c.description.split(".")[0] + ".",
    }));

  return {
    meta: {
      title: `${chem.shortName} Defoamers for ${industry.name} | ${SITE_NAME}`,
      description: `${chem.shortName} foam control solutions engineered for ${industry.name.toLowerCase()}. ${chem.advantages[0]}. Operating range: ${chem.temperatureRange}, pH ${chem.phRange}. ${industry.shortDesc}`,
      canonical: `/chemistry/${chemistrySlug}/${industrySlug}`,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(
        `${chem.shortName} Defoamers for ${industry.name}`,
        `${chem.shortName} foam control solutions for ${industry.name.toLowerCase()}.`,
        `/chemistry/${chemistrySlug}/${industrySlug}`,
        `${chem.shortName} Defoamer`
      ),
    ],
    relatedPages: [...sameChemLinks, ...sameIndLinks],
    hubPage: { href: `/chemistry/${chemistrySlug}`, label: `All ${chem.shortName} applications` },
  };
}
