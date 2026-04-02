import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import { Counter } from './pages/Counter';
import { InputForm } from './pages/InputForm/InputForm';
import { Pokemon } from './pages/Pokemon';

import './index.css';

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/counter"
        element={<Counter />}
      />
      <Route
        path="/form"
        element={<InputForm />}
      />
      <Route
        path="/pokemon"
        element={<Pokemon />}
      />
    </Routes>
  );
}

export default AppRouter;
