module.exports = (req, res, next) => {
    const { nome, preco, quantidade } = req.body;

    if (!nome) {
        return res.status(400).json({ error: "Nome é obrigatório"});
    }

    if (preco == null || preco <= 0) {
        return res.status(400).json({ error: "Preço inválido"});
    }

    if (quantidade == null || quantidade <= 0) {
        return res.status(400).json({ error: "Quantidade inválida"});
    }

    next();
}