const { Router } = require('express');
const rota = Router();

const { cadastrarUsuario } = require('../../controladores/usuario/cadastrar_usuario');
const { validarCorpoRequisicao } = require('../../intermediarios/validar_corpo_requisicao');
const { verificaEmailUsuario } = require('../../intermediarios/usuario/intermediario_usuario');
const schemaUsuarios = require('../../schemas/schema_usuario');

rota.post('/usuario', validarCorpoRequisicao(schemaUsuarios), verificaEmailUsuario, cadastrarUsuario);

module.exports = rota;