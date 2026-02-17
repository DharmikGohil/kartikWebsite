import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, Box, Leaf, Beaker, Droplets, Wind, Trees, Factory, Recycle, ShieldCheck, Waves } from 'lucide-react'
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages, getTechnologiesPageSEO } from '../seo'

const chemistryPlatforms = [
  {
    title: "Silicone-Based",
    body: "High-efficiency foam control systems offering rapid knockdown under high temperature and shear conditions. Selected for demanding industrial processes where fast foam collapse is critical.",
    tags: "Textile, Paper, Paint, Polymer",
    icon: <Beaker className="w-5 h-5" />,
  },
  {
    title: "Silicone-Free",
    body: "Foam control solutions designed without silicone for sensitive systems requiring low surface interaction, improved biodegradability and minimal residue formation during processing.",
    tags: "ETP, Paint, Food-adjacent, Finishing",
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    title: "Polyether-Based",
    body: "Controlled defoaming systems offering balanced persistence and low toxicity, suitable for biological, surfactant-rich and water-based processes requiring stable foam suppression.",
    tags: "ETP, Fermentation, Coatings",
    icon: <Wind className="w-5 h-5" />,
  },
  {
    title: "Fatty Ester-Based",
    body: "Biodegradability-focused foam control solutions developed for biological and fermentation systems where environmental profile and controlled persistence are prioritized over aggressive foam breaking.",
    tags: "Sugar, ETP, Bio-processes",
    icon: <Trees className="w-5 h-5" />,
  },
]

const physicalFormats = [
  {
    title: "Liquid",
    body: "Concentrated liquid systems designed for direct inline dosing, rapid dispersion and performance stability under high temperature or high shear process conditions.",
    tags: "Paint, Textile, Polymer",
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    title: "Emulsion",
    body: "Water-based emulsions engineered for easy handling, uniform distribution and controlled release of active components in aqueous industrial systems.",
    tags: "Textile, ETP, Paper",
    icon: <Waves className="w-5 h-5" />,
  },
  {
    title: "Powder / Solid",
    body: "Solid and powder defoaming systems developed for dry blending or delayed-release applications, providing long shelf life and compatibility with dry formulation processes.",
    tags: "Cement, Mortar, Detergents",
    icon: <Box className="w-5 h-5" />,
  },
]

const envProfiles = [
  {
    title: "Industrial Grade",
    body: "Performance-driven foam control solutions optimized for demanding industrial processes where regulatory sensitivity is limited and maximum operational efficiency is required.",
    tags: "Textile, Paper, Cement",
    icon: <Factory className="w-5 h-5" />,
  },
  {
    title: "ETP Compatible",
    body: "Foam control systems developed for wastewater treatment environments, focusing on biological compatibility, reduced toxicity and stable long-term performance under continuous aeration.",
    tags: "ETP, STP",
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    title: "Water-Reuse Oriented",
    body: "Advanced foam control solutions engineered with enhanced biodegradability and low aquatic impact, supporting wastewater reuse and sustainability-focused treatment systems.",
    tags: "Reuse STP, ZLD",
    icon: <Recycle className="w-5 h-5" />,
  },
  {
    title: "Food-Contact Capable (Custom)",
    body: "Qualification-based foam control solutions developed through collaborative evaluation, designed to meet process safety and regulatory expectations for food, beverage and sensitive applications.",
    tags: "Food, Beverage, Pharma",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
]

interface TechCardProps {
  title: string
  body: string
  tags: string
  icon: React.ReactNode
}

const TechCard = ({ title, body, tags, icon }: TechCardProps) => (
  <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-brand-500/20 transition-colors duration-200 flex flex-col h-full">
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 mb-4">
      {icon}
    </div>
    <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{body}</p>
    <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-4">{tags}</div>
    <Link
      to="/solutions"
      className="text-brand-400 hover:text-brand-300 text-sm font-medium inline-flex items-center transition-colors duration-200"
    >
      View applications <ArrowRight className="w-3.5 h-3.5 ml-1" />
    </Link>
  </div>
)

const Technologies = () => {
  const seo = getTechnologiesPageSEO();

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      {/* Header */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <Breadcrumbs items={seo.breadcrumbs} />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Foam Control Technologies Across Chemistry, Form{' '}
            <span className="text-gradient">& Sustainability</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our solutions are engineered using multiple chemistry platforms and physical formats, selected based on process conditions and environmental requirements.
          </p>
        </div>
      </section>

      {/* Block A — Chemistry Platforms */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="flex items-center space-x-3 mb-8">
            <FlaskConical className="w-5 h-5 text-brand-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Chemistry Platforms</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {chemistryPlatforms.map((c, i) => (
              <TechCard key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Block B — Physical Formats */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="flex items-center space-x-3 mb-8">
            <Box className="w-5 h-5 text-brand-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Physical Formats</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {physicalFormats.map((f, i) => (
              <TechCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Block C — Environmental Profile */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex items-center space-x-3 mb-8">
            <Leaf className="w-5 h-5 text-green-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Environmental Profile</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {envProfiles.map((e, i) => (
              <TechCard key={i} {...e} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need help selecting the right technology?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our technical team will recommend the right chemistry, form and environmental profile for your process.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center group">
              Discuss Your Process
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={seo.faqs} />
      <RelatedPages links={seo.relatedPages} heading="Explore More" />
    </div>
  )
}

export default Technologies
