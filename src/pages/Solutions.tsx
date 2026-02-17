import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { industries } from '../data/industries'
import { IndustryIcon } from '../data/industryIcons'

const Solutions = () => {
  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Solutions by <span className="text-gradient">Industry</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Every industry has unique foam challenges, operating conditions and chemistry requirements. We engineer foam control solutions specific to each — not one-size-fits-all products.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/solutions/${ind.slug}`}
                className="block p-7 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.07] transition-colors duration-200 group h-full"
              >
                <IndustryIcon slug={ind.slug} className="w-10 h-10 text-brand-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-400 transition-colors duration-200">
                  {ind.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{ind.shortDesc}</p>
                <div className="text-brand-400 text-sm font-medium inline-flex items-center">
                  View solutions <ArrowRight className="w-4 h-4 ml-1" />
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
    </div>
  )
}

export default Solutions
