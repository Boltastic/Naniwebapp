/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-offwhite text-brand-charcoal selection:bg-blue-600/10 selection:text-blue-600">
      
      {/* Absolute Noise Layer overlay */}
      <div className="noise-bg" />

      {/* Modern Cursor Tracking Follow Glow */}
      <CursorGlow />

      {/* Floating Headers */}
      <Navbar />

      {/* Master Section Stack */}
      <main className="relative">
        {/* Cinematic Welcome Header */}
        <Hero />

        {/* Dynamic Achievements Meters */}
        <Stats />

        {/* Masterworks Showroom + Sandbox Simulation */}
        <Projects />

        {/* Profile Biography + Skills Matrix */}
        <About />

        {/* CTA Launch Board */}
        <Contact />
      </main>

      {/* Copyright, standard badges + Quick Returns */}
      <Footer />
    </div>
  );
}
