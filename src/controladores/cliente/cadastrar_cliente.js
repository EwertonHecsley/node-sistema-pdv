const knex = require('../../configuracoes/conexao_bancoDados');
const { format } = require('cpf-check');

const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf, cep } = req.body;

    const { rua, numero, bairro, cidade, estado } = req.endereco;

    try {
        const cpfFormatado = await format(cpf);

        const cliente = await knex('clientes')
            .insert({
                nome,
                email,
                cpf: cpfFormatado,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado
            })
            .returning('*');

        return res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso.', cliente });

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    cadastrarCliente
}