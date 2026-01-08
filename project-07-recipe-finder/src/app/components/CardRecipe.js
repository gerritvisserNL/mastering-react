import Image from "next/image";
import DietIcons from "./DietIcons";
import { useState } from "react";

export default function CardRecipe({ recipe }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function getShortDescription(recipe, length = 100) {
    const text = recipe.summary.replace(/<\/?[^>]+(>|$)/g, "");
    return text.length > length ? text.slice(0, length) + "…" : text;
  }

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
        <DietIcons recipe={recipe} />
        <h3 className="card__heading">{recipe.title}</h3>
        <p className="card__description">{getShortDescription(recipe)}</p>
        <p className="card__cooking-time">⏱ {recipe.readyInMinutes} min</p>
        <p className="card__servings">🍽 {recipe.servings} servings</p>
        <p className="card__likes">
          <span className="star">★</span> {recipe.aggregateLikes}
        </p>
        <div className="card__button-wrapper">
          <button className="card__button">View Recipe</button>
        </div>
      </div>
    </div>
  );
}
