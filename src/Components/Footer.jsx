import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-white">Rituj Yadav</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Passionate Full Stack Developer focused on building
            scalable applications using React & Spring Boot.
            Always open to collaboration and learning new technologies.
          </p>
        </div>

        {/* CENTER SECTION */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/ritujyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rituj-yadav-aa97512ba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="mailto:youremail@gmail.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <button
          onClick={scrollToTop}
          className="mx-auto mb-4 flex items-center gap-2 text-blue-400 hover:text-white transition duration-300"
        >
          <FaArrowUp size={18} />
          Back to Top
        </button>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Rituj Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer