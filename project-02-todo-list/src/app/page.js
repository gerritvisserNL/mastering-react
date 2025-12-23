"use client";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function Page() {
  const [todos, setTodos] = useState([]);

  function addTodo(title, category) {
    const newTodo = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function removeTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  }

  return (
    <main>
      <h1>todo</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </main>
  );
}
