import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Eye, CheckCircle, Shield, Award, ArrowRight, Phone } from 'lucide-react'

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
    
    try {
      const response = await fetch('/api/download-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
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
      } else {
        throw new Error(result.error || 'Failed to send sample report')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert(error instanceof Error ? error.message : 'Failed to send sample report. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
              Sample <span className="text-gradient">QC Report</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Download a Sample QC Report to see the level of detail and transparency we provide. Our anonymized report includes photos, measurements and clear pass/fail analysis.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-purple-300" />
                <span className="text-purple-300 font-medium">ISO Standards Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-violet-300" />
                <span className="text-violet-300 font-medium">Professional Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Form Section */}
      <section ref={formRef} className="section-padding relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get Your Sample Report
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  Fill out the form below to receive our comprehensive sample QC report. See firsthand the quality and detail we deliver to our clients.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 transition-all duration-200 placeholder-gray-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 transition-all duration-200 placeholder-gray-400"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 transition-all duration-200 placeholder-gray-400"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 transition-all duration-200 placeholder-gray-400"
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
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-200">
                      I agree to receive the sample report and occasional updates about ChemAssure Global services. Your information is protected and will not be shared with third parties.
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms}
                    className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isSubmitting || !formData.agreeToTerms
                        ? 'bg-gray-600/30 text-gray-400 cursor-not-allowed'
                        : 'btn-accent hover:scale-105 shadow-lg hover:shadow-xl'
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
                  className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-purple-400/30"
                >
                  <CheckCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Sample Report Sent!</h3>
                  <p className="text-gray-200 mb-4">
                    Your sample QC report has been sent to your email address. Please check your inbox and spam folder.
                  </p>
                  <p className="text-sm text-gray-300">
                    You'll receive the report within the next few minutes. This demonstrates our professional quality standards.
                  </p>
                  <div className="mt-6 p-4 bg-purple-600/20 rounded-lg border border-purple-400/30">
                    <p className="text-sm text-purple-300 font-medium">
                      💡 Pro Tip: Check your spam folder if you don't see it in your inbox!
                    </p>
                  </div>
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
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <FileText className="w-20 h-20 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Sample QC Report</h3>
                  <p className="text-gray-200">Chemical Quality Inspection Report</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Report Contents</h4>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Executive Summary</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Inspection Details</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Photo Documentation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Test Results</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Quality Assessment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Recommendations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-600/10 backdrop-blur-md p-4 rounded-lg border border-purple-400/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-purple-400" />
                      <span className="font-semibold text-white">Report Features</span>
                    </div>
                    <p className="text-sm text-gray-200">
                      Professional layout, high-resolution images, detailed analysis, and actionable insights following international quality standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center animate-bounce-gentle border border-purple-400/30">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center animate-float border border-violet-400/30">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report Features */}
      <section ref={featuresRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-violet-900/20" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What You'll Find in Our Reports
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
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
          </motion.div>
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
              Ready to See the Difference?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Download our sample report and experience the quality and transparency that sets ChemAssure Global apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#download-form" className="btn-accent py-5 px-10 text-lg inline-flex items-center shadow-lg hover:shadow-xl">
                Download Sample Report
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
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

export default DownloadPage
