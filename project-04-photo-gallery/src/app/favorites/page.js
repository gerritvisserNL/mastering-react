"use client";
import { useState } from "react";
import PhotoCard from "../components/PhotoCard";

export default function Favorites() {
  const [photos, setPhotos] = useState(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const removeFavorite = (date) => {
    const updated = photos.filter((item) => item.date !== date);

    setPhotos(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  if (!photos.length) {
    return (
      <main>
        <p>No favorites yet!</p>
      </main>
    );
  }
  return (
    <main>
      {photos.map((photo) => (
        <PhotoCard key={photo.date} photo={photo} onRemove={removeFavorite} />
      ))}
    </main>
  );
}
