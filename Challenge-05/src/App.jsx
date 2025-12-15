import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const initialText = "Start typing, please!";

  return (
    <>
      <h1>Controlled Input</h1>
      <form>
        <label htmlFor="text-input">Inputfield:</label>
        <input
          id="text-input"
          type="text"
          placeholder="Typ something here"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </form>
      <p>{text || initialText}</p>
    </>
  );
}

export default App;
