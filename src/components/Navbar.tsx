import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Github, Send } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-[#f8f8f6]/75 backdrop-blur-md border-b border-black/5" : "py-6 bg-transparent"
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-1 focus:outline-none"
        >
          <span className="font-display font-black text-xl tracking-tighter uppercase text-gray-900 group-hover:text-blue-600 transition-colors">
            Nani
          </span>
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-135 transition-transform" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Projects", "About", "Contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              className="text-xs font-semibold uppercase tracking-widest text-[#1a1a1a] hover:text-blue-600 transition-colors cursor-pointer"
            >
              {section}
            </button>
          ))}
          <a
            href={CONTACT_INFO.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-xs font-bold text-white bg-black rounded-full hover:scale-105 transition-transform flex items-center gap-1.5 shadow-sm"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 p-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 right-0 bottom-0 bg-white/95 backdrop-blur-lg z-40 p-8 flex flex-col justify-between border-t border-gray-100 animate-fade-in">
          <div className="space-y-6 pt-10">
            {["Projects", "About", "Contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                className="block w-full text-left text-2xl font-display font-bold text-gray-900 border-b border-gray-100 pb-3"
              >
                {section}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="block text-sm font-mono text-gray-600 hover:text-blue-600"
            >
              {CONTACT_INFO.email}
            </a>
            <a
              href={CONTACT_INFO.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-700 py-3.5 rounded-xl shadow-xs transition-all flex items-center gap-1"
            >
              Contact via Telegram <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
