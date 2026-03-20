const db = require("../config/db");

async function list(id) {
  const [rows] = await db.query(
    "SELECT * FROM produtos"
  );
  return rows;
}

async function create(nome, descricao, categoria, imagemUrl, estoque, preco) {
  const [rows] = await db.query(
    "INSERT INTO produtos (nome, descricao, categoria, imagemUrl, estoque, preco) VALUES (?, ?, ?, ?, ?, ?)",
    [nome, descricao || null, categoria || null, imagemUrl || null, estoque, preco]
  );
  return rows;
}

module.exports = { list, create }