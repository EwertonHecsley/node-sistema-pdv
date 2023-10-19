const listarProdutos = (req, res) => {
    return res.status(200).json(req.produtos)
};

module.exports = {
    listarProdutos
}