import { useEffect, useState } from 'react';
import { getPokemonDetails } from './fetch';
import Card from './card';
import SearchTab from './SearchTab';
import Header from '../Counter/components/header';

export const Pokemon = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      const res = await getPokemonDetails(search);
      setData(res);
      setIsLoading(false);
    })();
  }, [search]);
  if (isLoading) {
    return <p>Mengambil data</p>;
  }

  const onSubmit = (searchName) => {
    setSearch(searchName);
  };

  return (
    <>
      <Header />
      <div className="p-2 absolute w-full flex justify-center flex-col gap-8">
        <h1 className="text-4xl bg-blue-400 text-white text-center py-2 rounded-md">Minitask - 3</h1>
        <SearchTab
          onSearch={onSubmit}
          pokemonTotal={data.length}
        />
        <Card data={data} />
      </div>
    </>
  );
};
