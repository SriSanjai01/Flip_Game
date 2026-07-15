"use client";

import React from "react";

interface StatsProps {
  moves: number;
  timeElapsed: number;
  solvedPairs: number;
  totalPairs: number;
}

export const Stats: React.FC<StatsProps> = ({
  moves,
  timeElapsed,
  solvedPairs,
  totalPairs,
}) => {
  // Format elapsed seconds as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Quirky status lines depending on solved count
  const getQuirkyStatus = () => {
    if (solvedPairs === 0) return "Muzan is waiting... Go on, flip one!";
    if (solvedPairs <= 3) return "Zenitsu is crying in a corner. Move faster!";
    if (solvedPairs <= 7) return "Inosuke is shouting: PIG ASSAULT!";
    if (solvedPairs <= 12) return "Giyu is actually... acknowledging your existence.";
    if (solvedPairs <= 16) return "Flame Hashira Rengoku says: SET YOUR HEART ABLAZE!";
    if (solvedPairs < totalPairs) return "Almost Hashira level! Don't choke now!";
    return "Muzan defeated! You are the ultimate Savior!";
  };

  const completionPercentage = Math.round((solvedPairs / totalPairs) * 100);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-4 select-none">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* TIMER PANEL */}
        <div className="glass-card rounded-2xl p-3 flex items-center space-x-3 border border-white/50">
          <div className="bg-amber-100/80 p-2.5 rounded-xl text-amber-600">
            {/* Clock icon SVG */}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Slaying Time
            </p>
            <p className="text-xl md:text-2xl font-bold font-mono text-slate-800">
              {formatTime(timeElapsed)}
            </p>
          </div>
        </div>

        {/* MOVES PANEL */}
        <div className="glass-card rounded-2xl p-3 flex items-center space-x-3 border border-white/50">
          <div className="bg-indigo-100/80 p-2.5 rounded-xl text-indigo-600">
            {/* Swords icon SVG */}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Sword Slashes
            </p>
            <p className="text-xl md:text-2xl font-bold font-mono text-slate-800">
              {moves} <span className="text-xs font-normal text-slate-500">flips</span>
            </p>
          </div>
        </div>

        {/* PROGRESS & STATUS (Desktop only, takes 3rd column) */}
        <div className="col-span-2 md:col-span-1 glass-card rounded-2xl p-3 flex flex-col justify-between border border-white/50">
          <div className="flex justify-between items-center text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            <span>Breathing Form</span>
            <span className="text-indigo-600 font-mono">{completionPercentage}%</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-white/40 h-2.5 rounded-full overflow-hidden my-1.5 border border-white/20">
            <div
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>

          <p className="text-[10px] md:text-[11px] text-slate-600 font-medium italic truncate">
            {getQuirkyStatus()}
          </p>
        </div>
      </div>

      {/* Mob progress status (only visible when cols-2 forces wrapping) */}
      <div className="md:hidden mt-2 glass-card rounded-xl px-3 py-1.5 border border-white/40 flex items-center justify-between">
        <p className="text-[10px] text-slate-600 font-medium italic truncate">
          {getQuirkyStatus()}
        </p>
        <span className="text-[10px] font-mono font-bold text-indigo-500 whitespace-nowrap ml-2">
          {solvedPairs}/{totalPairs} Pairs
        </span>
      </div>
    </div>
  );
};
