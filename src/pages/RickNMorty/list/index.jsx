import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import slugify from 'slugify';

const url = 'https://rickandmortyapi.com/api';

export const RickNMorty = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${url}/character`);
        const data = await res.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(data);
  return (
    <section className="grid grid-cols-4 gap-2 px-10 py-5">
      {data.length
        ? data.map((char, idx) => (
            <div onClick={() => navigate(`/characters/${Number(char.id)}/${slugify(char.name, { lower: true })}`)} className="cursor-pointer">
              <div className="border w-50 h-50 text-center flex items-center justify-center flex-col bg-amber-300 gap-2" key={idx}>
                <img src={char.image} alt={char.name} className="w-1/2" />
                {char.name}
              </div>
            </div>
          ))
        : ''}
    </section>
  );
};
