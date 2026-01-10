// app/favorites/page.js
"use client";
import useFavorites from "../hooks/useFavorites";
import CardRecipe from "../components/CardRecipe";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main>
      {!favorites.length && (
        <p className="no-favorites">No favorite recipes yet</p>
      )}
      <div className="card__grid">
        {favorites.map((favorite) => (
          <CardRecipe key={favorite.id} recipe={favorite} />
        ))}
      </div>
    </main>
  );
}
