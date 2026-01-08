// app/lib/favorites.js
// Alles wat met “data” te maken heeft, gebeurt hier
// Geen React, geen UI, alleen logica

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

export const isFavorite = (id) => read().some((recipe) => recipe.id === id); // Controleert of een recept favoriet is en geeft true of false terug.

export const toggleFavorite = (recipe) => {
  const favorites = read(); // Haalt array op uit localStorage via read().

  const updated = favorites.some((r) => r.id === recipe.id) // Checkt of het recept al in de array zit.
    ? favorites.filter((r) => r.id !== recipe.id) // Maakt nieuwe array zonder het recept.
    : [...favorites, recipe]; // Voegt het recept toe aan de bestaande array.

  write(updated);
  return updated;
};
