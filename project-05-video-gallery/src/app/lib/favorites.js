// app/lib/favorites.js
// Alles wat met “data” te maken heeft, gebeurt hier
// Geen UI, alleen regels: lezen, schrijven, toggle, event sturen

const KEY = "favorites";

const read = () => {
  if (typeof window === "undefined") return []; // Als we geen browser hebben, geef een lege lijst terug
  return JSON.parse(localStorage.getItem(KEY)) || []; // Retourneert altijd een array
};

const write = (favorites) => {
  localStorage.setItem(KEY, JSON.stringify(favorites)); // JSON.stringify(favorites) zet de array om in een string.
  window.dispatchEvent(new Event("favorites-updated")); // Na verandering in localStorage, stuur een signaal/event naar alle listeners
};

export const getFavorites = () => read(); // Haal favorieten op

export const isFavorite = (id) => read().some((movie) => movie.id === id); // Controleert of een film favoriet is.

export const toggleFavorite = (movie) => {
  const favorites = read(); // Haalt array op uit localStorage via read().

  const updated = favorites.some((m) => m.id === movie.id) // Checkt of de film al in de array zit.
    ? favorites.filter((m) => m.id !== movie.id) // Maakt nieuwe array zonder de movie.
    : [...favorites, movie]; // Voegt movie toe aan de bestaande array.

  write(updated);
  return updated;
};
