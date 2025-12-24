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
        console.log(data);
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
        <p>Loading...</p>
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
      <Image
        src={image.url}
        alt={image.title}
        width={750}
        height={500}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority
      />
      <h2 className="title">{image.title}</h2>
      <p className="date">
        {new Date(image.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="explanation">{expanded ? image.explanation : preview}</p>

      {isLong && (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show less ▲" : "Read more ▼"}
        </button>
      )}
    </main>
  );
}
