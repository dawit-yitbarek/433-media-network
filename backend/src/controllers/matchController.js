import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function getMatches(req, res) {
  const selectedDate = req.query.selectedDate;
  const today = new Date().toISOString().split("T")[0];
  const nextDay = new Date(new Date(selectedDate).setDate(new Date(selectedDate).getDate() + 1))
    .toISOString()
    .split("T")[0];

  try {
    let url = "https://api.football-data.org/v4/matches?competitions=PL,FL1,SA,PD,BL1,CL";

    // Add date filters only if it's not today
    if (selectedDate !== today) {
      url += `&dateFrom=${selectedDate}&dateTo=${nextDay}`;
    }

    const { data } = await axios.get(url, {
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_API_KEY,
      },
    });

    res.status(200).json({
      status: "success",
      matches: data.matches,
    });
  } catch (error) {
    console.error(
      "Football API Error:",
      error.response?.status,
      error.response?.data || error.message
    );

    if (error.response?.status === 400) {
      return res.status(400).json({
        success: false,
        message: "Invalid request — check query params or competition codes.",
      });
    }

    res.status(500).json({ success: false, message: "Internal server error" });
  }
};