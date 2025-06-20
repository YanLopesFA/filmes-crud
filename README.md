# 📽️ CRUD de Filmes – Projeto Final

Este é um sistema completo de gerenciamento de filmes com as funcionalidades de **criar, listar, editar e excluir** filmes. Foi desenvolvido como trabalho final da disciplina **Linguagem de Programação para Internet** na UNIUBE.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Back-end
- Node.js
- Express.js
- MongoDB (local ou Atlas)
- Mongoose

### 🎨 Front-end
- React.js
- Axios
- React Router DOM
- CSS puro

---

## 📂 Estrutura do Projeto

```
filmes-crud/
├── backend-filmes/
│   ├── index.js
│   ├── models/
│   └── routes/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── FilmeCard.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── AddFilme.js
│   │   │   └── EditFilme.js
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.js
```

---

## 🛠️ Como rodar o projeto localmente

### ✅ Pré-requisitos:
- Node.js instalado
- MongoDB local ou conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- NPM

---

### 🔙 Back-end

```bash
cd backend-filmes
npm install
npm start
```

> O servidor será iniciado na porta `5000`.

---

### 🔜 Front-end

```bash
cd frontend
npm install
npm start
```

> A aplicação React abrirá automaticamente no navegador (geralmente em `http://localhost:3000` ou `3001/3002/...`).

---

## ✅ Funcionalidades

- 📄 Lista de filmes com cards
- ➕ Cadastro de novo filme
- ✏️ Edição de filme existente
- ❌ Exclusão de filme
- 🌄 Imagem via URL com sugestão e fallback
- 🎨 Estilo moderno com botões coloridos e responsivos
- 🔁 Integração completa com MongoDB

---

## 📦 Exemplos de dados

| Campo      | Exemplo                                      |
|------------|----------------------------------------------|
| nome       | Matrix                                       |
| descrição | Um clássico da ficção científica              |
| categoria  | Ação                                         |
| imagem     | https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg |

---

## 👨‍💻 Autores
- Pedro Augusto Borges Rabelo - RA: 5162384
- Yan Lopes Ferreira Assunção - RA: 5162487
---
-Disciplina: Linguagem de Programação para Internet
-Engenharia de Computação - UNIUBE
