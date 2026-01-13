"use client";
import { useEffect } from "react";
import Image from "next/image";
import DietIcons from "./DietIcons";

export default function CardRecipeModal({ recipe, onClose }) {
  useEffect(() => {
    if (recipe) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [recipe]);

  if (!recipe) return null;

  function convertScore(recipe) {
    const rawScore = recipe?.spoonacularScore;
    if (rawScore == null) return null;

    return Math.round((rawScore / 100) * 5 * 10) / 10;
  }

  const score = convertScore(recipe);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <Image
          className="modal__image"
          src={recipe.image}
          alt={recipe.title}
          width={278}
          height={185}
        />
        <div className="modal__content">
          <div className="modal__meta-data">
            <DietIcons recipe={recipe} />
            <div className="modal__rating">
              <span>⭐</span>
              {score !== null && <span>{score}</span>}
            </div>
          </div>
          <h2 className="modal__heading">{recipe.title}</h2>
        </div>
        <p className="card__preparation-time">
          🔪{recipe.preparationMinutes ?? "-"}
        </p>
        <p className="card__total-time">⏱️{recipe.readyInMinutes}min</p>
        <p>Ingredients: {recipe.ingredients}</p>
      </div>
    </div>
  );
}
