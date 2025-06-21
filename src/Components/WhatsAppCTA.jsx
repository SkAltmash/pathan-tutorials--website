import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/919403553309"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}

export default WhatsAppCTA;
