import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Why Us", id: "whyus" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // close menu if on mobile
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
          <h1 className="text-2xl font-extrabold text-white">FutureMinds</h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex justify-center items-center gap-x-10 text-lg font-bold text-white ml-auto">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer transition hover:text-blue-400"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7 text-white" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg p-6 space-y-4 text-white font-bold text-lg">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
