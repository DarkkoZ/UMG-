// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
        {/* Texto */}
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Darkko Stephano Zet Samayoa</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
