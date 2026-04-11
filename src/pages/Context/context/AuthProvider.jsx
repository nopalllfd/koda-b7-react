import AuthContext from './AuthContext';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

export const AuthProvider = ({ children }) => {
  const key = 'user';
  const { data, insertData, deleteData, updateData } = useLocalStorage(key);
  console.log(data);
  const login = (username, photoUrl) => {
    const newData = { id: 1, username: username, photoUrl: photoUrl };
    insertData(newData);
  };

  const logout = () => {
    deleteData(key);
  };

  const editProfile = ({ username, photoUrl }) => {
    console.log(username);
    updateData({ username, photoUrl });
  };

  return <AuthContext.Provider value={{ data, login, logout, editProfile }}>{children}</AuthContext.Provider>;
};
