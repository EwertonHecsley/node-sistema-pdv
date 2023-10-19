const knex = require('../../configuracoes/conexao_bancoDados');

const listarClientes = async (req, res) => {
    try {
        const clientes = await knex('clientes').orderBy('id');
        return res.status(200).json(clientes);

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    listarClientes
}