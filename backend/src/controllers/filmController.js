import dotenv from "dotenv";
import pool from "../config/db.js"
dotenv.config();

export async function getFilms(req, res) {
    const { limit = 9, offset = 0 } = req.query; // default 9 posts per fetch

    try {
        const films = await pool.query(
            `
      SELECT 
        films.id,
        films.title,
        films.created_at,
        films.genre,
        films.rating,
        films.poster_url,
        films.telegram_link,
        admins.name AS admin
      FROM films
      JOIN admins ON films.admin_id = admins.id
      ORDER BY films.created_at DESC
      LIMIT $1 OFFSET $2;
      `,
            [limit, offset]
        );

        res.status(200).json({ films: films.rows });
    } catch (error) {
        console.error("Error fetching films:", error.message);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}