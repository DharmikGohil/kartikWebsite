import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Zap, Shield, TestTube, Microscope, Building2, Clock, Award, Globe, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const valuePropositions = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast 24-48 hr reporting',
      description: 'Quick turnaround for urgent shipments'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Trusted ISO-aligned process',
      description: 'International standards compliance'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Solo expert – personal service',
      description: 'Direct access to founder expertise'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global reach from India',
      description: 'Worldwide chemical QC support'
    }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Built with modern technologies for optimal performance and speed.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Friendly',
      description: 'Intuitive design that provides the best user experience.'
    }
  ]

  const testimonials = [
    {
      name: 'Your Name',
      role: 'Your Company Name',
      content: 'Your valuable feedback will be featured here! Join our growing list of satisfied clients who trust ChemAssure Global for their chemical quality assurance needs. Experience our exceptional service firsthand.',
      rating: 5
    },
    // {
    //   name: 'Mike Chen',
    //   role: 'Founder, StartupXYZ',
    //   content: 'Working with ChemAssure Global was a game-changer for our chemical procurement. Their expertise in COA verification and lab testing coordination is unmatched.',
    //   rating: 5
    // }
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
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <TestTube className="w-32 h-32 text-white/10 animate-float absolute top-1/4 left-1/4" />
          <Microscope className="w-24 h-24 text-purple-300/10 animate-float animation-delay-300 absolute top-1/3 right-1/4" />
          <Building2 className="w-28 h-28 text-violet-300/10 animate-float animation-delay-500 absolute bottom-1/3 left-1/3" />
        </div>

        {/* Hero Content */}
        <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ensuring Chemical Quality &{' '}
              <span className="text-gradient">Compliance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Pre-shipment chemical inspections, COA/SDS checks & supplier audits by your dedicated expert in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/contact" className="btn-accent text-lg px-10 py-5 group">
              Request Inspection
              <ArrowRight className="w-6 h-6 ml-14 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-10 py-5">
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Propositions Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="container-max relative z-10">
          <motion.div
            ref={featuresRef}
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valuePropositions.map((proposition, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/20 card-hover group transition-all duration-300"
              >
                <motion.div
                  className="w-20 h-20 bg-purple-500/20 hover:bg-purple-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 border border-purple-400/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-purple-300 group-hover:text-white transition-colors duration-300">
                    {proposition.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {proposition.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {proposition.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-violet-900/20" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose ChemAssure Global?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We combine creativity with technical expertise to deliver chemical QC services that not only meet standards but exceed expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 card-hover group"
              >
                <motion.div
                  className="w-20 h-20 bg-violet-500/20 hover:bg-violet-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 border border-violet-400/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-violet-300 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding relative text-white">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="container-max relative z-10">
          <motion.div
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '100+', label: 'Inspections Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '2+', label: 'Years Experience' },
              { number: '24/7', label: 'Global Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="text-5xl font-bold mb-3 text-gradient group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-200 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black/30 to-purple-900/20" />
        <div className="container-max relative z-10">
          <motion.div
            ref={testimonialsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with ChemAssure Global.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 p-8 rounded-2xl shadow-soft hover:shadow-strong card-hover"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding relative text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-violet-900/40 to-purple-900/30 backdrop-blur-sm" />
        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Ensure Chemical Quality?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Let's discuss your chemical inspection needs and create a customized quality assurance plan. 
              Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-accent text-lg px-10 py-5 group inline-flex items-center">
                Request Inspection
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <a href="https://wa.me/919313749421" className="bg-green-600/80 hover:bg-green-600 backdrop-blur-sm border border-green-500/30 text-white font-semibold py-5 px-10 rounded-lg text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
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

export default Home
                                                                                                    