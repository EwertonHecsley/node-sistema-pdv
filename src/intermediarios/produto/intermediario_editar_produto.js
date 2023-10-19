const knex = require('../../configuracoes/conexao_bancoDados');

const intermediarioEditarProduto = async (req, res, next) => {
    const { id } = req.params;
    const { categoria_id } = req.body;

    try {
        const produto = await knex('produtos').where({ id }).first();

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        }

        const categoria = await knex('categorias').where({ id: categoria_id }).first();

        if (!categoria) {
            return res.status(404).json({ mensagem: 'Categoria de produto não existe.' })
        }

        next();

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensgem: error.message });
    }

};

module.exports = {
    intermediarioEditarProduto
}