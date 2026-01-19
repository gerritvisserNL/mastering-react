const API_URL = "http://localhost:4000";

export async function getBookings() {
  const res = await fetch(`${API_URL}/bookings`);
  return res.json();
}

export async function createBooking(booking) {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });
  return res.json();
}
