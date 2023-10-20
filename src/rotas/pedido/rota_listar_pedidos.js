const { Router } = require('express');
const rota = Router();

const { listarPedidos } = require('../../controladores/pedido/listar_pedidos');
const { intermediarioListarPedido } = require('../../intermediarios/pedido/intermediario_listar_pedidos');

rota.get('/pedido', intermediarioListarPedido, listarPedidos);

module.exports = rota;