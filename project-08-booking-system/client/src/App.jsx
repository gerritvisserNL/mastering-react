import { useEffect, useState } from "react";
import "./App.css";
import BookingList from "./components/BookingList";
import BookingForm from "./components/BookingForm";

const API_URL = `http://localhost:4000`;

function App() {
  const [bookings, setBookings] = useState([]);

  // fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`${API_URL}/bookings`);
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error(`Error while fetching data:`, err);
      }
    };

    fetchBookings();
  }, []);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1>Booking System</h1>

        <BookingForm onBookingCreated={addBooking} />

        <h2>Current Bookings</h2>

        <BookingList bookings={bookings} />
      </div>
    </div>
  );
}

export default App;
