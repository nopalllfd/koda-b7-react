import { useState } from 'react';
import { useAuth } from '../hooks/useAuth.js';
import { useNavigate } from 'react-router';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { login, data } = useAuth();
  const navigate = useNavigate();

  const validateUsername = (val) => {
    if (val.length < 3 && val.length > 0) {
      return 'Kurang dari 3 oe';
    }
    return '';
  };

  const handleChange = (e, setter, errorSetter) => {
    const val = e.target.value;
    setter(val);
    errorSetter(validateUsername(val));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == 'Nopal' && password == '12345') {
      console.log('Benarrr');
      login(
        'Nopal',
        'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80',
      );
      console.log(data);
      navigate('/auth/profile');
    } else {
      console.log('SALAHHHH');
    }
    // console.log('test');
    // console.log(username, password);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="flex flex-col justify-center items-center border w-1/3 h-auto py-10 bg-amber gap-6" action="" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">LOGIN</h1>
        <input
          onChange={(e) => handleChange(e, setUsername, setUsernameError)}
          className="bg-blue-200 border rounded-xl px-10 py-3"
          type="text"
          value={username}
          placeholder="Enter username"
        />
        <p>{usernameError}</p>
        <input
          onChange={(e) => handleChange(e, setPassword, setPasswordError)}
          value={password}
          className="bg-red-200 border rounded-xl px-10 py-3"
          type="password"
          placeholder="Enter password"
        />
        <p>{passwordError}</p>
        <button className="bg-blue-500 text-white px-6 py-1 rounded-md">Login</button>
      </form>
    </section>
  );
};
