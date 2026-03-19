// ─── Build-time Sitemap Generator ─────────────────────────────────
// Generates sitemap.xml from HIGH-VALUE route combinations only.
// Avoids submitting thin cross-product pages that Google flags as soft 404s.

import { writeFileSync } from "fs";
import { join } from "path";

const SITE_URL = "https://chemassureglobal.com";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// ─── Minimal data mirrors ──

const industries = [
  { slug: "textile-processing", subProcesses: ["Washing / Scouring / Pretreatment", "High-Temperature Dyeing (Jet / Winch)", "Finishing / Padding / Softening"] },
  { slug: "wastewater-treatment", subProcesses: ["Aeration Tank (ASP / MBBR / SBR)", "Clarifier / Secondary Settling", "Sludge Handling / Thickener"] },
  { slug: "paints-coatings", subProcesses: ["Raw Material Grinding / Dispersion", "Let-Down / Formulation Adjustment", "Filling / Packaging"] },
  { slug: "paper-pulp", subProcesses: ["Pulp Washing / Stock Preparation", "Paper Machine (Forming Section)"] },
  { slug: "cement-construction", subProcesses: ["Dry Mortar / Premix Systems", "Ready-Mix Concrete"] },
  { slug: "sugar-fermentation", subProcesses: ["Fermentation", "Evaporation / Distillation"] },
  { slug: "food-beverage", subProcesses: ["Fermentation (Food-Grade)", "CIP (Clean-in-Place) Systems", "Evaporation & Concentration"] },
  { slug: "pharma-biotech", subProcesses: ["Bioreactor Foam Control", "API Processing & Crystallization"] },
  { slug: "oil-gas", subProcesses: ["Separator Foam Control", "Distillation Unit Foam Control", "Drilling Mud Systems"] },
  { slug: "municipal-water-reuse", subProcesses: ["Aeration Tank (Reuse-Grade STP)", "Clarifier (Reuse Systems)"] },
];

const chemistryPlatforms = [
  { slug: "silicone-defoamer", industries: ["textile-processing", "paper-pulp", "wastewater-treatment", "cement-construction", "oil-gas", "paints-coatings"] },
  { slug: "silicone-free-defoamer", industries: ["paints-coatings", "textile-processing", "food-beverage", "pharma-biotech", "wastewater-treatment", "municipal-water-reuse"] },
  { slug: "polyether-defoamer", industries: ["wastewater-treatment", "sugar-fermentation", "food-beverage", "municipal-water-reuse", "textile-processing", "paints-coatings"] },
  { slug: "fatty-ester-defoamer", industries: ["sugar-fermentation", "wastewater-treatment", "food-beverage", "municipal-water-reuse", "pharma-biotech"] },
  { slug: "hybrid-defoamer", industries: ["textile-processing", "wastewater-treatment", "paints-coatings", "pharma-biotech", "food-beverage", "paper-pulp"] },
];

const foamProblems = [
  "foam-overflow", "surface-defects-from-foam", "biological-foam",
  "foam-in-fermentation", "pump-cavitation-from-foam",
  "foam-reducing-heat-transfer", "foam-in-concrete", "foam-in-oil-gas-separation",
  "foam-in-textile-dyeing", "foam-in-cip-cleaning", "foam-in-paper-machine",
  "foam-in-paint-grinding", "foam-in-sugar-evaporation", "foam-in-adhesive-manufacturing",
  "foam-in-membrane-bioreactor", "foam-in-drilling-fluids", "foam-in-effluent-treatment",
  "foam-in-ink-manufacturing", "foam-in-leather-processing", "foam-in-starch-processing",
  "foam-in-detergent-manufacturing", "foam-in-desalination",
];

// Top Indian states (limit to major industrial states only for sitemap)
const topIndianStates = [
  "gujarat", "maharashtra", "tamil-nadu", "karnataka", "rajasthan",
  "uttar-pradesh", "andhra-pradesh", "telangana", "west-bengal",
  "madhya-pradesh", "punjab", "haryana", "kerala",
];

// Top international countries (limit to major markets)
const topCountries = [
  "united-states", "china", "germany", "japan", "south-korea", "brazil",
  "mexico", "united-kingdom", "france", "italy", "turkey", "saudi-arabia",
  "uae", "indonesia", "thailand", "vietnam", "malaysia", "bangladesh",
  "pakistan", "egypt", "south-africa", "nigeria", "australia", "canada",
];

// Major cities per state/country (max 10 per location for sitemap)
const topCitiesPerState: Record<string, string[]> = {
  "gujarat": ["ahmedabad","surat","vadodara","rajkot","bharuch","ankleshwar","vapi","morbi","gandhidham","jamnagar"],
  "maharashtra": ["mumbai","pune","nashik","nagpur","aurangabad","thane","navi-mumbai","kolhapur","solapur","tarapur"],
  "tamil-nadu": ["chennai","coimbatore","tirupur","madurai","salem","erode","trichy","hosur","vellore","sivakasi"],
  "karnataka": ["bangalore","mysore","mangalore","hubli-dharwad","belgaum","davangere","shimoga","tumkur"],
  "rajasthan": ["jaipur","jodhpur","udaipur","kota","bhiwadi","neemrana","pali","ajmer","bikaner","alwar"],
  "uttar-pradesh": ["noida","greater-noida","lucknow","kanpur","agra","varanasi","ghaziabad","meerut","moradabad","bareilly"],
  "andhra-pradesh": ["visakhapatnam","vijayawada","guntur","tirupati","kakinada","nellore","kurnool","rajahmundry"],
  "telangana": ["hyderabad","warangal","nizamabad","karimnagar","medak","sangareddy","nalgonda","khammam"],
  "west-bengal": ["kolkata","howrah","durgapur","asansol","siliguri","haldia","kharagpur","bardhaman"],
  "madhya-pradesh": ["indore","bhopal","jabalpur","gwalior","pithampur","dewas","ujjain","ratlam"],
  "punjab": ["ludhiana","amritsar","jalandhar","patiala","bathinda","mohali","mandi-gobindgarh"],
  "haryana": ["gurugram","faridabad","panipat","sonipat","karnal","hisar","rohtak","manesar"],
  "kerala": ["kochi","thiruvananthapuram","kozhikode","thrissur","kollam","palakkad","kannur"],
};

const topCitiesPerCountry: Record<string, string[]> = {
  "united-states": ["houston","chicago","los-angeles","philadelphia","detroit","atlanta","dallas","new-jersey","san-francisco","seattle"],
  "china": ["shanghai","guangzhou","shenzhen","beijing","tianjin","hangzhou","suzhou","dongguan","foshan","wuhan"],
  "germany": ["frankfurt","munich","hamburg","cologne","stuttgart","dusseldorf","ludwigshafen","leverkusen"],
  "japan": ["tokyo","osaka","nagoya","yokohama","kobe","fukuoka","kawasaki","chiba"],
  "south-korea": ["seoul","busan","incheon","ulsan","daegu","gwangju","daejeon","changwon"],
  "brazil": ["sao-paulo","rio-de-janeiro","belo-horizonte","curitiba","porto-alegre","campinas","salvador","recife"],
  "mexico": ["mexico-city","monterrey","guadalajara","puebla","queretaro","tijuana","leon","saltillo"],
  "united-kingdom": ["london","manchester","birmingham","leeds","glasgow","liverpool","sheffield","bristol"],
  "france": ["paris","lyon","marseille","toulouse","lille","strasbourg","bordeaux","nantes"],
  "italy": ["milan","turin","rome","bologna","florence","naples","genoa","venice"],
  "turkey": ["istanbul","ankara","izmir","bursa","gaziantep","kayseri","adana","konya"],
  "saudi-arabia": ["riyadh","jeddah","dammam","jubail","yanbu","mecca"],
  "uae": ["dubai","abu-dhabi","sharjah","ras-al-khaimah","fujairah","ajman"],
  "indonesia": ["jakarta","surabaya","bandung","semarang","medan","tangerang","bekasi","cikarang"],
  "thailand": ["bangkok","chonburi","rayong","samut-prakan","chiang-mai","nakhon-ratchasima"],
  "vietnam": ["ho-chi-minh-city","hanoi","da-nang","hai-phong","binh-duong","dong-nai"],
  "malaysia": ["kuala-lumpur","penang","johor-bahru","shah-alam","ipoh","kuantan"],
  "bangladesh": ["dhaka","chittagong","gazipur","narayanganj","tongi","comilla"],
  "pakistan": ["karachi","lahore","faisalabad","islamabad","sialkot","multan"],
  "egypt": ["cairo","alexandria","giza","port-said","suez","10th-of-ramadan"],
  "south-africa": ["johannesburg","cape-town","durban","pretoria","port-elizabeth","richards-bay"],
  "nigeria": ["lagos","abuja","port-harcourt","kano","ibadan","ogun"],
  "australia": ["sydney","melbourne","brisbane","perth","adelaide","newcastle-au"],
  "canada": ["toronto","montreal","vancouver","calgary","edmonton","ottawa"],
};

// Problem × Industry cross-product map
const problemIndustryMap: Record<string, string[]> = {
  "foam-overflow": ["wastewater-treatment","sugar-fermentation","food-beverage","textile-processing","paper-pulp","pharma-biotech"],
  "surface-defects-from-foam": ["paints-coatings","textile-processing","paper-pulp"],
  "biological-foam": ["wastewater-treatment","municipal-water-reuse","food-beverage","pharma-biotech"],
  "foam-in-fermentation": ["sugar-fermentation","food-beverage","pharma-biotech"],
  "pump-cavitation-from-foam": ["wastewater-treatment","paper-pulp","textile-processing","oil-gas","sugar-fermentation"],
  "foam-reducing-heat-transfer": ["sugar-fermentation","food-beverage","oil-gas","paper-pulp","pharma-biotech"],
  "foam-in-concrete": ["cement-construction"],
  "foam-in-oil-gas-separation": ["oil-gas"],
  "foam-in-textile-dyeing": ["textile-processing"],
  "foam-in-cip-cleaning": ["food-beverage","pharma-biotech","sugar-fermentation"],
  "foam-in-paper-machine": ["paper-pulp"],
  "foam-in-paint-grinding": ["paints-coatings"],
  "foam-in-sugar-evaporation": ["sugar-fermentation","food-beverage"],
  "foam-in-adhesive-manufacturing": ["paints-coatings","cement-construction"],
  "foam-in-membrane-bioreactor": ["wastewater-treatment","municipal-water-reuse"],
  "foam-in-drilling-fluids": ["oil-gas"],
  "foam-in-effluent-treatment": ["wastewater-treatment","textile-processing","pharma-biotech","food-beverage","paper-pulp"],
  "foam-in-ink-manufacturing": ["paints-coatings","paper-pulp"],
  "foam-in-leather-processing": ["textile-processing","wastewater-treatment"],
  "foam-in-starch-processing": ["food-beverage","sugar-fermentation"],
  "foam-in-detergent-manufacturing": ["paints-coatings","textile-processing","food-beverage"],
  "foam-in-desalination": ["municipal-water-reuse","wastewater-treatment"],
};

// ─── Route Generation (HIGH-VALUE PAGES ONLY) ─────────────────────

function getAllRoutes(): string[] {
  const routes: string[] = [];

  // 1. Static pages
  routes.push("/", "/foam-control-engineering", "/solutions", "/technologies",
    "/sustainability", "/about", "/contact", "/blog", "/request-pricing",
    "/locations", "/chemistry", "/foam-problems", "/global");

  // 2. Industry hub + sub-process pages (high value, unique content)
  for (const ind of industries) {
    routes.push(`/solutions/${ind.slug}`);
    for (const sp of ind.subProcesses) {
      routes.push(`/solutions/${ind.slug}/${slugify(sp)}`);
    }
  }

  // 3. Chemistry hub + chemistry×industry pages (unique content)
  for (const chem of chemistryPlatforms) {
    routes.push(`/chemistry/${chem.slug}`);
    for (const indSlug of chem.industries) {
      routes.push(`/chemistry/${chem.slug}/${indSlug}`);
    }
  }

  // 4. Foam problem hub pages (unique content)
  for (const problem of foamProblems) {
    routes.push(`/foam-problems/${problem}`);
  }

  // 5. Problem × Industry cross-product (unique content per combo)
  for (const problem of foamProblems) {
    const applicableInds = problemIndustryMap[problem] || [];
    for (const indSlug of applicableInds) {
      routes.push(`/foam-problems/${problem}/${indSlug}`);
    }
  }

  // 6. Indian state pages (state-level only, high value)
  for (const stateSlug of topIndianStates) {
    routes.push(`/locations/${stateSlug}`);
  }

  // 7. Top Indian city pages only (max 10 per state)
  for (const stateSlug of topIndianStates) {
    const cities = topCitiesPerState[stateSlug] || [];
    for (const city of cities) {
      routes.push(`/locations/${stateSlug}/${city}`);
    }
  }

  // 8. International country pages (country-level only)
  for (const countrySlug of topCountries) {
    routes.push(`/global/${countrySlug}`);
  }

  // 9. Top international city pages only (max 10 per country)
  for (const countrySlug of topCountries) {
    const cities = topCitiesPerCountry[countrySlug] || [];
    for (const city of cities) {
      routes.push(`/global/${countrySlug}/${city}`);
    }
  }

  // NOTE: City × Industry, City × Chemistry, City × Problem cross-product
  // pages are intentionally EXCLUDED from the sitemap. They are thin content
  // pages that Google flags as soft 404s. They still exist for internal
  // linking but are noindexed and not submitted to Google.

  return routes;
}

function getPriority(route: string): string {
  if (route === "/") return "1.0";
  if (["/solutions", "/foam-control-engineering"].includes(route)) return "0.9";
  if (route.match(/^\/solutions\/[^/]+$/)) return "0.8";
  if (route.match(/^\/solutions\/[^/]+\/[^/]+$/)) return "0.7";
  if (["/technologies", "/contact", "/chemistry", "/foam-problems", "/locations", "/global"].includes(route)) return "0.8";
  if (route.match(/^\/chemistry\/[^/]+$/)) return "0.7";
  if (route.match(/^\/chemistry\/[^/]+\/[^/]+$/)) return "0.6";
  if (route.match(/^\/foam-problems\/[^/]+$/)) return "0.7";
  if (route.match(/^\/locations\/[^/]+$/) || route.match(/^\/global\/[^/]+$/)) return "0.7";
  if (route.match(/^\/locations\/[^/]+\/[^/]+$/) || route.match(/^\/global\/[^/]+\/[^/]+$/)) return "0.6";
  return "0.5";
}

function getChangefreq(route: string): string {
  if (route === "/" || route === "/solutions") return "weekly";
  return "monthly";
}

// ─── Generate ─────────────────────────────────────────────────────

const routes = getAllRoutes();
const today = new Date().toISOString().split("T")[0];

const URLS_PER_SITEMAP = 50000;
const chunks: string[][] = [];
for (let i = 0; i < routes.length; i += URLS_PER_SITEMAP) {
  chunks.push(routes.slice(i, i + URLS_PER_SITEMAP));
}

if (chunks.length === 1) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks[0].map((route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`).join("\n")}
</urlset>
`;
  writeFileSync(join(process.cwd(), "dist", "sitemap.xml"), xml, "utf-8");
  writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml, "utf-8");
} else {
  for (let i = 0; i < chunks.length; i++) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks[i].map((route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`).join("\n")}
</urlset>
`;
    writeFileSync(join(process.cwd(), "dist", `sitemap-${i + 1}.xml`), xml, "utf-8");
    writeFileSync(join(process.cwd(), "public", `sitemap-${i + 1}.xml`), xml, "utf-8");
  }

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.map((_, i) => `  <sitemap>
    <loc>${SITE_URL}/sitemap-${i + 1}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>
`;
  writeFileSync(join(process.cwd(), "dist", "sitemap.xml"), indexXml, "utf-8");
  writeFileSync(join(process.cwd(), "public", "sitemap.xml"), indexXml, "utf-8");
}

console.log(`✅ Sitemap generated with ${routes.length} URLs across ${chunks.length} file(s)`);
