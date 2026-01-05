// app/favorites/page.js

"use client";
import useFavorites from "../hooks/useFavorites";
import MovieCard from "../component/MovieCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="main">
      {!favorites.length && <p className="no-favorites">No favorites yet</p>}

      <div className="grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
