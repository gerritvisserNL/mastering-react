"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (movie) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>

        <h2>{movie.title}</h2>

        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
        />

        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
