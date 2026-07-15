"use client";

import React from "react";

interface NavbarProps {
  onRestart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRestart }) => {
  return (
    <header className="w-full max-w-4xl mx-auto px-4 pt-6 pb-2 select-none">
      <div className="glass-panel rounded-3xl p-4 md:p-6 border border-white/60 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        {/* Title branding */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl md:text-3xl">🌸</span>
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-700 via-rose-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              BREATHING STYLE: MEMORY MATCH
            </h1>
          </div>
          <p className="text-xs md:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">
            Match the Demon Slayer cards & Defeat the Demon King Muzan!
          </p>
        </div>

        {/* Action button */}
        <button
          onClick={onRestart}
          className="flex items-center gap-2 py-2.5 px-5 rounded-2xl text-xs md:text-sm font-bold text-slate-700 glass-card border border-white/50 bg-white/20 hover:bg-white/60 hover:text-slate-900 active:scale-[0.97] transition-all"
        >
          {/* Reset arrow SVG */}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89" />
          </svg>
          Concentrate & Reshuffle
        </button>
      </div>
    </header>
  );
};
