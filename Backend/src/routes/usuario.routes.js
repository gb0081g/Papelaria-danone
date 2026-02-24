const express = require("express");
const { me } = require("../controllers/usuario.controllers");
const { authRequired } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/me", authRequired, me);

module.exports = router;