"use client";
import { useEffect, useState } from "react";
import CardRecipe from "./components/CardRecipe";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch("/api/recipes");
      const data = await res.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  console.log(recipes[1]);

  return (
    <main>
      <h2 className="main__heading">Recipes</h2>
      <div className="card__grid">
        {recipes.map((recipe) => (
          <CardRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
