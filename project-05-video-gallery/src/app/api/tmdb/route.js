// app/api/tmdb/route.js

export async function GET() {
  try {
    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "TMDb API key ontbreekt" }), {
        status: 500,
      });
    }

    // Populaire films ophalen
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`TMDb API fout: ${response.status}`);
    }

    const data = await response.json();

    // Alleen de resultaten teruggeven
    return new Response(JSON.stringify(data.results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Er ging iets mis bij het ophalen van de films",
      }),
      { status: 500 }
    );
  }
}
