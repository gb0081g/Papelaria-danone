const express = require("express");
const cors = require("cors");
const usuarioRoutes = require("./routes/usuario.routes.js");
const authRoutes = require("./routes/auth.routes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/usuarios", usuarioRoutes);
app.use("/auth", authRoutes);

module.exports = app;