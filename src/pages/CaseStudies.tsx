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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-charcoal-800 text-white">
        <div className="container-max text-center">
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
              <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
                Start Your Success Story
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={casesRef} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={casesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-gradient-to-br from-navy-50 to-charcoal-50 rounded-2xl p-8 hover:shadow-strong card-hover border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Case Overview */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="w-16 h-16 bg-accent-teal/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-accent-teal">
                          {caseStudy.icon}
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-navy-900 mb-2">
                          {caseStudy.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full font-medium">
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
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-3 flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-red-500" />
                        <span>The Challenge</span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="bg-white p-6 rounded-xl border-l-4 border-accent-teal">
                      <h4 className="text-lg font-semibold text-navy-900 mb-3 flex items-center space-x-2">
                        <Eye className="w-5 h-5 text-accent-teal" />
                        <span>Our Action</span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {caseStudy.action}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="bg-white p-6 rounded-xl border-l-4 border-accent-orange">
                      <h4 className="text-lg font-semibold text-navy-900 mb-3 flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-accent-orange" />
                        <span>The Outcome</span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {caseStudy.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Metrics & Services */}
                  <div className="space-y-6">
                    {/* Savings Highlight */}
                    <div className="bg-gradient-to-br from-accent-teal to-accent-orange p-6 rounded-xl text-white text-center">
                      <DollarSign className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-bold mb-1">Saved</div>
                      <div className="text-3xl font-bold">{caseStudy.savings}</div>
                    </div>

                    {/* Services Used */}
                    <div className="bg-white p-6 rounded-xl shadow-soft">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4">Services Used</h4>
                      <div className="space-y-3">
                        {caseStudy.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="bg-white p-6 rounded-xl shadow-soft">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4">Key Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">Time Saved:</span>
                          <span className="font-semibold text-navy-900">{caseStudy.metrics.timeSaved}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">Risk Avoided:</span>
                          <span className="font-semibold text-navy-900">{caseStudy.metrics.riskAvoided}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">Quality Improvement:</span>
                          <span className="font-semibold text-navy-900">{caseStudy.metrics.qualityImprovement}%</span>
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
      <section ref={statsRef} className="section-padding bg-gradient-to-r from-navy-950 to-charcoal-900 text-white">
        <div className="container-max">
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
                  className="w-20 h-20 bg-accent-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-teal/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-accent-teal">
                    {stat.icon}
                  </div>
                </motion.div>
                <motion.div
                  className="text-4xl font-bold mb-2 text-accent-teal group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-navy-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-teal to-accent-orange text-white">
        <div className="container-max text-center">
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
              <Link to="/contact" className="bg-white text-accent-teal hover:bg-gray-100 font-semibold py-5 px-10 rounded-lg text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
                Start Your Inspection
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link to="/download" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-teal font-semibold py-5 px-10 rounded-lg text-lg transition-all duration-300">
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
