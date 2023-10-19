require('dotenv').config();
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { id, nome } = req.usuario;

    const token = jwt.sign({ id }, process.env.KEY_TOKEN_JWT, { expiresIn: '1h' });

    const resposta = {
        mensagem: 'Usuario logado com sucesso.',
        dados_usuario: {
            id,
            nome
        },
        token
    };

    return res.status(200).json(resposta)
};

module.exports = {
    login
}