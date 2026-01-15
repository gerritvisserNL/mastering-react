// app/api/recipes/[id]/route.js
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  const recipeId = Number(id);

  const apiKey = process.env.SPOONACULAR_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Spoonacular API key is missing" },
      { status: 500 }
    );
  }

  if (!Number.isInteger(recipeId) || recipeId <= 0) {
    return NextResponse.json({ error: "Invalid recipe id" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apiKey}`,
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error while fetching recipe details" },
        { status: response.status }
      );
    }

    const data = await response.json();

    const steps =
      data.analyzedInstructions?.flatMap((i) => i.steps.map((s) => s.step)) ??
      [];

    const ingredients = data.extendedIngredients?.map((ing) => ({
      id: ing.id,
      name: ing.name,
      amount: ing.amount,
      unit: ing.unit,
      original: ing.original,
    }));

    return NextResponse.json({
      recipe: {
        id: data.id,
        title: data.title,
        image: data.image,
        servings: data.servings,
        readyInMinutes: data.readyInMinutes,
        ingredients,
        steps,
        instructionsHtml: data.instructions || "",
        sourceUrl: data.sourceUrl,
      },
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
