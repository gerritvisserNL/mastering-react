# React Filterable List App

This is a simple React application created using Vite to practice managing state and filtering lists dynamically in React.

## Challenge Overview

The goal of this challenge was to create a filterable list of items, where users can filter by category using buttons. This helps to practice **state management, conditional rendering, and dynamic list updates** in React.

## How I Solved the Challenge

1. **Setting up the project**

   - Created a new React project using Vite.
   - Added a main `App.jsx` component and a basic `App.css` file for styling.

2. **Creating the data**

   - Defined a static array of objects representing items:

     ```js
     const items = [
       { id: 1, name: "Apple", category: "fruit" },
       { id: 2, name: "Banana", category: "fruit" },
       { id: 3, name: "Carrot", category: "vegetable" },
       { id: 4, name: "Broccoli", category: "vegetable" },
     ];
     ```

   - Each object contains:
     - `id` as a unique identifier
     - `name` as the item name
     - `category` to filter by

3. **Managing filter state**

   - Used `useState` to track the current filter:

     ```js
     const [filter, setFilter] = useState("all");
     ```

   - `"all"` is the default state showing all items.

4. **Filtering the list**

   - Created a derived array based on the selected filter:

     ```js
     const filteredItems =
       filter === "all"
         ? items
         : items.filter((item) => item.category === filter);
     ```

   - This ensures only the items matching the selected category are displayed.

5. **Rendering the UI**

   - Added buttons to change the filter state:

     ```jsx
     <button onClick={() => setFilter("all")}>All</button>
     <button onClick={() => setFilter("fruit")}>Fruit</button>
     <button onClick={() => setFilter("vegetable")}>Vegetable</button>
     ```

   - Rendered the filtered items in a table:

     ```jsx
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Category</th>
         </tr>
       </thead>
       <tbody>
         {filteredItems.map((item) => (
           <tr key={item.id}>
             <td>{item.name}</td>
             <td>{item.category}</td>
           </tr>
         ))}
       </tbody>
     </table>
     ```

   - Each row uses `item.id` as a key to help React optimize rendering.

## Key React Concepts Practiced

- Using `useState` for dynamic state management
- Filtering arrays based on state
- Conditional rendering of lists
- Providing unique `key` props for list items
- Event handling with `onClick`

## Possible Improvements

- Extract the filter buttons into a separate reusable component
- Fetch data from an external API instead of using static data
- Add search functionality to filter by item name
- Improve styling and layout for better user experience
- Animate table rows on filter change

---

This challenge reinforced my understanding of **state management, dynamic rendering, and list filtering** in React, which are essential for building interactive and responsive user interfaces.
