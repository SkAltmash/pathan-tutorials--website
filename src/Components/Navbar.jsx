import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Courses', 'Results', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 text-white shadow-md transition">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-yellow-400">
          <Link to="home" smooth duration={500} onClick={closeMenu}>
            Pathan Tutorials
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map(link => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="text-yellow-400 font-bold"
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/60 text-white shadow-md transition">
          <ul className="flex flex-col space-y-4 text-center">
            {navLinks.map(link => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={closeMenu}
                  activeClass="text-yellow-400 font-bold"
                  className="cursor-pointer text-lg hover:text-yellow-400 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
