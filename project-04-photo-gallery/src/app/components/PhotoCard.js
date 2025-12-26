"use client";
import Image from "next/image";
import { useState } from "react";

export default function PhotoCard({ photo }) {
  const [expanded, setExpanded] = useState(false);

  if (photo.media_type !== "image") return null;

  return (
    <article className="photoCard">
      <Image
        src={photo.url}
        alt={photo.title}
        width={400}
        height={300}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h4 className="card__title">{photo.title}</h4>
      <p className="card__date">
        {new Date(photo.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {expanded && <p className="card__explanation">{photo.explanation}</p>}

      <button className="card__toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less △" : "Read more ▽"}
      </button>
    </article>
  );
}
