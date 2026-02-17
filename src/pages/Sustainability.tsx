import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Droplets, Recycle, BarChart3, AlertCircle } from 'lucide-react'

const Sustainability = () => {
  const principles = [
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Lower Dosage = Lower Discharge",
      desc: "Efficient defoaming means less chemical per unit of production. Lower dosage directly reduces the chemical load in your effluent stream. We optimize formulations for maximum performance at minimum concentration.",
    },
    {
      icon: <Recycle className="w-7 h-7" />,
      title: "Process Stability = Less Waste",
      desc: "Stable foam control means fewer process upsets, less rework and reduced material waste. When foam is controlled reliably, your process runs cleaner and produces less off-spec output.",
    },
    {
      icon: <Droplets className="w-7 h-7" />,
      title: "Targeted Chemistry = Reduced Environmental Load",
      desc: "Selecting the right chemistry for your specific process means no over-engineering and no unnecessary chemical complexity. Targeted solutions reduce environmental impact by design.",
    },
  ]

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium text-sm uppercase tracking-wider">Sustainability</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sustainable Foam Control <span className="text-gradient">by Design</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Sustainability in foam control isn't about marketing claims. It's about engineering solutions that inherently reduce environmental impact through smarter chemistry, lower dosage and better process fit.
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white mb-4">Our Approach</h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-10">
            Three principles guide our sustainability thinking.
          </p>

          <div className="space-y-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-xl bg-white/5 border border-white/5"
              >
                <div className="w-14 h-14 bg-green-600/15 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0">
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

      {/* Honesty Note */}
      <section className="section-padding">
        <div className="container-max">
          <div className="p-8 rounded-xl bg-amber-900/10 border border-amber-500/15">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">A Note on Honesty</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sustainability performance depends on application and system design. We don't make blanket "green" claims. Instead, we work with you to understand your environmental targets and configure solutions that genuinely move you toward them — with measurable results, not marketing language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to reduce your environmental footprint?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how optimized foam control can lower your chemical discharge and improve process sustainability.
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

export default Sustainability
