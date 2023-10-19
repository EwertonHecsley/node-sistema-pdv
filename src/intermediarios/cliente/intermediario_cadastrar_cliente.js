const knex = require('../../configuracoes/conexao_bancoDados');
const { format } = require('cpf-check');
const buscaCep = require('cep-promise');

const intermediarioCadastrarCliente = async (req, res, next) => {
    const { email, cpf, cep } = req.body;

    try {
        const cpfFormatado = format(cpf);

        const consultaCpf = await knex('clientes').where({ cpf: cpfFormatado }).first();

        if (consultaCpf) {
            return res.status(400).json({ mensagem: 'CPF já cadastrado.' });
        };

        const consultaEmail = await knex('clientes').where({ email }).first();

        if (consultaEmail) {
            return res.status(400).json({ mensgem: 'Email já cadastrado.' });
        };

        const dadosEndereco = await buscaCep(cep);

        const { state, city, neighborhood, street } = dadosEndereco;

        req.endereco = {
            rua: street,
            numero: 'sn',
            bairro: neighborhood,
            cidade: city,
            estado: state
        };

        next();

    } catch (error) {

        if (error.type == 'service_error') {
            return res.status(400).json({ mensagem: 'CEP inválido.' })
        }
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    intermediarioCadastrarCliente
};