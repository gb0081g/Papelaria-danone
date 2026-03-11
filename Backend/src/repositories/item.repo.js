const db = require("../config/db");

async function list(userId) {
  const [rows] = await db.query(
    "SELECT * FROM danonepapelaria WHERE user_id = ?",
    [userId]
  );
  return rows;
}

async function create(userId, data) {
  const { title, url, notes, tags } = data;
  const [res] = await db.query(
    "INSERT INTO danonepapelaria (user_id, title, url, notes, tags) VALUES (?, ?, ?, ?, ?)",
    [userId, title, url || null, notes || null, tags || null]
  );
  return res.insertId;
}

module.exports = { list, create };