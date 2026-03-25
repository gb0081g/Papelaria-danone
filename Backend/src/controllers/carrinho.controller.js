let cart = [];

exports.addItem = (req, res) => {
    const { nome, preco, quantidade } = req.body;

    const newItem = {
        id: Date.now().toString(),
        nome, 
        preco,
        quantidade
    };

    cart.push(newItem);

    res.status(201).json({
        message: "Item adicionado ao carrinho",
        item: newItem,
    });
};

exports.getCart = (req, res) => {
    res.json(cart);
};

exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;

    const item = cart.find((i) => i.id === id);

    if (!item) {
        return res.status(404).json({ error: "Item não encontrado" });
    }

    item.nome = nome;
    item.preco = preco;
    item.quantidade = quantidade;

    res.json({
        message: "Item atualizado",
        item,
    });
};

exports.deleteItem = (req, res) => {
    const { id } = req.params;

    const index = cart.findIndex((i) => i.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Item não encontrado" });
    }

    const removedItem = cart.splice(index, 1);

    res.json({
        message: "Item removido",
        item: removedItem,
    });
};