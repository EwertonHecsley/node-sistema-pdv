const { Router } = require('express');
const rota = Router();

const { atualizarPruduto } = require('../../controladores/produto/editar_produto');
const { intermediarioEditarProduto } = require('../../intermediarios/produto/intermediario_editar_produto');
const { validarCorpoRequisicao } = require('../../intermediarios/validar_corpo_requisicao');
const schemaProdutos = require('../../schemas/schema_produto');
const multer = require('../../configuracoes/multer');

rota.put('/produto/:id', multer.single('produto_imagem'), validarCorpoRequisicao(schemaProdutos), intermediarioEditarProduto, atualizarPruduto);

module.exports = rota;