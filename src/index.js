const express = require('express');
const app = express();

app.use(express.json());

const rota_listar_categoria = require('./rotas/rota_categoria');

app.use('/', rota_listar_categoria);

module.exports = app;