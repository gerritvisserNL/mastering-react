import { useState } from "react";

const API_URL = `http://localhost:4000`;

export default function BookingForm({ onBookingCreated }) {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBooking = { name, startDate, endDate };

      const res = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      });

      const data = await res.json();

      if (data.message) {
        alert(data.message);
        return;
      }

      // Callback to parent component to update list
      if (onBookingCreated) onBookingCreated(data);

      // Reset Form
      setName("");
      setStartDate("");
      setEndDate("");
    } catch (err) {
      console.error("Error while adding booking:", err);
      alert("Something went wrong while booking.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="startdate">Startdate:</label>
        <input
          type="date"
          id="startdate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="enddate">Enddate:</label>
        <input
          type="date"
          id="enddate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Book now!</button>
    </form>
  );
}
