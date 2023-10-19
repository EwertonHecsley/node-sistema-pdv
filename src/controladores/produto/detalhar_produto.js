const detalharProdutoId = (req, res) => {
    return res.status(200).json(req.produto)
};

module.exports = {
    detalharProdutoId
}