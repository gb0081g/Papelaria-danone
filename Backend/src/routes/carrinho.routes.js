const express = require("express");
const router = express.Router();

const carrinhoController = require("../controllers/carrinho.controller");
const carrinhoMiddleware = require("../middlewares/carrinho.middleware");
const { authRequired } = require("../middlewares/auth.middleware");

router.post("/", carrinhoMiddleware, carrinhoController.addItem);

router.get("/", carrinhoController.getCart);
router.get("/:id", carrinhoController.getCart);

router.put("/:id", carrinhoMiddleware, carrinhoController.updateItem);

router.delete("/:id", authRequired, carrinhoController.deleteItem);

module.exports = router;