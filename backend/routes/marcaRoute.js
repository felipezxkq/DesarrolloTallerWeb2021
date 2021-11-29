'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var marcaController = require('../controllers/marcaController');


// Llamamos al router
var api = express.Router();
 
//  Guardar Persona
api.post('/marca', marcaController.guardar);
api.get('/marca', marcaController.listar);
api.get('/marca/:id', marcaController.recupera);
api.delete('/eliminarmarca/:id', marcaController.eliminar);
api.put('/actualizarmarca/:id', marcaController.actualizar);



// Exportamos la confi,guración
module.exports = api;
