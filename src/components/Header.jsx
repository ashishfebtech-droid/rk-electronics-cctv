import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaPhone,
  FaTools,
  FaHome,
  FaCog,
  FaStar
} from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Social Media Links
  const socialLinks = {
    instagram: "https://www.instagram.com/rk_electronics_cctv?igsh=enVhcXJoM29pdTh5",
    facebook: "https://www.facebook.com/share/1CJ57MxNPD/",
    youtube: "https://youtube.com/@rk_electronics_cctv?si=-lkMl_1nChnr6rJf",
    whatsapp: "https://wa.me/917248805027"
  };

  // Mount hone pe animation ke liye
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);
      setShowHeader(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: "Home", href: "#home", icon: FaHome },
    { name: "Services", href: "#services", icon: FaTools },
    { name: "Products", href: "#products", icon: FaCog },
    { name: "Brands", href: "#brands", icon: FaStar },
    { name: "Contact", href: "#contact", icon: FaPhone },
  ];

  return (
    <>
      {/* Header with Entrance Animation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${
          isMounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-2xl py-3 border-b border-slate-200"
            : "bg-white/90 backdrop-blur-sm py-4"
        } ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Left Side */}
          <a href="#home" className="flex items-center group">
            <div className="transition-all duration-500 group-hover:scale-105 flex items-center gap-3">
              {/* Logo Image */}
              <img 
                src="/rk-electronics-cctv/images/RKLOGO.webp" 
                alt="RK Electronics CCTV" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // Agar logo load na ho to fallback text
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg hidden">
                RKE
              </div>
              
              <div className="text-left">
                <h1 className="text-xl font-bold text-slate-800 leading-tight">
                  RK Electronics
                </h1>
                <p className="text-blue-600 text-sm font-semibold">CCTV & Security</p>
              </div>
            </div>
          </a>

          {/* Desktop Nav - Center Aligned */}
          <nav className="hidden lg:flex gap-1 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-6 py-3 font-medium text-slate-700 rounded-xl transition-all duration-500 hover:text-blue-600 flex items-center gap-2"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <IconComponent className="text-lg" />
                  <span className="text-sm font-semibold uppercase tracking-wider relative z-10">
                    {item.name}
                  </span>
                  {/* Hover Underline Effect */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5 rounded-full"></span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button - Right Side (Social icons removed from desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:7248805027"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm transition-all duration-300 hover:bg-blue-700 transform hover:scale-105 shadow-lg shadow-blue-600/25 flex items-center gap-2"
            >
              <FaPhone />
              Call Now
            </a>
          </div>

          {/* Hamburger Button (mobile) - Right Side */}
          <button
            className="lg:hidden w-12 h-12 bg-blue-600/10 border-2 border-blue-600/20 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Sidebar - Right Side */}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white z-50 transform transition-all duration-500 flex flex-col shadow-2xl border-l border-slate-200 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center gap-3">
              {/* Mobile Logo */}
              <img 
                src="/rk-electronics-cctv/images/RKLOGO.webp" 
                alt="RK Electronics CCTV" 
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm hidden">
                RKE
              </div>
              
              <div className="text-left">
                <h1 className="text-lg font-bold text-slate-800 leading-tight">
                  RK Electronics
                </h1>
                <p className="text-blue-600 text-xs font-semibold">CCTV & Security</p>
              </div>
            </div>
          </div>
          <button
            className="w-10 h-10 bg-blue-600/10 border-2 border-blue-600/20 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 gap-3 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="p-4 rounded-xl text-slate-700 font-medium transition-all duration-300 hover:text-blue-600 border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-left flex items-center gap-3"
              >
                <IconComponent className="text-lg" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-slate-200">
          <a
            href="tel:7248805027"
            onClick={closeMobileMenu}
            className="block w-full px-6 py-4 bg-blue-600 text-white rounded-xl font-bold text-center transition-all duration-300 hover:bg-blue-700 mb-6 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaPhone />
            Call: 7248805027
          </a>

          {/* Social Links - Mobile Only */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-pink-500/10 border-2 border-pink-500/20 text-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600/10 border-2 border-blue-600/20 text-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-red-500/10 border-2 border-red-500/20 text-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-green-500/10 border-2 border-green-500/20 text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2">
            <p className="text-slate-600 text-sm flex items-center justify-center">
              <FaWhatsapp className="mr-2 text-blue-600" />
              +91 7248805027
            </p>
            <p className="text-slate-600 text-sm flex items-center justify-center">
              <FaWhatsapp className="mr-2 text-blue-600" />
              +91 8630247917
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;