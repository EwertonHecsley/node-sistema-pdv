const knex = require('../../configuracoes/conexao_bancoDados');
const bcrypt = require('bcrypt');

const verificaCamposLogin = async (req, res, next) => {
    const { email, senha } = req.body;

    try {
        const buscaUsuario = await knex('usuarios').select('*').where({ email }).first();

        if (!buscaUsuario) {
            return res.status(404).json({ mensagem: 'Usuario nao encontrado' });
        }

        const verificaSenhaHash = await bcrypt.compare(senha, buscaUsuario.senha);

        if (!verificaSenhaHash) {
            return res.status(403).json({ mensagem: 'Senha inválida' });
        };

        req.usuario = buscaUsuario;

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
};

module.exports = {
    verificaCamposLogin
}