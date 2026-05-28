import React, { useState } from "react";
import { Copy, Terminal, CheckCircle, Sparkles, Wand2 } from "lucide-react";

const ROLES = [
  { id: "expert", label: "Expert Senior", value: "Act as an world-class staff systems engineer and clean-code purist." },
  { id: "hacker", label: "Startup Hacker", value: "Act as an elite indie hacker focused on high development speed, pragmatic solutions, and instant shipping." },
  { id: "designer", label: "CSS Craftsman", value: "Act as an award-winning UI designer obsessed with impeccable margins, typeface harmony, and microscopic custom animations." }
];

const PRIORITIES = [
  { id: "perf", label: "Top Performance", value: "Optimize for CPU efficiency, zero junk frames, memory hygiene, and lazy hydration." },
  { id: "clean", label: "Clean Layout", value: "Implement beautiful light theme off-whites, clean spacing rhythm, and perfect layout hierarchy." },
  { id: "security", label: "High Security", value: "Secure keys server-side, validate user credentials, sanitise state changes strictly, and secure all endpoints." }
];

const TONES = [
  { id: "bold", label: "Brutally Critical", value: "Provide reviews with absolutely zero sugarcoating. Highlight faults immediately and offer direct, surgical optimizations." },
  { id: "instructive", label: "Master Mentor", value: "Explain the architectural theory simply, explain logic pathways conceptually, and suggest pristine modular patterns." }
];

export default function InteractiveVibely() {
  const [selectedRole, setSelectedRole] = useState("expert");
  const [selectedPriority, setSelectedPriority] = useState("clean");
  const [selectedTone, setSelectedTone] = useState("instructive");
  const [copied, setCopied] = useState(false);

  // Derive final prompt
  const activeRole = ROLES.find(r => r.id === selectedRole)?.value || "";
  const activePriority = PRIORITIES.find(p => p.id === selectedPriority)?.value || "";
  const activeTone = TONES.find(t => t.id === selectedTone)?.value || "";

  const finalPrompt = `[System Instruction]\n${activeRole}\n\n[Core Priorities]\n- Ensure typescript type safety.\n- ${activePriority}\n\n[Communication Vibe]\n${activeTone}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-5 md:p-6 rounded-2xl glass bg-white/70 shadow-lg border border-gray-100 flex flex-col h-full justify-between" id="dynamic-vibely-sandbox">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-purple-600 font-bold uppercase">Simulator Demo</span>
              <h4 className="text-sm font-bold font-display tracking-tight text-gray-900">Vibely Prompt Engine</h4>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
            <span className="text-[9px] font-mono text-gray-500">Live Prompt Optimizer</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-5 leading-relaxed">
          Configure prompt variables to auto-generate perfect, context-rich developer instructions.
        </p>

        {/* Option Selectors */}
        <div className="space-y-3 mb-4">
          {/* Persona selector */}
          <div>
            <label className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono mb-1.5 block">AI Persona Developer Role</label>
            <div className="flex flex-wrap gap-1.5">
              {ROLES.map((r) => (
                <button
                  key={r.id}
                  onClick={() => { setSelectedRole(r.id); }}
                  className={`text-[10px] px-2.5 py-1.5 rounded-lg border transition-all ${
                    selectedRole === r.id
                      ? "bg-purple-600 text-white font-medium border-purple-600 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200/60 hover:border-gray-350"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Priority selector */}
          <div>
            <label className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono mb-1.5 block">Architectural Goal</label>
            <div className="flex flex-wrap gap-1.5">
              {PRIORITIES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { setSelectedPriority(p.id); }}
                  className={`text-[10px] px-2.5 py-1.5 rounded-lg border transition-all ${
                    selectedPriority === p.id
                      ? "bg-purple-600 text-white font-medium border-purple-600 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200/60 hover:border-gray-350"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selector */}
          <div>
            <label className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono mb-1.5 block">AI Reviewer Tone</label>
            <div className="flex flex-wrap gap-1.5">
              {TONES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setSelectedTone(t.id); }}
                  className={`text-[10px] px-2.5 py-1.5 rounded-lg border transition-all ${
                    selectedTone === t.id
                      ? "bg-purple-600 text-white font-medium border-purple-600 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200/60 hover:border-gray-350"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Prompt Container */}
        <div className="relative mt-4 bg-gray-905 bg-gray-900 border border-gray-800 text-purple-300 font-mono p-3 rounded-xl overflow-hidden shadow-inner max-h-[140px] overflow-y-auto">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] text-gray-500 uppercase tracking-widest font-bold">system_blueprint.yaml</span>
            <span className="text-[8px] text-purple-400 font-bold flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Compiler Ready
            </span>
          </div>
          <pre className="text-[10px] text-gray-300 whitespace-pre-wrap leading-relaxed select-all">
            {finalPrompt}
          </pre>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-tight inline-flex items-center gap-1.5 transition-all duration-300 ${
            copied
              ? "bg-green-600 text-white shadow-md shadow-green-100Scale"
              : "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md hover:shadow-purple-100"
          }`}
        >
          {copied ? (
            <>
              Copied prompt! <CheckCircle className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              Copy System Prompt <Copy className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <a
          href="https://vibely-5b1hz8aci-boltastics-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-purple-600 font-bold hover:underline"
        >
          Live Vibely <Wand2 className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}
