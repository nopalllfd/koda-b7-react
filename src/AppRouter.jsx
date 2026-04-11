import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import { Counter } from './pages/Counter';
import { InputForm } from './pages/InputForm/InputForm';
import { Pokemon } from './pages/Pokemon';
import { RickNMorty } from './pages/RickNMorty/list';
import './index.css';
import CharacterDetail from './pages/RickNMorty/detail';
import CustomHooks from './pages/CustomHooks';
import { LoginPage } from './pages/Context/pages/Login';
import AuthLayout from './pages/Context/layouts/AuthLayout';
import Profile from './pages/Context/pages/Profile';
import EditProfile from './pages/Context/pages/EditProfile';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="counter" element={<Counter />} />
      <Route path="form" element={<InputForm />} />
      <Route path="pokemon" element={<Pokemon />} />
      <Route path="characters" element={<RickNMorty />} />
      <Route path="characters/:id/:slug" element={<CharacterDetail />} />
      <Route path="usefetch" element={<CustomHooks />}></Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
