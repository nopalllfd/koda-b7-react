import { useState } from 'react';
import { useFetch } from './useFetch';

function CustomHooks() {
  const [url, setUrl] = useState('/api/location');
  const { data, error, isLoading } = useFetch(url);
  const [isCharacter, setIsCharacter] = useState(true);
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  if (isLoading) {
    return 'Loading';
  } else {
    return (
      <section className="flex flex-col-reverse">
        <div>
          {data.length ? (
            <div className="grid grid-cols-4 gap-2 p-4">
              {data.map((d, idx) => (
                <p key={idx} className="bg-blue-100 py-10 text-center">
                  {d.name}
                </p>
              ))}
            </div>
          ) : (
            'Data Kosong'
          )}
        </div>
        <button
          className="bg-blue-500 text-white py-4 px-10 cursor-pointer"
          onClick={() => {
            setUrl(`/api/${isCharacter ? 'character' : 'location'}`);
            return setIsCharacter(!isCharacter);
          }}
        >
          {isCharacter ? 'Get Karakter' : 'Get Location'}
        </button>
      </section>
    );
  }
}

export default CustomHooks;
