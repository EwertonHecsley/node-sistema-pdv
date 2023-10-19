const { Router } = require('express');
const rota = Router();

const { atualizarCliente } = require('../../controladores/cliente/editar_cliente');
const { intermediarioAtualizarCliente } = require('../../intermediarios/cliente/intermediario_editar_cliente');
const { validarCorpoRequisicao } = require('../../intermediarios/validar_corpo_requisicao');
const schemaEditarClientes = require('../../schemas/schema_editar_cliente');

rota.put('/cliente/:id', validarCorpoRequisicao(schemaEditarClientes), intermediarioAtualizarCliente, atualizarCliente);

module.exports = rota;