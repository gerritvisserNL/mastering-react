import Image from "next/image";
import DietIcons from "./DietIcons";
import useFavorites from "../hooks/useFavorites";

export default function CardRecipe({ recipe, priority }) {
  const { favorite, toggle } = useFavorites(recipe.id);

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
          priority={priority}
        />
        <button
          className={`favorite-button ${favorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggle(recipe);
          }}
          aria-label="Toggle favorite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
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
