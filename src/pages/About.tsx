import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Award, Target, Eye, Shield, Users, Globe, CheckCircle } from 'lucide-react'

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const values = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Unwavering commitment to honesty and ethical practices in all our inspections.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Accuracy',
      description: 'Precise and reliable results through rigorous quality control processes.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Clear, detailed reporting with full visibility into our inspection processes.'
    }
  ]

  const credentials = [
    // 'Chemical Engineering Degree (B.Tech)',
    // '1+ Years in Quality Assurance',
    'ISO 17020/17025 Standards Expert',
    'International Chemical Safety Certified',
    'Member of Chemical Manufacturers Association',
    'Advanced Analytical Techniques Specialist'
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
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">ChemAssure Global</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in chemical quality assurance, delivering expert inspections and testing coordination from India to the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-teal">
                Meet Our Founder
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                ChemAssure Global was founded by <strong>Mr. Kartik Radadiya</strong>, a distinguished chemical engineer who has experience in quality assurance and chemical safety.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Passionate about product safety and precision, Mr. Radadiya delivers personalized inspections and testing coordination for international buyers, ensuring that every chemical shipment meets the highest standards of quality and compliance.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                With a deep understanding of international chemical regulations and a commitment to excellence, Mr. Radadiya has built ChemAssure Global into a trusted name in chemical quality control across global markets.
              </p>
            </motion.div>

            {/* Founder Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-accent-teal/20 to-accent-orange/20 rounded-2xl flex items-center justify-center border border-accent-teal/30">
                <div className="text-center">
                  <div className="w-32 h-32 bg-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mr. Kartik Radadiya</h3>
                  <p className="text-accent-teal font-medium">Founder & Chief Inspector</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-orange rounded-full flex items-center justify-center animate-bounce-gentle">
                <Award className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of everything we do at ChemAssure Global, ensuring excellence in every inspection and report.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-navy-50 to-charcoal-50 hover:from-navy-100 hover:to-charcoal-100 card-hover group"
              >
                <motion.div
                  className="w-20 h-20 bg-accent-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-teal/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-accent-teal">
                    {value.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To be your trusted quality partner in chemical sourcing, providing expert inspections and testing coordination that ensures product safety, regulatory compliance, and supply chain reliability.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe that every chemical shipment deserves the highest level of scrutiny and that our expertise can make the difference between a successful delivery and a costly failure.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">The Solo Expert Advantage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0" />
                    <span>Direct access to founder's proven expertise in chemical quality assurance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0" />
                    <span>Immediate communication without account managers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0" />
                    <span>Lower overhead costs passed to clients</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0" />
                    <span>Personalized service for every shipment</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Professional Credentials
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={missionInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-accent-teal rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-medium">{credential}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-accent-teal to-accent-orange p-6 rounded-xl text-white">
                <h4 className="text-lg font-semibold mb-3">Global Reach</h4>
                <p className="text-white/90 mb-4">
                  Serving clients across Europe, North America, Asia-Pacific, and the Middle East with our India-based expertise.
                </p>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm">24/7 Global Support Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-950 to-charcoal-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work with Our Expert?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Experience the ChemAssure Global difference with personalized chemical quality assurance services.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-10 py-5 inline-flex items-center group">
              Request Inspection
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
