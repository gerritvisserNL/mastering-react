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
    res.status(400).json({ error: err.message });
  }
};

const deleteBooking = (req, res) => {
  try {
    const { id } = req.params;
    bookingsService.deleteBooking(id);
    res.status(200).json({ message: "Booking deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export default { getAllBookings, createBooking, deleteBooking };
