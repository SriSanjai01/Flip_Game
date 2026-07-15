"use client";

import React from "react";
import { Card } from "./Card";
import { CardState } from "../hooks/useGameState";

interface BoardProps {
  cards: CardState[];
  onCardClick: (index: number) => void;
}

export const Board: React.FC<BoardProps> = ({ cards, onCardClick }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 md:px-4 py-2">
      <div className="grid grid-cols-6 gap-2 md:gap-3 lg:gap-4 justify-items-center">
        {cards.map((card, index) => (
          <Card
            key={card.uniqueId}
            characterId={card.characterId}
            isFlipped={card.isFlipped}
            isSolved={card.isSolved}
            onClick={() => onCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
