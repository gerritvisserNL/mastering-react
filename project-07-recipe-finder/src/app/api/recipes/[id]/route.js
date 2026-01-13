import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const { id } = params;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Spoonacular API key is missing" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`,
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error while fetching recipe details" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      id: data.id,
      title: data.title,
      image: data.image,
      servings: data.servings,
      readyInMinutes: data.readyInMinutes,
      ingredients: data.extendedIngredients,
      steps: data.analyzedInstructions?.[0]?.steps || [],
      instructionsHtml: data.instructions || "",
      sourceUrl: data.sourceUrl,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
