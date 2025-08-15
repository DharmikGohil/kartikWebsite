import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Eye, CheckCircle, Shield, Award, Users, Globe, ArrowRight, Mail, Phone } from 'lucide-react'

const DownloadPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeToTerms) return

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        agreeToTerms: false
      })
    }, 5000)
  }

  const reportFeatures = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Documentation',
      description: 'High-resolution photos of all inspection points with detailed annotations.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Comprehensive Analysis',
      description: 'Detailed findings with clear pass/fail criteria and recommendations.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Assessment',
      description: 'Professional evaluation following international standards and best practices.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Analysis',
      description: 'Clear identification of potential issues and mitigation strategies.'
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
              Sample <span className="text-gradient">QC Report</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Download a Sample QC Report to see the level of detail and transparency we provide. Our anonymized report includes photos, measurements and clear pass/fail analysis.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-accent-teal" />
                <span className="text-accent-teal font-medium">ISO Standards Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-accent-orange" />
                <span className="text-accent-orange font-medium">Professional Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Form Section */}
      <section ref={formRef} className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Get Your Sample Report
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below to receive our comprehensive sample QC report. See firsthand the quality and detail we deliver to our clients.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all duration-200"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all duration-200"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 text-accent-teal border-gray-300 rounded focus:ring-accent-teal mt-1"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                      I agree to receive the sample report and occasional updates about ChemAssure Global services. Your information is protected and will not be shared with third parties.
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms}
                    className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isSubmitting || !formData.agreeToTerms
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-accent-teal hover:bg-accent-teal/90 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                    }`}
                    whileHover={!isSubmitting && formData.agreeToTerms ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting && formData.agreeToTerms ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Download className="w-6 h-6" />
                        <span>Download Sample Report</span>
                      </div>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-gradient-to-br from-accent-teal/10 to-accent-orange/10 rounded-2xl border border-accent-teal/20"
                >
                  <CheckCircle className="w-16 h-16 text-accent-teal mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    Your sample report has been sent to your email address. Please check your inbox and spam folder.
                  </p>
                  <p className="text-sm text-gray-500">
                    You'll receive the report within the next few minutes.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Report Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-navy-50 to-charcoal-50 p-8 rounded-2xl border border-gray-200">
                <div className="text-center mb-6">
                  <FileText className="w-20 h-20 text-accent-teal mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Sample QC Report</h3>
                  <p className="text-gray-600">Chemical Quality Inspection Report</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-navy-900 mb-2">Report Contents</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-teal" />
                        <span>Executive Summary</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-teal" />
                        <span>Inspection Details</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-teal" />
                        <span>Photo Documentation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-teal" />
                        <span>Test Results</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-teal" />
                        <span>Quality Assessment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-teal" />
                        <span>Recommendations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent-teal/10 p-4 rounded-lg border border-accent-teal/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-accent-teal" />
                      <span className="font-semibold text-navy-900">Report Features</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Professional layout, high-resolution images, detailed analysis, and actionable insights following international quality standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center animate-bounce-gentle">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center animate-float">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report Features */}
      <section ref={featuresRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              What You'll Find in Our Reports
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive reports provide everything you need to make informed decisions about your chemical shipments.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {reportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-strong card-hover group"
              >
                <motion.div
                  className="w-16 h-16 bg-accent-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-teal/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-accent-teal">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-teal to-accent-orange text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to See the Difference?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Download our sample report and experience the quality and transparency that sets ChemAssure Global apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#download-form" className="bg-white text-accent-teal hover:bg-gray-100 font-semibold py-5 px-10 rounded-lg text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
                Download Sample Report
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a href="https://wa.me/1234567890" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-5 px-10 rounded-lg text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
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

export default DownloadPage
