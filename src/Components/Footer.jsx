import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left - Logo & Info */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400">Pathan Tutorials</h3>
          <p className="mt-2 text-sm text-gray-400">
            Excellence in Mathematics Education<br />
            Hinganghat, Maharashtra
          </p>
        </div>

        {/* Right - Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
          <div className="flex justify-center md:justify-start gap-6 text-2xl mt-3">
            <a
              href="https://wa.me/919403553309"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/pathantutorials/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-8 text-center text-sm text-gray-500">
  &copy; {new Date().getFullYear()} Pathan Tutorials. All rights reserved. <br />
  Designed & Developed by{' '}
  <a
    href="https://skaltamashportfolio.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-400 font-semibold hover:underline"
  >
    Altamash Sheikh
  </a>
</div>

    </footer>
  );
}

export default Footer;
