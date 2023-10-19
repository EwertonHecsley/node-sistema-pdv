const { Router } = require('express');
const rota = Router();
const { listarClientes } = require('../../controladores/cliente/listar_cliente');

rota.get('/cliente', listarClientes);

module.exports = rota;