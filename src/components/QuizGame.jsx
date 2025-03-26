import React, { useState } from "react";

const QuizGame = () => {
  // Lista e pyetjeve me opsionet dhe përgjigjet e sakta
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      question: "Which language is spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "Italian"],
      answer: "Portuguese",
    },
    {
      question: "What is 5 + 7?",
      options: ["10", "12", "14", "15"],
      answer: "12",
    },
  ];

  // State për indeksin e pyetjes aktuale
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State për të ruajtur përgjigjen e zgjedhur
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // State për të shfaqur mesazhin e saktë apo gabim
  const [feedback, setFeedback] = useState("");
  // State për pikët
  const [score, setScore] = useState(0);
  // State për të kontrolluar nëse loja ka mbaruar
  const [gameFinished, setGameFinished] = useState(false);

  // Funksion për zgjedhjen e një përgjigjeje
  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setFeedback("✅ Correct!");
      setScore(score + 1); // Rrit pikët nëse përgjigja është e saktë
    } else {
      setFeedback("❌ Wrong! Try again.");
    }
  };

  // Funksion për të kaluar në pyetjen tjetër
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setFeedback("");
    } else {
      setGameFinished(true);
    }
  };

  // Funksion për të rifilluar lojën
  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFeedback("");
    setScore(0);
    setGameFinished(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Quiz Game</h2>
      {gameFinished ? (
        // Ekrani i përfundimit të lojës
        <div>
          <p className="text-lg font-semibold">🎉 You completed the quiz!</p>
          <p className="text-lg">
            Your Score:{" "}
            <strong>
              {score} / {questions.length}
            </strong>
          </p>
          <button
            onClick={restartGame}
            className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-lg"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        // Pyetjet dhe opsionet
        <>
          <p className="text-lg">{questions[currentQuestion].question}</p>
          <div className="flex flex-col gap-2 mt-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-lg ${
                  selectedAnswer === option
                    ? option === questions[currentQuestion].answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null} // Bllokon opsionet pasi zgjedh një përgjigje
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && <p className="mt-2">{feedback}</p>}
          {selectedAnswer && (
            <button
              onClick={nextQuestion}
              className="mt-3 px-3 py-1 bg-gray-700 text-white rounded-lg"
            >
              Next Question
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default QuizGame;
