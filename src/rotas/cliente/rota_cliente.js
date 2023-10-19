const { Router } = require('express');
const rota = Router();

const { cadastrarCliente } = require('../../controladores/cliente/cadastrar_cliente');
const { intermediarioCadastrarCliente } = require('../../intermediarios/cliente/intermediario_cadastrar_cliente');
const { validarCorpoRequisicao } = require('../../intermediarios/validar_corpo_requisicao');
const schemaClientes = require('../../schemas/schema_clientes');

rota.post('/cliente', validarCorpoRequisicao(schemaClientes), intermediarioCadastrarCliente, cadastrarCliente);

module.exports = rota;