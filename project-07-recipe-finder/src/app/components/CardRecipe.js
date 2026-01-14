// app/components/CardRecipe.js
import Image from "next/image";
import useFavorites from "../hooks/useFavorites";

export default function CardRecipe({ recipe, onSelect, priority }) {
  const { favorite, toggle } = useFavorites(recipe.id);

  function convertScore(recipe) {
    const rawScore = recipe?.spoonacularScore;
    if (rawScore == null) return null;

    return Math.round((rawScore / 100) * 5 * 10) / 10;
  }

  const score = convertScore(recipe);

  return (
    <div className="card" onClick={onSelect}>
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
            stroke="red"
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
        <div className="card__meta-data">
          <p className="card__preparation-time">
            🔪{recipe.preparationMinutes ?? "-"}
          </p>
          <p className="card__total-time">⏱️{recipe.readyInMinutes}min</p>

          <div className="card__rating">
            <span>⭐</span>
            {score !== null && <span>{score}</span>}
          </div>
        </div>
        <h3 className="card__heading">{recipe.title}</h3>
      </div>
    </div>
  );
}
