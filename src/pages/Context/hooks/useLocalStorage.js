import { useState } from 'react';

export const useLocalStorage = (key) => {
  const [data, setData] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      console.log(data);
      return data ? data : null;
    } catch (error) {
      console.log(error);
    }
  });

  const insertData = (data) => {
    setData(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const updateData = (data) => {
    console.log(data);
    deleteData(key);
    insertData(data);
  };

  const deleteData = () => {
    setData(null);
    localStorage.removeItem(key);
  };

  return {
    data,
    insertData,
    deleteData,
    updateData,
  };
};
