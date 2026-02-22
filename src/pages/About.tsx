import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Shield, Settings, FlaskConical, Target, Eye, Cpu, Beaker, Award, TrendingUp, Users, Building2, Lightbulb } from 'lucide-react'
import { SEOHead, Breadcrumbs, RelatedPages, getAboutPageSEO } from '../seo'

const About = () => {
  const seo = getAboutPageSEO();

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1766297246906-210617be31a4?w=1200&q=80" alt="Chemical laboratory research" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pt-28">
          <div className="container-max max-w-3xl">
            <Breadcrumbs items={seo.breadcrumbs} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">ChemAssure Global</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              ChemAssure Global is a specialty chemical company focused on industrial foam control. We engineer application-specific defoamers and antifoams for process industries where foam disrupts efficiency, quality and throughput.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Headquartered in Surat, Gujarat, India - we serve manufacturers across textiles, wastewater, paints, paper, cement, sugar, food processing, pharma, oil & gas and municipal water systems.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Company Profile</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  ChemAssure Global was established with a clear purpose: to bring engineering-led foam control to Indian industry. In a market dominated by generic chemical trading, we saw the need for a company that understands process conditions before recommending chemistry.
                </p>
                <p>
                  We are not a trading house. We develop, formulate and supply application-specific defoamers configured for real plant conditions. Every product we deliver is backed by process analysis, chemistry selection and field validation.
                </p>
                <p>
                  Our team combines chemical engineering expertise with hands-on plant experience across 10+ industrial sectors. We work directly with production and process teams to solve foam challenges that affect output, quality and compliance.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Company Name", value: "ChemAssure Global" },
                { label: "Industry", value: "Specialty Chemicals - Foam Control" },
                { label: "Headquarters", value: "Ground Floor, Plot No. 134, Pramukh Park Society, Sanya Road, Simada Gam, Patel Park, Surat - 395006, Gujarat, India" },
                { label: "Sectors Served", value: "10+ Industrial Sectors" },
                { label: "Product Range", value: "Defoamers & Antifoams" },
                { label: "Chemistry Platforms", value: "Silicone, Polyether, Fatty Ester, Hybrid" },
                { label: "Service Model", value: "Application Engineering + Supply" },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-gray-500 uppercase tracking-wider w-36 flex-shrink-0 pt-0.5">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-900/20 to-brand-800/10 border border-brand-500/15">
              <div className="w-12 h-12 bg-brand-600/15 rounded-lg flex items-center justify-center text-brand-400 mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver reliable, process-specific foam control solutions that improve industrial efficiency, reduce chemical waste and support sustainable manufacturing. We exist to solve foam problems that generic products cannot.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-900/20 to-brand-800/10 border border-brand-500/15">
              <div className="w-12 h-12 bg-brand-600/15 rounded-lg flex items-center justify-center text-brand-400 mb-5">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become India's most trusted foam control engineering company - recognized for technical depth, honest recommendations and measurable results. We aim to set the standard for how specialty chemicals should be selected and applied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose / Why We Exist */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Why We Exist</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Most foam control products in the Indian market are sold as commodities - generic formulations pushed without understanding the process they go into. The result is overdosing, poor performance, unnecessary cost and sometimes process damage.
            </p>
            <p>
              We started ChemAssure Global because we believe foam control deserves the same engineering rigor as any other process parameter. Temperature, pH, shear, foam mechanism, chemistry compatibility - these factors determine what works. Not a sales pitch.
            </p>
            <p>
              Our purpose is simple: help manufacturers control foam effectively, efficiently and sustainably. Every solution we deliver is configured for the specific process it goes into. That's not a tagline - it's how we operate.
            </p>
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
              { icon: <FlaskConical className="w-5 h-5" />, step: "02", title: "Select the Chemistry", desc: "Silicone, silicone-free, polyether, fatty ester or hybrid - chosen based on compatibility and performance requirements." },
              { icon: <Settings className="w-5 h-5" />, step: "03", title: "Configure the Solution", desc: "Physical form, dosage method, environmental profile - everything is configured for your specific process conditions." },
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
            The principles that guide every decision, every recommendation and every relationship.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Eye className="w-6 h-6" />, title: "Integrity", desc: "No fake claims, no greenwashing. We tell you what works, what doesn't, and why. Honest communication is non-negotiable." },
              { icon: <Settings className="w-6 h-6" />, title: "Engineering Rigor", desc: "Every recommendation is backed by process logic. We select chemistry based on operating conditions, not sales targets." },
              { icon: <Users className="w-6 h-6" />, title: "Customer Partnership", desc: "We work alongside your plant team - not as vendors, but as technical partners invested in your process outcomes." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Continuous Improvement", desc: "We refine our formulations, processes and knowledge systems continuously. Standing still is not an option in specialty chemicals." },
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

      {/* Quality Commitment */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Quality Commitment</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Quality is built into how we work - from raw material sourcing to final delivery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Shield className="w-5 h-5" />, title: "Raw Material Traceability", desc: "Every formulation uses traceable raw materials from established suppliers. We maintain batch records and supplier documentation for all inputs." },
              { icon: <Beaker className="w-5 h-5" />, title: "Process-Validated Solutions", desc: "Every recommendation is validated under real plant conditions before deployment. Field performance is the standard, not lab results alone." },
              { icon: <Award className="w-5 h-5" />, title: "Standards & Certification Path", desc: "We are actively working toward ISO and industry-standard quality certifications. Our systems are designed to meet these benchmarks as we scale." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.03] border border-white/5">
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

      {/* Capabilities */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Our Capabilities</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            End-to-end foam control engineering - from formulation to field deployment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <FlaskConical className="w-5 h-5" />, title: "Formulation Development", desc: "Custom defoamer formulations developed for specific process conditions. We engineer solutions, not rebrand generic products." },
              { icon: <Building2 className="w-5 h-5" />, title: "Application Engineering", desc: "On-site process analysis, dosage optimization and field trials. We work with your plant team to validate performance." },
              { icon: <Beaker className="w-5 h-5" />, title: "Multi-Platform Chemistry", desc: "Silicone, silicone-free, polyether, fatty ester and hybrid platforms. Chemistry selected based on your process, not our inventory." },
              { icon: <Users className="w-5 h-5" />, title: "Technical Support", desc: "Direct access to our technical team. Real engineers solving real problems - no call centers, no ticket queues." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5">
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
                Headquartered in Surat, Gujarat - we serve industrial clients across India with foam control solutions engineered for local process conditions and global performance standards.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our coverage spans textiles, wastewater treatment, paints & coatings, paper & pulp, cement & construction, sugar & fermentation, food & beverage, pharmaceutical, oil & gas and municipal water systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "10+", label: "Industries Served" },
                { num: "5", label: "Chemistry Platforms" },
                { num: "22+", label: "Product Grades" },
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

      <RelatedPages links={seo.relatedPages} heading="Learn More" />
    </div>
  )
}

export default About