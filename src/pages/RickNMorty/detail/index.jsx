import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const url = 'https://rickandmortyapi.com/api';
import { useParams } from 'react-router';

function CharacterDetail() {
  const [data, setData] = useState(null);
  const { id, slug } = useParams();
  const navigate = useNavigate();

  const charId = id;
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${url}/character/${charId}`);
        const data = await res.json();
        console.log(data);
        setData(data);
        if (data.name) {
          const correctSlug = data.name.toLowerCase().replace(/\s+/g, '-');

          if (slug !== correctSlug) {
            navigate(`/characters/${charId}/${correctSlug}`, { replace: true });
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [charId, slug, navigate]);
  console.log(charId);

  return (
    <section className="flex justify-center items-center">
      {data ? (
        <div className="bg-amber-200 h-auto p-20 w-1/2 border flex flex-col gap-9">
          <h1 className="text-5xl font-bold">Detail Character</h1>
          <h1 className="text-4xl font-bold">Name : {data.name}</h1>
          <h1 className="text-4xl font-bold">Gender : {data.gender}</h1>
          <h1 className="text-4xl font-bold">Location : {data.location.name}</h1>
          <h1 className="text-4xl font-bold">Species : {data.species}</h1>
        </div>
      ) : (
        'loading...'
      )}
    </section>
  );
}

export default CharacterDetail;
