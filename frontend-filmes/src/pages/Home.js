import React, { useEffect, useState } from 'react';
import api from '../services/api';
import FilmeCard from '../components/FilmeCard';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  const fetchFilmes = async () => {
    const res = await api.get('/filmes');
    setFilmes(res.data);
  };

  const deleteFilme = async (id) => {
    await api.delete(`/filmes/${id}`);
    fetchFilmes();
  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ color: '#333' }}>Filmes em Cartaz</h1>
        <a href="/adicionar" className="btn-adicionar">Adicionar um Novo Filme</a>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filmes.map((filme) => (
          <FilmeCard key={filme._id} filme={filme} onDelete={deleteFilme} />
        ))}
      </div>
    </div>
  );
}