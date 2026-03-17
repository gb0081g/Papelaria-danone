const db = require("../config/db");

async function list(id) {
  const [rows] = await db.query(
    "SELECT * FROM produtos WHERE id = ?", 
    [id]
  );
  return rows;
}

async function create(nome, descricao, categoria, imagemUrl, estoque, preco) {
  const [rows] = await db.query(
    "INSERT INTO produtos (nome, descricao, categoria, imagemUrl, estoque, preco) = ?, ?, ?, ?, ?, ?",
    [nome, descricao || null, categoria || null, imagemUrl || null, estoque, preco]
  )
}

module.exports = {list, create}