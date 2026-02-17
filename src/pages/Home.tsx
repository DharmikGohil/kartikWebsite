import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Settings, Leaf, Globe, Factory, FlaskConical, Shield, Zap } from 'lucide-react'
import { industries } from '../data/industries'
import { IndustryIcon } from '../data/industryIcons'
import { SEOHead, FAQSection, getHomePageSEO } from '../seo'

const Home = () => {
  const seo = getHomePageSEO();
  const signals = [
    { icon: <Settings className="w-7 h-7" />, title: 'Application-Driven', desc: 'Solutions configured for your specific process conditions, not generic products.' },
    { icon: <FlaskConical className="w-7 h-7" />, title: 'Chemistry-Aware', desc: 'We select the right chemistry platform based on your operating window.' },
    { icon: <Leaf className="w-7 h-7" />, title: 'Sustainability-Aware', desc: 'Lower dosage, biodegradable options and water-reuse compatible grades.' },
    { icon: <Zap className="w-7 h-7" />, title: 'Growing Capability', desc: 'Expanding across industries with engineered foam control solutions.' },
  ]

  return (
    <div className="min-h-screen bg-navy-900">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950/30" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-600 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6">
              <Droplets className="w-5 h-5 text-brand-400" />
              <span className="text-brand-400 font-medium text-sm uppercase tracking-wider">Foam Control Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Industrial Foam Control Solutions Engineered for Process Efficiency{' '}
              <span className="text-gradient">&amp; Sustainability</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              Application-specific defoamers and antifoams designed for textiles, wastewater, paints, paper, construction, fermentation and sensitive water systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex items-center group">
                Discuss Your Process
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/solutions" className="btn-secondary text-base px-8 py-4">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Signals */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signals.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/20 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-brand-600/15 rounded-lg flex items-center justify-center mb-4 text-brand-400">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Solutions by Industry</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every industry has unique foam challenges. We engineer solutions for each.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/solutions/${ind.slug}`}
                className="block p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.07] transition-colors duration-200 group h-full"
              >
                <IndustryIcon slug={ind.slug} className="w-8 h-8 text-brand-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors duration-200">{ind.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{ind.shortDesc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/solutions" className="text-brand-400 hover:text-brand-300 font-medium inline-flex items-center group transition-colors duration-200">
              View all industry solutions
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why ChemAssure Global?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We combine application understanding, chemistry selection and cost-performance optimization to deliver reliable foam control under real plant conditions.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Factory className="w-5 h-5" />, text: "Solutions configured for your process — not off-the-shelf products" },
                  { icon: <Shield className="w-5 h-5" />, text: "Chemistry platform selection based on your operating window" },
                  { icon: <Globe className="w-5 h-5" />, text: "Serving industries across India with global-standard engineering" },
                  { icon: <Leaf className="w-5 h-5" />, text: "Sustainability-aware formulations that reduce environmental load" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="text-brand-400 mt-0.5">{item.icon}</div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "10", label: "Industries Served" },
                { num: "5", label: "Chemistry Platforms" },
                { num: "4", label: "Physical Forms" },
                { num: "3", label: "ECO Grade Levels" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 text-center">
                  <div className="text-3xl font-bold text-brand-400 mb-1">{stat.num}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center bg-gradient-to-r from-brand-900/30 to-brand-800/20 border border-brand-500/20 rounded-2xl p-12 sm:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Discuss Your Process with Our Technical Team
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Tell us about your foam challenge. We'll recommend a solution configured for your specific operating conditions.
            </p>
            <Link to="/contact" className="btn-primary text-base px-10 py-4 inline-flex items-center group">
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <FAQSection faqs={seo.faqs} />
    </div>
  )
}

export default Home
