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
      console.log(data);
    };

    fetchRecipes();
  }, []);

  return (
    <main>
      <div className="card__grid">
        {recipes.map((recipe) => (
          <CardRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
