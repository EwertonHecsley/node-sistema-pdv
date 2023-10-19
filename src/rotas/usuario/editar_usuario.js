const { Router } = require('express');
const rota = Router();

const { editarUsuario } = require('../../controladores/usuario/editar_usuario');
const { validarCorpoRequisicao } = require('../../intermediarios/validar_corpo_requisicao');
const { verificaEmailUsuario } = require('../../intermediarios/usuario/intermediario_usuario');
const schemaUsuarios = require('../../schemas/schema_usuario');

rota.put('/usuario', validarCorpoRequisicao(schemaUsuarios), verificaEmailUsuario, editarUsuario);

module.exports = rota;