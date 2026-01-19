import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone) {
      alert("All fields are required!");
      return;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container">
      <div className="inner-container">
        <header>
          <h1>Adress book</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First name:</label>
            <input
              id="firstame"
              value={firstName}
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <label htmlFor="lastname">Last name:</label>
            <input
              id="lastname"
              value={lastName}
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="joe@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              placeholder="+31 6 12345678"
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit">Add Contact</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
