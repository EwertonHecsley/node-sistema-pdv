const knex = require('../../configuracoes/conexao_bancoDados');

const intermediarioDeletarProdutoId = async (req, res, next) => {
    const { id } = req.params;

    try {
        const buscaProduto = await knex('produtos').where({ id }).first();

        if (!buscaProduto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        };

        const consultaPedido = await knex('pedido_produtos').where({ produto_id: id }).first();

        if (consultaPedido) {
            return res.status(400).json({ mensagem: 'Produto com venda, não pode ser excluído' });
        };

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    intermediarioDeletarProdutoId
}