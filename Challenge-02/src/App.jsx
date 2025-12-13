import { useReducer } from "react";
import "./App.css";

function App() {
  const [state, toggle] = useReducer((state) => !state, true);

  return (
    <>
      <h1>Challenge 02: Toggle</h1>
      <button onClick={toggle}>{state ? "On" : "Off"}</button>
      <p className={state ? "text red" : "text"}>
        The toggle switches the color of the text
      </p>
    </>
  );
}

export default App;
