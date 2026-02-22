import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Droplets } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const industries = [
    { name: "Textile Processing", slug: "textile-processing" },
    { name: "Wastewater Treatment", slug: "wastewater-treatment" },
    { name: "Paints & Coatings", slug: "paints-coatings" },
    { name: "Paper & Pulp", slug: "paper-pulp" },
    { name: "Cement & Construction", slug: "cement-construction" },
    { name: "Sugar & Fermentation", slug: "sugar-fermentation" },
    { name: "Food & Beverage", slug: "food-beverage" },
    { name: "Pharma & Biotech", slug: "pharma-biotech" },
    { name: "Oil & Gas", slug: "oil-gas" },
    { name: "Municipal Water Reuse", slug: "municipal-water-reuse" },
  ];

  return (
    <footer className="relative text-white bg-navy-950 border-t border-white/5">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">ChemAssure</span>
                <span className="text-xs text-brand-400 font-medium ml-1">Global</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Industrial foam control solutions engineered for process efficiency and sustainability. Application-specific defoamers and antifoams across industries.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/in/chemsassure-global-b62a3737a/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-400 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Foam Control Engineering", href: "/foam-control-engineering" },
                { name: "Solutions by Industry", href: "/solutions" },
                { name: "Chemistry Platforms", href: "/chemistry" },
                { name: "Foam Problems", href: "/foam-problems" },
                { name: "Technologies", href: "/technologies" },
                { name: "Blog", href: "/blog" },
                { name: "Sustainability", href: "/sustainability" },
                { name: "About", href: "/about" },
                { name: "Request Pricing", href: "/request-pricing" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-brand-400 transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Industries</h3>
            <ul className="space-y-2">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link to={`/solutions/${ind.slug}`} className="text-gray-400 hover:text-brand-400 transition-colors text-sm">{ind.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={15} className="text-brand-400" />
                <span className="text-gray-400 text-sm">chemsassureglobal@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={15} className="text-brand-400" />
                <span className="text-gray-400 text-sm">+91 93137 49421</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={15} className="text-brand-400" />
                <span className="text-gray-400 text-sm">Ground Floor, Plot No. 134, Pramukh Park Society, Sanya Road, Simada Gam, Patel Park, Surat - 395006, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">© {currentYear} ChemAssure Global. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">Terms</Link>
            <span className="text-gray-500 text-sm">
              Designed & Developed by{' '}
              <a href="https://www.linkedin.com/in/dharmikgohil/" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">Dharmik Gohil</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
