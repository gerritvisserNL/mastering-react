import { useState } from "react";
import "./App.css";

const items = [
  { name: "Apple", category: "fruit" },
  { name: "Banana", category: "fruit" },
  { name: "Orange", category: "fruit" },
  { name: "Strawberry", category: "fruit" },
  { name: "Grapes", category: "fruit" },
  { name: "Pineapple", category: "fruit" },
  { name: "Mango", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Broccoli", category: "vegetable" },
  { name: "Spinach", category: "vegetable" },
  { name: "Lettuce", category: "vegetable" },
  { name: "Tomato", category: "vegetable" },
  { name: "Cucumber", category: "vegetable" },
  { name: "Bell Pepper", category: "vegetable" },
];

const itemsObjects = items.map((item, index) => ({
  id: index + 1,
  name: item.name,
  category: item.category,
}));

function App() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? itemsObjects
      : itemsObjects.filter((item) => item.category === filter);

  return (
    <>
      <h1>Filterable List</h1>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("fruit")}>Fruit</button>
      <button onClick={() => setFilter("vegetable")}>Vegetable</button>

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
    </>
  );
}

// Data
// const items = [
//   { id: 1, name: "Apple", category: "fruit" },
//   { id: 2, name: "Banana", category: "fruit" },
//   { id: 3, name: "Orange", category: "fruit" },
//   { id: 4, name: "Strawberry", category: "fruit" },
//   { id: 5, name: "Grapes", category: "fruit" },
//   { id: 6, name: "Pineapple", category: "fruit" },
//   { id: 7, name: "Mango", category: "fruit" },
//   { id: 8, name: "Carrot", category: "vegetable" },
//   { id: 9, name: "Broccoli", category: "vegetable" },
//   { id: 10, name: "Spinach", category: "vegetable" },
//   { id: 11, name: "Lettuce", category: "vegetable" },
//   { id: 12, name: "Tomato", category: "vegetable" },
//   { id: 13, name: "Cucumber", category: "vegetable" },
//   { id: 14, name: "Bell Pepper", category: "vegetable" },
// ];

// function App() {
//   const [filter, setFilter] = useState("all");

//   const filteredItems =
//     filter === "all" ? items : items.filter((item) => item.category === filter);

//   return (
//     <div className="container">
//       <h1>Filterable list</h1>

//       <button onClick={() => setFilter("all")}>All</button>
//       <button onClick={() => setFilter("fruit")}>Fruit</button>
//       <button onClick={() => setFilter("vegetable")}>Vegetable</button>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.category}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default App;
