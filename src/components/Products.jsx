import React from "react";
import { 
  FaCamera, 
  FaTv, 
  FaBell, 
  FaPhone, 
  FaFingerprint,
  FaDoorClosed,
  FaVideo,
  FaShieldAlt,
  FaStar
} from "react-icons/fa";

function Products() {
  const products = [
    {
      icon: FaCamera,
      title: "CCTV Cameras",
      types: ["Indoor", "Outdoor", "Dome", "Bullet", "IP Cameras"],
      description: "High-quality CCTV cameras for complete surveillance coverage."
    },
    {
      icon: FaTv,
      title: "LED TVs",
      types: ["All Sizes Available", "Smart TVs", "4K Resolution"],
      description: "Premium LED TVs with latest technology and sizes."
    },
    {
      icon: FaBell,
      title: "Fire Alarm Systems",
      types: ["Smoke Detectors", "Heat Detectors", "Alarm Panels"],
      description: "Reliable fire alarm systems for early warning and safety."
    },
    {
      icon: FaPhone,
      title: "Intercom Systems",
      types: ["Video Door Phones", "Audio Intercoms", "Multi-unit Systems"],
      description: "Advanced intercom systems for secure communication."
    },
    {
      icon: FaFingerprint,
      title: "Biometric Systems",
      types: ["Attendance Systems", "Access Control", "Time & Attendance"],
      description: "Secure biometric systems for access control and attendance."
    },
    {
      icon: FaDoorClosed,
      title: "Electric Door Locks",
      types: ["Smart Locks", "Digital Locks", "Access Control Locks"],
      description: "Modern electric door locks for enhanced security."
    },
    {
      icon: FaVideo,
      title: "Video Conferencing",
      types: ["Conference Systems", "Webcams", "Audio Systems"],
      description: "Professional video conferencing solutions for businesses."
    },
    {
      icon: FaShieldAlt,
      title: "Networking Accessories",
      types: ["Routers", "Switches", "Cables", "Connectors"],
      description: "Complete networking solutions and accessories."
    }
  ];

  const brands = [
    { name: "CP Plus", rating: 5 },
    { name: "Hikvision", rating: 5 },
    { name: "Dahua", rating: 5 },
    { name: "TP-Link", rating: 4 },
    { name: "D-Link", rating: 4 }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Products</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            हम आपको हर ज़रूरत के हिसाब से wide range of products provide करते हैं
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-2xl text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Product Types */}
                <div className="flex flex-wrap gap-2">
                  {product.types.map((type, typeIndex) => (
                    <span 
                      key={typeIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Brands Section */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Brands</span> We Deal In
            </h3>
            <p className="text-slate-600 text-lg">
              We are proud partners of trusted and leading brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-6 border border-slate-200 group-hover:border-blue-300 mb-3">
                  <FaShieldAlt className="text-3xl text-blue-600 mx-auto mb-2" />
                  <h4 className="font-bold text-slate-800 text-lg">{brand.name}</h4>
                </div>
                <div className="flex justify-center gap-1">
                  {[...Array(brand.rating)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Brands CTA */}
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
            <p className="text-slate-700 font-semibold text-lg">
              Premium brands with warranty and after-sales support
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Products;