require('dotenv').config();
const knex = require('knex');

const configuracao = {
    client: process.env.CLIENT,
    connection: {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_DATABASE
    }
};

const conexao = knex(configuracao);

module.exports = conexao;