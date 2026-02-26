import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { industries } from '../data/industries'
import { IndustryIcon } from '../data/industryIcons'
import { SEOHead, Breadcrumbs, FAQSection, getSolutionsHubSEO } from '../seo'

const Solutions = () => {
  const seo = getSolutionsHubSEO();

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1585204630262-84278b4d8b00?w=1200&q=80" alt="Industrial machinery and equipment" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pt-28">
          <div className="container-max max-w-3xl">
            <Breadcrumbs items={seo.breadcrumbs} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Solutions by <span className="text-gradient">Industry</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every industry has unique foam challenges, operating conditions and chemistry requirements. We engineer foam control solutions specific to each - not one-size-fits-all products.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/solutions/${ind.slug}`}
                className="relative block rounded-xl border border-white/5 hover:border-brand-500/30 transition-colors duration-200 group h-full overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img src={ind.heroImage} alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/70 to-navy-900/60" />
                </div>
                <div className="relative z-10 p-7">
                  <IndustryIcon slug={ind.slug} className="w-10 h-10 text-brand-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-400 transition-colors duration-200">
                    {ind.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{ind.shortDesc}</p>
                  <div className="text-brand-400 text-sm font-medium inline-flex items-center">
                    View solutions <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Don't see your industry?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              We engineer custom foam control solutions for any industrial process. Tell us about your foam challenge.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center group">
              Discuss Your Process
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={seo.faqs} />
    </div>
  )
}

export default Solutions
