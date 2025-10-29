import React from "react";
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaInstagram,
  FaClock,
  FaShieldAlt,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "CCTV Camera Installation",
    "Fire Alarm Systems", 
    "Intercom Systems",
    "Biometric Systems",
    "LED TV Installation",
    "Video Conferencing"
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <FaShieldAlt className="text-3xl text-emerald-400" />
              <div>
                <h3 className="text-2xl font-bold">RK Electronics CCTV</h3>
                <p className="text-emerald-400 font-semibold">Security Solutions Provider</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              "Har Ghar, Har Office – Smart aur Secure!" - हमारा mission है हर घर, ऑफिस और संस्था को 
              modern technology से secure और smart बनाना। पिछले कई सालों से security solutions प्रदान कर रहे हैं।
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-emerald-400" />
                <div>
                  <a href="tel:7248805027" className="hover:text-emerald-400 transition-colors font-semibold">
                    7248805027
                  </a>
                  <span className="text-slate-400 mx-2">|</span>
                  <a href="tel:8630247917" className="hover:text-emerald-400 transition-colors font-semibold">
                    8630247917
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-emerald-400" />
                <span className="text-slate-300">
                  Mota Aam Chowk, Muskan Complex, Haridwar Road, Najibabad
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-emerald-400" />
                <span className="text-slate-300">
                  Monday - Sunday: 9:00 AM - 8:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} RK Electronics CCTV. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 text-white rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <FaArrowUp className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;