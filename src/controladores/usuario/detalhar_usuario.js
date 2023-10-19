const detalharUsuario = (req, res) => {
    const { senha: _, ...usuarioLogado } = req.usuario;
    return res.status(200).json(usuarioLogado);
};

module.exports = { detalharUsuario }