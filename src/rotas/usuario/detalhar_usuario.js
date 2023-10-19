const { Router } = require('express');
const rota = Router();
const { detalharUsuario } = require('../../controladores/usuario/detalhar_usuario');

rota.get('/usuario', detalharUsuario);

module.exports = rota;