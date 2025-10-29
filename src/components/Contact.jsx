import React, { useState } from "react";
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan form submission logic add kar sakte ho
    const whatsappMessage = `Hello RK Electronics!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    
    window.open(`https://wa.me/917248805027?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["7248805027", "8630247917"],
      link: "tel:7248805027",
      color: "blue"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: ["7248805027", "Quick Response"],
      link: "https://wa.me/917248805027",
      color: "green"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: ["Mota Aam Chowk, Muskan Complex", "Haridwar Road, Najibabad"],
      link: "https://maps.google.com/?q=Mota+Aam+Chowk,+Muskan+Complex,+Haridwar+Road,+Najibabad",
      color: "emerald"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: ["Monday - Sunday: 9:00 AM - 8:00 PM", "Emergency Support Available"],
      color: "orange"
    }
  ];

  const services = [
    "CCTV Installation",
    "Fire Alarm System",
    "Intercom System", 
    "Biometric System",
    "LED TV Installation",
    "Video Conferencing",
    "Maintenance & Repair",
    "Other Services"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Us</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            "Apne ghar aur office ko safe aur smart banaiye – RK Electronics CCTV ke saath!"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h3>
            
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const colorClasses = {
                  blue: "bg-blue-500",
                  green: "bg-green-500", 
                  emerald: "bg-emerald-500",
                  orange: "bg-orange-500"
                };

                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 ${colorClasses[item.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 mb-1">
                          {item.link && detailIndex === 0 ? (
                            <a 
                              href={item.link} 
                              target={item.link.startsWith('http') ? '_blank' : '_self'}
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 font-semibold transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-bold text-slate-800 mb-4 text-center">Follow Us</h4>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/rk_electronics_cctv?igsh=enVhcXJoM29pdTh5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500 text-white rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/share/1CJ57MxNPD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://youtube.com/@rk_electronics_cctv?si=-lkMl_1nChnr6rJf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <a
                  href="https://wa.me/917248805027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Quick Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-xl hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                Send via WhatsApp
              </button>

              <p className="text-slate-500 text-sm text-center">
                We'll contact you within 24 hours
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;