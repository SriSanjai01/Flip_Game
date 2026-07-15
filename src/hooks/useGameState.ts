"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export interface CardState {
  uniqueId: string;
  characterId: number;
  isFlipped: boolean;
  isSolved: boolean;
}

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: number[]): number[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const useGameState = (pairsCount: number = 18) => {
  const [cards, setCards] = useState<CardState[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  // We use a ref for cards to avoid re-triggering timers/intervals unnecessarily
  const cardsRef = useRef<CardState[]>([]);
  cardsRef.current = cards;

  // Initialize and reshuffle the game board
  const resetGame = useCallback(() => {
    // Generate pairs of character IDs (1 to pairsCount)
    const baseIds = Array.from({ length: pairsCount }, (_, i) => i + 1);
    const duplicatedIds = [...baseIds, ...baseIds];
    const shuffledIds = shuffleArray(duplicatedIds);

    const initialCards: CardState[] = shuffledIds.map((charId, index) => ({
      uniqueId: `${charId}-${index}`,
      characterId: charId,
      isFlipped: false,
      isSolved: false,
    }));

    setCards(initialCards);
    setSelectedIndices([]);
    setMoves(0);
    setTimeElapsed(0);
    setIsTimerActive(false);
    setHasWon(false);
    setIsChecking(false);
  }, [pairsCount]);

  // Run on mount to initialize the board
  useEffect(() => {
    resetGame();
  }, [resetGame]);

  // Timer interval effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isTimerActive && !hasWon) {
      intervalId = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isTimerActive, hasWon]);

  // Handles clicking/flipping a card at a specific index
  const flipCard = useCallback(
    (clickedIndex: number) => {
      const currentCards = cardsRef.current;
      const clickedCard = currentCards[clickedIndex];

      // Edge Cases: Ignore click if card is flipped/solved, we're locking, or game is won
      if (
        isChecking ||
        hasWon ||
        clickedCard.isFlipped ||
        clickedCard.isSolved ||
        selectedIndices.includes(clickedIndex) ||
        selectedIndices.length >= 2
      ) {
        return;
      }

      // Start the timer on the very first card flip
      if (!isTimerActive && moves === 0 && selectedIndices.length === 0) {
        setIsTimerActive(true);
      }

      // Flip the clicked card face up
      setCards((prev) =>
        prev.map((card, idx) => (idx === clickedIndex ? { ...card, isFlipped: true } : card))
      );

      const newSelected = [...selectedIndices, clickedIndex];
      setSelectedIndices(newSelected);

      // If we've selected 2 cards, compare them
      if (newSelected.length === 2) {
        const [firstIdx, secondIdx] = newSelected;
        const firstCard = currentCards[firstIdx];
        const secondCard = clickedCard; // current flipped card

        setMoves((prev) => prev + 1);

        if (firstCard.characterId === secondCard.characterId) {
          // Matched! Mark solved immediately and clear selection
          setCards((prev) =>
            prev.map((card, idx) =>
              idx === firstIdx || idx === secondIdx
                ? { ...card, isFlipped: true, isSolved: true }
                : card
            )
          );
          setSelectedIndices([]);

          // Check if all cards are solved
          const allSolved = currentCards.every((card, idx) => {
            if (idx === firstIdx || idx === secondIdx) return true;
            return card.isSolved;
          });

          if (allSolved) {
            setHasWon(true);
            setIsTimerActive(false);
          }
        } else {
          // Mismatched. Lock input and flip back after a 1000ms delay
          setIsChecking(true);
          setTimeout(() => {
            setCards((prev) =>
              prev.map((card, idx) =>
                idx === firstIdx || idx === secondIdx ? { ...card, isFlipped: false } : card
              )
            );
            setSelectedIndices([]);
            setIsChecking(false);
          }, 1000);
        }
      }
    },
    [selectedIndices, isChecking, hasWon, isTimerActive, moves]
  );

  return {
    cards,
    moves,
    timeElapsed,
    hasWon,
    resetGame,
    flipCard,
  };
};
