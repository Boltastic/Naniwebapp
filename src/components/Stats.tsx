import React from "react";
import { motion } from "motion/react";
import { STATS_DATA } from "../data";
import { Layers, Cpu, Compass, Activity } from "lucide-react";

const ICONS = [Layers, Cpu, Compass, Activity];

export default function Stats() {
  return (
    <section className="relative py-12 bg-brand-offwhite" id="stats">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/40 backdrop-blur-xl border border-white shadow-xl shadow-black/5 transition-all duration-300"
              >
                {/* Visual Accent Hover Border outline */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all pointer-events-none" />

                <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
                  {/* Icon Area */}
                  <div className="p-3 rounded-xl bg-black/5 text-[#1a1a1a] group-hover:bg-blue-600 group-hover:text-white transition-colors duration-350">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 md:mt-4">
                    <div className="text-3xl md:text-5xl font-black tracking-tighter text-[#1a1a1a] group-hover:text-blue-600 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono mt-1.5">
                      {stat.label}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>

                {/* Micro tech accent lines */}
                <div className="hidden md:block absolute bottom-3 right-4 text-[9px] font-mono text-gray-300 group-hover:text-blue-500/30 transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
