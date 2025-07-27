import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-700 to-blue-gray-900 text-white py-10 px-6 md:px-16">
      {/* Decorative Background */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-[-150px] left-[-150px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl bottom-[-200px] right-[-150px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo and Thank You */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">FutureMind Services</h1>
          <p className="text-gray-300 text-sm">
            Thank you for visiting FutureMind Services. Let’s innovate together!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-200">
          <a href="#home" className="hover:text-blue-300">Home</a>
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#whyus" className="hover:text-blue-300">Why Us</a>
          <a href="#services" className="hover:text-blue-300">Services</a>
          <a href="#projects" className="hover:text-blue-300">Projects</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </div>

        {/* Contact Info + Social Icons */}
        <div className="text-center md:text-right">
          <p className="text-gray-300 text-sm">📧 freshmindsservices@gmail.com</p>
          <p className="text-gray-300 text-sm">📍 Bangalore, India</p>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a href="#" className="hover:text-blue-300">LinkedIn</a>
            <a href="#" className="hover:text-blue-300">GitHub</a>
            <a href="#" className="hover:text-blue-300">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        © 2025 FutureMind Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
