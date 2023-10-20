const mustache = require('mustache');
const axios = require('../configuracoes/conexao_axios');
const fs = require('fs/promises');

const enviarEmail = async (nome, email) => {
    try {
        const template = await fs.readFile('src/utils/confirmacao_pedido.html', 'utf-8');

        const variaveis = {
            nome
        };

        const conteudoHTML = mustache.render(template, variaveis);

        const data = {
            "sender": {
                "name": "Ewerton Hecsley",
                "email": "ewerton.martinscomercial@gmail.com"
            },
            "to": [
                {
                    "email": email,
                    "name": nome
                }
            ],
            "subject": "Parabéns, compra confirmada!",
            "htmlContent": conteudoHTML
        };

        return await axios.post('', data);

    } catch (error) {
        return error.message;
    };
};

module.exports = {
    enviarEmail
}
