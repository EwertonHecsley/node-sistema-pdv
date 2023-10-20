const listarPedidos = (req, res) => {
    return res.status(200).json(req.pedidos)
};

module.exports = {
    listarPedidos
};