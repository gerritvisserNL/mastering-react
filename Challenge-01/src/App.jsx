import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCounter] = useState(0);

  return (
    <div class="counter">
      <p>Count: {count}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Subtract</button>
    </div>
  );
}

export default App;
