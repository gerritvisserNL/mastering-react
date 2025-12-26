export async function GET() {
  try {
    const apiKey = process.env.NASA_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "NASA API key ontbreekt" }), {
        status: 500,
      });
    }

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 9);

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate
        .toISOString()
        .slice(0, 10)}&end_date=${endDate.toISOString().slice(0, 10)}`
    );

    if (!response.ok) {
      throw new Error("NASA API fout");
    }

    const data = await response.json();

    const imagesOnly = data
      .filter((item) => item.media_type === "image") // alleen images geen videos
      .reverse(); // nieuwste eerst

    return new Response(JSON.stringify(imagesOnly), {
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
