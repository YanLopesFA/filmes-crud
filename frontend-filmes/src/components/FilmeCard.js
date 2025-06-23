import React from 'react';
import './FilmeCard.css';

export default function FilmeCard({ filme, onDelete }) {
  return (
    <div className="card">
      <img src={filme.imagem || 'https://via.placeholder.com/300x200?text=Sem+Imagem'} alt={filme.nome} />
      <h2>{filme.nome}</h2>
      <p>{filme.descricao}</p>
      <small>{filme.categoria}</small>
      <div className="card-buttons">
        <a href={`/editar/${filme._id}`} className="btn-editar">Editar</a>
        <button className="btn-excluir" onClick={() => onDelete(filme._id)}>Excluir</button>
      </div>
    </div>
  );
}
