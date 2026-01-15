// app/components/CardRecipeModal.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import DietIcons from "./DietIcons";

export default function CardRecipeModal({ recipeId, onClose }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Lock scroll when Modal is open
  useEffect(() => {
    if (recipeId) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [recipeId]);

  useEffect(() => {
    if (!recipeId) return;

    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError("");
        setRecipe(null);

        const res = await fetch(`/api/recipes/${recipeId}`);
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        setRecipe(data.recipe || data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipeId) return null;

  function convertScore(recipe) {
    const rawScore = recipe?.spoonacularScore;
    if (rawScore == null) return null;

    return Math.round((rawScore / 100) * 5 * 10) / 10;
  }

  const score = recipe ? convertScore(recipe) : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>

        {loading && <p>Recept laden...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && recipe && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
