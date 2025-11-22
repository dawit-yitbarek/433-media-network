import dotenv from "dotenv";
import pool from "../config/db.js"
dotenv.config();

export async function getGames(req, res) {
    const { limit = 9, offset = 0 } = req.query;
    try {
        const games = await pool.query(
            `
      SELECT 
        games.id,
        games.title,
        games.created_at,
        games.image_url,
        games.badges,
        games.link,
        admins.name AS admin
      FROM games
      JOIN admins ON games.admin_id = admins.id
      ORDER BY games.created_at DESC
      LIMIT $1 OFFSET $2;
      `,
            [limit, offset]
        );

        res.status(200).json({ games: games.rows });
    } catch (error) {
        console.error("Error fetching games:", error.message);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}