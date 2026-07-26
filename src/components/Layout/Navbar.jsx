import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      setScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetBottom
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  const navItems = ["about", "projects", "skills", "education", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-lg shadow-purple-500/20 border-b border-purple-500/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => scrollToSection("hero")}
        >
          Faiza
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative group"
              onClick={() => scrollToSection(item)}
            >
              <button
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item
                    ? "text-white scale-110"
                    : "text-gray-400 hover:text-white hover:scale-105"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>

              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 transition-all duration-300 ${
                  activeSection === item
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

              {activeSection === item && (
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-xl animate-pulse" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white transition duration-300 hover:text-purple-400"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                <button
                  onClick={() => scrollToSection(item)}
                  className={`w-full py-4 text-center transition-all duration-300 ${
                    activeSection === item
                      ? "text-white bg-purple-500/20"
                      : "text-gray-400 hover:text-white hover:bg-purple-500/10"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Glow */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      )}
    </nav>
  );
};

export default Navbar;