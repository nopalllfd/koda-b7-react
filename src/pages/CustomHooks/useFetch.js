import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = 'https://rickandmortyapi.com';

  useEffect(() => {
    setError('');
    console.log(url);
    (async () => {
      try {
        const response = await fetch(`${baseUrl}${url}`);
        if (!response.ok) {
          const errorMsg = `Error ${response.status}: ${response.statusText}`;
          setError(errorMsg);
          return;
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        setError(error.message || 'Sistem error');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
};
