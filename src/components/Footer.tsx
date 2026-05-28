import React from "react";
import { Send, Mail, ChevronUp, Sparkles, Github, Globe } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-brand-offwhite pt-12 pb-16 overflow-hidden select-none" id="footer">
      
      {/* Subtle bottom divider line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="w-full h-px bg-black/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-1">
            <span className="font-display font-black text-xs tracking-wider text-gray-900 uppercase">Nani</span>
            <span className="w-1 h-1 bg-blue-600 rounded-full animate-ping" />
            <span className="text-[10px] text-gray-500 font-mono pl-3">© 2026. All rights secured.</span>
          </div>
          <p className="text-[9px] text-gray-400 font-mono tracking-wide">
            Designed for sub-second performance. Handcrafted with pristine guidelines.
          </p>
        </div>



        {/* Right Side: Social links + Scroll to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="p-2.5 rounded-full border border-black/5 bg-white/50 text-gray-500 hover:text-blue-600 hover:border-blue-100 transition-all hover:bg-white shadow-3xs"
              title="Mail Nani"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-black/5 bg-white/50 text-gray-500 hover:text-blue-600 hover:border-blue-100 transition-all hover:bg-white shadow-3xs"
              title="Telegram Nani"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-black hover:bg-gray-900 text-white hover:text-white rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            title="Scroll to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Decorative Bottom Glow Ornament */}
      <div className="absolute bottom-[-15%] left-[50%] -translate-x-[50%] w-[45vw] h-[100px] rounded-full bg-blue-100/10 glow-orb" />
    </footer>
  );
}
