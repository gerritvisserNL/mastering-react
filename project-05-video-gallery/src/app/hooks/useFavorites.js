// Verbindt componenten met de data
// Luistert naar events
// Houdt lokale state bij die React kan renderen

"use client";
import { useEffect, useState } from "react";
import { getFavorites, isFavorite, toggleFavorite } from "../lib/favorites";

// custom hook houdt de state van favorieten bij in React
export default function useFavorites(movieId) {
  const [favorites, setFavorites] = useState([]);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    //werkt state bij op basis van actuele data in localStorage
    const sync = () => {
      const list = getFavorites();
      setFavorites(list);
      if (movieId) {
        setFavorite(isFavorite(movieId)); // Checkt of movieId favoriet is en zet favorite
      }
    };

    sync();
    window.addEventListener("favorites-updated", sync);
    window.addEventListener("storage", sync);

    // cleanup functie
    return () => {
      window.removeEventListener("favorites-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, [movieId]);

  return {
    favorites,
    favorite,
    toggle: (movie) => toggleFavorite(movie),
  };
}
