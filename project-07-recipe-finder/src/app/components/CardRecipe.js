import Image from "next/image";

export default function CardRecipe({ recipe }) {
  return (
    <div className="card">
      <Image
        src={recipe.image}
        alt={recipe.title}
        className="card__image"
        width={278}
        height={185}
      />
      <div className="card__content">
        <h3 className="card__heading">{recipe.title}</h3>
      </div>
    </div>
  );
}
