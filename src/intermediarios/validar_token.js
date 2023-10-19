require('dotenv').config();
const knex = require('../configuracoes/conexao_bancoDados');
const jwt = require('jsonwebtoken');

const validarToken = async (req, res, next) => {
    const { authorization } = req.headers;

    try {

        if (!authorization) {
            return res.status(401).json({ mensagem: 'Usuário não autorizado' });
        };

        const token = authorization.split(' ')[1];

        const { id } = jwt.verify(token, process.env.KEY_TOKEN_JWT);

        if (!id) {
            return res.status(401).json({ mensagem: 'Usuário não autorizado' });
        };

        const usuario = await knex('usuarios').select('*').where({ id }).first();

        req.usuario = usuario;

        next();

    } catch (error) {

        if (error.message === 'invalid signature') {
            return res.status(401).json({ mensagem: 'Para acessar este recurso um token de autenticação válido deve ser enviado' });
        };

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ mensagem: 'Tempo excedido, faça login novamente' });
        };

        return res.status(500).json({ mensagem: error.message })
    };
};

module.exports = { validarToken };