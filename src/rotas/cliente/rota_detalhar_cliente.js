const { Router } = require('express');
const rota = Router();

const { detalharClienteId } = require('../../controladores/cliente/detalhar_cliente');
const { intermediarioDetalharClienteId } = require('../../intermediarios/cliente/intermediario_detalhar_cliente');

rota.get('/cliente/:id', intermediarioDetalharClienteId, detalharClienteId);

module.exports = rota;