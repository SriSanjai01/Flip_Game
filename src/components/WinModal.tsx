"use client";

import React, { useEffect, useState } from "react";

interface WinModalProps {
  isOpen: boolean;
  moves: number;
  timeElapsed: number;
  onRestart: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({
  isOpen,
  moves,
  timeElapsed,
  onRestart,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      // Small timeout to allow fade-out transitions if needed
      setShouldRender(false);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  // Format time for summary
  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins === 0) return `${secs} seconds`;
    return `${mins}m ${secs}s`;
  };

  // Determine ranking/grade based on moves (ideal is 18 moves, but 6x6 is hard!)
  const getQuirkyRank = () => {
    if (moves <= 25) {
      return {
        title: "Absolute Sun Hashira ☀️",
        desc: "Insane memory! You definitely have the See-Through World ability. Did you use cheats, or are you actually Yoriichi Tsugikuni?",
      };
    }
    if (moves <= 38) {
      return {
        title: "Qualified Hashira ⚔️",
        desc: "Impressive Breathing Technique! Even Tomioka Giyu might acknowledge you as a friend (though he still won't say it out loud).",
      };
    }
    if (moves <= 55) {
      return {
        title: "Kinoe Rank Slayer 🐗",
        desc: "You survived! Inosuke yells that you are still weak, but Zenitsu is crying and asking how you memorized all that.",
      };
    }
    return {
      title: "Murata-Level recruit 🎋",
      desc: "Ouch. You matched them, but it took a while. You would've been eaten by the Hand Demon in the Final Selection. Practice your breathing!",
    };
  };

  const rank = getQuirkyRank();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-lg animate-fade-in transition-opacity">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl glass-panel border border-white/50 p-6 md:p-8 text-center shadow-2xl flex flex-col items-center">
        {/* Glowing background highlights */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-pink-300/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-indigo-300/30 blur-3xl pointer-events-none" />

        {/* Success Confetti/Header */}
        <div className="relative text-6xl mb-4 animate-bounce">🏆</div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          YOU MATCHED THEM ALL!
        </h2>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">
          The Demon Slayer Corps salutes you!
        </p>

        {/* Stats Table */}
        <div className="grid grid-cols-2 gap-4 w-full mb-6">
          <div className="glass-card rounded-2xl p-4 border border-white/40">
            <span className="block text-2xl font-black text-slate-800 font-mono">
              {moves}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-500">
              Sword Slashes
            </span>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-white/40">
            <span className="block text-2xl font-black text-slate-800 font-mono">
              {formatTime(timeElapsed)}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-500">
              Slaying Time
            </span>
          </div>
        </div>

        {/* Rank display */}
        <div className="w-full bg-white/40 rounded-2xl p-4 border border-white/40 mb-6 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 block mb-1">
            Achieved Rank:
          </span>
          <h3 className="text-lg font-black text-slate-800 mb-2">
            {rank.title}
          </h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
            {rank.desc}
          </p>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="w-full max-w-xs py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 shadow-lg shadow-purple-500/20 active:scale-[0.98] transition-all duration-200 transform text-lg hover:shadow-xl"
        >
          Play Again! ⚔️
        </button>
      </div>
    </div>
  );
};
