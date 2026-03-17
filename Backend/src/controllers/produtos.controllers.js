const repo = require("../repositories/produto.repo");

async function list(req, res, next) {
    try {
        const produtos = await repo.list(req.user.id);
        res.json(produtos);
    } catch (e) { next(e); } 
}

async function create(req, res, next) {
    try {
        const {nome, descricao, categoria, imagemUrl, estoque, preco} = req.body;
        await repo.create(nome, descricao || null, categoria || null, imagemUrl || null, estoque, preco);
        res.status(201).json({ message: "Produto criado" });
    } catch (e) { next(e); }
}

module.exports = {list, create}