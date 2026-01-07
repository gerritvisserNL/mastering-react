import Image from "next/image";

export default function CardRecipe({ recipe }) {
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <Image
          src={recipe.image}
          alt={recipe.title}
          className="card__image"
          width={278}
          height={185}
        />
      </div>
      <div className="card__content">
        <h3 className="card__heading">{recipe.title}</h3>
        <p>⏱ {recipe.readyInMinutes} min</p>
        <p>🍽 {recipe.servings} servings</p>
        {recipe.vegetarian && <p>🥬 Vegetarian</p>}
        {recipe.vegan && <p>🌱 Vegan</p>}
        {recipe.glutenFree && <p> Gluten Free </p>}
        {recipe.dairyFree && <p> Lactose Free </p>}
      </div>
    </div>
  );
}
