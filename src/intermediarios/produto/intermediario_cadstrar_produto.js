const knex = require('../../configuracoes/conexao_bancoDados');

const verificaCategoriaProduto = async (req, res, next) => {
    const { categoria_id } = req.body;

    try {
        const buscaProdutoCategoria = await knex('categorias').select('*').where({ id: categoria_id }).first();

        if (!buscaProdutoCategoria) {
            return res.status(404).json({ mensagem: 'Categoria de produto não encontrado' });
        };

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    verificaCategoriaProduto
}