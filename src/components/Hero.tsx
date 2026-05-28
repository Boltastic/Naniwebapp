import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Mail, ArrowRight, Play, Sparkles, Gem } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPos = element.getBoundingClientRect().top;
      const offsetPosition = elementPos + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-offwhite grid-bg" id="hero">
      {/* Decorative Floating Smoke/Wave Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[55%] h-[55%] rounded-full bg-blue-100/30 glow-orb select-none pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gray-200/40 glow-orb select-none pointer-events-none" />
      
      {/* Dynamic Animated Core Blur Ball */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] right-[20%] w-[25vw] h-[25vw] bg-blue-50/40 rounded-full glow-orb select-none pointer-events-none"
      />

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center z-10">
        
        {/* Upper badge indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-gray-150/50 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)] backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase font-semibold">Available for Freelance & Contract</span>
        </motion.div>

        {/* Cinematic Title & Floating Gems */}
        <div className="relative w-full max-w-5xl">
          {/* Left Floating Gem - Luxurious Micro-morphic card with electric drop shadow */}
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-4 sm:-left-12 lg:-left-20 top-2 sm:top-12 flex items-center justify-center p-2.5 sm:p-4 rounded-2xl bg-white/50 border border-white backdrop-blur-md shadow-lg text-blue-600 select-none z-20"
          >
            <Gem className="w-5 h-5 sm:w-8 sm:h-8 filter drop-shadow-[0_0_12px_rgba(0,80,255,0.35)]" />
          </motion.div>

          {/* Right Floating Gem - Luxurious Micro-morphic card with electric drop shadow */}
          <motion.div
            animate={{
              y: [0, 14, 0],
              rotate: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute -right-4 sm:-right-12 lg:-right-20 bottom-2 sm:bottom-12 flex items-center justify-center p-2.5 sm:p-4 rounded-2xl bg-white/50 border border-white backdrop-blur-md shadow-lg text-blue-400 select-none z-20"
          >
            <Gem className="w-5 h-5 sm:w-8 sm:h-8 filter drop-shadow-[0_0_12px_rgba(0,180,255,0.3)]" />
          </motion.div>

          {/* Core Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-gray-900 mx-auto select-none"
          >
            Build something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-blue-600">
              unforgettable.
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mt-8 leading-relaxed font-sans font-normal"
        >
          I build AI-powered web apps and digital experiences that feel modern, fast, and unforgettable.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white hover:text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded-xl transition-all shadow-[0_15px_30px_-10px_rgba(18,18,17,0.15)] hover:shadow-[0_20px_40px_-5px_rgba(18,18,17,0.25)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-white/70 hover:bg-white text-gray-800 hover:text-black font-mono font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded-xl border border-gray-150 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            Hire Me <Mail className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Floating animated stats preview indicators or simple mouse indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:flex flex-col items-center mt-24 gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          onClick={() => scrollToSection("projects")}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Discover Nani&apos;s Craft</span>
          <ArrowDown className="w-4 h-4 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
      
      {/* Background Animated Subtle Star Particle Element */}
      <div className="absolute inset-0 pointer-events-none" id="sparkle-particles">
        {[20, 50, 80].map((left, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 8 + idx * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ left: `${left}%` }}
            className="absolute bottom-10 text-blue-400 opacity-20"
          >
            <Sparkles className="w-3 h-3" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
