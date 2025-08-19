import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TestTube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "FAQ", href: "/faq" },
    { name: "Download", href: "/download" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-custom shadow-strong"
          : "bg-navy-950"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-12 h-12 bg-accent-teal rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-accent-teal/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <TestTube className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">ChemAssure</span>
              <span className="text-sm text-accent-teal font-medium">
                Global
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}>
                <Link
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-primary">
                Request Inspection
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-teal focus:outline-none focus:text-accent-teal p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}>
              <div className="px-2 pt-2 pb-6 space-y-1 bg-navy-950/98 backdrop-blur-custom border-t border-navy-800">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}>
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? "bg-accent-teal/20 text-accent-teal border-l-4 border-accent-teal"
                          : "text-gray-300 hover:bg-navy-800 hover:text-white"
                      } block px-3 py-3 text-base font-medium transition-all duration-200 rounded-r-lg`}
                      onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsOpen(false)}>
                    Request Inspection
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
