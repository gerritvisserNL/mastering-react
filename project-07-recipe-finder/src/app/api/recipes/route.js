import { NextResponse } from "next/server";

export async function GET(request) {
  const apiKey = process.env.SPOONACULAR_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Spoonacular API key is missing" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query") || "";
  const diet = searchParams.get("diet") || "";
  const cuisine = searchParams.get("cuisine") || "";
  const minStars = searchParams.get("minStars") || "";

  const params = new URLSearchParams({
    apiKey,
    number: "9",
    query,
    diet,
    cuisine,
    addRecipeInformation: "true",
  });

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error while fetching recipes" },
        { status: response.status }
      );
    }

    const data = await response.json();

    let results = data.results;

    if (minStars) {
      const minScore = Number(minStars) * 20;
      results = results.filter(
        (recipe) =>
          recipe.spoonacularScore != null && recipe.spoonacularScore >= minScore
      );
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error("Fetch error: ", error);
    return NextResponse.json({ error: "Intern server error" }, { status: 500 });
  }
}
