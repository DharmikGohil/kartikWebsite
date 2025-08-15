import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, TestTube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-teal rounded-xl flex items-center justify-center">
                <TestTube className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">ChemAssure</span>
                <span className="text-sm text-accent-teal font-medium">Global</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              ChemAssure Global is a chemical quality assurance company that provides pre-shipment inspection, COA & SDS verification, lab testing coordination, and supplier audits.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/chemsassure-global-b62a3737a/" target="_blank" className="text-gray-400 hover:text-accent-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/chemsAssure_G" target="_blank" className="text-gray-400 hover:text-accent-teal transition-colors">
                <Twitter size={20} />
              </a>
              {/* <a href="https://www.chemassure.com" target="_blank" className="text-gray-400 hover:text-accent-teal transition-colors">
                <Globe size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-accent-teal transition-colors text-sm cursor-pointer">
                Pre-Shipment Inspection
              </li>
              <li className="text-gray-300 hover:text-accent-teal transition-colors text-sm cursor-pointer">
                COA & SDS Verification
              </li>
              <li className="text-gray-300 hover:text-accent-teal transition-colors text-sm cursor-pointer">
                Lab Testing Coordination
              </li>
              <li className="text-gray-300 hover:text-accent-teal transition-colors text-sm cursor-pointer">
                Supplier Audits
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent-teal" />
                <span className="text-gray-300 text-sm">chemsassureglobal@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent-teal" />
                <span className="text-gray-300 text-sm">+91 93137 49421</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent-teal" />
                <span className="text-gray-300 text-sm">Ahmedabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ChemAssure Global. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent-teal transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-teal transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
