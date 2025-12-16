# Next.js Client Counter Example

This is a simple Next.js application created to practice **client components with state** in the App Router, focusing on how `"use client"` works.

## Challenge Overview

The goal of this challenge was to understand **client components** in Next.js and create interactive UI elements using React hooks.  
You should create:

- A page with a clickable button
- Use `useState` to track the count
- Add `"use client"` at the top of the file
- See the counter update interactively in the browser

---

## How I Solved the Challenge

1. **Project Setup**

   - Created a new Next.js project using the App Router.
   - Used the `app` directory structure with `page.js` for the counter.

2. **Creating the Counter Page**

   - Added a page `app/counter/page.js`.
   - Marked the component as a client component by adding `"use client"` at the top.
   - Implemented state with `useState` and updated it on button click.

   ```jsx
   "use client";
   import { useState } from "react";

   export default function Page() {
     const [count, setCounter] = useState(0);

     return (
       <main
         style={{
           display: "flex",
           justifyContent: "center",
           marginTop: "2rem",
         }}
       >
         <button onClick={() => setCounter((prev) => prev + 1)}>
           Count {count}
         </button>
       </main>
     );
   }
   ```

## Why "use client" is Needed

By default, Next.js App Router components are **server components**.  
Server components **cannot use** `useState`, `useEffect`, or browser APIs.

`"use client"` tells Next.js that this component runs in the browser and can be interactive.

---

## Key Next.js Concepts Practiced

- Client components using `"use client"`
- React hooks (`useState`) inside Next.js pages
- Interactive UI in the App Router
- Difference between server and client components

---

## Possible Improvements

- Add multiple independent counters on the same page
- Style the counter button with CSS or Tailwind
- Add a reset button to set the counter back to zero
- Use `useEffect` for browser-side effects

---

This challenge helped me **understand when to use client components in Next.js, how to create interactive elements using React state, and why `"use client"` is required**. This is essential for building dynamic, user-interactive pages.
