import Image from "next/image";

export default async function Home() {
  // Populaire films ophalen via eigen API route
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/tmdb/`);
  const movies = await res.json();

  // console.log(movies);

  const formatReleaseDate = (dateString) => {
    if (!dateString) return "Unknown release date";

    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const day = String(date.getDate()).padStart(2, "0");

    return `${year} ${month} ${day}`;
  };

  return (
    <main className="main">
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
              className="movie__poster"
            />
            <h2 className="movie__title">{movie.title}</h2>
            <p className="movie__release-date">
              {formatReleaseDate(movie.release_date)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
