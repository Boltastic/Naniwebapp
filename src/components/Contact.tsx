import React, { useState } from "react";
import { motion } from "motion/react";
import { CONTACT_INFO } from "../data";
import { Send, Mail, Briefcase, FileText, Check, Copy } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative py-28 bg-brand-offwhite" id="contact">
      {/* Background Decorative Gradients/Blobs */}
      <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-blue-50/20 glow-orb select-none pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Main Header */}
        <div className="space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">The Collaboration</span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-gray-900 leading-tight">
            Let&apos;s build <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-[#1a1a1a] bg-gradient-to-r from-black via-gray-500 to-blue-600">
              something extraordinary.
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-lg mx-auto font-medium leading-relaxed">
            Ready to integrate advanced AI models, craft impeccable UI flows, or bootstrap your next startup MVP? Let&apos;s talk codes.
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="w-full sm:w-auto h-13 px-8 rounded-full bg-black hover:bg-gray-900 text-white hover:text-white font-mono font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-md shadow-gray-200/50 flex items-center justify-center gap-2 group"
          >
            Hire Me <Briefcase className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto h-13 px-8 rounded-full bg-white hover:bg-gray-50 text-gray-800 hover:text-black font-mono font-bold text-xs uppercase tracking-widest border border-black/5 hover:scale-105 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            View Projects <FileText className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Luxurious Connection Cards (Email + Telegram) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          
          {/* Email Info Card */}
          <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white shadow-xl shadow-black/5 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 rounded-l-2xl" />
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md hover:bg-gray-100/60 text-gray-400 hover:text-gray-650 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-1">Direct Electronic Mail</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sm font-black tracking-tight text-gray-950 hover:text-blue-600 transition-colors block break-all"
            >
              {CONTACT_INFO.email}
            </a>
            <p className="text-[10px] text-gray-400 mt-2">
              Expect prompt diagnostics and direct blueprint replies within 12h.
            </p>
          </div>

          {/* Telegram Info Card */}
          <a
            href={CONTACT_INFO.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white shadow-xl shadow-black/5 hover:bg-white/80 relative group overflow-hidden block transition-all"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-400 rounded-l-2xl" />
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-500">
                <Send className="w-5 h-5 fill-current text-blue-500/80" />
              </div>
              <span className="text-[9px] font-mono font-bold text-blue-500 bg-blue-100/40 px-2 py-0.5 rounded-full uppercase">
                Instant chat
              </span>
            </div>
            
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-1">Telegram Account</span>
            <span className="text-sm font-black tracking-tight text-gray-950 group-hover:text-blue-500 transition-colors block">
              {CONTACT_INFO.telegram}
            </span>
            <p className="text-[10px] text-gray-400 mt-2">
              Ping anytime for real-time sandbox reviews or rapid project quotes.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}
