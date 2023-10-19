const knex = require('../../configuracoes/conexao_bancoDados');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 8);

        const usuarioCadastrado = await knex('usuarios')
            .insert({ nome, email, senha: senhaCriptografada })
            .returning('*');

        const { senha: _, ...usuario } = usuarioCadastrado[0];

        return res.status(201).json({ mensagem: 'Usuario cadastrado com sucesso.', dados_usuario: usuario });

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    cadastrarUsuario
}