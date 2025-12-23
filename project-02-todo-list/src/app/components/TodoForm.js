"use client";
import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("work");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAddTodo(title, category); // sends data up to Home
    setTitle(""); // form reset
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="work">Work</option>
        <option value="private">Private</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
