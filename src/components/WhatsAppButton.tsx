import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/96877444570?text=Hi%2C%20I%20am%20interested%20in%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-[bounce_2s_infinite] flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
      data-testid="btn-floating-whatsapp"
    >
      <FaWhatsapp className="w-8 h-8 group-hover:scale-110 transition-transform" />
    </a>
  );
}
