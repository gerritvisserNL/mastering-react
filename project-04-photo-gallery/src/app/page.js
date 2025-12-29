"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import PhotoCard from "./components/PhotoCard";

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch("/api/nasa");
        const data = await res.json();

        const imagePhotos = data.filter((item) => item.media_type === "image");

        setPhotos(imagePhotos); // photos is an array
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  useEffect(() => {
    if (!photos.length) return;

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(savedFavorites.some((item) => item.date === photos[0].date));
  }, [photos]);

  if (loading) {
    return (
      <main>
        <div className="loader">
          <div className="loader__moon"></div>
          <div className="loader__orbit-container">
            <div className="loader__satellite"></div>
          </div>
        </div>
        <p className="loader__text">Fetching data from space…</p>
      </main>
    );
  }

  if (!photos.length) {
    return (
      <main>
        <p>No image available</p>
      </main>
    );
  }

  const image = photos[0];

  // set preview of text
  const previewLength = 150;
  const isLong = image.explanation.length > previewLength;
  const preview = image.explanation.slice(0, previewLength) + "...";

  // toggle button to (un)set favorite images.
  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (favorite) {
      // remove
      updatedFavorites = savedFavorites.filter(
        (item) => item.date !== image.date
      );
    } else {
      // add
      updatedFavorites = [...savedFavorites, image];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorite(!favorite);
  };

  return (
    <main>
      <div className="hero">
        <div className="hero__image-wrapper">
          <Image
            className="hero__image"
            src={image.url}
            alt={image.title}
            width={750}
            height={500}
            sizes="100vw"
            priority
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
        <h3 className="hero__title">{image.title}</h3>
        <p className="hero__date">
          {new Date(image.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="hero__explanation">
          {expanded ? image.explanation : preview}
        </p>

        {isLong && (
          <button className="toggle" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
      <div className="grid">
        {photos.slice(1).map((photo) => (
          <PhotoCard key={photo.date} photo={photo} />
        ))}
      </div>
    </main>
  );
}
