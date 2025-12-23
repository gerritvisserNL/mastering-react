import Image from "next/image";

export default function Card(image) {
  return (
    <div className="card">
      <Image
        src={image.url}
        alt={image.title}
        width={750}
        height={500}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority
      />
      <h2>{image.title}</h2>
    </div>
  );
}
