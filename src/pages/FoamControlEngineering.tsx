import { Link } from 'react-router-dom'
import { ArrowRight, Waves, Thermometer, FlaskConical, Box, Leaf } from 'lucide-react'
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages, getEngineeringPageSEO } from '../seo'

const FoamControlEngineering = () => {
  const seo = getEngineeringPageSEO();
  const pillars = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Foam Mechanism",
      desc: "We start by understanding how foam forms in your process. Is it surfactant-driven, mechanical, biological or resin-based? Each type requires a different control strategy. Applying the wrong approach wastes chemical and creates new problems.",
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Process Window",
      desc: "Temperature, pH, shear level and contact time define the operating window. A defoamer that works at 40°C may fail at 120°C. We match the solution to your actual plant conditions - not lab conditions.",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Chemistry Compatibility",
      desc: "The defoamer must work with your process chemistry, not against it. Silicone in the wrong textile process causes spots. The wrong chemistry in paint causes craters. We select platforms that are compatible with your system.",
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Physical Form",
      desc: "Liquid, emulsion, powder or granular - the physical form affects dosing, dispersion and performance. We recommend the form that fits your dosing system and process requirements.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Profile",
      desc: "Industrial grade, ETP compatible, water-reuse oriented or food-contact capable - we match the environmental profile to your discharge requirements and sustainability goals.",
    },
  ]

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <Breadcrumbs items={seo.breadcrumbs} />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Foam Control <span className="text-gradient">Engineering</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We don't just sell defoamers. We control foam by understanding your process.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every foam problem has a root cause. Our engineering approach identifies that cause and matches the right chemistry, form and dosage to solve it reliably - under your real plant conditions, not theoretical ones.
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Think</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We control foam by understanding five critical dimensions of your process.
            </p>
          </div>

          <div className="space-y-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-xl bg-white/5 border border-white/5"
              >
                <div className="w-16 h-16 bg-brand-600/15 rounded-xl flex items-center justify-center text-brand-400 flex-shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Result</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl">
              When you combine foam mechanism understanding, process window analysis, chemistry compatibility, physical form selection and environmental profiling - you get a solution that works. Not a product. A configuration designed for your process.
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

export default FoamControlEngineering
