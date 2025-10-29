import React, { useState, useEffect } from "react";
import { FaPhone, FaTools, FaMapMarkerAlt, FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "/rk-electronics-cctv/images/camera.webp",
    "/rk-electronics-cctv/images/fingerprint.webp", 
    "/rk-electronics-cctv/images/firealarm.webp"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

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
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 gap-8">
            
            {/* Left Side - Content */}
            <div
              className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 transform ${
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

            {/* Right Side - Carousel */}
            <div
              className={`w-full lg:w-1/2 transition-all duration-1000 transform delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-10 opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                {/* Carousel Container - No Shadow */}
                <div className="relative overflow-hidden">
                  
                  {/* Images with Sliding Animation */}
                  <div className="relative w-full aspect-square">
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                          index === currentImageIndex
                            ? "opacity-100 transform translate-x-0"
                            : "opacity-0 transform translate-x-full"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Security Product ${index + 1}`}
                          className="w-full h-full object-contain cursor-pointer"
                          onClick={nextImage}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="text-sm sm:text-base" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="text-sm sm:text-base" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;