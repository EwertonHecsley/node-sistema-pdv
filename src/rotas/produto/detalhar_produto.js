const { Router } = require('express');
const rota = Router();

const { detalharProdutoId } = require('../../controladores/produto/detalhar_produto');
const { intermediarioDetalharProdutoId } = require('../../intermediarios/produto/intermediario_detalhar_produto');

rota.get('/produto/:id', intermediarioDetalharProdutoId, detalharProdutoId);

module.exports = rota;