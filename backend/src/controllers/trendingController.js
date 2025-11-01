import pool from "../config/db.js";

export const getTrendingContent = async (req, res) => {
  try {
    const query = `
      WITH latest_games AS (
          SELECT id, title, image_url, badges, link, admin_id, created_at
          FROM games
          ORDER BY created_at DESC
          LIMIT 3
      ),
      latest_films AS (
          SELECT id, title, genre, rating, poster_url, telegram_link, admin_id, created_at
          FROM films
          ORDER BY created_at DESC
          LIMIT 3
      ),
      latest_posts AS (
          SELECT id, title, content, image_url, category, admin_id, created_at
          FROM (
              SELECT *, ROW_NUMBER() OVER (PARTITION BY category ORDER BY created_at DESC) AS rn
              FROM posts
              WHERE category IN ('sport', 'forex', 'crypto', 'news')
          ) sub
          WHERE rn <= 3
      )
      SELECT json_build_object(
          'games', (
              SELECT COALESCE(
                  json_agg(
                      json_build_object(
                          'id', g.id,
                          'title', g.title,
                          'image_url', g.image_url,
                          'badges', g.badges,
                          'link', g.link,
                          'created_at', g.created_at,
                          'admin', a.name
                      )
                      ORDER BY g.created_at DESC
                  ), '[]'::json
              )
              FROM latest_games g
              JOIN admins a ON g.admin_id = a.id
          ),
          'films', (
              SELECT COALESCE(
                  json_agg(
                      json_build_object(
                          'id', f.id,
                          'title', f.title,
                          'genre', f.genre,
                          'rating', f.rating,
                          'poster_url', f.poster_url,
                          'telegram_link', f.telegram_link,
                          'created_at', f.created_at,
                          'admin', a.name
                      )
                      ORDER BY f.created_at DESC
                  ), '[]'::json
              )
              FROM latest_films f
              JOIN admins a ON f.admin_id = a.id
          ),
          'posts', (
              SELECT COALESCE(
                  json_agg(
                      json_build_object(
                          'id', p.id,
                          'title', p.title,
                          'content', p.content,
                          'category', p.category,
                          'image_url', p.image_url,
                          'created_at', p.created_at,
                          'admin', a.name
                      )
                      ORDER BY p.created_at DESC
                  ), '[]'::json
              )
              FROM latest_posts p
              JOIN admins a ON p.admin_id = a.id
          )
      ) AS result;
    `;

    const { rows } = await pool.query(query);
    const trendingData = rows[0]?.result || {};

    res.status(200).json(trendingData);
  } catch (error) {
    console.error("Error fetching trending content:", error.message);
    res.status(500).json({ error: "Failed to fetch trending content" });
  }
};
