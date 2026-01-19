export default function BookingList({ bookings }) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  if (!bookings || bookings.length === 0) {
    return (
      <div className="booking-list">
        <p>No bookings yet</p>
      </div>
    );
  }

  return (
    <ul className="booking-list">
      {bookings.map((b) => (
        <li key={b.id}>
          <span>{b.name}</span> {formatDate(b.startDate)} <span>—</span>
          {formatDate(b.endDate)}
        </li>
      ))}
    </ul>
  );
}
