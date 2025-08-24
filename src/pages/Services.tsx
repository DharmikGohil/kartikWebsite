import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Eye, FileText, Microscope, CheckCircle, Shield, Clock, Award, Globe, Droplets, FlaskConical, TestTube, Atom, Palette } from 'lucide-react'

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: <Droplets className="w-10 h-10" />,
      title: 'NABL accredited wastewater / effluent testing Gujarat',
      subtitle: 'Comprehensive wastewater and effluent testing services across Gujarat with NABL accreditation.',
      description: 'NABL accredited testing ensures your wastewater and effluent discharge meets regulatory standards. We provide reliable analytical results for industrial effluents, helping you maintain environmental compliance and avoid penalties.',
      benefits: [
        'NABL accredited results accepted by regulatory authorities',
        'Ensure compliance with discharge norms',
        'Avoid environmental penalties and legal issues',
        'Comprehensive parameter analysis',
        'Quick turnaround for urgent testing needs'
      ],
      features: ['NABL Accreditation', 'COD/BOD Analysis', 'Heavy Metals Testing', 'pH and TDS Testing', 'Regulatory Compliance']
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: 'GPCB approved ETP/CTP water testing Ahmedabad / Vapi / Ankleshwar / Dahej',
      subtitle: 'GPCB approved testing for Effluent Treatment Plants and Common Treatment Plants across key Gujarat locations.',
      description: 'Gujarat Pollution Control Board approved testing services for ETP and CTP operations. We provide comprehensive water quality analysis to ensure your treatment plant operations meet GPCB discharge standards.',
      benefits: [
        'GPCB approved testing for regulatory compliance',
        'Strategic coverage across major industrial hubs',
        'Expert analysis for ETP/CTP optimization',
        'Detailed reporting for authorities',
        'Timely sample collection and analysis'
      ],
      features: ['GPCB Approval', 'ETP Performance Monitoring', 'CTP Compliance Testing', 'Multi-location Coverage', 'Treatment Efficiency Analysis']
    },
    {
      icon: <TestTube className="w-10 h-10" />,
      title: 'ZDHC / Oeko-Tex wastewater test Surat (textile export)',
      subtitle: 'Specialized wastewater testing for textile exports meeting ZDHC and Oeko-Tex standards in Surat.',
      description: 'Support textile exporters in Surat with wastewater testing that meets international ZDHC (Zero Discharge of Hazardous Chemicals) and Oeko-Tex standards. Essential for sustainable textile manufacturing and global market access.',
      benefits: [
        'Meet international textile export standards',
        'Zero discharge of hazardous chemicals compliance',
        'Oeko-Tex certification support',
        'Enhanced market access for exports',
        'Sustainable manufacturing practices validation'
      ],
      features: ['ZDHC Compliance', 'Oeko-Tex Standards', 'Textile Industry Focus', 'Export Certification Support', 'Hazardous Chemical Analysis']
    },
    {
      icon: <Atom className="w-10 h-10" />,
      title: 'Heavy metals ICP testing (Pb Cd Cr Hg) Gujarat',
      subtitle: 'Precise heavy metals analysis using ICP technology for Lead, Cadmium, Chromium, and Mercury across Gujarat.',
      description: 'Advanced Inductively Coupled Plasma (ICP) testing for accurate detection and quantification of heavy metals. Critical for environmental compliance, product safety, and regulatory requirements across various industries.',
      benefits: [
        'Highly accurate ICP technology for precise results',
        'Complete heavy metals profile analysis',
        'Environmental and health safety compliance',
        'Product quality assurance for exports',
        'Regulatory requirement fulfillment'
      ],
      features: ['ICP Technology', 'Multi-element Analysis', 'Sub-ppm Detection Limits', 'ISO Certified Methods', 'Quick Reporting']
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'Azo amine test reactive dyes Ahmedabad',
      subtitle: 'Specialized testing for azo amines in reactive dyes ensuring safety compliance for textile applications.',
      description: 'Essential safety testing for reactive dyes used in textile manufacturing. We detect banned azo amines that can form carcinogenic compounds, ensuring your dyes meet international safety standards for textile exports.',
      benefits: [
        'Ensure dye safety for textile applications',
        'Compliance with international safety standards',
        'Avoid banned azo amine compounds',
        'Support for textile export requirements',
        'Product liability protection'
      ],
      features: ['Azo Amine Detection', 'Carcinogen Risk Assessment', 'Textile Safety Compliance', 'International Standards', 'Export Documentation']
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: 'Pre-Shipment Inspection',
      subtitle: 'On-site QC inspections of your specialty chemicals, polymers and additives at the factory.',
      description: 'We check product specs, packaging and safety to ensure you only pay for what you ordered. Our comprehensive inspection process covers visual examination, measurement verification, and documentation review.',
      benefits: [
        'Avoid off-spec shipments and costly delays',
        'Ensure product meets your specifications',
        'Verify packaging and labeling compliance',
        'Document inspection process with photos',
        'Immediate feedback on quality issues'
      ],
      features: ['Visual Inspection', 'Measurement Verification', 'Documentation Review', 'Photo Documentation', 'Quality Assessment']
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'COA & SDS Verification',
      subtitle: 'In-depth review of Certificates of Analysis and Safety Data Sheets from suppliers.',
      description: 'We confirm that composition, purity and safety data meet your standards and regulatory requirements. Our experts analyze technical data and identify potential discrepancies or missing information.',
      benefits: [
        'Protect end-users and meet regulatory requirements',
        'Verify chemical composition accuracy',
        'Ensure safety data compliance',
        'Identify missing or incorrect information',
        'Reduce compliance risks'
      ],
      features: ['Composition Analysis', 'Purity Verification', 'Safety Data Review', 'Regulatory Compliance', 'Risk Assessment']
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: 'Lab Testing Coordination',
      subtitle: 'We coordinate accredited lab tests for parameters beyond visual checks.',
      description: 'Get definitive, ISO-standards-based results on time. We work with certified laboratories to conduct chemical assays, contaminant analysis, and other specialized testing as required.',
      benefits: [
        'Get definitive, ISO-standards-based results on time',
        'Access to certified laboratory network',
        'Comprehensive testing protocols',
        'Fast turnaround times',
        'Cost-effective testing solutions'
      ],
      features: ['Chemical Assays', 'Contaminant Analysis', 'Purity Testing', 'ISO Standards', 'Fast Turnaround']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive chemical quality assurance services designed to protect your business, ensure compliance, and deliver peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
                Request Inspection
                <ArrowRight className="w-6 h-6 ml-14 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link to="/process" className="btn-secondary text-lg px-8 py-4">
                Learn Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="section-padding relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Each service is designed to address specific quality assurance needs in chemical procurement and supply chain management.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 rounded-2xl p-8 card-hover group transition-all duration-300"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    className="w-16 h-16 bg-violet-500/20 hover:bg-violet-400/30 rounded-2xl flex items-center justify-center transition-all duration-300 border border-violet-400/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-violet-300 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-200 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-sm text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-purple-400/20 hover:border-purple-400/30 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section ref={benefitsRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-violet-900/20" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our expertise and commitment to quality make us the preferred choice for chemical quality assurance worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'ISO Standards',
                description: 'All services follow international quality standards and best practices.'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Fast Turnaround',
                description: '24-48 hour reporting for most inspections and verifications.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Expert Team',
                description: 'Led by chemical engineers with 2+ years of industry experience.'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Reach',
                description: 'Serving clients worldwide from our India-based operations.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 rounded-xl card-hover group transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 bg-violet-500/20 hover:bg-violet-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 border border-violet-400/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-violet-300 group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {benefit.description}
                </p>
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
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Let's discuss your specific chemical quality assurance needs and create a customized service plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-accent text-lg px-10 py-5 group inline-flex items-center">
                Request Inspection
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link to="/process" className="btn-secondary text-lg px-10 py-5">
                Learn Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
