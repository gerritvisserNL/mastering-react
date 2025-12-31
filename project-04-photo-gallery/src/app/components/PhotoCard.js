"use client";
import Image from "next/image";
import { useState } from "react";

export default function PhotoCard({ photo, onRemove }) {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    return savedFavorites.some((item) => item.date === photo.date);
  });

  if (photo.media_type !== "image") return null;

  // toggle button to (un)set favorite images.
  const toggleFavorite = () => {
    // ALS onRemove bestaat (dus we zijn op Favorites page)
    if (favorite && onRemove) {
      onRemove(photo.date);
      setFavorite(false);
      return;
    }

    // ANDERS: normale localStorage logica (Home page)
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (favorite) {
      // remove
      updatedFavorites = savedFavorites.filter(
        (item) => item.date !== photo.date
      );
    } else {
      // add
      updatedFavorites = [...savedFavorites, photo];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorite(!favorite);
  };

  return (
    <article className="photoCard">
      <div className="photoCard__image-wrapper">
        <Image
          src={photo.url}
          alt={photo.title}
          width={400}
          height={300}
          sizes="100vw"
        />
        <button
          className="favorite-button"
          onClick={toggleFavorite}
          aria-label="Toggle favorite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={favorite ? "currentColor" : "none"}
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
      <h4 className="card__title">{photo.title}</h4>
      <p className="card__date">
        {new Date(photo.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {expanded && <p className="card__explanation">{photo.explanation}</p>}

      <button className="toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "Read more"}
      </button>
    </article>
  );
}
