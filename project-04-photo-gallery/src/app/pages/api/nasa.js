export default async function handler(req, res) {
  try {
    const { year, limit } = req.query; // optioneel: year=2025, limit=9
    const apiKey = process.env.NASA_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "NASA API key ontbreekt" });
    }

    let startDate, endDate;

    if (year) {
      // hele jaar ophalen
      startDate = `${year}-01-01`;
      endDate = `${year}-12-31`;
    } else {
      // default: laatste "limit" dagen
      const today = new Date();
      endDate = today.toISOString().split("T")[0];

      const daysBack = limit ? Number(limit) - 1 : 8; // default 9 foto's
      const startDateObj = new Date(today);
      startDateObj.setDate(today.getDate() - daysBack);
      startDate = startDateObj.toISOString().split("T")[0];
    }

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
    );

    if (!response.ok) {
      throw new Error(`NASA API fout: ${response.status}`);
    }

    const data = await response.json();
    const reversedData = data.reverse(); // nieuwste eerst

    res.status(200).json(reversedData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Er is iets misgegaan bij het ophalen van data." });
  }
}
