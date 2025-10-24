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
