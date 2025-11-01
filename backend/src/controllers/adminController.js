import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/db.js"
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, fieldPasswords } = req.body;

    // 1️⃣ Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // 2️⃣ Check if admin already exists
    const existingAdmin = await pool.query("SELECT id FROM admins WHERE email = $1", [email]);
    if (existingAdmin.rows.length > 0) {
      return res.status(400).json({ message: "An admin with this email already exists." });
    }

    // 3️⃣ Verify field access keys
    const fieldKeys = {
      sport: process.env.SPORT_KEY,
      forex: process.env.FOREX_KEY,
      crypto: process.env.CRYPTO_KEY,
      news: process.env.NEWS_KEY,
      film: process.env.FILM_KEY,
      game: process.env.GAME_KEY,
    };

    const grantedFields = [];

    for (const [field, accessPassword] of Object.entries(fieldPasswords || {})) {
      const envKey = fieldKeys[field];
      if (!envKey) continue; // skip unknown fields

      if (accessPassword.trim() !== envKey) {
        return res.status(403).json({
          message: `Invalid access key for the ${field.toUpperCase()} section.`,
        });
      }
      grantedFields.push(field);
    }

    // 4️⃣ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5️⃣ Save admin to DB
    const result = await pool.query(
      `
      INSERT INTO admins (name, email, password, fields)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, email, fields, created_at
      `,
      [name, email, hashedPassword, grantedFields]
    );

    const admin = result.rows[0];

    // 6️⃣ Create JWT
    const token = jwt.sign(
      { id: admin.id, email: admin.email, name: admin.name, fields: admin.fields },
      JWT_SECRET,
      { expiresIn: "30d" }
    );

    // 7️⃣ Send response
    res.status(201).json({
      message: "Admin registered successfully.",
      admin,
      token,
    });
  } catch (error) {
    console.error("Error registering admin:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};


export const signinAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const { rows } = await pool.query("SELECT * FROM admins WHERE email = $1", [email]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Admin with this email not found." });
    }

    const admin = rows[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password. Please try again." });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        fields: admin.fields,
      },
      JWT_SECRET,
      { expiresIn: "5h" }
    );

    // Send response
    res.status(200).json({
      message: "Signin successful!",
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        avatar: admin.avatar,
        fields: admin.fields,
      },
    });
  } catch (error) {
    console.error("Signin error:", error.message);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};