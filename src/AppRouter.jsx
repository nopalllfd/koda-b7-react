import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import { Counter } from './pages/Counter';
import { InputForm } from './pages/InputForm/InputForm';
import { Pokemon } from './pages/Pokemon';
import { RickNMorty } from './pages/RickNMorty/list';

import './index.css';
import CharacterDetail from './pages/RickNMorty/detail';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/form" element={<InputForm />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/characters" element={<RickNMorty />} />
      <Route path="/characters/:id/:slug" element={<CharacterDetail />} />
    </Routes>
  );
}

export default AppRouter;
