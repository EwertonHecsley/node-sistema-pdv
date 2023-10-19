const express = require('express');
const app = express();

app.use(express.json());

const rota_listar_categoria = require('./rotas/categoria/rota_categoria');
const rota_cadastrar_usuario = require('./rotas/usuario/cadastrar_usuario');
const rota_login = require('./rotas/login/rota_login');
const rota_detalhar_usuario = require('./rotas/usuario/detalhar_usuario');
const { validarToken } = require('./intermediarios/validar_token');


app.use('/', rota_listar_categoria);

app.use('/', rota_cadastrar_usuario);

app.use('/', rota_login);

app.use(validarToken);//Verifica sempre se o usuario está logado

app.use('/', rota_detalhar_usuario);


module.exports = app;