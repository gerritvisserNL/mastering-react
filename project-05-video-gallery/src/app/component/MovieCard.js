// app/component/MovieCard.js
// Consumeert de hook
// Render UI gebaseerd op hook state
// Roept toggle aan bij click

"use client";
import Image from "next/image";
import useFavorites from "../hooks/useFavorites";

export default function MovieCard({ movie }) {
  const { favorite, toggle } = useFavorites(movie.id);

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
    <div className="movieCard">
      <div className="movieCard__poster-wrapper">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          className="movie__poster"
        />
        <button
          className={`favorite-button ${favorite ? "active" : ""}`}
          onClick={() => toggle(movie)}
          aria-label="Toggle favorite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            className="heart-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
      <h2 className="movie__title">{movie.title}</h2>
      <p className="movie__release-date">
        {formatReleaseDate(movie.release_date)}
      </p>
    </div>
  );
}
