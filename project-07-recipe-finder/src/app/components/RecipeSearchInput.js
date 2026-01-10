import { useState } from "react";

export default function RecipeSearchInput() {
  const [filters, setFilters] = useState({
    query: "",
    diet: "",
    cuisine: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(filters);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <label htmlFor="query"></label>
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
      </div>

      <div className="form__wrapper-filters">
        <label htmlFor="diet"></label>
        <select
          id="diet"
          name="diet"
          value={filters.diet}
          onChange={handleChange}
        >
          <option value="">diets</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
        </select>

        <label htmlFor="cuisine"></label>
        <select
          id="cuisine"
          name="cuisine"
          value={filters.cuisine}
          onChange={handleChange}
        >
          <option value="">cuisines</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="indian">Indian</option>
          <option value="thai">Thai</option>
        </select>
      </div>
    </form>
  );
}
