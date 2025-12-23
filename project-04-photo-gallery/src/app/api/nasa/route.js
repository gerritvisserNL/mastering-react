export async function GET() {
  try {
    const apiKey = process.env.NASA_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "NASA API key ontbreekt" }), {
        status: 500,
      });
    }

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("NASA API fout");
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Er ging iets mis" }), {
      status: 500,
    });
  }
}
