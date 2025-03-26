import React, { useState, useEffect } from "react";

const PuzzleGame = () => {
  // Fjalitë e mundshme
  const sentences = [
    "I love learning new languages",
    "React is a powerful library",
    "Practice makes perfect",
    "Coding challenges improve skills",
  ];

  // State për fjalinë origjinale
  const [originalSentence, setOriginalSentence] = useState("");
  // State për versionin e përzier të fjalëve
  const [shuffledWords, setShuffledWords] = useState([]);
  // State për fjalët që përdoruesi ka zgjedhur
  const [selectedWords, setSelectedWords] = useState([]);

  // Funksioni për të nisur lojën dhe për të përzier fjalët
  const initializeGame = () => {
    const sentence = sentences[Math.floor(Math.random() * sentences.length)];
    setOriginalSentence(sentence);
    setShuffledWords(sentence.split(" ").sort(() => Math.random() - 0.5));
    setSelectedWords([]);
  };

  // Përdor useEffect për të nisur lojën kur komponenti ngarkohet
  useEffect(() => {
    initializeGame();
  }, []);

  // Shto fjalën e zgjedhur nga përdoruesi
  const handleWordClick = (word) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
      setShuffledWords(shuffledWords.filter((w) => w !== word)); // Hiq fjalën nga lista e opsioneve
    }
  };

  // Reset për të provuar përsëri
  const resetGame = () => {
    setSelectedWords([]);
    setShuffledWords(
      originalSentence.split(" ").sort(() => Math.random() - 0.5)
    );
  };

  // Kontrollon nëse fjalia është e saktë
  const isCorrect = selectedWords.join(" ") === originalSentence;

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Arrange the Words!</h2>
      <p className="mb-2">Click on the words in the correct order:</p>

      {/* Fjalët e përziera për të zgjedhur */}
      <div className="flex flex-wrap justify-center gap-2">
        {shuffledWords.map((word, index) => (
          <button
            key={index}
            className="px-3 py-1 bg-blue-500 text-white rounded-lg"
            onClick={() => handleWordClick(word)}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Fjalitë e zgjedhura */}
      <div className="mt-4 p-2 bg-gray-100 min-h-[50px] border rounded">
        {selectedWords.join(" ")}
      </div>

      {/* Butonat */}
      <div className="mt-4 flex justify-center gap-2">
        {selectedWords.length > 0 && (
          <button
            onClick={resetGame}
            className="px-3 py-1 bg-red-500 text-white rounded-lg"
          >
            Reset
          </button>
        )}
        <button
          onClick={initializeGame}
          className="px-3 py-1 bg-green-500 text-white rounded-lg"
        >
          New Puzzle
        </button>
      </div>

      {selectedWords.length === originalSentence.split(" ").length &&
        (isCorrect ? (
          <p className="text-green-600 mt-2">Correct! 🎉</p>
        ) : (
          <p className="text-red-600 mt-2">Try again! ❌</p>
        ))}
    </div>
  );
};

export default PuzzleGame;
