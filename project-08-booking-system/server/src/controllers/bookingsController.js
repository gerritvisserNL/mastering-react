// server/src/controllers/bookingsController.js
import bookingsService from "../services/bookingsService.js";

// Haal alle bookings op
const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingsService.getAllBookings();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Maak een nieuwe booking aan
const createBooking = async (req, res) => {
  try {
    const newBooking = await bookingsService.createBooking(req.body);
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { getAllBookings, createBooking };
