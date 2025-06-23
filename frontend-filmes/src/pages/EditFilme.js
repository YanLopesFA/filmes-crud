import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import './Formulario.css';

export default function EditFilme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: '', descricao: '', categoria: '', imagem: '' });

  useEffect(() => {
    api.get(`/filmes/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/filmes/${id}`, form);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Editar Filme</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" />
        <input name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição" />
        <input name="categoria" value={form.categoria} onChange={handleChange} placeholder="Categoria" />
        <input name="imagem" value={form.imagem} onChange={handleChange} placeholder="URL da imagem" />
        <button type="submit" className="btn-cadastrar">Salvar Alterações</button>
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
