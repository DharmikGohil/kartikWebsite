// ─── Programmatic SEO Page Data Generator ─────────────────────────
// Generates unique, intent-matched SEO data for every page.
// Designed to scale to 100k+ pages without duplication or thin content.

import type { SEOPageData, FAQItem, InternalLink, BreadcrumbItem } from "./types";
import { SITE_NAME } from "./config";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildServiceSchema,
  buildWebPageSchema,
  ORGANIZATION_SCHEMA,
} from "./schema";
import { industries } from "../data/industries";

// ─── Helpers ──────────────────────────────────────────────────────

function getRelatedIndustries(currentSlug: string, count = 3): InternalLink[] {
  return industries
    .filter((i) => i.slug !== currentSlug)
    .slice(0, count)
    .map((i) => ({
      href: `/solutions/${i.slug}`,
      label: `${i.name} Foam Control`,
      description: i.shortDesc,
    }));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ─── Static Page SEO Data ─────────────────────────────────────────

export function getHomePageSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [{ name: "Home", url: "/" }];
  const faqs: FAQItem[] = [
    {
      question: "What is industrial foam control?",
      answer:
        "Industrial foam control involves using engineered defoamers and antifoams to manage unwanted foam in manufacturing processes. Foam disrupts efficiency in textiles, wastewater treatment, paints, paper, and many other industries. ChemAssure Global engineers application-specific solutions matched to your process conditions.",
    },
    {
      question: "What industries does ChemAssure Global serve?",
      answer:
        "We serve 10+ industries including textile processing, wastewater treatment, paints & coatings, paper & pulp, cement & construction, sugar & fermentation, food & beverage, pharmaceutical & biotech, oil & gas, and municipal water reuse systems.",
    },
    {
      question: "How is ChemAssure different from generic defoamer suppliers?",
      answer:
        "We don't sell off-the-shelf products. We engineer foam control solutions by first understanding your process - foam mechanism, temperature, pH, shear level, and chemistry compatibility - then configuring the right chemistry platform, physical form, and dosage for your specific conditions.",
    },
    {
      question: "Where is ChemAssure Global located?",
      answer:
        "We are headquartered in Surat, Gujarat, India, and serve industrial clients across India with global-standard foam control engineering.",
    },
  ];

  return {
    meta: {
      title: `${SITE_NAME} – Industrial Foam Control Solutions | Defoamers & Antifoams`,
      description:
        "Application-specific defoamers and antifoams engineered for textiles, wastewater, paints, paper, construction, fermentation and sensitive water systems. Foam control solutions designed for process efficiency and sustainability.",
      canonical: "/",
    },
    breadcrumbs,
    faqs,
    schemas: [
      ORGANIZATION_SCHEMA,
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildWebPageSchema(
        "Industrial Foam Control Solutions",
        "Application-specific defoamers and antifoams engineered for process efficiency and sustainability across industries.",
        "/"
      ),
    ],
    relatedPages: industries.slice(0, 6).map((i) => ({
      href: `/solutions/${i.slug}`,
      label: `${i.name} Foam Control`,
      description: i.shortDesc,
    })),
  };
}


export function getSolutionsHubSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Solutions by Industry", url: "/solutions" },
  ];
  const faqs: FAQItem[] = [
    {
      question: "How do you select the right defoamer for my industry?",
      answer:
        "We analyze five dimensions: foam mechanism, process window (temperature, pH, shear), chemistry compatibility, physical form requirements, and environmental profile. This ensures the solution is configured for your actual plant conditions.",
    },
    {
      question: "Do you offer custom formulations?",
      answer:
        "Yes. Every solution is configured based on your specific process. We select from silicone, silicone-free, polyether, fatty ester, and hybrid chemistry platforms, then match the physical form and dosage to your operating conditions.",
    },
    {
      question: "Can I get foam control solutions for multiple processes?",
      answer:
        "Absolutely. Many clients operate across multiple process stages, each with different foam challenges. We configure separate solutions for each stage to ensure optimal performance throughout your production line.",
    },
  ];

  return {
    meta: {
      title: `Foam Control Solutions by Industry | ${SITE_NAME}`,
      description:
        "Explore application-specific defoamer and antifoam solutions for 10+ industries. Each solution is engineered for the unique foam challenges, operating conditions, and chemistry requirements of your process.",
      canonical: "/solutions",
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildWebPageSchema(
        "Foam Control Solutions by Industry",
        "Application-specific defoamer solutions for textiles, wastewater, paints, paper, cement, sugar, food, pharma, oil & gas, and municipal water.",
        "/solutions"
      ),
    ],
    relatedPages: [
      { href: "/foam-control-engineering", label: "Foam Control Engineering", description: "Learn how we engineer solutions by understanding your process." },
      { href: "/technologies", label: "Technologies", description: "Chemistry platforms, physical formats, and environmental profiles." },
      { href: "/sustainability", label: "Sustainability", description: "How optimized foam control reduces environmental impact." },
    ],
  };
}

export function getIndustryPageSEO(slug: string): SEOPageData | null {
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: industry.name, url: `/solutions/${slug}` },
  ];

  // Generate unique, intent-matched FAQs from the industry's actual data
  const faqs: FAQItem[] = [
    {
      question: `What causes foam problems in ${industry.name.toLowerCase()}?`,
      answer: industry.subProcesses
        .flatMap((sp) => sp.foamChallenges.slice(0, 1))
        .join(". ") + ". Each sub-process has distinct foam mechanisms requiring targeted solutions.",
    },
    {
      question: `What defoamer chemistry works best for ${industry.name.toLowerCase()}?`,
      answer: `The optimal chemistry depends on your specific process stage. ${industry.subProcesses
        .map((sp) => `For ${sp.name}, we typically use ${sp.engineeringApproach.chemistryPlatforms}`)
        .join(". ")}.`,
    },
    {
      question: `What operating conditions affect foam control in ${industry.name.toLowerCase()}?`,
      answer: `Key parameters include temperature (${industry.subProcesses.map((sp) => sp.operatingConditions.temperature).join(", ")}), pH (${industry.subProcesses.map((sp) => sp.operatingConditions.ph).join(", ")}), and shear levels ranging from ${industry.subProcesses.map((sp) => sp.operatingConditions.shearLevel).join(" to ")}.`,
    },
    {
      question: `Does ChemAssure offer sustainable foam control for ${industry.name.toLowerCase()}?`,
      answer: industry.sustainabilityNote,
    },
  ];

  const relatedPages = getRelatedIndustries(slug, 3);

  return {
    meta: {
      title: `${industry.name} Foam Control Solutions | Defoamers for ${industry.name} | ${SITE_NAME}`,
      description: `${industry.shortDesc} Engineered defoamer and antifoam solutions for ${industry.subProcesses.map((sp) => sp.name).join(", ")}. ${industry.sustainabilityNote.split(".")[0]}.`,
      canonical: `/solutions/${slug}`,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(
        `${industry.name} Foam Control Solutions`,
        industry.shortDesc,
        `/solutions/${slug}`,
        "Foam Control"
      ),
    ],
    relatedPages,
    hubPage: { href: "/solutions", label: "View all industry solutions" },
  };
}


// ─── Sub-Process Page SEO (Programmatic - scales to 100k+) ───────
// Each industry × sub-process combination gets a unique page with
// unique title, description, FAQs, and schema markup.

export function getSubProcessPageSEO(
  industrySlug: string,
  subProcessSlug: string
): SEOPageData | null {
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) return null;

  const subProcess = industry.subProcesses.find(
    (sp) => slugify(sp.name) === subProcessSlug
  );
  if (!subProcess) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: industry.name, url: `/solutions/${industrySlug}` },
    { name: subProcess.name, url: `/solutions/${industrySlug}/${subProcessSlug}` },
  ];

  const faqs: FAQItem[] = [
    {
      question: `What foam challenges occur during ${subProcess.name.toLowerCase()} in ${industry.name.toLowerCase()}?`,
      answer: subProcess.foamChallenges.join(". ") + ".",
    },
    {
      question: `What are the operating conditions for foam control in ${subProcess.name.toLowerCase()}?`,
      answer: `Temperature: ${subProcess.operatingConditions.temperature}, pH: ${subProcess.operatingConditions.ph}, Foam type: ${subProcess.operatingConditions.foamType}, Shear level: ${subProcess.operatingConditions.shearLevel}.`,
    },
    {
      question: `What defoamer chemistry is recommended for ${subProcess.name.toLowerCase()}?`,
      answer: `${subProcess.engineeringApproach.description} Recommended platforms: ${subProcess.engineeringApproach.chemistryPlatforms}. Physical forms: ${subProcess.engineeringApproach.physicalForms}. ECO grade: ${subProcess.engineeringApproach.ecoGrade}.`,
    },
    {
      question: `What solution configurations are available for ${subProcess.name.toLowerCase()}?`,
      answer: subProcess.solutionConfigurations.join(". ") + ".",
    },
  ];

  // Sibling sub-processes as related pages (hub-and-spoke)
  const siblingLinks: InternalLink[] = industry.subProcesses
    .filter((sp) => slugify(sp.name) !== subProcessSlug)
    .map((sp) => ({
      href: `/solutions/${industrySlug}/${slugify(sp.name)}`,
      label: sp.name,
      description: sp.engineeringApproach.description,
    }));

  // Cross-industry related pages for similar sub-process types
  const crossIndustryLinks = industries
    .filter((i) => i.slug !== industrySlug)
    .flatMap((i) =>
      i.subProcesses
        .filter((sp) => {
          const spSlug = slugify(sp.name);
          return (
            spSlug.includes(subProcessSlug.split("-")[0]) ||
            sp.operatingConditions.foamType === subProcess.operatingConditions.foamType
          );
        })
        .slice(0, 1)
        .map((sp) => ({
          href: `/solutions/${i.slug}/${slugify(sp.name)}`,
          label: `${sp.name} - ${i.name}`,
          description: sp.engineeringApproach.description,
        }))
    )
    .slice(0, 2);

  return {
    meta: {
      title: `${subProcess.name} Foam Control - ${industry.name} | ${SITE_NAME}`,
      description: `Engineered defoamer solutions for ${subProcess.name.toLowerCase()} in ${industry.name.toLowerCase()}. Operating at ${subProcess.operatingConditions.temperature}, pH ${subProcess.operatingConditions.ph}. ${subProcess.engineeringApproach.description}`,
      canonical: `/solutions/${industrySlug}/${subProcessSlug}`,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(
        `${subProcess.name} Foam Control for ${industry.name}`,
        `${subProcess.engineeringApproach.description} Chemistry: ${subProcess.engineeringApproach.chemistryPlatforms}.`,
        `/solutions/${industrySlug}/${subProcessSlug}`,
        industry.name
      ),
    ],
    relatedPages: [...siblingLinks, ...crossIndustryLinks],
    hubPage: { href: `/solutions/${industrySlug}`, label: `All ${industry.name} solutions` },
  };
}

// ─── Static Page SEO Generators ───────────────────────────────────

export function getEngineeringPageSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Foam Control Engineering", url: "/foam-control-engineering" },
  ];
  const faqs: FAQItem[] = [
    {
      question: "What is foam control engineering?",
      answer:
        "Foam control engineering is the systematic approach to solving foam problems by understanding five critical dimensions: foam mechanism, process window, chemistry compatibility, physical form, and environmental profile. Unlike generic defoamer supply, it configures solutions for your specific plant conditions.",
    },
    {
      question: "Why does the foam mechanism matter?",
      answer:
        "Different foam types - surfactant-driven, mechanical, biological, or resin-based - require fundamentally different control strategies. Applying the wrong approach wastes chemical and can create new problems.",
    },
    {
      question: "How do process conditions affect defoamer selection?",
      answer:
        "Temperature, pH, shear level, and contact time define the operating window. A defoamer that works at 40°C may fail at 120°C. We match the solution to your actual plant conditions, not lab conditions.",
    },
  ];

  return {
    meta: {
      title: `Foam Control Engineering | Process-Driven Defoamer Solutions | ${SITE_NAME}`,
      description:
        "We control foam by understanding your process. Our engineering approach identifies the root cause and matches the right chemistry, form, and dosage to solve it reliably under real plant conditions.",
      canonical: "/foam-control-engineering",
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildServiceSchema(
        "Foam Control Engineering",
        "Process-driven foam control engineering that identifies root causes and configures solutions for real plant conditions.",
        "/foam-control-engineering"
      ),
    ],
    relatedPages: [
      { href: "/technologies", label: "Technologies", description: "Chemistry platforms, physical formats, and environmental profiles." },
      { href: "/solutions", label: "Solutions by Industry", description: "Explore foam control solutions for 10+ industries." },
      { href: "/sustainability", label: "Sustainability", description: "How optimized foam control reduces environmental impact." },
    ],
  };
}

export function getTechnologiesPageSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Technologies", url: "/technologies" },
  ];
  const faqs: FAQItem[] = [
    {
      question: "What chemistry platforms are available for foam control?",
      answer:
        "We work with four main platforms: silicone-based (high-efficiency, high-temperature), silicone-free (sensitive systems, biodegradable), polyether-based (balanced persistence, low toxicity), and fatty ester-based (biodegradability-focused for biological systems).",
    },
    {
      question: "What physical forms do defoamers come in?",
      answer:
        "Defoamers are available as liquids (for inline dosing), emulsions (for aqueous systems), and powders/solids (for dry blending or delayed-release applications). The form is selected based on your dosing system and process requirements.",
    },
    {
      question: "What environmental profiles are available?",
      answer:
        "We offer industrial grade, ETP compatible, water-reuse oriented, and food-contact capable (custom) profiles. The environmental profile is matched to your discharge requirements and sustainability goals.",
    },
  ];

  return {
    meta: {
      title: `Foam Control Technologies - Chemistry, Form & Sustainability | ${SITE_NAME}`,
      description:
        "Explore defoamer chemistry platforms (silicone, silicone-free, polyether, fatty ester), physical formats (liquid, emulsion, powder), and environmental profiles engineered for your process.",
      canonical: "/technologies",
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildWebPageSchema(
        "Foam Control Technologies",
        "Chemistry platforms, physical formats, and environmental profiles for industrial foam control.",
        "/technologies"
      ),
    ],
    relatedPages: [
      { href: "/foam-control-engineering", label: "Foam Control Engineering", description: "How we engineer solutions by understanding your process." },
      { href: "/solutions", label: "Solutions by Industry", description: "See how technologies are applied across industries." },
      { href: "/sustainability", label: "Sustainability", description: "Environmental profiles and sustainable foam control." },
    ],
  };
}

export function getSustainabilityPageSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Sustainability", url: "/sustainability" },
  ];
  const faqs: FAQItem[] = [
    {
      question: "How does foam control relate to sustainability?",
      answer:
        "Efficient defoaming means less chemical per unit of production, directly reducing effluent chemical load. Stable foam control reduces process upsets, rework, and material waste. Targeted chemistry reduces environmental impact by design.",
    },
    {
      question: "Do you offer biodegradable defoamers?",
      answer:
        "Yes. We offer silicone-free, polyether, and fatty ester-based formulations with enhanced biodegradability for applications where environmental profile is a priority, including water reuse and food-contact systems.",
    },
  ];

  return {
    meta: {
      title: `Sustainable Foam Control Solutions | Green Defoamers | ${SITE_NAME}`,
      description:
        "Sustainability in foam control through smarter chemistry, lower dosage, and better process fit. Biodegradable defoamers, water-reuse compatible grades, and dosage-optimized formulations.",
      canonical: "/sustainability",
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildWebPageSchema(
        "Sustainable Foam Control",
        "Sustainability-driven foam control through lower dosage, targeted chemistry, and process stability.",
        "/sustainability"
      ),
    ],
    relatedPages: [
      { href: "/technologies", label: "Technologies", description: "Environmental profiles and chemistry platforms." },
      { href: "/solutions", label: "Solutions by Industry", description: "Industry-specific sustainability approaches." },
    ],
  };
}

export function getAboutPageSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  return {
    meta: {
      title: `About ${SITE_NAME} | Foam Control Engineering Company | Surat, India`,
      description:
        "ChemAssure Global specializes in foam control engineering for industrial processes. We combine application understanding, chemistry selection, and cost-performance optimization for 10+ industries.",
      canonical: "/about",
    },
    breadcrumbs,
    faqs: [],
    schemas: [
      ORGANIZATION_SCHEMA,
      buildBreadcrumbSchema(breadcrumbs),
      buildWebPageSchema(
        `About ${SITE_NAME}`,
        "Foam control engineering company based in Surat, Gujarat, India.",
        "/about"
      ),
    ],
    relatedPages: [
      { href: "/foam-control-engineering", label: "Our Engineering Approach", description: "How we think about foam control." },
      { href: "/contact", label: "Contact Us", description: "Discuss your process with our technical team." },
    ],
  };
}

export function getContactPageSEO(): SEOPageData {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  return {
    meta: {
      title: `Contact ${SITE_NAME} | Discuss Your Foam Control Process`,
      description:
        "Tell us about your foam challenge and operating conditions. Our technical team will recommend a defoamer solution configured for your specific industrial process.",
      canonical: "/contact",
    },
    breadcrumbs,
    faqs: [],
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildWebPageSchema(
        "Contact ChemAssure Global",
        "Discuss your foam control process with our technical team.",
        "/contact"
      ),
    ],
    relatedPages: [
      { href: "/solutions", label: "Solutions by Industry", description: "Explore solutions for your industry." },
      { href: "/foam-control-engineering", label: "Our Approach", description: "How we engineer foam control solutions." },
    ],
  };
}

// ─── Route Registry (for sitemap generation & pre-rendering) ──────

export function getAllRoutes(): string[] {
  const staticRoutes = [
    "/",
    "/foam-control-engineering",
    "/solutions",
    "/technologies",
    "/sustainability",
    "/about",
    "/contact",
  ];

  const industryRoutes = industries.map((i) => `/solutions/${i.slug}`);

  const subProcessRoutes = industries.flatMap((i) =>
    i.subProcesses.map((sp) => `/solutions/${i.slug}/${slugify(sp.name)}`)
  );

  return [...staticRoutes, ...industryRoutes, ...subProcessRoutes];
}
