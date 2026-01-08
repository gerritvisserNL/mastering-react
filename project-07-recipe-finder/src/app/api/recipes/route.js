import { NextResponse } from "next/server";

export async function GET(request) {
  const apiKey = process.env.SPOONACULAR_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Spoonacular API key is missing" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=12&apiKey=${apiKey}`,
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error while fetching recipes" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data.recipes);
  } catch {
    console.error("Fetch error: ", error);
    return NextResponse.json({ error: "Intern server error" }, { status: 500 });
  }
}
