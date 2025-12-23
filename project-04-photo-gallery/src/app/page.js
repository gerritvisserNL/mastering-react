"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch("/api/nasa");
        const data = await res.json();
        setImage(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>NASA Photo of the Day</h1>
        <p>Loading...</p>
      </main>
    );
  }

  if (!image || image.media_type !== "image") {
    return (
      <main>
        <h1>NASA Photo of the Day</h1>
        <p>Geen afbeelding beschikbaar</p>
      </main>
    );
  }

  return (
    <main>
      <h1>NASA Photo of the Day</h1>

      <h2>{image.title}</h2>

      <img src={image.url} alt={image.title} width="600" />

      <p>{image.explanation}</p>
    </main>
  );
}
