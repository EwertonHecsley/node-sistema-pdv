const knex = require('../../configuracoes/conexao_bancoDados');

const intermediarioDetalharClienteId = async (req, res, next) => {
    const { id } = req.params;

    try {
        const cliente = await knex('clientes').where({ id }).first();

        if (!cliente) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    intermediarioDetalharClienteId
}