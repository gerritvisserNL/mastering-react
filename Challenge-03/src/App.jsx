import "./App.css";

const names = [
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Elijah",
  "Sophia",
  "Lucas",
  "Isabella",
  "Mason",
  "Mia",
  "Ethan",
  "Amelia",
  "Logan",
  "Harper",
];

const namesObjects = names.map((name, i) => ({
  id: i,
  name: name,
}));

console.log(namesObjects);

function App() {
  return (
    <div className="container">
      <h1>Render a list</h1>
      <ul className="list">
        {namesObjects.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
