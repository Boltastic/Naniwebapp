import React from "react";
import { motion } from "motion/react";
import { SKILL_GROUPS } from "../data";
import { Terminal, Shield, Sparkles, Server, Cpu } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-24 bg-brand-offwhite" id="about">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-50/30 glow-orb select-none pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gray-200/30 glow-orb select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">The Architect</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mt-2">
            Meet Nani
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Copywriting & Skills */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-sans font-light">
                Nani is a modern web app developer focused on AI tools, startup products, and futuristic digital experiences. Passionate about building useful products with clean interfaces and premium interactions.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                By merging clean code standards with conversational user interfaces, I help client networks bypass rigid form hierarchies in favor of direct, dynamic user flows. I prioritize micro-physics animations, local-state performance, and robust server-side protection variables to build websites that feel highly alive.
              </p>
            </motion.div>

            {/* Grid of Skill Tags */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-400">Core Expertise Stack</h3>
              <div className="space-y-5">
                {SKILL_GROUPS.map((group, g_idx) => (
                  <div key={group.category} className="space-y-2">
                    <span className="text-[11px] font-mono text-gray-650 font-bold block">{group.category}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill, s_idx) => (
                        <span
                          key={skill}
                          className="text-xs bg-white/75 border border-black/5 text-gray-800 hover:text-blue-600 hover:border-blue-200 shadow-xs font-sans font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-default hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Portrait & Achievements Card */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Interactive Portrait Simulator (Futuristic Developer Terminal Card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-white bg-white/40 backdrop-blur-xl shadow-xl shadow-black/5 overflow-hidden"
            >
              {/* macOS style title bar */}
              <div className="bg-gray-50 border-b border-gray-150/60 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-widest">nani_profile_subroutine.sh</span>
                <span className="w-4" />
              </div>

              {/* Developer UI Canvas */}
              <div className="p-6 md:p-8 bg-gray-50/50 space-y-6">
                
                {/* Visual Avatar Placeholder - Highly styling Awwwards look */}
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-blue-100">
                    <div className="w-full h-full rounded-[14px] bg-white flex flex-col items-center justify-center overflow-hidden">
                      {/* Geometric SVG vector for portrait placeholder */}
                      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-black tracking-tight text-gray-900 uppercase">Nani</h4>
                    <p className="text-[11px] font-mono text-gray-400">Class: Web App Architect</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
                      <span className="text-[10px] text-blue-600 font-mono font-bold uppercase tracking-wider">Online & Syncing</span>
                    </div>
                  </div>
                </div>

                {/* Self-writing stats JSON display */}
                <div className="bg-gray-900 text-gray-300 font-mono p-4 rounded-xl text-[10px] space-y-2 leading-relaxed shadow-inner border border-gray-800">
                  <div>
                    <span className="text-blue-400">const</span> <span className="text-emerald-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">fullName:</span> <span className="text-amber-200">&quot;Nani&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">primaryFocus:</span> <span className="text-amber-200">&quot;AI &amp; Interactive Web Apps&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">values:</span> <span className="text-gray-400">[</span><span className="text-amber-200">&quot;instant-loads&quot;</span>, <span className="text-amber-200">&quot;impeccable-margins&quot;</span><span className="text-gray-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">loves:</span> <span className="text-amber-200">&quot;AI Prompts &amp; Startups Validation&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
