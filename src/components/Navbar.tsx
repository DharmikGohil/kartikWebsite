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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-xl shadow-2xl shadow-purple-900/20 border-b border-white/10"
          : "bg-black/10 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="container-max">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-12 h-12 bg-purple-600 hover:bg-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 border border-purple-400/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <TestTube className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">ChemAssure</span>
              <span className="text-sm text-purple-300 font-medium">
                Global
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 bg-black/20 backdrop-blur-lg rounded-full px-2 py-1 border border-white/10">
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
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link 
                to="/contact" 
                className="btn-primary relative overflow-hidden group rounded-full px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 border border-purple-400/30"
              >
                <span className="relative z-10">Request Inspection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 focus:outline-none focus:text-purple-300 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
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
              <div className="px-4 pt-4 pb-6 space-y-2 bg-black/90 backdrop-blur-xl rounded-b-3xl border-t border-white/10 shadow-2xl shadow-purple-900/20">
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
                          ? "bg-gradient-to-r from-purple-600/30 to-violet-600/30 text-white border border-purple-400/50 shadow-lg shadow-purple-500/30"
                          : "text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 border border-transparent"
                      } block px-4 py-3 text-base font-medium transition-all duration-300 rounded-full backdrop-blur-sm hover:backdrop-blur-md hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 hover:-translate-y-1`}
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
