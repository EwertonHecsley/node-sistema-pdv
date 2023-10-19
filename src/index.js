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
const rota_listar_produto = require('./rotas/produto/listar_produto');
const rota_detalhar_produto = require('./rotas/produto/detalhar_produto');
const rota_deletar_produto = require('./rotas/produto/deletar_produto');


const rota_cadastrar_cliente = require('./rotas/cliente/rota_cliente');
const rota_editar_cliente = require('./rotas/cliente/rota_editar_cliente');
const rota_listar_clientes = require('./rotas/cliente/rota_listar_clientes');
const rota_detalhar_cliente = require('./rotas/cliente/rota_detalhar_cliente');

const { validarToken } = require('./intermediarios/validar_token');

//Rotas Livres
app.use('/', rota_listar_categoria);
app.use('/', rota_cadastrar_usuario);
app.use('/', rota_login);

app.use(validarToken);//Verifica sempre se o usuario está logado

//Rotas de Usuario
app.use('/', rota_detalhar_usuario);
app.use('/', rota_editar_usuario);

//Rotas de Produtos
app.use('/', rota_cadastrar_produto);
app.use('/', rota_editar_produto);
app.use('/', rota_detalhar_produto);
app.use('/', rota_deletar_produto);
app.use('/', rota_listar_produto);

//Rotas de Clientes
app.use('/', rota_cadastrar_cliente);
app.use('/', rota_editar_cliente);
app.use('/', rota_detalhar_cliente);
app.use('/', rota_listar_clientes);

module.exports = app;