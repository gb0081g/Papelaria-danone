const db = require("../config/db");

async function findByEmail(email) {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
}

async function createUser(nome, email, senhaHash) {
  const [result] = await db.query(
    "INSERT INTO users (nome, email, senhaHash) VALUES (?, ?, ?)",
    [nome, email, senhaHash]
  );
  return result.insertId;
}

async function findById(id) {
  const [rows] = await db.query("SELECT id, name, email FROM users WHERE id = ?", [id]);
  return rows[0];
}

module.exports = { findByEmail, createUser, findById };