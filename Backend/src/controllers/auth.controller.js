const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utils/password");
const repo = require("../repositories/user.repo");

async function register(req, res, next) {
  try {
    const { name, email, senhaHash } = req.body;
    const exists = await repo.findByEmail(email);
    if (exists) return res.status(409).json({ message: "E-mail já cadastrado" });

    const hash = await hashPassword(senhaHash);
    await repo.createUser(name, email, hash);
    res.status(201).json({ message: "Usuário criado" });
  } catch (e) { next(e); }
}

async function login(req, res, next) {
  try {

    const { email, password } = req.body;
    console.log(`Login attempt for email: ${email} - password: ${password}`);
    const user = await repo.findByEmail(email);
    if (!user) return res.status(401).json({ message: "Credenciais inválidas" });
    console.log(`User found: ${user.email}`);

    const ok = await comparePassword(password, user.senhaHash);
    if (!ok) return res.status(401).json({ message: "Credenciais inválidas" });
    console.log(`Password match for user: ${user.email}`);


    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ accessToken: token });
  } catch (e) { console.log(`erro: ${e.message}`);next(e); }
}

module.exports = { register, login };

