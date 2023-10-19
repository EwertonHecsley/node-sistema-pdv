const knex = require('../../configuracoes/conexao_bancoDados');

const verificaEmailUsuario = async (req, res, next) => {
    const { email } = req.body;

    try {
        const buscaUsuarioEmail = await knex('usuarios').select('*').where({ email }).first();

        if (buscaUsuarioEmail) {
            return res.status(400).json({ mensagem: 'Email ja cadastrado no banco de dados.' });
        };

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    verificaEmailUsuario
}