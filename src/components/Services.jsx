import React from "react";
import { 
  GiCctvCamera
} from "react-icons/gi";
import { 
  FaFireExtinguisher, 
  FaPhone, 
  FaFingerprint,
  FaDoorOpen,
  FaDesktop,
  FaTv,
  FaShieldAlt
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: GiCctvCamera,
      title: "CCTV Camera Installation",
      description: "Professional CCTV installation for homes, offices, and commercial spaces with HD quality cameras.",
      features: ["HD Quality", "Night Vision", "Remote Monitoring"]
    },
    {
      icon: FaFireExtinguisher,
      title: "Fire Alarm Systems",
      description: "Complete fire alarm system setup with smoke detectors and emergency alerts.",
      features: ["Smoke Detection", "Emergency Alerts", "Auto Notification"]
    },
    {
      icon: FaPhone,
      title: "Intercom Systems",
      description: "Advanced intercom and video door phone systems for enhanced security.",
      features: ["Video Door Phone", "Audio Communication", "Access Control"]
    },
    {
      icon: FaFingerprint,
      title: "Biometric Systems",
      description: "Biometric attendance and access control systems for organizations.",
      features: ["Fingerprint Access", "Time Attendance", "Access Logs"]
    },
    {
      icon: FaDoorOpen,
      title: "Electric Door Locks",
      description: "Modern electric door lock installation for smart security solutions.",
      features: ["Remote Access", "Keyless Entry", "Auto Lock"]
    },
    {
      icon: FaDesktop,
      title: "Video Conferencing",
      description: "Professional video conferencing system setup for businesses.",
      features: ["HD Video", "Audio Clarity", "Multi-point"]
    },
    {
      icon: FaTv,
      title: "LED TV Installation",
      description: "LED TV installation and mounting services for homes and offices.",
      features: ["Wall Mounting", "Setup & Configuration", "Cable Management"]
    },
    {
      icon: FaShieldAlt,
      title: "Maintenance & Support",
      description: "Complete maintenance and after-sales support for all security systems.",
      features: ["24/7 Support", "Regular Maintenance", "Quick Repair"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            हमारी प्रोफेशनल टीम आपको देती है complete solution — Installation, Configuration, Maintenance aur Support तक।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-2xl text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            "Hum sirf products nahi, full security solutions provide karte hain."
          </h3>
          <p className="text-slate-600 mb-6">
            Complete security solutions tailored to your specific needs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-xl hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            <FaPhone />
            Get Free Quote
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;