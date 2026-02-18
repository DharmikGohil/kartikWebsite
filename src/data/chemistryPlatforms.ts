// ─── Chemistry Platform Data for Programmatic SEO ────────────────
// Each chemistry × industry combination generates a unique page.

export interface ChemistryPlatform {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  mechanism: string;
  advantages: string[];
  limitations: string[];
  typicalApplications: string[];
  temperatureRange: string;
  phRange: string;
  biodegradability: string;
  applicableIndustries: string[];
}

export const chemistryPlatforms: ChemistryPlatform[] = [
  {
    slug: "silicone-defoamer",
    name: "Silicone-Based Defoamers",
    shortName: "Silicone",
    description: "High-efficiency foam control systems based on polydimethylsiloxane (PDMS) and modified silicone compounds. These defoamers offer rapid foam knockdown and excellent performance under extreme temperature and shear conditions, making them the workhorse chemistry for demanding industrial processes.",
    mechanism: "Silicone defoamers work by spreading rapidly across foam lamellae due to their extremely low surface tension. The silicone oil penetrates the foam film, displaces the stabilizing surfactant layer, and causes rapid film thinning and rupture. Modified silicone compounds include hydrophobic particles that enhance foam-breaking efficiency.",
    advantages: [
      "Fastest foam knockdown speed among all chemistry platforms",
      "Effective at very low dosage rates (10-100 ppm typical)",
      "Excellent thermal stability up to 200°C and beyond",
      "Works across wide pH range (2-14)",
      "High shear stability for demanding mechanical processes",
      "Long-lasting foam suppression with controlled persistence",
    ],
    limitations: [
      "Can cause surface defects (fish eyes, craters) in sensitive coating applications",
      "Silicone residues may interfere with downstream processes like painting or printing",
      "Not suitable for food-contact applications without specific certification",
      "Higher cost per kilogram compared to organic alternatives",
      "Environmental persistence concerns in some discharge scenarios",
    ],
    typicalApplications: [
      "High-temperature textile dyeing and washing",
      "Paper machine foam control",
      "Industrial wastewater treatment",
      "Cement and concrete air entrainment control",
      "Oil and gas separator foam control",
      "Polymer processing and dispersion",
    ],
    temperatureRange: "Ambient to 300°C+",
    phRange: "2–14",
    biodegradability: "Low to moderate (depends on modification)",
    applicableIndustries: ["textile-processing", "paper-pulp", "wastewater-treatment", "cement-construction", "oil-gas", "paints-coatings"],
  },
  {
    slug: "silicone-free-defoamer",
    name: "Silicone-Free Defoamers",
    shortName: "Silicone-Free",
    description: "Foam control solutions engineered without any silicone compounds, designed for sensitive systems where silicone residues are unacceptable. These formulations use mineral oil, vegetable oil, or synthetic organic carriers combined with hydrophobic particles for effective foam control without silicone-related defects.",
    mechanism: "Silicone-free defoamers rely on organic carriers (mineral oils, vegetable oils, or synthetic esters) combined with hydrophobic wax particles. The carrier oil enters the foam film while the particles bridge the film surfaces, causing destabilization and rupture. The absence of silicone eliminates surface tension-related defects.",
    advantages: [
      "No silicone-related surface defects (fish eyes, craters, spots)",
      "Better biodegradability profile than silicone alternatives",
      "Compatible with sensitive coating and finishing processes",
      "No interference with downstream painting, printing, or adhesion",
      "Suitable for food-adjacent and pharmaceutical-adjacent processes",
      "Lower environmental persistence in discharge streams",
    ],
    limitations: [
      "Generally lower foam-breaking efficiency than silicone-based systems",
      "Higher dosage rates typically required",
      "Reduced thermal stability compared to silicone (typically <150°C)",
      "May require more frequent re-dosing",
      "Performance can vary with process chemistry changes",
    ],
    typicalApplications: [
      "Paint and coating manufacturing (grinding, let-down, filling)",
      "Textile finishing and padding operations",
      "Food-adjacent processing",
      "Pharmaceutical manufacturing support",
      "Wastewater treatment with strict discharge requirements",
      "Adhesive and sealant manufacturing",
    ],
    temperatureRange: "Ambient to 150°C",
    phRange: "3–12",
    biodegradability: "Moderate to high",
    applicableIndustries: ["paints-coatings", "textile-processing", "food-beverage", "pharma-biotech", "wastewater-treatment", "municipal-water-reuse"],
  },
  {
    slug: "polyether-defoamer",
    name: "Polyether-Based Defoamers",
    shortName: "Polyether",
    description: "Controlled defoaming systems based on polyether (polyalkylene glycol) chemistry, offering balanced persistence and low toxicity. These defoamers are particularly effective in biological systems, surfactant-rich environments, and water-based processes where stable, long-lasting foam suppression is needed without aggressive foam breaking.",
    mechanism: "Polyether defoamers work through a cloud-point mechanism. Below their cloud point temperature, they are soluble and provide antifoaming action. Above the cloud point, they become insoluble and act as defoamers by entering foam films and causing destabilization. This temperature-dependent behavior allows controlled, persistent foam suppression.",
    advantages: [
      "Excellent compatibility with biological treatment systems",
      "Low aquatic toxicity — suitable for sensitive discharge environments",
      "Controlled, persistent foam suppression (not just knockdown)",
      "Good performance in surfactant-rich systems",
      "Temperature-responsive behavior allows process-tuned performance",
      "No silicone residues or surface defect risks",
    ],
    limitations: [
      "Slower initial foam knockdown compared to silicone",
      "Performance is temperature-dependent (cloud point sensitivity)",
      "May not be effective in very high temperature processes (>120°C)",
      "Can be deactivated by certain surfactant systems",
      "Higher dosage rates than silicone in some applications",
    ],
    typicalApplications: [
      "Biological wastewater treatment (ASP, MBBR, SBR)",
      "Fermentation processes",
      "CIP cleaning systems",
      "Water-based coating systems",
      "Municipal water treatment",
      "Textile wet processing at moderate temperatures",
    ],
    temperatureRange: "10–120°C (cloud point dependent)",
    phRange: "4–10",
    biodegradability: "High",
    applicableIndustries: ["wastewater-treatment", "sugar-fermentation", "food-beverage", "municipal-water-reuse", "textile-processing", "paints-coatings"],
  },
  {
    slug: "fatty-ester-defoamer",
    name: "Fatty Ester-Based Defoamers",
    shortName: "Fatty Ester",
    description: "Biodegradability-focused foam control solutions based on natural fatty acid esters and derivatives. Developed specifically for biological and fermentation systems where environmental profile, controlled persistence, and low ecological impact are prioritized over aggressive foam breaking performance.",
    mechanism: "Fatty ester defoamers work by spreading across foam films using their moderate surface activity. The ester molecules disrupt the surfactant packing at the air-liquid interface, weakening the foam film. Their natural origin provides inherent biodegradability, and their controlled incompatibility ensures foam suppression without process interference.",
    advantages: [
      "Highest biodegradability among all chemistry platforms",
      "Derived from renewable, natural raw materials",
      "Very low aquatic toxicity and ecological impact",
      "Excellent compatibility with biological treatment processes",
      "No silicone residues — suitable for food and pharma-adjacent use",
      "Supports water reuse and zero liquid discharge (ZLD) targets",
    ],
    limitations: [
      "Lowest foam-breaking efficiency among the four platforms",
      "Not suitable for high-temperature applications (>100°C typically)",
      "Requires higher dosage rates for equivalent performance",
      "Limited effectiveness against aggressive mechanical foam",
      "Shorter persistence — more frequent dosing needed",
    ],
    typicalApplications: [
      "Sugar and ethanol fermentation",
      "Biological wastewater treatment",
      "Food and beverage processing",
      "Municipal STP and water reuse plants",
      "Pharmaceutical fermentation support",
      "Organic and bio-process manufacturing",
    ],
    temperatureRange: "Ambient to 100°C",
    phRange: "4–9",
    biodegradability: "Very high (readily biodegradable)",
    applicableIndustries: ["sugar-fermentation", "wastewater-treatment", "food-beverage", "municipal-water-reuse", "pharma-biotech"],
  },
  {
    slug: "hybrid-defoamer",
    name: "Hybrid & Specialty Defoamers",
    shortName: "Hybrid",
    description: "Advanced foam control formulations that combine multiple chemistry platforms — such as silicone-polyether hybrids, modified silicone-organic blends, or multi-component systems — to achieve performance characteristics that no single platform can deliver alone. Engineered for complex processes with conflicting requirements.",
    mechanism: "Hybrid defoamers combine the rapid knockdown of silicone with the persistence of polyether, or the biodegradability of fatty esters with the efficiency of modified organics. The multi-component approach allows fine-tuning of incompatibility level, persistence, and environmental profile to match complex process requirements.",
    advantages: [
      "Combines strengths of multiple chemistry platforms",
      "Can be tuned for specific process requirements",
      "Balances performance with environmental profile",
      "Effective in complex, multi-stage processes",
      "Reduced silicone content while maintaining performance",
      "Versatile across varying process conditions",
    ],
    limitations: [
      "More complex formulation — higher development cost",
      "Performance optimization requires detailed process understanding",
      "May not match pure silicone in extreme conditions",
      "Requires careful compatibility testing",
      "Higher cost than single-platform alternatives",
    ],
    typicalApplications: [
      "Multi-stage textile processing",
      "Complex wastewater treatment trains",
      "Paint manufacturing with mixed requirements",
      "Pharmaceutical process support",
      "Food processing with varying conditions",
      "Advanced municipal water treatment",
    ],
    temperatureRange: "Varies by formulation (typically ambient to 200°C)",
    phRange: "2–12 (formulation dependent)",
    biodegradability: "Moderate (formulation dependent)",
    applicableIndustries: ["textile-processing", "wastewater-treatment", "paints-coatings", "pharma-biotech", "food-beverage", "paper-pulp"],
  },
];

export function getChemistryBySlug(slug: string): ChemistryPlatform | undefined {
  return chemistryPlatforms.find((c) => c.slug === slug);
}
