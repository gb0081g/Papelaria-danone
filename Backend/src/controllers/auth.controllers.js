const jwt = require("jsonwebtoken");
const { senha_hash, senha_compare } = require("../utils/senha");
const repo = require("../repositories/usuario.repo");

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const exists = await repo.findByEmail(email);
    if (exists) return res.status(409).json({ message: "E-mail já cadastrado" });

    const hash = await senha_hash(password);
    await repo.createUser(name, email, hash);
    res.status(201).json({ message: "Usuário criado" });
  } catch (e) { next(e); }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await repo.findByEmail(email);
    if (!user) return res.status(401).json({ message: "Credenciais inválidas" });

    const ok = await senha_compare(password, user.senha_hash);
    if (!ok) return res.status(401).json({ message: "Credenciais inválidas" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ accessToken: token });
  } catch (e) { next(e); }
}

module.exports = { register, login };