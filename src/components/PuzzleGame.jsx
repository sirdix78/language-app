import React, { useState, useEffect } from "react";

const PuzzleGame = () => {
  const sentences = [
    "Habitada inicialmente por íberos y celtas",
    "Skënderbeu udhëhoqi per 25 vite",
    "Una mezcla de influencias gitanas",
    "La Costa Brava ofrece paisajes impresionantes",
    "Butrinti është pjesë e UNESCOS",
    "Sabina ha llevado la poesía a la música",
    "Muzika Shqiptare përfshin iso-polifonine",
    "El gazpacho y el salmorejo son sopas frías",
    "Tavë kosi është një pjatë tradicionale",
    "La vida es sueño",
    "Jeta është një ënderr",
    "Un buen plato de churros con chocolate",
  ];

  const [originalSentence, setOriginalSentence] = useState("");
  const [shuffledWords, setShuffledWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);

  const initializeGame = () => {
    const sentence = sentences[Math.floor(Math.random() * sentences.length)];
    setOriginalSentence(sentence);
    setShuffledWords(sentence.split(" ").sort(() => Math.random() - 0.5));
    setSelectedWords([]);
  };
  useEffect(() => {
    initializeGame();
  }, []);
  const handleWordClick = (word) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
      setShuffledWords(shuffledWords.filter((w) => w !== word));
    }
  };

  const resetGame = () => {
    setSelectedWords([]);
    setShuffledWords(
      originalSentence.split(" ").sort(() => Math.random() - 0.5)
    );
  };
  const isCorrect = selectedWords.join(" ") === originalSentence;
  return (
    <div className="center-all">
      <h2>Arrange the Words!</h2>
      <p>Click on the words in the correct order:</p>
      <div>
        {shuffledWords.map((word, index) => (
          <button key={index} onClick={() => handleWordClick(word)}>
            {word}
          </button>
        ))}
      </div>
      <div>{selectedWords.join(" ")}</div>
      <div>
        {selectedWords.length > 0 && (
          <button onClick={resetGame} className="puzzle-btn">
            Reset
          </button>
        )}
        <button onClick={initializeGame} className="puzzle-btn">
          New Puzzle
        </button>
      </div>

      {selectedWords.length === originalSentence.split(" ").length &&
        (isCorrect ? <p>Correct! 🎉</p> : <p>Try again! ❌</p>)}
    </div>
  );
};

export default PuzzleGame;
