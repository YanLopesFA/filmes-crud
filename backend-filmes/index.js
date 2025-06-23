const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const filmeRoutes = require('./routes/filmeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/filmesDB')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/filmes', filmeRoutes);

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
