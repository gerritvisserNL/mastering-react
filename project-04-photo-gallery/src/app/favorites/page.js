"use client";
import { useState } from "react";
import PhotoCard from "../components/PhotoCard";

export default function Favorites() {
  const [photos] = useState(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  return (
    <main>
      {photos.map((photo) => (
        <PhotoCard key={photo.date} photo={photo} />
      ))}
    </main>
  );
}
