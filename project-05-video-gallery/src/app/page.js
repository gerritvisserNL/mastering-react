// app/page.js
"use client";
import { useEffect, useState } from "react";
import SkeletonMovieCard from "./component/SkeletonMovieCard";
import MovieCard from "./component/MovieCard";
import MovieModal from "./component/MovieModal";

// Populaire films ophalen via eigen API route
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`${baseUrl}/api/tmdb/`);
      const data = await res.json();
      setMovies(data);
      setLoading(false);
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
      {loading ? (
        <div className="grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonMovieCard key={i} />
          ))}
        </div>
      ) : (
        <>
          {search && filteredMovies.length === 0 ? (
            <p className="no-results">No movies found</p>
          ) : (
            <div className="grid">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSelect={setSelectedMovie}
                />
              ))}
            </div>
          )}
        </>
      )}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
      ;
    </main>
  );
}
