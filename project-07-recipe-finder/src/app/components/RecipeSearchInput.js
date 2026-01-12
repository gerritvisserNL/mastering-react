// app/components/RecipeSearchInput
import { useState } from "react";

export default function RecipeSearchInput({ onResults }) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    query: "",
    diet: "",
    cuisine: "",
    minStars: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const params = new URLSearchParams(
      Object.entries(filters).filter(([, value]) => value !== "")
    );

    try {
      const response = await fetch(`/api/recipes?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();

      onResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <label htmlFor="query" className="visually-hidden">
          Query
        </label>
        <input
          id="query"
          name="query"
          value={filters.query}
          onChange={handleChange}
          placeholder="Search recipe..."
        />

        <button type="submit" className="form__submit-btn">
          Search
        </button>

        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="filters-toggle"
          aria-expanded={showFilters}
        >
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="form__wrapper-filters">
          <label htmlFor="diet" className="visually-hidden">
            Diet
          </label>
          <select
            id="diet"
            name="diet"
            value={filters.diet}
            onChange={handleChange}
          >
            <option value="">All Diets</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten free">Gluten Free</option>
            <option value="ketogenic">Ketogenic</option>
          </select>

          <label htmlFor="cuisine" className="visually-hidden">
            Cuisines
          </label>
          <select
            id="cuisine"
            name="cuisine"
            value={filters.cuisine}
            onChange={handleChange}
          >
            <option value="">All Cuisines</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="indian">Indian</option>
            <option value="thai">Thai</option>
          </select>

          <label htmlFor="minStars" className="visually-hidden">
            Minimum stars
          </label>
          <select
            id="minStars"
            name="minStars"
            value={filters.minStars}
            onChange={handleChange}
          >
            <option value="">Any stars</option>
            <option value="1">1 ★ & up</option>
            <option value="2">2 ★ & up</option>
            <option value="3">3 ★ & up</option>
            <option value="4">4 ★ & up</option>
            <option value="5">5 ★</option>
          </select>
        </div>
      )}
    </form>
  );
}
