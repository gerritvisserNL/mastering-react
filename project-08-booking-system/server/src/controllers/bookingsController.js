// server/src/controllers/bookingsController.js
import bookingsService from "../services/bookingsService.js";

const getAllBookings = (req, res) => {
  try {
    const bookings = bookingsService.getAllBookings();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createBooking = (req, res) => {
  try {
    const newBooking = bookingsService.createBooking(req.body);
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default { getAllBookings, createBooking };
