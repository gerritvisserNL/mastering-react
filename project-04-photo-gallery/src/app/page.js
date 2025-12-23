"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call naar next.js API
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/nasa?limit=9");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>NASA APOD Gallery</h1>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <h1>NASA APOD Gallery</h1>

      <div></div>
    </main>
  );
}
