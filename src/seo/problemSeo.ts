// ─── Foam Problem Page SEO Data Generator ─────────────────────────

import type { SEOPageData, FAQItem, BreadcrumbItem } from "./types";
import { SITE_NAME } from "./config";
import { buildBreadcrumbSchema, buildFAQSchema, buildWebPageSchema } from "./schema";
import { getFoamProblemBySlug, foamProblems } from "../data/foamProblems";
import { industries } from "../data/industries";

export function getFoamProblemPageSEO(problemSlug?: string): SEOPageData {
  if (!problemSlug) {
    // Hub page
    const breadcrumbs: BreadcrumbItem[] = [
      { name: "Home", url: "/" },
      { name: "Foam Problems", url: "/foam-problems" },
    ];
    const faqs: FAQItem[] = [
      {
        question: "What are the most common industrial foam problems?",
        answer: `The most common foam problems include ${foamProblems.map((p) => p.name.toLowerCase()).join(", ")}. Each has distinct root causes and requires a targeted engineering approach.`,
      },
      {
        question: "How does ChemAssure solve foam problems?",
        answer: "We start by identifying the root cause — foam mechanism, process conditions, and chemistry environment. Then we configure the right defoamer chemistry, physical form, and dosage for your specific conditions. No generic solutions.",
      },
    ];
    return {
      meta: {
        title: `Common Industrial Foam Problems & Solutions | ${SITE_NAME}`,
        description: `Identify and solve industrial foam problems: ${foamProblems.slice(0, 4).map((p) => p.name.toLowerCase()).join(", ")}, and more. Root cause analysis and engineered defoamer solutions for every foam challenge.`,
        canonical: "/foam-problems",
      },
      breadcrumbs,
      faqs,
      schemas: [buildBreadcrumbSchema(breadcrumbs), buildFAQSchema(faqs)!],
      relatedPages: foamProblems.map((p) => ({
        href: `/foam-problems/${p.slug}`,
        label: p.name,
        description: p.description.split(".")[0] + ".",
      })),
    };
  }

  const problem = getFoamProblemBySlug(problemSlug);
  if (!problem) return getFoamProblemPageSEO(); // fallback

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Foam Problems", url: "/foam-problems" },
    { name: problem.name, url: `/foam-problems/${problemSlug}` },
  ];

  const affectedIndustries = industries.filter((i) =>
    problem.applicableIndustries.includes(i.slug)
  );

  const faqs: FAQItem[] = [
    {
      question: `What causes ${problem.name.toLowerCase()}?`,
      answer: problem.causes.join(". ") + ".",
    },
    {
      question: `How does ${problem.name.toLowerCase()} affect industrial processes?`,
      answer: problem.consequences.join(". ") + ".",
    },
    {
      question: `What is the best defoamer for ${problem.name.toLowerCase()}?`,
      answer: problem.solutionApproach,
    },
    {
      question: `Which industries are affected by ${problem.name.toLowerCase()}?`,
      answer: `${problem.name} commonly affects ${affectedIndustries.map((i) => i.name.toLowerCase()).join(", ")}. Each industry requires a different defoamer configuration based on its specific process conditions.`,
    },
  ];

  const otherProblems = foamProblems
    .filter((p) => p.slug !== problemSlug)
    .slice(0, 3)
    .map((p) => ({
      href: `/foam-problems/${p.slug}`,
      label: p.name,
      description: p.description.split(".")[0] + ".",
    }));

  return {
    meta: {
      title: `${problem.name} — Causes, Solutions & Defoamer Selection | ${SITE_NAME}`,
      description: `${problem.description.split(".").slice(0, 2).join(".")}. Affects ${affectedIndustries.map((i) => i.name.toLowerCase()).join(", ")}. Engineered solutions from ${SITE_NAME}.`,
      canonical: `/foam-problems/${problemSlug}`,
    },
    breadcrumbs,
    faqs,
    schemas: [
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(faqs)!,
      buildWebPageSchema(
        `${problem.name} — Solutions`,
        problem.description,
        `/foam-problems/${problemSlug}`
      ),
    ],
    relatedPages: otherProblems,
    hubPage: { href: "/foam-problems", label: "All foam problems" },
  };
}
