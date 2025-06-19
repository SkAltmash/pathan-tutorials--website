import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-yellow-400 text-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-2">
          1st Floor, Above Qurban Hussain Paints, Samvidhan Chowk, Hinganghat
        </p>
        <p className="mb-6">
          Phone: <a href="tel:9403553309" className="underline">9403553309</a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://wa.me/919403553309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-green-600 hover:text-green-700 transition"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/pathan_tutorials"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-pink-600 hover:text-pink-700 transition"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Contact Form */}
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded border"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="mt-12 max-w-5xl mx-auto rounded overflow-hidden shadow-lg">
        <iframe
          title="Pathan Tutorials Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.50007386028483!2d78.8444325256947!3d20.547132553649266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd365f33b2cee99%3A0x5c90e3485b7bf71d!2sKurban%20Hussain%20Paints!5e0!3m2!1sen!2sin!4v1750319818091!5m2!1sen!2sin"  
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
