const express = require("express");
const {list} = require("../controllers/produtos.controllers");
const { authRequired } = require("../middlewares/auth.middleware");
const router = express.Router()

router.get("/", authRequired, list)

module.exports = router