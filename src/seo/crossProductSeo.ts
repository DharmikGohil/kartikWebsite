// ─── Cross-Product SEO Data Generators ────────────────────────────
// Location × Industry, Location × Chemistry, Location × Problem

import type { SEOPageData, FAQItem, BreadcrumbItem } from "./types";
import { SITE_NAME } from "./config";
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from "./schema";
import { industries } from "../data/industries";
import { getChemistryBySlug, chemistryPlatforms } from "../data/chemistryPlatforms";
import { getFoamProblemBySlug } from "../data/foamProblems";

export function getLocationIndustryPageSEO(
  locationName: string,
  industrySlug: string,
  parentPath: string
): SEOPageData | null {
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) return null;

  const path = `${parentPath}/${industrySlug}`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Locations", url: parentPath.startsWith("/global") ? "/global" : "/locations" },
    { name: locationName, url: parentPath },
    { name: industry.name, url: path },
  ];

  const faqs: FAQItem[] = [
    {
      question: `What ${industry.name.toLowerCase()} foam control solutions are available in ${locationName}?`,
      answer: `ChemAssure Global provides engineered defoamer solutions for ${industry.name.toLowerCase()} processes in ${locationName}, including ${industry.subProcesses.map((sp) => sp.name).join(", ")}. Each solution is configured for your specific operating conditions.`,
    },
    {
      question: `What defoamer chemistry works best for ${industry.name.toLowerCase()} in ${locationName}?`,
      answer: `The optimal chemistry depends on your process stage. ${industry.subProcesses.slice(0, 2).map((sp) => `For ${sp.name}, we typically use ${sp.engineeringApproach.chemistryPlatforms}`).join(". ")}.`,
    },
    {
      question: `How can I get a defoamer for ${industry.name.toLowerCase()} in ${locationName}?`,
      answer: `Contact our technical team to discuss your ${industry.name.toLowerCase()} foam challenge. We serve industrial clients in ${locationName} with application-specific foam control solutions.`,
    },
  ];

  const relatedPages = industries
    .filter((i) => i.slug !== industrySlug)
    .slice(0, 3)
    .map((i) => ({
      href: `/solutions/${i.slug}`,
      label: `${i.name} Foam Control`,
      description: i.shortDesc,
    }));

  return {
    meta: {
      title: `${industry.name} Foam Control in ${locationName} | Defoamer Solutions | ${SITE_NAME}`,
      description: `Industrial defoamer solutions for ${industry.name.toLowerCase()} in ${locationName}. ${industry.shortDesc} Application-specific foam control engineered for local process conditions.`,
      canonical: path,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(
        `${industry.name} Foam Control in ${locationName}`,
        `Defoamer solutions for ${industry.name.toLowerCase()} in ${locationName}.`,
        path,
        industry.name
      ),
    ],
    relatedPages,
    hubPage: { href: parentPath, label: `All solutions in ${locationName}` },
  };
}

export function getLocationChemistryPageSEO(
  locationName: string,
  chemistrySlug: string,
  parentPath: string
): SEOPageData | null {
  const chem = getChemistryBySlug(chemistrySlug);
  if (!chem) return null;

  const path = `${parentPath}/chemistry/${chemistrySlug}`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Locations", url: parentPath.startsWith("/global") ? "/global" : "/locations" },
    { name: locationName, url: parentPath },
    { name: chem.shortName, url: path },
  ];

  const faqs: FAQItem[] = [
    {
      question: `Are ${chem.shortName.toLowerCase()} defoamers available in ${locationName}?`,
      answer: `Yes. ChemAssure Global supplies ${chem.shortName.toLowerCase()} defoamers for industrial applications in ${locationName}. ${chem.description.split(".")[0]}.`,
    },
    {
      question: `What temperature range do ${chem.shortName.toLowerCase()} defoamers work in?`,
      answer: `${chem.shortName} defoamers operate in the range of ${chem.temperatureRange} with pH tolerance of ${chem.phRange}. Biodegradability: ${chem.biodegradability}.`,
    },
    {
      question: `What industries in ${locationName} use ${chem.shortName.toLowerCase()} defoamers?`,
      answer: `${chem.shortName} defoamers are used in ${chem.typicalApplications.slice(0, 4).join(", ")} across ${locationName}.`,
    },
  ];

  const otherChemistry = chemistryPlatforms
    .filter((c) => c.slug !== chemistrySlug)
    .slice(0, 3)
    .map((c) => ({
      href: `/chemistry/${c.slug}`,
      label: c.name,
      description: c.description.split(".")[0] + ".",
    }));

  return {
    meta: {
      title: `${chem.name} in ${locationName} | ${chem.temperatureRange} | ${SITE_NAME}`,
      description: `${chem.shortName} defoamer solutions in ${locationName}. ${chem.description.split(".")[0]}. Temperature: ${chem.temperatureRange}. pH: ${chem.phRange}.`,
      canonical: path,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(
        `${chem.name} in ${locationName}`,
        `${chem.shortName} defoamer solutions for industrial applications in ${locationName}.`,
        path,
        "Defoamer Chemistry"
      ),
    ],
    relatedPages: otherChemistry,
    hubPage: { href: `/chemistry/${chemistrySlug}`, label: `All ${chem.shortName} applications` },
  };
}

export function getLocationProblemPageSEO(
  locationName: string,
  problemSlug: string,
  parentPath: string
): SEOPageData | null {
  const problem = getFoamProblemBySlug(problemSlug);
  if (!problem) return null;

  const path = `${parentPath}/foam-problems/${problemSlug}`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Locations", url: parentPath.startsWith("/global") ? "/global" : "/locations" },
    { name: locationName, url: parentPath },
    { name: problem.name, url: path },
  ];

  const affectedIndustries = industries.filter((i) =>
    problem.applicableIndustries.includes(i.slug)
  );

  const faqs: FAQItem[] = [
    {
      question: `How to solve ${problem.name.toLowerCase()} in ${locationName}?`,
      answer: `${problem.solutionApproach} ChemAssure Global provides expert foam control solutions for industrial clients in ${locationName}.`,
    },
    {
      question: `What causes ${problem.name.toLowerCase()} in ${locationName} industries?`,
      answer: problem.causes.slice(0, 3).join(". ") + ".",
    },
    {
      question: `Which industries in ${locationName} face ${problem.name.toLowerCase()}?`,
      answer: `${problem.name} commonly affects ${affectedIndustries.map((i) => i.name.toLowerCase()).join(", ")} in ${locationName}.`,
    },
  ];

  const relatedProblems = [
    { href: `/foam-problems/${problemSlug}`, label: `${problem.name} - Full Guide`, description: problem.description.split(".")[0] + "." },
    ...affectedIndustries.slice(0, 2).map((i) => ({
      href: `/solutions/${i.slug}`,
      label: `${i.name} Foam Control`,
      description: i.shortDesc,
    })),
  ];

  return {
    meta: {
      title: `${problem.name} Solutions in ${locationName} | ${SITE_NAME}`,
      description: `Solve ${problem.name.toLowerCase()} in ${locationName}. ${problem.description.split(".")[0]}. Expert defoamer solutions from ${SITE_NAME}.`,
      canonical: path,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(
        `${problem.name} Solutions in ${locationName}`,
        `Expert foam control for ${problem.name.toLowerCase()} in ${locationName}.`,
        path,
        "Foam Problem Solutions"
      ),
    ],
    relatedPages: relatedProblems,
    hubPage: { href: `/foam-problems/${problemSlug}`, label: `${problem.name} - Full Guide` },
  };
}
