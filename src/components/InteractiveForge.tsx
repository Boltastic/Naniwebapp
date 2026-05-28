import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, GraduationCap, CheckCircle2, ChevronRight, Play, Sparkles } from "lucide-react";

interface Step {
  title: string;
  desc: string;
  skills: string[];
}

const CAREERS: Record<string, { title: string; desc: string; steps: Step[] }> = {
  "ai-engineer": {
    title: "AI Integration Engineer",
    desc: "Specialize in LLMs, prompt systems, and server-side models integration.",
    steps: [
      {
        title: "Model Basics & API Keys",
        desc: "Learn authentication, security, and lazy-loading client connections securely.",
        skills: ["Gemini SDK", ".env.example", "Node API Proxying"]
      },
      {
        title: "Prompt Design & Grounding",
        desc: "Master system instruction styling, few-shot conditioning, and live web grounding constraints.",
        skills: ["System Routing", "JSON Formatting", "Vibely Integrations"]
      },
      {
        title: "Context & Streaming Response",
        desc: "Implement micro-chunk streaming for human-like fluid response outputs.",
        skills: ["Server Sent Events", "Vite Config", "TypeScript Strip"]
      }
    ]
  },
  "frontend-wizard": {
    title: "Cinematic Frontend Architect",
    desc: "Build highly interactive, buttery smooth client experiences.",
    steps: [
      {
        title: "Micro-physics & Layout",
        desc: "Build custom physics variables, tracking dynamic container sizing, and clean visual structures.",
        skills: ["Tailwind CSS v4", "Fluid Grid-bg", "Ref Observer"]
      },
      {
        title: "Motion & Choreography",
        desc: "Create beautiful entering triggers, scroll reveals, and magnetic user interactions.",
        skills: ["Framer Motion", "AnimatePresence", "Custom Spring Physics"]
      },
      {
        title: "Interactive Playgrounds",
        desc: "Build rich inline calculators, state simulators, and responsive dashboards directly inside.",
        skills: ["Local Storage State", "Responsive Densities", "No-re-render Effects"]
      }
    ]
  },
  "startup-founder": {
    title: "Full-Stack Indie Hacker",
    desc: "Ship ideas cleanly, secure validation feedback and scale rapidly.",
    steps: [
      {
        title: "Lean MVPs & Formula-based Tools",
        desc: "Launch simple single-purpose calculators or reviewers to probe direct consumer needs.",
        skills: ["Formulas Math", "Glassmorphic Panels", "Validation Logic"]
      },
      {
        title: "AI Audits & Lead Catchers",
        desc: "Wire automated systems that score startup pitches or documents with realistic intelligence.",
        skills: ["AI Grading Prompts", "Secure Form Submissions", "Affordability Systems"]
      },
      {
        title: "Conversion & Brand Craft",
        desc: "Assemble stunning display cards, minimalist headers, and compelling CTAs that convert.",
        skills: ["High Contrast Theme", "Telegram Linking", "Elegance Copywriting"]
      }
    ]
  }
};

export default function InteractiveForge() {
  const [activeCareer, setActiveCareer] = useState<keyof typeof CAREERS>("ai-engineer");
  const [expandedStep, setExpandedStep] = useState<number>(0);
  const career = CAREERS[activeCareer];

  return (
    <div className="p-5 md:p-6 rounded-2xl glass bg-white/70 shadow-lg border border-gray-100 flex flex-col h-full justify-between" id="dynamic-forge-path">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-blue-600 font-bold uppercase">Simulator Demo</span>
              <h4 className="text-sm font-bold font-display tracking-tight text-gray-900">Pathfinder Sandbox</h4>
            </div>
          </div>
          <div className="flex gap-1.5 p-1 bg-gray-100/80 rounded-lg">
            {Object.keys(CAREERS).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveCareer(key);
                  setExpandedStep(0);
                }}
                className={`text-[10px] uppercase font-mono px-2 py-1 rounded-md transition-all duration-300 ${
                  activeCareer === key
                    ? "bg-white text-blue-600 shadow-xs font-semibold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {key.split("-")[0]}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-5 leading-relaxed">
          {career.desc}
        </p>

        {/* Milestone Path */}
        <div className="space-y-3">
          {career.steps.map((step, idx) => {
            const isExpanded = expandedStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setExpandedStep(idx)}
                className={`p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? "bg-blue-50/50 border border-blue-100/50 shadow-xs"
                    : "bg-gray-50/50 hover:bg-gray-50 border border-transparent"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                    isExpanded ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}>
                    {isExpanded ? (
                      <Sparkles className="w-3 h-3" />
                    ) : (
                      <span className="text-[10px] font-mono">{idx + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-900 font-display block truncate">
                        {step.title}
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isExpanded ? "rotate-90 text-blue-600" : ""}`} />
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[11px] text-gray-500 mt-1.5 leading-relaxed">
                            {step.desc}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2.5">
                            {step.skills.map((skill, s_idx) => (
                              <span key={s_idx} className="text-[9px] bg-white border border-gray-100 text-gray-600 font-mono px-2 py-0.5 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-[10px] text-gray-400 font-mono">
          State: Fully Generated Plan
        </div>
        <a
          href={CAREERS[activeCareer].steps ? "https://path-forge-black.vercel.app/" : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-mono text-blue-600 font-bold hover:underline"
        >
          Try Path Forge <Play className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}
