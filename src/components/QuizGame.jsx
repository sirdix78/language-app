import React, { useState } from "react";

const QuizGame = () => {
  const questions = [
    {
      question: "Ku është varrosur Skënderbeu?",
      options: ["Tiranë", "Lezhë", "Shkodër", "Kukës"],
      answer: "Lezhë",
    },
    {
      question: "Cili është ushqimi tradicional Shqiptar?",
      options: ["Peshku", "Pilaf", "Fasule", "Pasta"],
      answer: "Fasule",
    },
    {
      question: "¿Qué suelen hacer en España después de comer?",
      options: ["Correr", "Comer", "Bailar", "Siesta"],
      answer: "Siesta",
    },
    {
      question: "¿Quién escribió Los Pazos de Ulloa?",
      options: ["Emilia Pardo Bazán", "Góngora", "Julia Navarro", "Quevedo"],
      answer: "Emilia Pardo Bazán",
    },
    {
      question: "Cili poet eshte nominuar disa here per çmimin NOBEL",
      options: [
        "Ismail Kadare",
        "Dritero Agolli",
        "Gjon Buzuku",
        "Gjergj Fishta",
      ],
      answer: "Ismail Kadare",
    },
    {
      question: "¿De dónde es la paella?",
      options: ["Madrid", "Valencia", "Barcelona", "Málaga"],
      answer: "Valencia",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setFeedback("✅ Correct!");
      setScore(score + 1);
    } else {
      setFeedback("❌ Wrong! Try again.");
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setFeedback("");
    } else {
      setGameFinished(true);
    }
  };
  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFeedback("");
    setScore(0);
    setGameFinished(false);
  };

  return (
    <div className="center-all">
      <h2>Quiz Game</h2>
      {gameFinished ? (
        <div>
          <p>🎉 You completed the quiz!</p>
          <p>
            Your Score:{" "}
            <strong>
              {score} / {questions.length}
            </strong>
          </p>
          <button className="puzzle-btn" onClick={restartGame}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <p>{questions[currentQuestion].question}</p>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`px-3 ${
                  selectedAnswer === option
                    ? option === questions[currentQuestion].answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && <p>{feedback}</p>}
          {selectedAnswer && (
            <button className="puzzle-btn" onClick={nextQuestion}>
              Next Question
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default QuizGame;
