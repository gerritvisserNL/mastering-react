"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCounter] = useState(0);

  return (
    <main>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Count {count}
      </button>
    </main>
  );
}
