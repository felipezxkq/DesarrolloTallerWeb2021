'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoSchema = Schema(
    {
      nombre:{
        type:String,
        required: true
      },
      anio:{type:Number},
      autor:{
        type:String
      },
      idioma:{
        type:String,
        enum: ['ING','ESP'],
        required: true
      }    
     
    })

module.exports = mongoose.model('libros',AutoSchema)    

