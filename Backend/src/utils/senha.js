const bcrypt = require("bcryptjs");

async function senha_hash(password) {
  return bcrypt.hash(password, 10);
}

async function senha_compare(password, hash) {
  return bcrypt.compare(password, hash);
}

module.exports = { senha_hash, senha_compare };