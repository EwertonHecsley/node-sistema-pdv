const knex = require('../../configuracoes/conexao_bancoDados');
const { format } = require('cpf-check');

const atualizarCliente = async (req, res) => {
    const { nome, email, cpf } = req.body;
    const { id } = req.params;

    try {
        const cpfFormatado = format(cpf);

        await knex('clientes')
            .update({ nome, email, cpf: cpfFormatado })
            .where({ id })
            .returning('*');

        return res.status(200).json({ mensagem: 'Cliente Atualizado com sucesso.' });

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    atualizarCliente
}


