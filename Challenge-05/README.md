# React Controlled Input App

This is a simple React application created using Vite to practice **controlled inputs, state management, and dynamic rendering** in React.

## Challenge Overview

The goal of this challenge was to create a controlled input field where the value is managed by React state. The input should display a live preview of what the user types, helping to practice **useState, onChange handling, and controlled form elements** in React.

## How I Solved the Challenge

1. **Setting up the project**

   - Created a new React project using Vite.
   - Added a main `App.jsx` component and a basic `App.css` file for styling.

2. **Creating the state**

   - Used `useState` to track the current input value:

     ```js
     const [text, setText] = useState("");
     ```

   - This makes the input a controlled component, ensuring React fully manages its value.

3. **Adding the input field**

   - Added an `<input>` element and linked it to state:

     ```jsx
     <input
       id="text-input"
       type="text"
       placeholder="Start typing!"
       value={text}
       onChange={(event) => setText(event.target.value)}
     />
     ```

   - The `value={text}` ensures the input always reflects the state.
   - The `onChange` handler updates the state whenever the user types.

4. **Displaying live text**

   - Rendered a `<p>` element that updates dynamically as the user types:

     ```jsx
     <p>{text || "Start typing!"}</p>
     ```

   - Shows either the user's input or a default prompt if the input is empty.

5. **Connecting the label**

   - Used `htmlFor` in the label to associate it with the input:

     ```jsx
     <label htmlFor="text-input">Inputfield:</label>
     ```

   - Ensures accessibility and correct behavior when clicking the label.

## Key React Concepts Practiced

- Controlled components with `value` and `onChange`
- Dynamic rendering based on state
- useState for managing form data
- Accessibility using `label` and `htmlFor`
- Conditional display using fallback text

## Possible Improvements

- Add multiple input fields and manage them with a single state object
- Validate input dynamically (e.g., max length, regex pattern)
- Add reset or clear buttons
- Style the input and live text for better UX
- Implement placeholder hints that change dynamically

---

This challenge reinforced my understanding of **controlled inputs, state management, and real-time updates** in React, which are fundamental for building interactive forms and user interfaces.
