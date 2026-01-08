// Verbindt componenten met de data
// Luistert naar events
// Houdt lokale state bij die React kan renderen

"use client";
import { useEffect, useState } from "react";
import { getFavorites, isFavorite, toggleFavorite } from "../lib/favorites";

// custom hook houdt de state van favorieten bij in React
export default function useFavorites(recipeId) {
  const [favorites, setFavorites] = useState([]);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    //werkt state bij op basis van actuele data in localStorage
    const sync = () => {
      const list = getFavorites();
      setFavorites(list);
      if (recipeId) {
        setFavorite(isFavorite(recipeId)); // Checkt of recipeId favoriet is en zet favorite
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
  }, [recipeId]);

  return {
    favorites,
    favorite,
    toggle: (recipe) => toggleFavorite(recipe),
  };
}
