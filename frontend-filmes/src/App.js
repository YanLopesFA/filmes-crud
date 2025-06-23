import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddFilme from './pages/AddFilme';
import EditFilme from './pages/EditFilme';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adicionar" element={<AddFilme />} />
        <Route path="/editar/:id" element={<EditFilme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;