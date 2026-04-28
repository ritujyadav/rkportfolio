import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b z-50">

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-14">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* ✅ PUBLIC FOLDER IMAGE */}
          <img
            src="/rk-logo.png"
            alt="Rituj Yadav Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-semibold">Rituj Yadav</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Resume Button */}
        <a href="/My_Updated_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
            Resume
          </button>
        </a>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-14 left-0 w-full bg-white transition-all duration-300 ${
          menuOpen ? "h-screen" : "h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 mt-10 text-lg font-medium">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;