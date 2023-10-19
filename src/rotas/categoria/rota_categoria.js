const { Router } = require('express');
const rota = Router();
const { listarCategorias } = require('../../controladores/categorias/listar_categorias');

rota.get('/categoria', listarCategorias);

module.exports = rota;