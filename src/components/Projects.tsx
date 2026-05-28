import React from "react";
import { motion } from "motion/react";
import { PROJECTS_DATA } from "../data";
import { ArrowUpRight, Compass, Terminal, Award, Landmark } from "lucide-react";

export default function Projects() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "forgepath":
        return <Compass className="w-5 h-5 text-blue-600 animate-spin-slow" />;
      case "vibely":
        return <Terminal className="w-5 h-5 text-purple-600" />;
      case "ratemystartup":
        return <Award className="w-5 h-5 text-emerald-600" />;
      case "affordcalc":
        return <Landmark className="w-5 h-5 text-amber-600" />;
      default:
        return null;
    }
  };

  const getStaticMockup = (id: string) => {
    switch (id) {
      case "forgepath":
        return (
          <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-blue-50/40 via-white to-blue-50/20 min-h-[380px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-blue-500 uppercase font-black bg-blue-100/50 px-2 py-0.5 rounded">
                  FORGEPATH PRO v4.2
                </span>
              </div>

              <div className="space-y-4">
                <div className="border border-black/5 bg-white/85 p-4 rounded-xl shadow-xs">
                  <p className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-1">TARGET CAREER PATH</p>
                  <p className="text-sm font-black text-gray-900 tracking-tight">AI Solutions Architect</p>
                </div>

                <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-blue-100">
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 border border-white shadow-xs" />
                    <p className="text-xs font-black text-gray-800">1. Master Advanced TypeScript & ESM</p>
                    <p className="text-[10px] text-gray-400 font-mono">Completed • Core Engine</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-400 border border-white shadow-xs" />
                    <p className="text-xs font-black text-gray-800">2. Integrate Gemini Multimodal API</p>
                    <p className="text-[10px] text-blue-600 font-mono font-bold animate-pulse animate-duration-1000">Analyzing Nodes...</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-200 border border-white shadow-xs" />
                    <p className="text-xs font-black text-gray-400">3. Formulate Cloud Architectures</p>
                    <p className="text-[10px] text-gray-400 font-mono">Future Pipeline</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-black/5 pt-4 flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-400">STATUS: READY TO DEPLOY</span>
              <div className="h-6 w-16 bg-blue-600 rounded-full flex items-center justify-center text-[9px] font-mono font-bold text-white tracking-widest">
                98%
              </div>
            </div>
          </div>
        );

      case "vibely":
        return (
          <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-purple-50/40 via-white to-purple-50/20 min-h-[380px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-purple-600 uppercase font-black bg-purple-100/50 px-2 py-0.5 rounded">
                  VIBELY SYNTAX SHIELD
                </span>
              </div>

              <div className="space-y-4">
                <div className="border border-black/5 bg-gray-950 p-4 rounded-xl shadow-xs font-mono">
                  <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-1">
                    <span className="text-[9px] text-purple-400 font-bold uppercase tracking-widest">SYSTEM COMPILER</span>
                    <span className="text-[8px] text-gray-500">VIBE_INPUT.TS</span>
                  </div>
                  <p className="text-[11px] text-gray-100 leading-relaxed font-normal">
                    <span className="text-purple-400 font-bold">const</span> prompt = <span className="text-emerald-300">&quot;Construct editorial luxury grid layout without using raw default templates...&quot;</span>;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="border border-black/5 bg-white/85 p-2.5 rounded-lg shadow-3xs">
                    <p className="text-[8px] font-mono text-gray-400 uppercase">Clarity Score</p>
                    <p className="text-xs font-black text-gray-800 tracking-tight">Elite Tier</p>
                  </div>
                  <div className="border border-black/5 bg-white/85 p-2.5 rounded-lg shadow-3xs">
                    <p className="text-[8px] font-mono text-gray-400 uppercase">Token Cost</p>
                    <p className="text-xs font-black text-purple-600 tracking-tight">-14.2%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-black/5 pt-4 flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-400">PROMPT SANITIZED SECURELY</span>
              <span className="text-[9px] font-mono text-purple-600 bg-purple-100 px-2.5 py-0.5 rounded-full font-bold">ACTIVE</span>
            </div>
          </div>
        );

      case "ratemystartup":
        return (
          <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-emerald-50/40 via-white to-emerald-50/20 min-h-[380px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-emerald-600 uppercase font-black bg-emerald-100/50 px-2 py-0.5 rounded">
                  PITCH REVIEW CO-PILOT
                </span>
              </div>

              <div className="space-y-4">
                <div className="border border-black/5 bg-white/85 p-4 rounded-xl shadow-xs">
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-black text-gray-900">AlphaPitch AI Rating</span>
                    <span className="text-xs font-mono text-emerald-600 font-bold">9.2 / 10</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[92%] h-full bg-emerald-500 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="border border-black/5 bg-white/85 p-2 rounded-lg flex flex-col justify-center shadow-3xs">
                    <span className="text-[8px] font-mono text-gray-400 uppercase font-bold">Market</span>
                    <span className="text-[11px] font-black text-gray-800">89%</span>
                  </div>
                  <div className="border border-black/5 bg-white/85 p-2 rounded-lg flex flex-col justify-center shadow-3xs">
                    <span className="text-[8px] font-mono text-gray-400 uppercase font-bold">Team</span>
                    <span className="text-[11px] font-black text-gray-800">95%</span>
                  </div>
                  <div className="border border-black/5 bg-white/85 p-2 rounded-lg flex flex-col justify-center shadow-3xs">
                    <span className="text-[8px] font-mono text-gray-400 uppercase font-bold">Tech</span>
                    <span className="text-[11px] font-black text-emerald-600">A++</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-black/5 pt-4 flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-400">JUDGE COHORT SUMMARY</span>
              <span className="text-[9px] font-mono text-emerald-600 font-bold cursor-default">READ FULL REPORT</span>
            </div>
          </div>
        );

      case "affordcalc":
        return (
          <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 min-h-[380px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-amber-600 uppercase font-black bg-amber-100/50 px-2 py-0.5 rounded">
                  PORTFOLIO AFFORDABILITY
                </span>
              </div>

              <div className="space-y-4">
                <div className="border border-black/5 bg-white/85 p-4 rounded-xl shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-gray-400 uppercase">MONTHLY INVESTMENT SLICE</p>
                    <p className="text-lg font-black text-gray-900 tracking-tight">$1,240.00</p>
                  </div>
                  <span className="text-[9px] font-mono text-amber-650 bg-amber-100 px-2 py-1 rounded font-bold uppercase">
                    Balanced
                  </span>
                </div>

                <div className="border border-black/5 bg-white/70 p-3 rounded-lg space-y-1 shadow-3xs">
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>Target Runway Ratio</span>
                    <span className="font-bold text-gray-700">3.6x Net</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>Absolute Risk Indicator</span>
                    <span className="font-bold text-emerald-650 text-emerald-600">Low Risk</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-black/5 pt-4 flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-400">SECURE CALCULATION READY</span>
              <span className="text-[9px] font-mono text-amber-600 bg-amber-100/60 px-2 py-0.5 rounded font-black uppercase">GOLD</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 bg-brand-offwhite" id="projects">
      {/* Dynamic Background Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Masterpieces</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mt-2">
            Luxury Project Showcase
          </h2>
          <p className="text-sm text-gray-500 mt-3 max-w-xl">
            Clean, high-performance web applications built from scratch with modern architecture, premium interfaces, and fully responsive layouts.
          </p>
        </div>

        {/* Alternating Projects Grid */}
        <div className="space-y-24 md:space-y-36">
          {PROJECTS_DATA.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Visual Section: High-fidelity Vector UI Mockup Poster (Occupies 6 cols) */}
                <div
                  className={`lg:col-span-6 w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-105px" }}
                    transition={{ duration: 0.8 }}
                    className="group relative bg-white/40 backdrop-blur-xl border border-white p-5 rounded-2xl shadow-xl shadow-black/5 hover:-translate-y-1 transition-all duration-350"
                  >
                    {/* Glow outline on hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all pointer-events-none" />

                    {/* App Window Mockup */}
                    <div className="relative rounded-[15px] bg-white overflow-hidden border border-black/5 shadow-md flex flex-col justify-between min-h-[380px]">
                      {getStaticMockup(project.id)}
                    </div>
                  </motion.div>
                </div>

                {/* Text Section (Occupies 6 cols) */}
                <div
                  className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    {/* Category Label */}
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                      <span>PROJECT 0{idx + 1}</span>
                      <span className="w-3 h-px bg-blue-200" />
                      <span className="text-gray-450">Exclusive Live Case</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 uppercase">
                      {project.title}
                    </h3>

                    {/* Subtext description boxes */}
                    <div className="space-y-3.5 pt-2">
                      <p className="text-base text-gray-800 leading-relaxed font-sans font-normal">
                        {project.description1}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium">
                        {project.description2}
                      </p>
                    </div>

                    {/* Tech details badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-wider font-bold h-7 inline-flex items-center text-gray-600 bg-white border border-black/5 px-3 rounded-full shadow-3xs cursor-default hover:bg-black/5 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons CTA */}
                    <div className="flex items-center gap-4 pt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-11 px-5 rounded-full bg-black hover:bg-gray-900 text-white font-mono font-bold text-[11px] uppercase tracking-widest border border-transparent shadow-sm flex items-center gap-2 transition-all hover:scale-105 group"
                      >
                        Live Demo <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
