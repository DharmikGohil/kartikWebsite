import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, Users, Globe, ArrowRight, CheckCircle, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
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
      // For development, we'll use a mock API. In production, this will use the Vercel API
      const apiUrl = '/api/contact'

      const response = await fetch(apiUrl, {
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
            message: '',
            agreeToTerms: false
          })
        }, 5000)
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'chemsassureglobal@gmail.com',
      description: 'Send us a detailed inquiry',
      action: 'mailto:chemsassureglobal@gmail.com',
      color: 'from-accent-teal to-accent-teal/80'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+91 93137 49421',
      description: 'Speak with our expert directly',
      action: 'tel:+919313749421',
      color: 'from-accent-orange to-accent-orange/80'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      value: 'Ahmedabad, Gujarat, India',
      description: 'Our headquarters location',
      action: '#',
      color: 'from-navy-600 to-navy-700'
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Ready to ensure your chemical shipments are safe and compliant? Contact us today for expert quality assurance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/919313749421" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl group">
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Chat on WhatsApp
              </a>
              <a href="#contact-form" className="btn-secondary text-lg px-8 py-4">
                Fill Contact Form
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} id="contact-form" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 1 business day. For urgent inquiries, use our WhatsApp chat for immediate assistance.
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message/Inquiry *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your chemical inspection needs, shipment details, or any questions you have..."
                    />
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
                      I agree to the processing of my personal data for the purpose of responding to my inquiry. Your information is protected and will not be shared with third parties.
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
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-6 h-6" />
                        <span>Send Message</span>
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
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for your inquiry. We'll get back to you within 1 business day.
                  </p>
                  <p className="text-sm text-gray-500">
                    For urgent matters, please use our WhatsApp chat for immediate assistance.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-navy-50 to-charcoal-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.action}
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-soft transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {method.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-900 mb-1">{method.title}</h4>
                        <p className="text-lg font-medium text-accent-teal mb-1">{method.value}</p>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-accent-teal/10 rounded-xl border border-accent-teal/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-6 h-6 text-accent-teal" />
                    <h4 className="font-semibold text-navy-900">Response Time</h4>
                  </div>
                  <p className="text-gray-700">
                    We typically reply within <strong>1 business day</strong>. For urgent inquiries, use our WhatsApp chat for immediate assistance.
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                <p className="text-green-100 mb-4">
                  Chat with us on WhatsApp for instant responses to urgent inquiries.
                </p>
                <a
                  href="https://wa.me/919313749421"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Start WhatsApp Chat
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={infoRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why Choose ChemAssure Global?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise and commitment to quality make us the preferred choice for chemical quality assurance worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Solo Expert Advantage',
                description: 'Direct access to founder\'s proven expertise in chemical quality assurance and immediate communication without account managers.'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Responsive Global Support',
                description: '24/7 availability for overseas clients, with rapid turnaround on inquiries and reports.'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Transparent and Personalized',
                description: 'Clear reports with photos/notes; personalized service tailored to each shipment.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-strong card-hover group"
              >
                <motion.div
                  className="w-20 h-20 bg-accent-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-teal/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-accent-teal">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-950 to-charcoal-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Contact us today to discuss your chemical quality assurance needs and start your journey to safer, compliant shipments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/919313749421" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-5 px-10 rounded-lg text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </a>
              <a href="#contact-form" className="bg-white text-navy-950 hover:bg-gray-100 font-semibold py-5 px-10 rounded-lg text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
                Fill Contact Form
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
