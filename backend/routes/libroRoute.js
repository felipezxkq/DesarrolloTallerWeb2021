'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var libroController = require('../controllers/libroController');


// Llamamos al router
var api = express.Router();
 
//  Guardar Persona

api.post('/libros', libroController.guardar);
api.get('/libros', libroController.listar);
api.get('/recuperalibro/:id', libroController.recupera);
api.put('/libro/:id', libroController.actualizar);
api.delete('/libro/:id', libroController.eliminar);



// Exportamos la confi,guración
module.exports = api;
