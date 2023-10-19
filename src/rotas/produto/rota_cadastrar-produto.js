const { Router } = require('express');
const rota = Router();

const { cadastrarProduto } = require('../../controladores/produto/cadastrar_produto');
const { verificaCategoriaProduto } = require('../../intermediarios/produto/intermediario_cadstrar_produto');
const { validarCorpoRequisicao } = require('../../intermediarios/validar_corpo_requisicao');
const schemaProdutos = require('../../schemas/schema_produto');
const multer = require('../../configuracoes/multer');

rota.post('/produto', multer.single('produto_imagem'), validarCorpoRequisicao(schemaProdutos), verificaCategoriaProduto, cadastrarProduto);

module.exports = rota;