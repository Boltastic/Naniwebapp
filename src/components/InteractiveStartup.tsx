import React, { useState } from "react";
import { Award, Zap, AlertTriangle, ShieldCheck, RefreshCw, BarChart4 } from "lucide-react";

interface Idea {
  name: string;
  tagline: string;
  pitch: string;
  metrics: {
    tam: number;
    score: number;
    viability: string;
  };
  feedback: string[];
}

const STARTUPS: Record<string, Idea> = {
  catnap: {
    name: "Catnap Platform",
    tagline: "Uber, but for matching cat owners with on-demand cat-cuddlers.",
    pitch: "An on-demand mobile marketplace connecting busy feline owners with vetted, five-star certified cat cuddlers to soothe lonely kitties during office hours.",
    metrics: { tam: 35, score: 42, viability: "MEME / HIGH STATS CHURN" },
    feedback: [
      "Cat anxiety is real, but the customer acquisition cost (CAC) for cats is higher than standard humans.",
      "Cat-sitter vetting has catastrophic liability issues (scratched couches, escaping felines).",
      "Recommendation: Pivot to standard subscription-based feline stress consulting."
    ]
  },
  scent: {
    name: "AeroWeb",
    tagline: "Sending custom scent-molecules over standard WebSockets.",
    pitch: "A hardware peripheral combined with a TypeScript SDK that generates custom ambient scent bursts directly in the user's workspace based on website events and git commit failures.",
    metrics: { tam: 15, score: 68, viability: "EXTREMELY NICHE / HARDWARE HELL" },
    feedback: [
      "Smelling a broken build is an hilarious motivator but hardware supply chain is notoriously complex.",
      "Vaporization capsule refills could generate premium high-margin MRR.",
      "Recommendation: Focus strictly on corporate software security teams as premium novelty gifts."
    ]
  },
  chef: {
    name: "PromptChef AI",
    tagline: "Restaurant menu that translates itself based on client expression.",
    pitch: "An iPad-based restaurant menu app linked to a camera that rewrites food names and pricing dynamically based on the diner's fatigue levels, posture, and facial expressions.",
    metrics: { tam: 72, score: 85, viability: "SOLID B2B TAM / CONVERSION HEAVY" },
    feedback: [
      "Sleek psychological pricing model that will increase dessert up-sell conversions by up to 34%.",
      "Requires explicit biometric privacy opt-in consent banners in the lobby.",
      "Recommendation: Package as a standard integration for Shopify POS/Clover app marketplace."
    ]
  }
};

export default function InteractiveStartup() {
  const [selectedKey, setSelectedKey] = useState<keyof typeof STARTUPS>("chef");
  const [customPitch, setCustomPitch] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState("");
  const [showResult, setShowResult] = useState(true);

  const activeStartup = STARTUPS[selectedKey];

  const handleAudit = () => {
    setIsAuditing(true);
    setShowResult(false);
    
    // Simulate multi-phase AI analytics
    setAuditProgress("Analyzing target addressable market (TAM)...");
    setTimeout(() => {
      setAuditProgress("Scanning product-market fit constraints...");
      setTimeout(() => {
        setAuditProgress("Synthesizing investor rating index...");
        setTimeout(() => {
          setIsAuditing(false);
          setShowResult(true);
        }, 600);
      }, 700);
    }, 600);
  };

  return (
    <div className="p-5 md:p-6 rounded-2xl glass bg-white/70 shadow-lg border border-gray-100 flex flex-col h-full justify-between animate-fade-in" id="dynamic-startup-review">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold uppercase">Simulator Demo</span>
              <h4 className="text-sm font-bold font-display tracking-tight text-gray-900">Startup AI Reviewer</h4>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded-full">
              Score System v2.1
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          Select an idea to trigger the startup audit engine and study the vector viability comments.
        </p>

        {/* Templates selector */}
        <div className="grid grid-cols-3 gap-1.5 mb-4">
          {Object.keys(STARTUPS).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSelectedKey(key);
                setCustomPitch("");
                setShowResult(true);
              }}
              className={`text-[11px] font-medium p-2 rounded-xl text-center border transition-all ${
                selectedKey === key && !customPitch
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-xs"
                  : "bg-white text-gray-600 border-gray-200/60 hover:bg-gray-50"
              }`}
            >
              <div className="font-bold font-display truncate">
                {STARTUPS[key].name}
              </div>
              <div className="text-[8px] text-gray-400 font-mono mt-0.5 truncate uppercase">
                {key}
              </div>
            </button>
          ))}
        </div>

        {/* Input Option */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Type your own startup elevator pitch..."
            value={customPitch}
            onChange={(e) => {
              setCustomPitch(e.target.value);
              setSelectedKey("");
            }}
            className="w-full text-xs font-sans px-3.5 py-2.5 rounded-xl border border-gray-250 bg-white/50 focus:outline-none focus:border-emerald-600 transition-all font-medium placeholder:text-gray-400"
          />
        </div>

        {/* Big CTA */}
        <button
          onClick={handleAudit}
          disabled={isAuditing}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-85"
        >
          {isAuditing ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> {auditProgress}
            </>
          ) : (
            <>
              Run AI Startup Audit <Zap className="w-3.5 h-3.5 fill-current" />
            </>
          )}
        </button>

        {/* Results Container */}
        {showResult && !isAuditing && (
          <div className="mt-4 p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold text-gray-400 uppercase font-mono block">Reviewing Concept</span>
                <span className="text-xs font-bold text-gray-900 font-display">
                  {customPitch ? "My Custom Concept" : activeStartup.name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-gray-400 uppercase font-mono block">Viability Score</span>
                <span className="text-sm font-extrabold text-emerald-700 font-mono">
                  {customPitch ? 74 : activeStartup.metrics.score}%
                </span>
              </div>
            </div>

            {/* Score Slider */}
            <div className="w-full bg-gray-200/50 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-1000"
                style={{ width: `${customPitch ? 74 : activeStartup.metrics.score}%` }}
              />
            </div>

            {/* Core bullets */}
            <div className="pt-2 border-t border-emerald-100/50 space-y-1.5">
              <span className="text-[9px] font-mono tracking-wider font-bold text-emerald-700 uppercase block">Expert Feedbacks:</span>
              {(customPitch
                ? [
                    "A customized pitch allows for direct niche testing. Ensure market sizing (TAM) matches modern expectations.",
                    "Integrate API gateways server-side (express modules) to proxy and secure key data requests.",
                    "Always define a clear CTA call path directly in the primary hero element to optimize high conversions."
                  ]
                : activeStartup.feedback
              ).map((bullet, b_idx) => (
                <div key={b_idx} className="flex gap-1.5 items-start">
                  <span className="text-emerald-600 mt-1"><ShieldCheck className="w-3 h-3 flex-shrink-0" /></span>
                  <p className="text-[10px] text-gray-600 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-mono">
        <span>TAM Status: {customPitch ? "Calculated" : activeStartup.metrics.viability}</span>
        <a
          href="https://rate-my-startup.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 font-bold uppercase font-mono tracking-widest hover:underline flex items-center gap-1.5"
        >
          Check Site <BarChart4 className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
