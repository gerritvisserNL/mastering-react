// app/page.js
"use client";
import { useEffect, useState } from "react";
import CardRecipeSkeleton from "./components/CardRecipeSkeleton";
import CardRecipe from "./components/CardRecipe";
import CardRecipeModal from "./components/CardRecipeModal";
import RecipeSearchInput from "./components/RecipeSearchInput";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  console.log("Render, selectedRecipeId: ", selectedRecipeId);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch("/api/recipes");
      const data = await res.json();
      setRecipes(data);
      setLoading(false);
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
                onSelect={() => setSelectedRecipeId(recipe.id)}
              />
            ))}
          </div>
        </>
      )}

      {selectedRecipeId && (
        <CardRecipeModal
          recipeId={selectedRecipeId}
          onClose={() => setSelectedRecipeId(null)}
        />
      )}
    </main>
  );
}
