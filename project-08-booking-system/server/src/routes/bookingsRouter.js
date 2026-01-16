// server/src/routes/bookingsRouter.js
import express from "express";
import bookingsController from "../controllers/bookingsController.js";

const router = express.Router();

// Route voor alle bookings ophalen
router.get("/", bookingsController.getAllBookings);

// Route voor nieuwe booking toevoegen
router.post("/", bookingsController.createBooking);

// Route DELETE /bookings/:id
router.delete("/:id", bookingsController.deleteBooking);

export default router;
