const bcrypt = require("bcryptjs");

async function senha_hash(senha) {
  return bcrypt.hash(senha, 10);
}

async function senha_compare(senha, hash) {
  return bcrypt.compare(senha, hash);
}

module.exports = { senha_hash, senha_compare };