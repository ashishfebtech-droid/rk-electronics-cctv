import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '917248805027';
  const defaultMessage = 'Hello RK Electronics! I would like to inquire about your CCTV and security services.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Chat Preview Box */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl p-5 w-72 border border-slate-200 animate-fade-in">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-base">RK Electronics CCTV</h3>
                <p className="text-xs text-slate-500">Typically replies within minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-3 mb-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Hi there! 👋<br />
                How can we help you with CCTV and security solutions?
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              <span>Start Chat</span>
            </button>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50"
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? (
            <FaTimes className="text-3xl transition-transform duration-300" />
          ) : (
            <FaWhatsapp className="text-3xl transition-transform duration-300 group-hover:scale-110" />
          )}
          
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20"></span>
          
          {/* Online Indicator */}
          <span className="absolute top-1 right-1 w-4 h-4 bg-green-300 border-2 border-white rounded-full animate-pulse"></span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;