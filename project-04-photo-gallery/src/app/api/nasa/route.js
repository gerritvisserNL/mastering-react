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
      throw new Error(`NASA API fout: ${response.status}`);
    }

    const rawData = await response.json();

    // Altijd werken met een array
    const dataArray = Array.isArray(rawData) ? rawData : [rawData];

    // Alleen afbeeldingen
    const imagesOnly = dataArray.filter((item) => item.media_type === "image");

    return new Response(JSON.stringify(imagesOnly), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Er ging iets mis bij het ophalen van de data" }),
      { status: 500 }
    );
  }
}
