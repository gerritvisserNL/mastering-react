"use client";

export default function QuestionCard({ question, onAnswer }) {
  return (
    <>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <div key={index}>
          <button onClick={() => onAnswer(option)}>{option}</button>
        </div>
      ))}
    </>
  );
}
