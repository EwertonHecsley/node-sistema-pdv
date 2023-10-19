const { Router } = require('express');
const rota = Router();

const { deletarProdutoId } = require('../../controladores/produto/deletar_produto');
const { intermediarioDeletarProdutoId } = require('../../intermediarios/produto/intermediario_deletar_produto');

rota.delete('/produto/:id', intermediarioDeletarProdutoId, deletarProdutoId);

module.exports = rota;