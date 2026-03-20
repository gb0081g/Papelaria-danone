const express = require("express");
const { list, create } = require("../controllers/produtos.controllers");
const { authRequired } = require("../middlewares/auth.middleware");
const router = express.Router()

router.get("/", authRequired, list)
router.post("/", authRequired, create)

module.exports = router