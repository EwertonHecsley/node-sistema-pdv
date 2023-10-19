const { Router } = require('express');
const rota = Router();

const { login } = require('../../controladores/usuario/login_usuario');
const { validarCorpoRequisicao } = require('../../intermediarios/validar_corpo_requisicao');
const { verificaCamposLogin } = require('../../intermediarios/usuario/intermediario_login_usuario');
const schemaLogin = require('../../schemas/schema_login');

rota.post('/login', validarCorpoRequisicao(schemaLogin), verificaCamposLogin, login);

module.exports = rota;