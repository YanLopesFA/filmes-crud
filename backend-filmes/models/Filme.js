const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  categoria: String,
  imagem: String
});

module.exports = mongoose.model('Filme', FilmeSchema);
