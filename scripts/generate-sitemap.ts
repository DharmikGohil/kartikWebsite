// ─── Build-time Sitemap Generator ─────────────────────────────────
// Run after build to generate sitemap.xml from the route registry.
// Scales automatically as new industries/sub-processes are added.

import { writeFileSync } from "fs";
import { join } from "path";

// Inline the route generation to avoid TS module issues in build script
const SITE_URL = "https://chemassureglobal.com";

interface IndustryMin {
  slug: string;
  subProcesses: { name: string }[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Import industries data — we read the TS source and extract slugs
// For build script simplicity, we duplicate the minimal data needed
const industries: IndustryMin[] = [
  { slug: "textile-processing", subProcesses: [{ name: "Washing / Scouring / Pretreatment" }, { name: "High-Temperature Dyeing (Jet / Winch)" }, { name: "Finishing / Padding / Softening" }] },
  { slug: "wastewater-treatment", subProcesses: [{ name: "Aeration Tank (ASP / MBBR / SBR)" }, { name: "Clarifier / Secondary Settling" }, { name: "Sludge Handling / Thickener" }] },
  { slug: "paints-coatings", subProcesses: [{ name: "Raw Material Grinding / Dispersion" }, { name: "Let-Down / Formulation Adjustment" }, { name: "Filling / Packaging" }] },
  { slug: "paper-pulp", subProcesses: [{ name: "Pulp Washing / Stock Preparation" }, { name: "Paper Machine (Forming Section)" }] },
  { slug: "cement-construction", subProcesses: [{ name: "Dry Mortar / Premix Systems" }, { name: "Ready-Mix Concrete" }] },
  { slug: "sugar-fermentation", subProcesses: [{ name: "Fermentation" }, { name: "Evaporation / Distillation" }] },
  { slug: "food-beverage", subProcesses: [{ name: "Fermentation (Food-Grade)" }, { name: "CIP (Clean-in-Place) Systems" }, { name: "Evaporation & Concentration" }] },
  { slug: "pharma-biotech", subProcesses: [{ name: "Bioreactor Foam Control" }, { name: "API Processing & Crystallization" }] },
  { slug: "oil-gas", subProcesses: [{ name: "Separator Foam Control" }, { name: "Distillation Unit Foam Control" }, { name: "Drilling Mud Systems" }] },
  { slug: "municipal-water-reuse", subProcesses: [{ name: "Aeration Tank (Reuse-Grade STP)" }, { name: "Clarifier (Reuse Systems)" }] },
];

function getAllRoutes(): string[] {
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

function getPriority(route: string): string {
  if (route === "/") return "1.0";
  if (route === "/solutions" || route === "/foam-control-engineering") return "0.9";
  if (route.match(/^\/solutions\/[^/]+$/)) return "0.8";
  if (route.match(/^\/solutions\/[^/]+\/[^/]+$/)) return "0.7";
  if (["/technologies", "/contact"].includes(route)) return "0.8";
  return "0.6";
}

function getChangefreq(route: string): string {
  if (route === "/") return "weekly";
  if (route === "/solutions") return "weekly";
  return "monthly";
}

const routes = getAllRoutes();
const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outPath = join(process.cwd(), "dist", "sitemap.xml");
const publicPath = join(process.cwd(), "public", "sitemap.xml");

writeFileSync(outPath, xml, "utf-8");
writeFileSync(publicPath, xml, "utf-8");

console.log(`✅ Sitemap generated with ${routes.length} URLs → dist/sitemap.xml`);
