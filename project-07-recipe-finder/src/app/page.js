"use client";
import { useEffect, useState } from "react";
import CardRecipe from "./components/CardRecipe";
import RecipeSearchInput from "./components/RecipeSearchInput";
import CardRecipeSkeleton from "./components/CardRecipeSkeleton";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch("/api/recipes");
      const data = await res.json();
      setRecipes(data);

      setTimeout(() => setLoading(false), 5000);
    };

    fetchRecipes();
  }, []);

  return (
    <main>
      {loading ? (
        <div className="card__grid card__grid--skeleton">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardRecipeSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <RecipeSearchInput onResults={setRecipes} />
          {!recipes.length && <p>No recipes found</p>}
          <div className="card__grid">
            {recipes.map((recipe, index) => (
              <CardRecipe
                key={recipe.id}
                recipe={recipe}
                priority={index === 0}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
