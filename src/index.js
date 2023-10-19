const express = require('express');
const app = express();

app.use(express.json());

const rota_listar_categoria = require('./rotas/categoria/rota_categoria');
const rota_cadastrar_usuario = require('./rotas/usuario/cadastrar_usuario');
const rota_login = require('./rotas/login/rota_login');
const { validarToken } = require('./intermediarios/validar_token');


app.use('/', rota_listar_categoria);

app.use('/', rota_cadastrar_usuario);

app.use('/', rota_login);

app.use(validarToken);

module.exports = app;