import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, MessageSquare, Eye, FileText, CheckCircle, Clock, Users, Shield, Globe, Phone } from 'lucide-react'

const Process = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const processSteps = [
    {
      number: '01',
      icon: <MessageSquare className="w-10 h-10" />,
      title: 'Inquiry & Planning',
      subtitle: 'You provide shipment details, and we propose a customized inspection or testing plan.',
      description: 'Our process begins with understanding your specific requirements. We analyze your shipment details, chemical specifications, and quality standards to create a tailored inspection plan that addresses your unique needs.',
      details: [
        'Submit shipment details and requirements',
        'Receive customized inspection proposal',
        'Review and approve inspection scope',
        'Schedule inspection date and time',
        'Confirm logistics and access arrangements'
      ],
      duration: '1-2 hours',
      color: 'from-accent-teal to-accent-teal/80'
    },
    {
      number: '02',
      icon: <Eye className="w-10 h-10" />,
      title: 'On-site Inspection/Testing',
      subtitle: 'We conduct the inspection or arrange lab tests in India, documenting each step with photos and notes.',
      description: 'Our expert inspectors conduct thorough on-site examinations, following international standards and your specific requirements. Every step is documented with detailed photos, measurements, and comprehensive notes.',
      details: [
        'On-site visual inspection and verification',
        'Documentation and photo capture',
        'Measurement and specification checks',
        'Lab testing coordination (if required)',
        'Real-time quality assessment'
      ],
      duration: '2-8 hours',
      color: 'from-accent-orange to-accent-orange/80'
    },
    {
      number: '03',
      icon: <FileText className="w-10 h-10" />,
      title: 'Report Delivery',
      subtitle: 'Within 24–48 hours, you receive a detailed digital report with results and recommendations.',
      description: 'We compile all findings into a comprehensive, professional report that includes detailed analysis, photographic evidence, test results, and actionable recommendations for your decision-making process.',
      details: [
        'Comprehensive quality assessment report',
        'High-resolution photos and documentation',
        'Test results and analysis (if applicable)',
        'Clear pass/fail recommendations',
        'Actionable next steps and guidance'
      ],
      duration: '24-48 hours',
      color: 'from-navy-600 to-navy-700'
    }
  ]

  const processFeatures = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Turnaround',
      description: 'Most inspections completed within 24-48 hours from start to finish.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ISO Compliant',
      description: 'All processes follow international quality standards and best practices.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Led by chemical engineers with proven expertise in chemical quality assurance.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Support',
      description: '24/7 availability for international clients across all time zones.'
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
              Our <span className="text-gradient">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              A simple, transparent 3-step workflow that ensures quality and delivers results. From inquiry to report delivery, we make chemical quality assurance straightforward and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
                Start Your Inspection
                <ArrowRight className="w-9 h-6 ml-14 group-hover:translate-x-2 transition-transform duration-300" />
              </Link> */}
              {/* <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                View Our Services
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section ref={processRef} className="section-padding relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our streamlined workflow ensures efficiency while maintaining the highest standards of quality and accuracy.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Step Number Badge */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border border-purple-400/30`}>
                  {step.number}
                </div>

                {/* Step Card */}
                <div className="bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 rounded-2xl p-8 pt-12 card-hover transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    className="w-20 h-20 bg-violet-500/20 hover:bg-violet-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 border border-violet-400/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-violet-300 group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-200 mb-4 text-center font-medium">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg mb-6 text-center border border-purple-400/20">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-semibold text-white">
                        Duration: {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white mb-3">What We Do:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-200">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connecting Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={processInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
                      className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center border border-purple-400/30"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section ref={timelineRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-violet-900/20" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Timeline Overview
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              See how our efficient process delivers results in record time while maintaining quality standards.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-violet-600 to-purple-900"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                { time: 'Day 1', title: 'Inquiry & Planning', description: 'Submit requirements and receive customized proposal' },
                { time: 'Day 1-2', title: 'On-site Inspection', description: 'Conduct thorough quality checks and documentation' },
                { time: 'Day 2-3', title: 'Report Delivery', description: 'Receive comprehensive digital report with findings' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/10 hover:border-white/20 p-6 rounded-xl card-hover transition-all duration-300">
                      <div className="text-2xl font-bold text-gradient mb-2">{item.time}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-200">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full border-4 border-white/20 shadow-lg z-10 relative backdrop-blur-sm">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Features */}
      <section ref={featuresRef} className="section-padding relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our streamlined approach combines efficiency with expertise to deliver reliable results every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 rounded-xl card-hover group transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 bg-violet-500/20 hover:bg-violet-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 border border-violet-400/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-violet-300 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {feature.description}
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
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Start with a simple inquiry and see how our streamlined process delivers quality results in record time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-accent py-5 px-10 text-lg inline-flex items-center shadow-lg hover:shadow-xl">
                Start Your Inspection
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <a href="https://wa.me/919313749421" className="btn-secondary py-5 px-10 text-lg inline-flex items-center shadow-lg hover:shadow-xl">
                <Phone className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Process
