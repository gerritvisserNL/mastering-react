// server/src/services/bookingsService.js
import { PrismaClient } from "../../generated/prisma"; // pad naar jouw gegenereerde Prisma client

const prisma = new PrismaClient();

// Haal alle bookings op
const getAllBookings = async () => {
  return await prisma.booking.findMany({
    orderBy: { startDate: "asc" }, // optioneel: sorteer op datum
  });
};

// Maak een nieuwe booking aan
const createBooking = async ({ name, startDate, endDate }) => {
  if (!name || !startDate || !endDate) {
    throw new Error("Missing required fields");
  }

  // Converteer naar Date objecten
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Overlap check: zoek bestaande bookings die overlappen
  const overlapping = await prisma.booking.findFirst({
    where: {
      OR: [
        {
          startDate: { lte: end },
          endDate: { gte: start },
        },
      ],
    },
  });

  if (overlapping) {
    throw new Error("Booking overlaps with existing booking");
  }

  // Nieuwe booking aanmaken
  const newBooking = await prisma.booking.create({
    data: {
      name,
      startDate: start,
      endDate: end,
    },
  });

  return newBooking;
};

export default {
  getAllBookings,
  createBooking,
};
