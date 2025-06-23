import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Formulario.css';

export default function AddFilme() {
  const [form, setForm] = useState({ nome: '', descricao: '', categoria: '', imagem: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nome || !form.descricao || !form.categoria) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    if (form.imagem && !form.imagem.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
      alert("O campo de imagem deve ser um link de imagem válido (jpg, png, etc)");
      return;
    }

    await api.post('/filmes', form);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Adicionar Filme no Cartaz</h2>
      <form onSubmit={handleSubmit}>
  <input name="nome" placeholder="Nome do Filme" onChange={handleChange} />
  <input name="descricao" placeholder="Descrição" onChange={handleChange} />
  <input name="categoria" placeholder="Categoria" onChange={handleChange} />
  <input name="imagem" placeholder="URL da capa do filme" onChange={handleChange} />
  <div className="form-sugestao">
    Sugestão: <span onClick={() => setForm({ ...form, imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg' })}>
      usar imagem do Matrix
    </span>
  </div>
  <button type="submit" className="btn-cadastrar">Cadastrar</button>
  <button
    type="button"
    onClick={() => navigate('/')}
    className="btn-voltar"
    style={{ marginTop: '10px' }}
  >
    ← Voltar para "Filmes em Cartaz"
  </button>
</form>
    </div>
  );
}
