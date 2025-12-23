export default function TodoList({ todos, removeTodo }) {
  if (!todos || todos.length === 0) return <p className="message">No todos</p>;

  return (
    <ul className="list">
      {todos.map((todo) => (
        <li key={todo.id} className="list__item">
          {todo.title} ({todo.category})
          <button className="removeBtn" onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
