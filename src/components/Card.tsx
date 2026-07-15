"use client";

import React from "react";
import { CharacterEmblem, characters } from "./DemonSlayerEmblems";

interface CardProps {
  characterId: number;
  isFlipped: boolean;
  isSolved: boolean;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ characterId, isFlipped, isSolved, onClick }) => {
  const charInfo = characters.find((c) => c.id === characterId);

  if (!charInfo) return null;

  return (
    <div
      onClick={onClick}
      className="w-full aspect-square perspective-1000 cursor-pointer select-none group"
      role="button"
      aria-label={`Memory card: ${isFlipped || isSolved ? charInfo.name : "Face down"}`}
    >
      <div
        className={`relative w-full h-full duration-500 preserve-3d transition-transform ${
          isFlipped || isSolved ? "rotate-y-180" : ""
        } ${isSolved ? "animate-match" : ""}`}
      >
        {/* CARD BACK (Face Down) */}
        <div className="absolute w-full h-full rounded-2xl glass-card border-2 border-white/40 flex flex-col items-center justify-center backface-hidden overflow-hidden bg-slate-900/10 hover:bg-white/50 group-hover:scale-[1.03] transition-all">
          {/* Subtle background circles */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/20 via-transparent to-pink-200/20 pointer-events-none" />
          
          {/* Demon Slayer Calligraphy Logo "滅" (Metsu) */}
          <div className="relative flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-serif font-black bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent opacity-85 select-none tracking-wide drop-shadow-sm">
              滅
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-slate-500/80 mt-1 select-none">
              Corps
            </span>
          </div>
          
          {/* Border Corner Details */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-slate-400/40 rounded-tl" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-slate-400/40 rounded-tr" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-slate-400/40 rounded-bl" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-slate-400/40 rounded-br" />
        </div>

        {/* CARD FRONT (Face Up) */}
        <div
          className={`absolute w-full h-full rounded-2xl backface-hidden rotate-y-180 border-2 flex flex-col items-center justify-between p-2 md:p-3 overflow-hidden shadow-sm transition-shadow ${
            isSolved ? "border-emerald-300 shadow-md" : "border-white/60"
          } bg-gradient-to-br ${charInfo.bgColor}`}
        >
          {/* Japanese Name Indicator */}
          <div className="w-full flex justify-between items-center opacity-70">
            <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-slate-600 truncate max-w-[60%]">
              {charInfo.name.split(" ")[0]}
            </span>
            <span className="text-[8px] md:text-[9px] font-serif text-slate-700 font-bold whitespace-nowrap">
              {charInfo.jpName}
            </span>
          </div>

          {/* Centered Graphic Emblem */}
          <div className="flex-1 flex items-center justify-center w-full max-h-[60%] my-1">
            <CharacterEmblem id={characterId} className="w-12 h-12 md:w-16 md:h-16 drop-shadow-md" />
          </div>

          {/* Character Label */}
          <div className={`w-full text-center py-0.5 md:py-1 rounded-lg ${charInfo.badgeBg} backdrop-blur-sm`}>
            <p className={`text-[9px] md:text-[11px] font-bold ${charInfo.textColor} truncate px-1`}>
              {charInfo.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
