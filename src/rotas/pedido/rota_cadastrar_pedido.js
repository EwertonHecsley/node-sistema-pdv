const { Router } = require('express');
const rota = Router();

const { cadastrarPedido } = require('../../controladores/pedido/cadastrar_pedido');
const { intermediarioCadastrarPedido } = require('../../../intermediario_cadastrar_pedido');
const { validarCorpoRequisicao } = require('../../intermediarios/validar_corpo_requisicao');
const schemaPedidos = require('../../schemas/schema_pedidos');

rota.post('/pedido', validarCorpoRequisicao(schemaPedidos), intermediarioCadastrarPedido, cadastrarPedido);

module.exports = rota;