const knex = require('../../configuracoes/conexao_bancoDados');

const detalharClienteId = async (req, res) => {
    const { id } = req.params;

    try {
        const cliente = await knex('clientes').where({ id }).first();

        return res.status(200).json(cliente);

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    detalharClienteId
}