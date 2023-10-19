const knex = require('../../configuracoes/conexao_bancoDados');
const { format } = require('cpf-check');

const intermediarioAtualizarCliente = async (req, res, next) => {
    const { email, cpf } = req.body;
    const { id } = req.params

    try {
        const cliente = await knex('clientes').where({ id });

        if (cliente.length === 0) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado' });
        };

        const buscarEmail = await knex('clientes').where({ email }).first();

        if (buscarEmail) {
            return res.status(400).json({ mensagem: 'Email já cadastrado' });
        };

        const cpfFormatado = format(cpf);

        const buscarCpf = await knex('clientes').where({ cpf: cpfFormatado }).first();

        if (buscarCpf) {
            return res.status(400).json({ mensagem: 'CPF já cadastrado' });
        };

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    intermediarioAtualizarCliente
};