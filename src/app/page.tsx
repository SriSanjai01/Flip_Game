"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Stats } from "../components/Stats";
import { Board } from "../components/Board";
import { WinModal } from "../components/WinModal";
import { useGameState } from "../hooks/useGameState";

export default function Home() {
  const { cards, moves, timeElapsed, hasWon, resetGame, flipCard } = useGameState(18);

  // Count how many pairs have been solved
  const solvedPairs = cards.filter((c) => c.isSolved).length / 2;

  return (
    <main className="relative min-h-screen flex flex-col justify-start items-center pb-12 overflow-hidden">
      {/* Premium Floating Ambient Light Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[40vw] h-[40vw] rounded-full bg-pink-300/30 blur-[100px] pointer-events-none animate-float-1" />
      <div className="absolute bottom-1/4 right-[-10%] w-[45vw] h-[45vw] rounded-full bg-indigo-300/30 blur-[110px] pointer-events-none animate-float-2" />
      <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-amber-200/20 blur-[90px] pointer-events-none animate-float-3" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Navigation / Header */}
        <Navbar onRestart={resetGame} />

        {/* Stats Panel */}
        <Stats
          moves={moves}
          timeElapsed={timeElapsed}
          solvedPairs={solvedPairs}
          totalPairs={18}
        />

        {/* 6x6 Card Grid Board */}
        <Board cards={cards} onCardClick={flipCard} />
      </div>

      {/* Popups & Overlays */}
      <WinModal
        isOpen={hasWon}
        moves={moves}
        timeElapsed={timeElapsed}
        onRestart={resetGame}
      />
    </main>
  );
}
