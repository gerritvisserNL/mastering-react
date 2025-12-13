# React Toggle App

This is a simple React application created using Vite to practice managing state and conditional rendering by building a toggle that changes the color of a text.

## Challenge Overview

The goal of this challenge was to create a toggle button that switches between "On" and "Off" and changes the color of a paragraph of text when the toggle is "On".

## How I Solved the Challenge

1. **Setting up the project**

   - Created a new React project using Vite.
   - Added a main `App.jsx` component and a basic `App.css` file for styling.

2. **Managing state**

   - Used the `useReducer` hook to manage the toggle state.

     `const [state, toggle] = useReducer((state) => !state, true);`

     - `state` is a boolean that represents whether the toggle is "On" (`true`) or "Off" (`false`).
     - `toggle` is a function that switches the state between `true` and `false`.

3. **Creating the toggle button**

   - Added a `<button>` element and attached an `onClick` event to it:

     `<button onClick={toggle}>{state ? "On" : "Off"}</button>`

     - The button text updates dynamically depending on the current state.

4. **Changing text color based on state**

   - Added a `<p>` element with a `className` that changes depending on the toggle state:

     `<p className={state ? "text red" : "text"}>`
     The toggle switches the color of the text
     `</p>`

   - In `App.css` I defined:

     .text {
     font-size: limegreen;
     }

     .red {
     color: red;
     }

     - When the toggle is "On", the paragraph receives both `text` and `red` classes, making it red.
     - When the toggle is "Off", only the `text` class is applied, keeping the default color.

5. **Key React concepts practiced**
   - Using `useReducer` for simple boolean state.
   - Conditional rendering and dynamic class assignment with `className`.
   - Event handling with `onClick`.
   - Understanding that in React, `className` is used instead of `class`.

## Possible Improvements

- Use inline styling for dynamic colors instead of CSS classes.
- Split the toggle button into a reusable component for multiple uses.
- Add animations for smoother color transitions.
- Enhance styling and layout with more CSS effects.

---

This challenge helped me better understand **state management, conditional rendering, and dynamic styling** in React, forming a foundation for building more interactive UI components in future projects.
