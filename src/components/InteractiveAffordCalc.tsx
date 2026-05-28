import React, { useState } from "react";
import { DollarSign, Landmark, HelpCircle, TrendingUp, Sparkles, Check } from "lucide-react";

interface DecisionItem {
  name: string;
  cost: number;
  category: string;
}

const DEFAULT_ITEMS: DecisionItem[] = [
  { name: "Macbook Pro Max Studio", cost: 4200, category: "Hardware" },
  { name: "Premium Workspace Office Setup", cost: 1600, category: "Environment" },
  { name: "Awwwards Nominee Submission", cost: 165, category: "Marketing" },
  { name: "LLM API Compute Credits (Monthly)", cost: 350, category: "Operating cost" }
];

export default function InteractiveAffordCalc() {
  const [selectedItemName, setSelectedItemName] = useState("Macbook Pro Max Studio");
  const [customPrice, setCustomPrice] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState(5500);
  const [existingSavings, setExistingSavings] = useState(15000);

  // Determine active target price
  const activeTemplateItem = DEFAULT_ITEMS.find((i) => i.name === selectedItemName);
  const targetCost = customPrice ? parseFloat(customPrice) || 0 : activeTemplateItem ? activeTemplateItem.cost : 0;

  // Formulas calculation: Buffer scale
  // Buffer Scale = (Existing Savings - Target Cost) / Monthly Income
  const safetyIndex = monthlyIncome > 0 ? (existingSavings - targetCost) / monthlyIncome : 0;

  let verdict = {
    color: "text-emerald-700 bg-emerald-50 border-emerald-100",
    barColor: "bg-emerald-500",
    text: "🟢 Definite Yes! (Secure safety buffer maintained)",
    subtext: "Your liquid cash savings will barely feel this expense. Buy confidently."
  };

  if (safetyIndex <= 0.8) {
    verdict = {
      color: "text-red-700 bg-red-50 border-red-100",
      barColor: "bg-red-500",
      text: "🔴 Hard No. (High threat to emergency cushion)",
      subtext: "This purchase leaves you with less than 1 month of savings. Secure your cashflow first."
    };
  } else if (safetyIndex <= 1.8) {
    verdict = {
      color: "text-orange-700 bg-orange-50 border-orange-100",
      barColor: "bg-orange-500",
      text: "🟠 Tight Borderline (High friction risk)",
      subtext: "You can afford the immediate expense, but it significantly compromises your liquidity buffer."
    };
  } else if (safetyIndex <= 3.2) {
    verdict = {
      color: "text-amber-700 bg-amber-50 border-amber-100",
      barColor: "bg-amber-500",
      text: "🟡 Safe, but review reserves",
      subtext: "A reasonable decision. You maintain a comfortable 2-3 month living budget reserve."
    };
  }

  return (
    <div className="p-5 md:p-6 rounded-2xl glass bg-white/70 shadow-lg border border-gray-100 flex flex-col h-full justify-between" id="dynamic-afford-calc">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-600 font-bold uppercase">Simulator Demo</span>
              <h4 className="text-sm font-bold font-display tracking-tight text-gray-900">Affordability Engine</h4>
            </div>
          </div>
          <span className="text-[9px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Formula v4.0</span>
        </div>

        <p className="text-xs text-gray-500 mb-5 leading-relaxed">
          Input your finance context to check if a big equipment purchase or operational subscription is safe.
        </p>

        {/* Expense Selector */}
        <div className="space-y-4 mb-4">
          <div>
            <label className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono mb-2 block">Item to buy</label>
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              {DEFAULT_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setSelectedItemName(item.name);
                    setCustomPrice("");
                  }}
                  className={`text-[10px] font-medium p-2 text-left rounded-xl border transition-all ${
                    selectedItemName === item.name && !customPrice
                      ? "bg-amber-50 text-amber-800 border-amber-200 shadow-xs"
                      : "bg-white text-gray-600 border-gray-100 hover:border-gray-250"
                  }`}
                >
                  <div className="font-semibold block truncate leading-tight">{item.name}</div>
                  <div className="text-[9px] font-mono text-gray-400 mt-0.5">${item.cost.toLocaleString()}</div>
                </button>
              ))}
            </div>

            {/* Custom inputs */}
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-mono">$</span>
              <input
                type="number"
                placeholder="Or input custom purchase cost..."
                value={customPrice}
                onChange={(e) => {
                  setCustomPrice(e.target.value);
                  setSelectedItemName("");
                }}
                className="w-full text-xs font-sans pl-6 pr-3 py-2.5 rounded-xl border border-gray-250 bg-white/50 focus:outline-none focus:border-amber-600 font-medium placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Context sliders */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono">Monthly Income</span>
                <span className="text-[10px] font-mono text-gray-700 font-bold">${monthlyIncome.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-ew-resize"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono">Total Savings</span>
                <span className="text-[10px] font-mono text-gray-700 font-bold">${existingSavings.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={existingSavings}
                onChange={(e) => setExistingSavings(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-ew-resize"
              />
            </div>
          </div>
        </div>

        {/* Live Calculation Output */}
        <div className={`p-4 rounded-xl border ${verdict.color} transition-all duration-300`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold font-display tracking-tight leading-none block">
              {verdict.text}
            </span>
            <span className="text-[10px] font-mono font-bold">
              Ratio: {safetyIndex.toFixed(1)}x
            </span>
          </div>
          <p className="text-[10px] opacity-90 leading-normal">
            {verdict.subtext}
          </p>

          <div className="mt-3">
            <div className="flex justify-between items-center text-[8px] font-mono opacity-80 mb-0.5">
              <span>Item Cost: ${targetCost.toLocaleString()}</span>
              <span>Available Savings: ${existingSavings.toLocaleString()}</span>
            </div>
            <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
              <div
                className={`h-full ${verdict.barColor}`}
                style={{ width: `${Math.min(100, (targetCost / existingSavings) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[10px] font-mono text-gray-400">Calculation Method: Safe Cushion Index</span>
        <a
          href="https://affordcalc.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-700 font-bold uppercase font-mono tracking-widest text-[10px]"
        >
          Check Calculator
        </a>
      </div>
    </div>
  );
}
