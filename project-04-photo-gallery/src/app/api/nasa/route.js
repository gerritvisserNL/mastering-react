export async function GET() {
  try {
    const apiKey = process.env.NASA_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "NASA API key ontbreekt" }), {
        status: 500,
      });
    }

    // Huidige datum
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    // Start van de maand en vandaag
    const startDate = `${year}-${month}-01`;
    const endDate = `${year}-${month}-${day}`;

    // NASA APOD API request
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
    );

    if (!response.ok) {
      throw new Error(`NASA API fout: ${response.status}`);
    }

    const data = await response.json();

    // Alleen afbeeldingen, nieuwste eerst
    const imagesOnly = data
      .filter((item) => item.media_type === "image")
      .reverse();

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
