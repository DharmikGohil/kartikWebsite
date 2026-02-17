import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets, ChevronDown } from "lucide-react";
import { industries } from "../data/industries";
import { IndustryIcon } from "../data/industryIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Engineering", href: "/foam-control-engineering" },
    { name: "Technologies", href: "/technologies" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIndustriesOpen(false);
    setIsOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIndustriesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setIndustriesOpen(false), 150);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-xl border-b border-white/5"
          : "bg-navy-950/80 backdrop-blur-md"
      }`}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center">
              <Droplets className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">ChemAssure</span>
              <span className="text-[10px] text-brand-400 font-medium -mt-0.5">Global</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {/* Home & Engineering */}
            {navLinks.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-[13px] px-3 py-1.5 ${isActive(item.href) ? "active" : ""}`}>
                {item.name}
              </Link>
            ))}

            {/* Industries Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className={`nav-link text-[13px] px-3 py-1.5 inline-flex items-center gap-1 ${
                  isActive("/solutions") ? "active" : ""
                }`}
              >
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-navy-950 border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 z-50">
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      to={`/solutions/${ind.slug}`}
                      className={`flex items-center gap-3 px-4 py-2.5 text-[13px] transition-colors duration-150 ${
                        location.pathname === `/solutions/${ind.slug}`
                          ? "text-brand-400 bg-brand-600/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <IndustryIcon slug={ind.slug} className="w-4 h-4 text-brand-400" />
                      <span>{ind.name}</span>
                    </Link>
                  ))}
                  <div className="border-t border-white/5 mt-1 pt-1">
                    <Link
                      to="/solutions"
                      className="block px-4 py-2.5 text-[13px] text-brand-400 hover:text-brand-300 hover:bg-white/5 transition-colors duration-150 font-medium"
                    >
                      View All Industries →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Rest of nav links */}
            {navLinks.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-[13px] px-3 py-1.5 ${isActive(item.href) ? "active" : ""}`}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link to="/contact" className="btn-primary text-[13px] px-5 py-2">
              Discuss Your Process
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden px-4 pt-2 pb-6 space-y-1 bg-navy-950/98 backdrop-blur-xl border-t border-white/5">
            {navLinks.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "bg-brand-600/20 text-white border-brand-500/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                } block px-4 py-3 text-sm font-medium rounded-lg border border-transparent transition-colors duration-200`}
                onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}

            {/* Mobile Industries Accordion */}
            <div>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className={`${
                  isActive("/solutions")
                    ? "bg-brand-600/20 text-white border-brand-500/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                } w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg border border-transparent transition-colors duration-200`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileIndustriesOpen && (
                <div className="ml-4 mt-1 space-y-0.5 border-l border-white/5 pl-3">
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      to={`/solutions/${ind.slug}`}
                      className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors duration-150 ${
                        location.pathname === `/solutions/${ind.slug}`
                          ? "text-brand-400 bg-brand-600/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <IndustryIcon slug={ind.slug} className="w-4 h-4 text-brand-400" />
                      <span>{ind.name}</span>
                    </Link>
                  ))}
                  <Link
                    to="/solutions"
                    className="block px-3 py-2 text-sm text-brand-400 hover:text-brand-300 font-medium rounded-lg transition-colors duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Industries →
                  </Link>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "bg-brand-600/20 text-white border-brand-500/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                } block px-4 py-3 text-sm font-medium rounded-lg border border-transparent transition-colors duration-200`}
                onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}

            <div className="pt-3">
              <Link
                to="/contact"
                className="btn-primary w-full text-center block text-sm"
                onClick={() => setIsOpen(false)}>
                Discuss Your Process
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
