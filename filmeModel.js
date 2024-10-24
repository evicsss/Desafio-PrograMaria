const mongoose = require('mongoose')



const FilmeSchema = new mongoose.Schema({

 nome: {

   type: String,

   required: true

 },

 imagem: {

   type: String,

   required: true

 },

 autor: {

   type: String,

   required: true

 },

 sinopse: {

   type: String,

   required: true

 },

 ano: {

    type: String,
 
    required: true
 
  }

})



module.exports = mongoose.model('movie', FilmeSchema)