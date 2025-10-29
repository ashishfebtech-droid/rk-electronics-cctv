import React, { useState, useEffect } from "react";
import { FaPhone, FaTools, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes text-shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 2s linear infinite;
        }
      `}</style>

      <section
        id="home"
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-emerald-100/50"></div>

        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-300/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/25 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24">
            {/* Left Side - Content */}
            <div
              className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Main Heading */}
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-4">
                RK Electronics{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  CCTV
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-slate-700 mb-4 font-semibold">
                "Smart Security, Trusted Technology"
              </p>

              {/* Hindi Tagline */}
              <p className="text-lg text-slate-600 mb-8 italic">
                हर घर, हर ऑफिस – स्मार्ट और सुरक्षित!
              </p>

              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                हमारा mission है हर घर, ऑफिस और संस्था को modern technology से
                secure और smart बनाना।
              </p>

              {/* Features List */}
              <div className="mb-8 space-y-3">
                {[
                  "Complete Solutions - Installation to Maintenance",
                  "HD Quality Cameras & Security Systems",
                  "Professional Expert Team",
                  "Top Brands Partnership",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <FaCheck className="text-emerald-500 flex-shrink-0 text-lg" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:7248805027"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-xl hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-3 justify-center"
                >
                  <FaPhone />
                  Free Consultation
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-800 font-bold text-lg rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-slate-200 flex items-center gap-3 justify-center"
                >
                  <FaTools />
                  Our Services
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-slate-600 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <FaPhone className="text-blue-500" />
                  <a
                    href="tel:7248805027"
                    className="hover:text-blue-600 font-semibold"
                  >
                    7248805027
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <FaMapMarkerAlt className="text-emerald-500" />
                  <span className="font-semibold">Najibabad</span>
                </div>
              </div>
            </div>

            {/* Right Side - CCTV Image */}
            <div
              className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 transform delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-10 opacity-0 scale-95"
              }`}
            >
              <div className="relative">
                {/* Image Container with Shadow */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/rk-electronics-cctv/images/camera.webp"
                    alt="CCTV Camera"
                    className="w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto drop-shadow-2xl rounded-2xl"
                  />
                </div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl transform scale-150 -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
