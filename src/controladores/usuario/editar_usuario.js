const knex = require('../../configuracoes/conexao_bancoDados');
const bcrypt = require('bcrypt');

const editarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.usuario;

    try {
        const novaSenhaCriptografada = await bcrypt.hash(senha, 8);

        const usuario = await knex('usuarios')
            .update({ nome, email, senha: novaSenhaCriptografada })
            .where({ id })
            .returning('*');

        const { senha: _, ...usuarioAtualizado } = usuario[0];

        return res.status(200).json({ mensagem: 'Usuário Atualizado', dados_usuario: usuarioAtualizado });

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    editarUsuario
}