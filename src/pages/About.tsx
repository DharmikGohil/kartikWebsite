import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Shield, Settings, Leaf, FlaskConical, Target, Eye, Cpu, User, Linkedin } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      {/* Header */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">ChemAssure Global</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We specialize in foam control engineering for industrial processes. Our approach combines application understanding, chemistry selection and cost-performance optimization to deliver reliable results under real plant conditions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Based in Ahmedabad, Gujarat — serving industries across India and expanding globally. We work directly with plant teams to understand foam challenges and configure solutions that work in practice, not just on paper.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                <img
                  src="/kartikPhoto.jpeg"
                  alt="Mr. Kartik Radadiya — Founder of ChemAssure Global"
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-2 border-brand-500/30"
                />
                <h3 className="text-xl font-bold text-white mb-1">Mr. Kartik Radadiya</h3>
                <p className="text-brand-400 text-sm font-medium mb-2">Founder & Technical Lead</p>
                <a
                  href="https://www.linkedin.com/in/kartik-radadiya-a3478b266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm mb-4"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <div className="space-y-2 text-left">
                  {[
                    "Chemical Engineer",
                    "Foam control & process chemistry",
                    "Application engineering across 10+ industries",
                    "Formulation development & field validation",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-400/70 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Meet Our Founder</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  ChemAssure Global was founded by Mr. Kartik Radadiya, a chemical engineer with hands-on experience in foam control, process chemistry and industrial application engineering.
                </p>
                <p>
                  His approach is straightforward: understand the process first, then select the chemistry. Every recommendation starts with the plant's actual operating conditions — temperature, pH, shear, foam mechanism — not a product catalogue.
                </p>
                <p>
                  Mr. Radadiya works directly with plant teams across textiles, wastewater, paints, paper, cement, sugar, food processing, pharma and oil & gas — configuring foam control solutions that perform under real conditions.
                </p>
                <p className="text-gray-400 text-sm">
                  Based in Ahmedabad, Gujarat. Available for technical discussions, plant visits and solution development across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">How We Work</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            We don't sell standard products. We configure solutions based on your process.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Target className="w-5 h-5" />, step: "01", title: "Understand the Process", desc: "We start by understanding your foam mechanism, operating window and chemistry environment. No assumptions." },
              { icon: <FlaskConical className="w-5 h-5" />, step: "02", title: "Select the Chemistry", desc: "Silicone, silicone-free, polyether, fatty ester or hybrid — chosen based on compatibility and performance requirements." },
              { icon: <Settings className="w-5 h-5" />, step: "03", title: "Configure the Solution", desc: "Physical form, dosage method, environmental profile — everything is configured for your specific process conditions." },
              { icon: <Cpu className="w-5 h-5" />, step: "04", title: "Validate in Practice", desc: "Field trials under real plant conditions. We adjust until the solution performs reliably in your actual operating environment." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[11px] text-brand-400 font-bold uppercase tracking-widest mb-3">{item.step}</div>
                <div className="w-10 h-10 bg-brand-600/15 rounded-lg flex items-center justify-center text-brand-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Core Values</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            The foundation of how we operate — with every client, every process, every solution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Eye className="w-6 h-6" />, title: "Honesty", desc: "No fake claims, no greenwashing. We tell you what works, what doesn't, and why. Sustainability performance depends on application and system design — we say that upfront." },
              { icon: <Settings className="w-6 h-6" />, title: "Engineering Rigor", desc: "Every recommendation is backed by process logic. We select chemistry based on operating conditions, not sales targets. If a simpler solution works, we recommend it." },
              { icon: <Leaf className="w-6 h-6" />, title: "Sustainability Awareness", desc: "Lower dosage, biodegradable options, water-reuse compatible grades. We design for reduced environmental load — but we never overstate what a product can do." },
              { icon: <Shield className="w-6 h-6" />, title: "Process-First Thinking", desc: "We don't start with a product. We start with your process. Temperature, pH, shear, foam type — the solution follows the conditions, not the other way around." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 bg-brand-600/15 rounded-lg flex items-center justify-center text-brand-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Reach */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-5 h-5 text-brand-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Where We Operate</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Headquartered in Ahmedabad, Gujarat — we serve industrial clients across India with foam control solutions engineered for local process conditions and global performance standards.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our coverage spans textiles, wastewater treatment, paints & coatings, paper & pulp, cement & construction, sugar & fermentation, food & beverage, pharmaceutical, oil & gas and municipal water systems.
              </p>
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
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to work with us?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tell us about your process. We'll tell you how we can help.
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

export default About
