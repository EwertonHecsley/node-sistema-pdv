const { Router } = require('express');
const rota = Router();
const { listarProdutos } = require('../../controladores/produto/listar_produto');
const { intermediarioListarProduto } = require('../../intermediarios/produto/intermediario_listar_produto');

rota.get('/produto', intermediarioListarProduto, listarProdutos);

module.exports = rota;