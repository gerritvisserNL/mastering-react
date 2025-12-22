"use client";
import { useState } from "react";
import data from "../data/data.json";
import QuestionCard from "./components/QuestionCard";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const score = answers.filter(
    (answer, index) => answer === data[index].correct
  ).length;

  return (
    <>
      <h1>Quiz-app</h1>

      {currentQuestion < data.length ? (
        <QuestionCard
          question={data[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>
          <h2>Quiz done!</h2>
          <p>
            Your score: {score} / {data.length}
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </>
  );
}
