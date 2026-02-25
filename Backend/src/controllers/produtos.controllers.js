const repo = require("../repositories/produto.repo");

async function list(req, res, next) {
    try {
        const produtos = await repo.list(req.user.id);
        res.json(produtos);
    } catch (e) { next(e); } 
}

module.exports = {list}