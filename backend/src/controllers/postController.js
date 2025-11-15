import dotenv from "dotenv";
import pool from "../config/db.js"
dotenv.config();

export async function getPosts(req, res) {
  const { category, limit = 9, offset = 0 } = req.query; // default 9 posts per fetch

  try {
    const posts = await pool.query(
      `
      SELECT 
        posts.id,
        posts.title,
        posts.created_at,
        posts.content,
        posts.image_url,
        posts.category,
        admins.name AS admin
      FROM posts
      JOIN admins ON posts.admin_id = admins.id
      WHERE posts.category = $1
      ORDER BY posts.created_at DESC
      LIMIT $2 OFFSET $3;
      `,
      [category, limit, offset]
    );

    res.status(200).json({ posts: posts.rows });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}


export async function getTopHeadines(req, res) {

  try {
    const posts = await pool.query(
      `
      SELECT 
        posts.id,
        posts.title,
        posts.created_at,
        posts.content,
        posts.image_url,
        admins.name AS admin
      FROM posts
      JOIN admins ON posts.admin_id = admins.id
      WHERE posts.category = $1
      ORDER BY posts.created_at DESC
      LIMIT $2;
      `,
      ['news', 4]
    );

    res.status(200).json({ posts: posts.rows });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}


export async function getSpecificPost(req, res) {
  const { id } = req.params;
  try {
    const post = await pool.query(
      `
      SELECT 
        posts.id,
        posts.title,
        posts.category,
        posts.created_at,
        posts.content,
        posts.image_url,
        admins.name AS admin
      FROM posts
      JOIN admins ON posts.admin_id = admins.id
      WHERE posts.id = $1;
      `,
      [id]
    );

    res.status(200).json({ post: post.rows[0] });
  } catch (error) {
    console.error("Error fetching post:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}


export const addGeneralPost = async (req, res) => {
  const { title, content, image_url, admin_id, category } = req.body;

  // Validate required fields
  if (!title || !content || !image_url || !admin_id) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  try {
    const query = `
      INSERT INTO posts (title, content, image_url, admin_id,category, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [title, content, image_url, admin_id, category]);
    res.status(201).json({ success: true, message: "Post created successfully!", post: rows[0] });
  } catch (err) {
    console.error("Error adding post:", err.message);
    res.status(500).json({ success: false, message: "Failed to create post." });
  }
};


// 🎬 Add Film
export const addFilm = async (req, res) => {
  const { title, genre, rating, image_url, link, admin_id } = req.body;

  if (!title || !image_url || !link || !admin_id) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  try {
    // Convert genre to array (if comma-separated)

    const query = `
      INSERT INTO films (title, genre, rating, poster_url, telegram_link, admin_id, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [title, genre, rating, image_url, link, admin_id]);
    res.status(201).json({ success: true, message: "Film added successfully!", film: rows[0] });
  } catch (err) {
    console.error("Error adding film:", err.message);
    res.status(500).json({ success: false, message: "Failed to add film." });
  }
};


//🎮 Add Game
export const addGame = async (req, res) => {
  const { title, badges, image_url, link, admin_id } = req.body;

  if (!title || !image_url || !link || !admin_id) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  try {
    // Convert badges to array if comma-separated

    const query = `
      INSERT INTO games (title, badges, image_url, link, admin_id, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [title, badges, image_url, link, admin_id]);
    res.status(201).json({ success: true, message: "Game added successfully!", game: rows[0] });
  } catch (err) {
    console.error("Error adding game:", err.message);
    res.status(500).json({ success: false, message: "Failed to add game." });
  }
};