const db = require("../config/db");

async function list(id) {
  const [rows] = await db.query(
    "SELECT * FROM produtos WHERE id = ?", 
    [id]
  );
  return rows;
}

module.exports = list