"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch("/api/nasa");
        const data = await res.json();
        setImage(data); // image is an object
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchImage();
  }, []);

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

  if (!image || image.media_type !== "image") {
    return (
      <main>
        <p>No image available</p>
      </main>
    );
  }

  // set preview of text
  const previewLength = 150;
  const isLong = image.explanation.length > previewLength;
  const preview = image.explanation.slice(0, previewLength) + "...";

  return (
    <main>
      <div className="hero">
        <Image
          className="hero__image"
          src={image.url}
          alt={image.title}
          width={750}
          height={500}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <h3 className="hero__heading">{image.title}</h3>
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
          <button
            className="hero__toggle"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less ▲" : "Read more ▼"}
          </button>
        )}
      </div>
      <div className="grid"></div>
    </main>
  );
}
