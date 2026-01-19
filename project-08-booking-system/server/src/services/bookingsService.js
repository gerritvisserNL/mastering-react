//server/src/services/bookingsService.js
import crypto from "crypto";

// tijdelijke opslag in geheugen
const bookings = [];

// Hulpfunctie: check overlap
const isOverlapping = (newBooking) => {
  const newStart = new Date(newBooking.startDate);
  const newEnd = new Date(newBooking.endDate);

  return bookings.some((booking) => {
    const start = new Date(booking.startDate);
    const end = new Date(booking.endDate);

    // Overlap als nieuwe start binnen bestaande valt
    // of nieuwe eind binnen bestaande valt
    // of nieuwe volledig omvat bestaande
    return (
      (newStart >= start && newStart <= end) ||
      (newEnd >= start && newEnd <= end) ||
      (newStart <= start && newEnd >= end)
    );
  });
};

const getAllBookings = () => {
  return bookings;
};

const createBooking = (bookingData) => {
  const { startDate, endDate, name } = bookingData;

  // minimale validatie
  if (!startDate || !endDate || !name) {
    throw new Error("Missing required fields");
  }

  const newBooking = {
    id: crypto.randomUUID(),
    startDate,
    endDate,
    name,
  };

  // overlap-check
  if (isOverlapping(newBooking)) {
    throw new Error("Booking overlaps with existing booking");
  }

  bookings.push(newBooking);
  return newBooking;
};

export default {
  getAllBookings,
  createBooking,
};
