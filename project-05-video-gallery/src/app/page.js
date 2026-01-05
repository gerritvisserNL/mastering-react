// app/page.js
"use client";
import { useEffect, useState } from "react";
import MovieCard from "./component/MovieCard";

// Populaire films ophalen via eigen API route
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`${baseUrl}/api/tmdb/`);
      const data = await res.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="main">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies..."
      />
      <div className="grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
