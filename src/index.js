const express = require('express');
const app = express();

app.use(express.json());

const rota_listar_categoria = require('./rotas/categoria/rota_categoria');
const rota_cadastrar_usuario = require('./rotas/usuario/cadastrar_usuario');
const rota_login = require('./rotas/login/rota_login');
const rota_detalhar_usuario = require('./rotas/usuario/detalhar_usuario');
const rota_editar_usuario = require('./rotas/usuario/editar_usuario');

const rota_cadastrar_produto = require('./rotas/produto/cadastrar-produto');
const rota_editar_produto = require('./rotas/produto/editar_produto');
const { validarToken } = require('./intermediarios/validar_token');


app.use('/', rota_listar_categoria);
app.use('/', rota_cadastrar_usuario);
app.use('/', rota_login);

app.use(validarToken);//Verifica sempre se o usuario está logado

app.use('/', rota_detalhar_usuario);
app.use('/', rota_editar_usuario);

//===========================================//

app.use('/', rota_cadastrar_produto);
app.use('/', rota_editar_produto);


module.exports = app;