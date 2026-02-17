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
}

export interface IndustryData {
  slug: string;
  name: string;
  icon: string;
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
      },
    ],
  },
  {
    slug: "wastewater-treatment",
    name: "Wastewater Treatment & Water Reuse",
    icon: "💧",
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
      },
    ],
  },
  {
    slug: "paints-coatings",
    name: "Paints & Coatings",
    icon: "🎨",
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
      },
    ],
  },
  {
    slug: "paper-pulp",
    name: "Paper & Pulp",
    icon: "📄",
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
      },
    ],
  },
  {
    slug: "cement-construction",
    name: "Cement & Construction",
    icon: "🏗️",
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
      },
    ],
  },
  {
    slug: "sugar-fermentation",
    name: "Sugar & Fermentation",
    icon: "🍬",
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
      },
    ],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage Processing",
    icon: "🍽️",
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
          description: "Silicone-free or ultra-low silicone preference. Focus on biodegradability and low bio-accumulation. Controlled persistence — foam control without residual activity. Compliance-driven material selection.",
          chemistryPlatforms: "Polyether | Fatty ester | Food-safe hybrids",
          physicalForms: "Water-based emulsions",
          incompatibilityLevel: "Moderate and temporary",
          ecoGrade: "ECO-3 (Food-process compatible – qualification based)",
        },
        solutionConfigurations: [
          "Fermentation foam control systems",
          "Evaporation and concentration foam suppressors",
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
      },
    ],
  },
  {
    slug: "pharma-biotech",
    name: "Pharmaceutical & Biotech",
    icon: "💊",
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
      },
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil, Gas & Petrochemical",
    icon: "⛽",
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
      },
    ],
  },
  {
    slug: "municipal-water-reuse",
    name: "Municipal Water Reuse & Advanced STP",
    icon: "🌊",
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
      },
    ],
  },
];
