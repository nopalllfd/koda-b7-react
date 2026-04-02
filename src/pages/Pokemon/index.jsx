import { useEffect, useState } from 'react';
import { getPokemonDetails } from './fetch';
import Card from './card';
import SearchTab from './SearchTab';
import Header from '../Counter/components/header';
import Footer from '../Counter/components/Footer';

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
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex justify-center items-center">
          <p className="text-sm font-semibold text-gray-500">Mengambil data...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const onSubmit = (searchName) => {
    setSearch(searchName);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-8 px-4 pb-12 w-full">
        <div className="w-full max-w-5xl flex flex-col gap-2">
          <SearchTab
            onSearch={onSubmit}
            pokemonTotal={data.length}
          />
          <Card data={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
