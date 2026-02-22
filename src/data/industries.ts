export interface ProductGrade {
  code: string;
  tradeName: string;
  type: string;
  form: string;
  description: string;
}

export interface SubProcess {
  name: string;
  foamChallenges: string[];
  operatingConditions: {
    temperature: string;
    ph: string;
    foamType: string;
    shearLevel: string;
  };
  engineeringApproach: {
    description: string;
    chemistryPlatforms: string;
    physicalForms: string;
    incompatibilityLevel: string;
    ecoGrade: string;
  };
  solutionConfigurations: string[];
  productGrades?: ProductGrade[];
}

export interface IndustryData {
  slug: string;
  name: string;
  icon: string;
  heroImage: string;
  shortDesc: string;
  sustainabilityNote: string;
  positioningNote?: string;
  subProcesses: SubProcess[];
}

export const industries: IndustryData[] = [
  {
    slug: "textile-processing",
    name: "Textile Processing",
    icon: "🧵",
    heroImage: "https://images.unsplash.com/photo-1636986056375-184676d8ca14?w=1200&q=80",
    shortDesc: "Foam control for washing, dyeing, finishing and printing operations where foam disrupts uniformity, throughput and fabric quality.",
    sustainabilityNote: "Lower dosage formulations reduce chemical load in effluent. ZDHC-aligned grades support textile export compliance. Silicone-free options minimize environmental persistence.",
    subProcesses: [
      {
        name: "Washing / Scouring / Pretreatment",
        foamChallenges: [
          "Excess foam due to detergents and wetting agents",
          "Overflow during circulation",
          "Reduced washing efficiency",
        ],
        operatingConditions: {
          temperature: "60–95°C",
          ph: "9–12",
          foamType: "Surfactant-stabilized foam",
          shearLevel: "Medium–High",
        },
        engineeringApproach: {
          description: "Fast-acting foam rupture to prevent overflow. Moderate persistence to avoid buildup. Cost-optimized chemistry.",
          chemistryPlatforms: "Oil-modified silicone | Polyether",
          physicalForms: "Water-based emulsion",
          incompatibilityLevel: "Strong",
          ecoGrade: "Industrial | ECO-1 option",
        },
        solutionConfigurations: [
          "Continuous-dose emulsion for wash baths",
          "Intermittent shock dosing for foam spikes",
        ],
        productGrades: [
          { code: "TP-101", tradeName: "Defoamer for Washing / Scouring / Pretreatment TP-101", type: "Oil-modified silicone emulsion", form: "Emulsion", description: "General-purpose wash bath defoamer for continuous dosing at 60-95°C" },
        ],
      },
      {
        name: "High-Temperature Dyeing (Jet / Winch)",
        foamChallenges: [
          "Foam carry-over causing shade variation",
          "Pump cavitation at high temperature",
          "Silicone dropout complaints",
        ],
        operatingConditions: {
          temperature: "80–130°C",
          ph: "10–13",
          foamType: "Surfactant + mechanical foam",
          shearLevel: "Very high",
        },
        engineeringApproach: {
          description: "Thermal-stable foam breakers. Controlled incompatibility to prevent fabric marks. Low dosage at extreme conditions.",
          chemistryPlatforms: "Modified silicone | Silicone-polyether hybrid",
          physicalForms: "Liquid | High-stability emulsion",
          incompatibilityLevel: "Strong but controlled",
          ecoGrade: "Industrial | Reduced-silicone option",
        },
        solutionConfigurations: [
          "High-temperature liquid defoamer for jet machines",
          "Pre-dosing system to prevent foam formation",
        ],
        productGrades: [
          { code: "TP-201", tradeName: "Defoamer for High-Temperature Dyeing TP-201", type: "Modified silicone liquid", form: "Liquid", description: "Thermal-stable defoamer for jet dyeing at 80-130°C with controlled incompatibility" },
        ],
      },
      {
        name: "Finishing / Padding / Softening",
        foamChallenges: [
          "Surface spots and oil marks",
          "Foam during padding and spraying",
          "Quality rejection",
        ],
        operatingConditions: {
          temperature: "< 80°C",
          ph: "5–8",
          foamType: "Light but defect-sensitive",
          shearLevel: "Low–Medium",
        },
        engineeringApproach: {
          description: "Ultra-controlled incompatibility. Minimal surface interaction. Low residue systems.",
          chemistryPlatforms: "Polyether | Silicone-free",
          physicalForms: "Emulsion",
          incompatibilityLevel: "Low and precise",
          ecoGrade: "ECO-2",
        },
        solutionConfigurations: [
          "Low-residue finishing defoamer",
          "Spray-safe foam control additive",
        ],
        productGrades: [
          { code: "TP-301", tradeName: "Defoamer for Finishing / Padding / Softening TP-301", type: "Polyether emulsion", form: "Emulsion", description: "Ultra-low residue defoamer for padding and softening, no surface spots" },
        ],
      },
    ],
  },
  {
    slug: "wastewater-treatment",
    name: "Wastewater Treatment & Water Reuse",
    icon: "💧",
    heroImage: "https://images.unsplash.com/photo-1607113090645-8af7ec35b211?w=1200&q=80",
    shortDesc: "Foam control for aeration, clarification, sludge handling and membrane systems where foam affects treatment efficiency and compliance.",
    sustainabilityNote: "Dosage-optimized formulations minimize discharge load. Biodegradable options support water reuse targets. Compatible with GPCB discharge norms.",
    subProcesses: [
      {
        name: "Aeration Tank (ASP / MBBR / SBR)",
        foamChallenges: [
          "Thick biological foam blanket",
          "Oxygen transfer reduction",
          "Foam overflow",
        ],
        operatingConditions: {
          temperature: "10–40°C",
          ph: "6–8.5",
          foamType: "Biological / protein foam",
          shearLevel: "Continuous aeration",
        },
        engineeringApproach: {
          description: "Long-lasting foam suppression. No biological toxicity. Low-silicone or silicone-free design.",
          chemistryPlatforms: "Polyether | Fatty ester",
          physicalForms: "Emulsion",
          incompatibilityLevel: "Moderate, persistent",
          ecoGrade: "ECO-2 / Reuse-oriented",
        },
        solutionConfigurations: [
          "Continuous-dose aeration defoamer",
          "Shock-dose foam breaker",
        ],
        productGrades: [
          { code: "WW-101", tradeName: "Defoamer for Aeration Tank WW-101", type: "Polyether emulsion", form: "Emulsion", description: "Continuous-dose aeration tank defoamer, bio-safe with long persistence" },
        ],
      },
      {
        name: "Clarifier / Secondary Settling",
        foamChallenges: [
          "Sludge carry-over",
          "Foam formation on surface",
          "Odour issues",
        ],
        operatingConditions: {
          temperature: "Ambient",
          ph: "6–8",
          foamType: "Entrained + biological",
          shearLevel: "Low",
        },
        engineeringApproach: {
          description: "Gentle foam collapse. Minimal sludge disturbance.",
          chemistryPlatforms: "Fatty ester | Polyether",
          physicalForms: "Emulsion",
          incompatibilityLevel: "Low–Moderate",
          ecoGrade: "ECO-2",
        },
        solutionConfigurations: [
          "Clarifier-safe foam control system",
        ],
        productGrades: [
          { code: "WW-201", tradeName: "Defoamer for Clarifier / Secondary Settling WW-201", type: "Fatty ester emulsion", form: "Emulsion", description: "Gentle clarifier foam control with minimal sludge disturbance" },
        ],
      },
      {
        name: "Sludge Handling / Thickener",
        foamChallenges: [
          "Foam during pumping",
          "Reduced dewatering efficiency",
        ],
        operatingConditions: {
          temperature: "Ambient",
          ph: "6–9",
          foamType: "Entrained air",
          shearLevel: "Medium",
        },
        engineeringApproach: {
          description: "Rapid air release. Short persistence.",
          chemistryPlatforms: "Low-dose silicone hybrid",
          physicalForms: "Liquid",
          incompatibilityLevel: "Moderate",
          ecoGrade: "Industrial / ECO-1",
        },
        solutionConfigurations: [
          "Pump-line air-release defoamer",
        ],
        productGrades: [
          { code: "WW-301", tradeName: "Defoamer for Sludge Handling / Thickener WW-301", type: "Low-dose silicone hybrid", form: "Liquid", description: "Rapid air-release defoamer for sludge pumping lines" },
        ],
      },
    ],
  },
  {
    slug: "paints-coatings",
    name: "Paints & Coatings",
    icon: "🎨",
    heroImage: "https://images.unsplash.com/photo-1710360258725-8361478b9eb5?w=1200&q=80",
    shortDesc: "Foam control during grinding, let-down and filling where micro-foam causes surface defects, pinholes and color inconsistency.",
    sustainabilityNote: "Low-VOC formulations support environmental coating standards. Reduced dosage requirements minimize additive load. Compatible with water-based coating systems.",
    subProcesses: [
      {
        name: "Raw Material Grinding / Dispersion",
        foamChallenges: [
          "Air entrapment during high-speed dispersion",
          "Micro-foam that does not break naturally",
          "Poor pigment wetting due to foam",
          "Downstream surface defects",
        ],
        operatingConditions: {
          temperature: "Ambient – 60°C",
          ph: "7–9",
          foamType: "Mechanical entrained air (micro-foam)",
          shearLevel: "Very high (bead mill, high-speed disperser)",
        },
        engineeringApproach: {
          description: "Controlled air-release without surface defects. Rapid spreading without over-incompatibility. Stability under continuous shear.",
          chemistryPlatforms: "Modified silicone | Polyether-silicone hybrids",
          physicalForms: "Liquid concentrate",
          incompatibilityLevel: "Very controlled",
          ecoGrade: "Industrial | ECO-1 option",
        },
        solutionConfigurations: [
          "Grinding-stage air-release additive",
          "Pre-dispersion foam suppression system",
        ],
        productGrades: [
          { code: "PC-101", tradeName: "Defoamer for Raw Material Grinding / Dispersion PC-101", type: "Modified silicone liquid", form: "Liquid", description: "Controlled air-release for high-speed dispersion, no surface defects" },
        ],
      },
      {
        name: "Let-Down / Formulation Adjustment",
        foamChallenges: [
          "Residual foam during viscosity adjustment",
          "Foam trapping inside formulation",
          "Sensitivity to silicone residues",
        ],
        operatingConditions: {
          temperature: "Ambient",
          ph: "7–9",
          foamType: "Light entrained foam",
          shearLevel: "Medium",
        },
        engineeringApproach: {
          description: "Extremely low incompatibility. Self-disappearing defoaming action. Zero impact on gloss and leveling.",
          chemistryPlatforms: "Polyether | Silicone-free",
          physicalForms: "Liquid or emulsion",
          incompatibilityLevel: "Low",
          ecoGrade: "ECO-2",
        },
        solutionConfigurations: [
          "Let-down-stage foam control additive",
        ],
        productGrades: [
          { code: "PC-201", tradeName: "Defoamer for Let-Down / Formulation Adjustment PC-201", type: "Polyether liquid", form: "Liquid", description: "Ultra-low incompatibility defoamer for let-down, zero gloss impact" },
        ],
      },
      {
        name: "Filling / Packaging",
        foamChallenges: [
          "Foam during filling operations",
          "Inaccurate fill volumes",
          "Surface foam persistence",
        ],
        operatingConditions: {
          temperature: "Ambient",
          ph: "7–9",
          foamType: "Mechanical surface foam",
          shearLevel: "Low",
        },
        engineeringApproach: {
          description: "Instant surface foam collapse. No long-term residue.",
          chemistryPlatforms: "Polyether",
          physicalForms: "Liquid",
          incompatibilityLevel: "Low",
          ecoGrade: "ECO-2",
        },
        solutionConfigurations: [
          "Filling-line foam suppressor",
        ],
        productGrades: [
          { code: "PC-301", tradeName: "Defoamer for Filling / Packaging PC-301", type: "Polyether liquid", form: "Liquid", description: "Instant surface foam collapse for filling lines, no residue" },
        ],
      },
    ],
  },
  {
    slug: "paper-pulp",
    name: "Paper & Pulp",
    icon: "📄",
    heroImage: "https://images.unsplash.com/photo-1727517786578-ff2bb896b852?w=1200&q=80",
    shortDesc: "Foam control in pulp washing, stock preparation and paper machine operations where foam causes sheet breaks, pinholes and drainage issues.",
    sustainabilityNote: "Efficient defoaming reduces water consumption in washing stages. Lower dosage formulations minimize chemical discharge. Compatible with closed-loop water systems.",
    subProcesses: [
      {
        name: "Pulp Washing / Stock Preparation",
        foamChallenges: [
          "Resin-stabilized foam",
          "Poor drainage",
          "Fiber carry-over",
        ],
        operatingConditions: {
          temperature: "40–90°C",
          ph: "6–8",
          foamType: "Resin + surfactant foam",
          shearLevel: "High",
        },
        engineeringApproach: {
          description: "Strong foam knockdown. High persistence in recycle loops. Deposit-controlled formulation.",
          chemistryPlatforms: "Silicone compounds | Hybrid systems",
          physicalForms: "Emulsion",
          incompatibilityLevel: "Strong",
          ecoGrade: "Industrial",
        },
        solutionConfigurations: [
          "Stock-prep foam control system",
        ],
        productGrades: [
          { code: "PP-101", tradeName: "Defoamer for Pulp Washing / Stock Preparation PP-101", type: "Silicone compound emulsion", form: "Emulsion", description: "High-persistence foam control for pulp washing recycle loops" },
        ],
      },
      {
        name: "Paper Machine (Forming Section)",
        foamChallenges: [
          "Entrained air causing sheet breaks",
          "Pinholes in paper",
          "Speed limitation",
        ],
        operatingConditions: {
          temperature: "50–80°C",
          ph: "6–8",
          foamType: "Entrained air",
          shearLevel: "Very high",
        },
        engineeringApproach: {
          description: "Fast thin-film foam rupture. Minimal deposition on machinery.",
          chemistryPlatforms: "Controlled silicone",
          physicalForms: "Liquid / Emulsion",
          incompatibilityLevel: "Moderate",
          ecoGrade: "Industrial | Reduced discharge option",
        },
        solutionConfigurations: [
          "Machine-section foam control additive",
        ],
        productGrades: [
          { code: "PP-201", tradeName: "Defoamer for Paper Machine (Forming Section) PP-201", type: "Controlled silicone liquid", form: "Liquid", description: "Fast thin-film foam rupture for paper machine forming section" },
        ],
      },
    ],
  },
  {
    slug: "cement-construction",
    name: "Cement & Construction",
    icon: "🏗️",
    heroImage: "https://images.unsplash.com/photo-1568621422837-a343133e2bb9?w=1200&q=80",
    shortDesc: "Foam control in dry mortar, ready-mix concrete and tile adhesive production where air entrainment affects compressive strength and surface finish.",
    sustainabilityNote: "Precise dosage control reduces material waste. Silicone-free options preferred for construction applications. Optimized formulations maintain structural integrity while controlling foam.",
    subProcesses: [
      {
        name: "Dry Mortar / Premix Systems",
        foamChallenges: [
          "Air entrapment during mixing",
          "Strength reduction",
          "Poor surface finish",
        ],
        operatingConditions: {
          temperature: "Ambient",
          ph: ">12",
          foamType: "Entrained air",
          shearLevel: "High",
        },
        engineeringApproach: {
          description: "Delayed activation. Uniform dispersion. High alkaline stability.",
          chemistryPlatforms: "Silicone on solid carrier",
          physicalForms: "Powder",
          incompatibilityLevel: "Strong",
          ecoGrade: "Industrial",
        },
        solutionConfigurations: [
          "Dry-mix powder defoamer",
        ],
        productGrades: [
          { code: "CC-101", tradeName: "Defoamer for Dry Mortar / Premix Systems CC-101", type: "Silicone on solid carrier", form: "Powder", description: "Delayed-activation powder defoamer for dry mortar premix systems" },
        ],
      },
      {
        name: "Ready-Mix Concrete",
        foamChallenges: [
          "Micro-air bubbles",
          "Honeycombing",
          "Loss of compressive strength",
        ],
        operatingConditions: {
          temperature: "Ambient",
          ph: ">12",
          foamType: "Micro-entrained air",
          shearLevel: "High",
        },
        engineeringApproach: {
          description: "Rapid air release. Compatibility with admixtures.",
          chemistryPlatforms: "Liquid silicone defoamers",
          physicalForms: "Liquid",
          incompatibilityLevel: "Strong",
          ecoGrade: "Industrial",
        },
        solutionConfigurations: [
          "Liquid air-release agent",
        ],
        productGrades: [
          { code: "CC-201", tradeName: "Defoamer for Ready-Mix Concrete CC-201", type: "Liquid silicone defoamer", form: "Liquid", description: "Rapid air-release agent for ready-mix concrete, admixture compatible" },
        ],
      },
    ],
  },
  {
    slug: "sugar-fermentation",
    name: "Sugar & Fermentation",
    icon: "🍬",
    heroImage: "https://images.unsplash.com/photo-1758978912199-e0df57bde255?w=1200&q=80",
    shortDesc: "Foam control in fermentation vessels and evaporation systems where foam causes overflow, carry-over and yield loss.",
    sustainabilityNote: "Food-grade formulations ensure product safety. Dosage efficiency reduces overall chemical consumption. Biodegradable options available for fermentation applications.",
    subProcesses: [
      {
        name: "Fermentation",
        foamChallenges: [
          "CO₂-driven foam",
          "Reactor overflow",
          "Product loss",
        ],
        operatingConditions: {
          temperature: "30–38°C",
          ph: "4–6",
          foamType: "Protein-based",
          shearLevel: "Low–Medium",
        },
        engineeringApproach: {
          description: "Controlled persistence. Low toxicity. Silicone-free preference.",
          chemistryPlatforms: "Fatty ester | Polyether",
          physicalForms: "Emulsion",
          incompatibilityLevel: "Moderate",
          ecoGrade: "ECO-2 | Food-process compatible (custom)",
        },
        solutionConfigurations: [
          "Continuous fermentation foam control",
        ],
        productGrades: [
          { code: "SF-101", tradeName: "Defoamer for Fermentation SF-101", type: "Fatty ester emulsion", form: "Emulsion", description: "Biodegradable fermentation defoamer, low toxicity with controlled persistence" },
        ],
      },
      {
        name: "Evaporation / Distillation",
        foamChallenges: [
          "Carry-over",
          "Fouling",
          "Yield loss",
        ],
        operatingConditions: {
          temperature: "High (80–120°C)",
          ph: "4–7",
          foamType: "Organic foam",
          shearLevel: "Medium",
        },
        engineeringApproach: {
          description: "Thermal stability. No contamination risk.",
          chemistryPlatforms: "Silicone-free polyether",
          physicalForms: "Liquid",
          incompatibilityLevel: "Low",
          ecoGrade: "ECO-2",
        },
        solutionConfigurations: [
          "Evaporation-stage foam suppressor",
        ],
        productGrades: [
          { code: "SF-201", tradeName: "Defoamer for Evaporation / Distillation SF-201", type: "Silicone-free polyether liquid", form: "Liquid", description: "Thermal-stable evaporation defoamer, no contamination risk" },
        ],
      },
    ],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage Processing",
    icon: "🍽️",
    heroImage: "https://images.unsplash.com/photo-1530037335614-e68828dcf258?w=1200&q=80",
    shortDesc: "Custom-engineered foam control for fermentation, CIP systems and evaporation where food safety and regulatory compliance are non-negotiable.",
    sustainabilityNote: "Food-grade formulations meet regulatory requirements. Dosage optimization reduces chemical usage in food-contact applications. Custom solutions designed per specific process and regulatory needs.",
    positioningNote: "Solutions are engineered on request and validated in collaboration with customer process and regulatory requirements.",
    subProcesses: [
      {
        name: "Fermentation (Food-Grade)",
        foamChallenges: [
          "Fermentation foam overflow",
          "Product loss and contamination risk",
          "Carry-over during processing",
        ],
        operatingConditions: {
          temperature: "20–120°C",
          ph: "3–10",
          foamType: "Protein-based / biological foam",
          shearLevel: "Low–Medium",
        },
        engineeringApproach: {
          description: "Silicone-free or ultra-low silicone preference. Focus on biodegradability and low bio-accumulation. Controlled persistence - foam control without residual activity. Compliance-driven material selection.",
          chemistryPlatforms: "Polyether | Fatty ester | Food-safe hybrids",
          physicalForms: "Water-based emulsions",
          incompatibilityLevel: "Moderate and temporary",
          ecoGrade: "ECO-3 (Food-process compatible – qualification based)",
        },
        solutionConfigurations: [
          "Fermentation foam control systems",
          "Evaporation and concentration foam suppressors",
        ],
        productGrades: [
          { code: "FB-101", tradeName: "Defoamer for Fermentation (Food-Grade) FB-101", type: "Polyether emulsion (food-process)", form: "Emulsion", description: "Food-process compatible fermentation defoamer, qualification based" },
        ],
      },
      {
        name: "CIP (Clean-in-Place) Systems",
        foamChallenges: [
          "Foam during cleaning cycles reducing efficiency",
          "Residual foam affecting next production batch",
          "Chemical waste from excessive foam",
        ],
        operatingConditions: {
          temperature: "60–85°C",
          ph: "2–12 (acid and caustic cycles)",
          foamType: "Surfactant-driven (from cleaning agents)",
          shearLevel: "Medium",
        },
        engineeringApproach: {
          description: "Compatibility with both acid and caustic cleaning agents. No residue on food-contact surfaces. Rapid foam collapse during rinse cycles.",
          chemistryPlatforms: "Polyether | Fatty ester",
          physicalForms: "Water-based emulsions",
          incompatibilityLevel: "Low",
          ecoGrade: "ECO-3 (Food-process compatible)",
        },
        solutionConfigurations: [
          "CIP-compatible foam control additives",
        ],
        productGrades: [
          { code: "FB-201", tradeName: "Defoamer for CIP (Clean-in-Place) Systems FB-201", type: "Polyether emulsion (CIP-safe)", form: "Emulsion", description: "Acid and caustic compatible CIP defoamer, no surface residue" },
        ],
      },
      {
        name: "Evaporation & Concentration",
        foamChallenges: [
          "Carry-over during evaporation",
          "Fouling of heat exchange surfaces",
          "Product contamination risk",
        ],
        operatingConditions: {
          temperature: "80–120°C",
          ph: "3–8",
          foamType: "Organic / protein foam",
          shearLevel: "Low–Medium",
        },
        engineeringApproach: {
          description: "Thermal stability without decomposition. Zero contamination risk. Food-grade material selection only.",
          chemistryPlatforms: "Food-safe polyether | Fatty ester",
          physicalForms: "Water-based emulsions",
          incompatibilityLevel: "Low",
          ecoGrade: "ECO-3 (Food-process compatible)",
        },
        solutionConfigurations: [
          "Evaporation-stage foam suppressors (food-grade)",
        ],
        productGrades: [
          { code: "FB-301", tradeName: "Defoamer for Evaporation & Concentration FB-301", type: "Food-safe polyether liquid", form: "Liquid", description: "Thermal-stable evaporation defoamer for food-grade concentration" },
        ],
      },
    ],
  },
  {
    slug: "pharma-biotech",
    name: "Pharmaceutical & Biotech",
    icon: "💊",
    heroImage: "https://images.unsplash.com/photo-1669101283561-642d16d924ba?w=1200&q=80",
    shortDesc: "Qualification-driven custom foam control for bioreactors, fermenters and pharmaceutical processing where purity, validation and compliance are critical.",
    sustainabilityNote: "Precision dosing minimizes chemical load in sensitive processes. Custom formulations reduce waste and rework. Designed to meet pharmaceutical environmental standards.",
    positioningNote: "Offered through collaborative development and qualification programs.",
    subProcesses: [
      {
        name: "Bioreactor Foam Control",
        foamChallenges: [
          "Foam in bioreactors and fermenters",
          "Oxygen transfer loss",
          "Batch inconsistency",
          "Extreme sensitivity to contamination",
        ],
        operatingConditions: {
          temperature: "20–40°C",
          ph: "6–8",
          foamType: "Protein / biological foam",
          shearLevel: "Controlled",
        },
        engineeringApproach: {
          description: "Ultra-pure raw material selection. Minimal interaction with active ingredients. Short-lived defoaming action. Validation-ready documentation pathway.",
          chemistryPlatforms: "High-purity polyether | Silicone-free systems",
          physicalForms: "Sterile-compatible emulsions",
          incompatibilityLevel: "Low and highly controlled",
          ecoGrade: "ECO-3 (Pharma-grade, qualification required)",
        },
        solutionConfigurations: [
          "Bioreactor foam control systems",
          "Fermentation batch stabilizers",
        ],
        productGrades: [
          { code: "PB-101", tradeName: "Defoamer for Bioreactor Foam Control PB-101", type: "High-purity polyether emulsion", form: "Emulsion", description: "Ultra-pure bioreactor defoamer, sterile-compatible and validation-ready" },
        ],
      },
      {
        name: "API Processing & Crystallization",
        foamChallenges: [
          "Foam during active ingredient processing",
          "Contamination risk in crystallization",
          "Downstream purification interference",
        ],
        operatingConditions: {
          temperature: "20–60°C",
          ph: "Variable (process-dependent)",
          foamType: "Solvent / surfactant foam",
          shearLevel: "Low–Medium",
        },
        engineeringApproach: {
          description: "Zero residue requirement. Process-specific chemistry selection. Validation and documentation support.",
          chemistryPlatforms: "High-purity polyether",
          physicalForms: "Liquid (sterile-compatible)",
          incompatibilityLevel: "Very low",
          ecoGrade: "ECO-3 (Pharma-grade)",
        },
        solutionConfigurations: [
          "API-stage foam control (custom qualification)",
        ],
        productGrades: [
          { code: "PB-201", tradeName: "Defoamer for API Processing & Crystallization PB-201", type: "High-purity polyether liquid", form: "Liquid", description: "Zero-residue API processing defoamer, validation documentation available" },
        ],
      },
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil, Gas & Petrochemical",
    icon: "⛽",
    heroImage: "https://images.unsplash.com/photo-1768564206500-5cddb1fea679?w=1200&q=80",
    shortDesc: "Performance-critical custom foam control for separators, distillation units and drilling operations under extreme temperature and chemical conditions.",
    sustainabilityNote: "Targeted chemistry reduces overall chemical consumption. High-efficiency formulations minimize dosage requirements. Process-specific solutions reduce waste and improve operational efficiency.",
    positioningNote: "Solutions are evaluated and supplied based on site-specific operational requirements.",
    subProcesses: [
      {
        name: "Separator Foam Control",
        foamChallenges: [
          "Foam in gas-oil separators",
          "Reduced separation efficiency",
          "Carry-over and throughput loss",
        ],
        operatingConditions: {
          temperature: "Ambient – 200°C",
          ph: "Variable",
          foamType: "Hydrocarbon-stabilized",
          shearLevel: "High",
        },
        engineeringApproach: {
          description: "Extreme thermal and chemical stability. Fast foam collapse under harsh conditions. Compatibility with hydrocarbon systems. No downstream fouling.",
          chemistryPlatforms: "Modified silicone | High-performance oil compounds",
          physicalForms: "Liquid concentrates",
          incompatibilityLevel: "Strong",
          ecoGrade: "Industrial (site-specific assessment)",
        },
        solutionConfigurations: [
          "Separator foam control agents",
        ],
        productGrades: [
          { code: "OG-101", tradeName: "Defoamer for Separator Foam Control OG-101", type: "Modified silicone concentrate", form: "Liquid", description: "Extreme thermal stability separator defoamer, up to 200°C" },
        ],
      },
      {
        name: "Distillation Unit Foam Control",
        foamChallenges: [
          "Foam during distillation causing flooding",
          "Carry-over reducing product purity",
          "Throughput limitation",
        ],
        operatingConditions: {
          temperature: "100–300°C+",
          ph: "Variable",
          foamType: "Hydrocarbon + chemical foam",
          shearLevel: "High",
        },
        engineeringApproach: {
          description: "Ultra-high temperature stability. No decomposition products. Fast-acting under extreme conditions.",
          chemistryPlatforms: "High-temperature silicone compounds",
          physicalForms: "Liquid concentrates",
          incompatibilityLevel: "Strong",
          ecoGrade: "Industrial",
        },
        solutionConfigurations: [
          "Distillation unit foam suppressors",
        ],
        productGrades: [
          { code: "OG-201", tradeName: "Defoamer for Distillation Unit OG-201", type: "High-temperature silicone compound", form: "Liquid", description: "Ultra-high temp distillation defoamer, no decomposition products" },
        ],
      },
      {
        name: "Drilling Mud Systems",
        foamChallenges: [
          "Foam in drilling mud affecting wellbore stability",
          "Reduced mud weight accuracy",
          "Equipment cavitation",
        ],
        operatingConditions: {
          temperature: "Ambient – 150°C",
          ph: "8–12",
          foamType: "Mechanical + chemical foam",
          shearLevel: "Very high",
        },
        engineeringApproach: {
          description: "Compatibility with water-based and oil-based mud systems. High shear stability. No formation damage.",
          chemistryPlatforms: "Modified silicone | Oil-based compounds",
          physicalForms: "Liquid concentrates",
          incompatibilityLevel: "Strong",
          ecoGrade: "Industrial (site-specific)",
        },
        solutionConfigurations: [
          "Drilling-grade defoamer for mud systems",
        ],
        productGrades: [
          { code: "OG-301", tradeName: "Defoamer for Drilling Mud Systems OG-301", type: "Modified silicone liquid", form: "Liquid", description: "High-shear drilling mud defoamer, WBM and OBM compatible" },
        ],
      },
    ],
  },
  {
    slug: "municipal-water-reuse",
    name: "Municipal Water Reuse & Advanced STP",
    icon: "🌊",
    heroImage: "https://images.unsplash.com/photo-1674578745937-c73f81bdda07?w=1200&q=80",
    shortDesc: "Future-critical foam control for reuse-grade STPs where biological foam, regulatory pressure and sustainability objectives drive chemistry selection.",
    sustainabilityNote: "Designed to support water reuse and sustainability objectives. Ultra-low environmental persistence. Compatible with advanced treatment technologies.",
    positioningNote: "Designed to support water reuse and sustainability objectives.",
    subProcesses: [
      {
        name: "Aeration Tank (Reuse-Grade STP)",
        foamChallenges: [
          "Biological foam in reuse-grade STP",
          "Odour and carry-over issues",
          "Regulatory pressure on chemical discharge",
        ],
        operatingConditions: {
          temperature: "10–40°C",
          ph: "6–8",
          foamType: "Biological / surfactant foam",
          shearLevel: "Continuous aeration",
        },
        engineeringApproach: {
          description: "Silicone-free or ultra-low silicone systems. High biodegradability focus. Low aquatic toxicity. Designed for reuse-oriented treatment plants.",
          chemistryPlatforms: "Polyether | Fatty ester",
          physicalForms: "Water-based emulsions",
          incompatibilityLevel: "Moderate with controlled persistence",
          ecoGrade: "ECO-2 / ECO-3 (Water reuse oriented)",
        },
        solutionConfigurations: [
          "Aeration tank foam control for reuse plants",
        ],
        productGrades: [
          { code: "MW-101", tradeName: "Defoamer for Aeration Tank (Reuse-Grade STP) MW-101", type: "Polyether emulsion (reuse-grade)", form: "Emulsion", description: "Silicone-free aeration defoamer for reuse-oriented STPs" },
        ],
      },
      {
        name: "Clarifier (Reuse Systems)",
        foamChallenges: [
          "Surface foam affecting effluent quality",
          "Sludge carry-over into reuse stream",
          "Compliance risk with discharge standards",
        ],
        operatingConditions: {
          temperature: "Ambient",
          ph: "6–8",
          foamType: "Biological + entrained",
          shearLevel: "Low",
        },
        engineeringApproach: {
          description: "Gentle foam collapse without disturbing settling. Minimal chemical footprint in treated water.",
          chemistryPlatforms: "Fatty ester | Polyether",
          physicalForms: "Water-based emulsions",
          incompatibilityLevel: "Low",
          ecoGrade: "ECO-3 (Water reuse oriented)",
        },
        solutionConfigurations: [
          "Clarifier-safe foam suppression systems",
        ],
        productGrades: [
          { code: "MW-201", tradeName: "Defoamer for Clarifier (Reuse Systems) MW-201", type: "Fatty ester emulsion (reuse-grade)", form: "Emulsion", description: "Gentle clarifier foam control for reuse-grade effluent quality" },
        ],
      },
    ],
  },
];
