import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, DollarSign, Shield, TrendingUp, CheckCircle, Eye, Microscope, Building2, Users, Award } from 'lucide-react'

const CaseStudies = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [casesRef, casesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const caseStudies = [
    {
      id: 1,
      icon: <Eye className="w-10 h-10" />,
      title: 'Specialty Adhesive - South Asia Buyer',
      industry: 'Adhesives & Polymers',
      challenge: 'A procurement manager was shipping a new polymer adhesive from India. Our COA/SDS review flagged a critical additive missing from the supplier\'s certificate.',
      action: 'We recommended additional lab testing, which confirmed the formulation was off-target.',
      outcome: 'The issue was caught before shipment, saving the buyer an estimated $30,000 in rework and delays.',
      savings: '$30,000',
      services: ['COA/SDS Verification', 'Lab Testing Coordination'],
      metrics: {
        timeSaved: '2 weeks',
        riskAvoided: 'High',
        qualityImprovement: '100%'
      }
    },
    {
      id: 2,
      icon: <Microscope className="w-10 h-10" />,
      title: 'Water Treatment Chemicals - Middle East Buyer',
      industry: 'Water Treatment',
      challenge: 'An importer received a batch of desalination chemicals that failed field tests. We performed an independent assay at an accredited lab, identifying a contamination issue in one lot.',
      action: 'With our prompt reporting, the buyer avoided product failure in the field and renegotiated terms with the supplier.',
      outcome: 'The buyer avoided product failure in the field and renegotiated terms with the supplier.',
      savings: 'Prevented Field Failure',
      services: ['Lab Testing Coordination', 'Quality Assessment'],
      metrics: {
        timeSaved: '1 week',
        riskAvoided: 'Critical',
        qualityImprovement: '95%'
      }
    },
    {
      id: 3,
      icon: <Building2 className="w-10 h-10" />,
      title: 'Industrial Polymer - African Distributor',
      industry: 'Industrial Polymers',
      challenge: 'During a routine supplier audit at a polymer plant, we discovered gaps in the supplier\'s quality processes.',
      action: 'After corrective actions were implemented, subsequent shipments met all specifications.',
      outcome: 'Our proactive audit saved the distributor from potential safety and performance problems.',
      savings: 'Safety Risk Avoided',
      services: ['Supplier Audit', 'Process Evaluation'],
      metrics: {
        timeSaved: '3 weeks',
        riskAvoided: 'High',
        qualityImprovement: '90%'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding relative text-white">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case <span className="text-gradient">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Real success stories from our clients across different industries. See how ChemAssure Global has helped businesses avoid costly mistakes and ensure quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
                Start Your Success Story
                <ArrowRight className="w-6 h-6 ml-14 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                View Our Services
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={casesRef} className="section-padding relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={casesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Each case study demonstrates our commitment to quality and the tangible value we deliver to our clients.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={casesInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {caseStudies.map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                variants={itemVariants}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 rounded-2xl p-8 card-hover transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Case Overview */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="w-16 h-16 bg-violet-500/20 hover:bg-violet-400/30 rounded-2xl flex items-center justify-center flex-shrink-0 border border-violet-400/20 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-violet-300">
                          {caseStudy.icon}
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {caseStudy.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-200">
                          <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full font-medium border border-purple-400/30">
                            {caseStudy.industry}
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>International Client</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border-l-4 border-red-400 hover:border-red-300 transition-colors duration-300">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-red-400" />
                        <span>The Challenge</span>
                      </h4>
                      <p className="text-gray-200 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border-l-4 border-purple-400 hover:border-purple-300 transition-colors duration-300">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                        <Eye className="w-5 h-5 text-purple-400" />
                        <span>Our Action</span>
                      </h4>
                      <p className="text-gray-200 leading-relaxed">
                        {caseStudy.action}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border-l-4 border-green-400 hover:border-green-300 transition-colors duration-300">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span>The Outcome</span>
                      </h4>
                      <p className="text-gray-200 leading-relaxed">
                        {caseStudy.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Metrics & Services */}
                  <div className="space-y-6">
                    {/* Savings Highlight */}
                    <div className="bg-gradient-to-br from-purple-600 to-violet-600 p-6 rounded-xl text-white text-center border border-purple-400/30 backdrop-blur-sm">
                      <DollarSign className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-bold mb-1">Saved</div>
                      <div className="text-3xl font-bold">{caseStudy.savings}</div>
                    </div>

                    {/* Services Used */}
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-white mb-4">Services Used</h4>
                      <div className="space-y-3">
                        {caseStudy.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            <span className="text-gray-200 text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 text-sm">Time Saved:</span>
                          <span className="font-semibold text-white">{caseStudy.metrics.timeSaved}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 text-sm">Risk Avoided:</span>
                          <span className="font-semibold text-white">{caseStudy.metrics.riskAvoided}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 text-sm">Quality Improvement:</span>
                          <span className="font-semibold text-white">{caseStudy.metrics.qualityImprovement}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Statistics */}
      <section ref={statsRef} className="section-padding relative text-white">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Success by the Numbers
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The results speak for themselves. Here's what we've achieved for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Inspections Completed', icon: <Eye className="w-8 h-8" /> },
              { number: '$2M+', label: 'Client Savings', icon: <DollarSign className="w-8 h-8" /> },
              { number: '50+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
              { number: '99%', label: 'Success Rate', icon: <Award className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="w-20 h-20 bg-violet-500/20 hover:bg-violet-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 border border-violet-400/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-violet-300 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </motion.div>
                <motion.div
                  className="text-4xl font-bold mb-2 text-gradient group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-200 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-violet-900/40 to-purple-900/30 backdrop-blur-sm" />
        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Join our growing list of satisfied clients who have experienced the ChemAssure Global difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-accent py-5 px-10 text-lg inline-flex items-center shadow-lg hover:shadow-xl">
                Start Your Inspection
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link to="/download" className="btn-secondary py-5 px-10 text-lg inline-flex items-center shadow-lg hover:shadow-xl">
                Download Sample Report
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
