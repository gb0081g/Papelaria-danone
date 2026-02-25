const db = require("../config/db");

async function findByEmail(email) {
  const [rows] = await db.query("SELECT * FROM ususario WHERE email = ?", [email]);
  return rows[0];
}

async function createUser(nome_usuario, email, senha_hash) {
  const [result] = await db.query(
    "INSERT INTO usuario (nome_usuario, email, senha_hash) VALUES (?, ?, ?)",
    [nome_usuario, email, senha_hash]
  );
  return result.insertId;
}

async function findById(id) {
  const [rows] = await db.query("SELECT id, nome_usuario, email FROM usuario WHERE id = ?", [id]);
  return rows[0];
}

module.exports = { findByEmail, createUser, findById };