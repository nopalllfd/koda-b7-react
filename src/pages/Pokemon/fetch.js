const URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';

const getPokemon = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(response.message);
    }
    const res = await response.json();

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPokemonDetails = async (pokemonSearch) => {
  const pokemon = await getPokemon();

  const pokemonName = Promise.all(
    pokemon.results.map(async (c) => {
      const response = await fetch(c.url);
      const data = await response.json();
      const img = data.sprites?.front_default || data.sprites?.back_default || 'url_gambar_placeholder.png';
      let types = data.types.map((type) => type.type).map((t) => t.name);
      types = types.join(', ');
      return {
        name: c.name,
        img,
        type: types,
      };
    }),
  );
  if (pokemonSearch) {
    return (await pokemonName).filter((p) => p.name == pokemonSearch);
  } else {
    return pokemonName;
  }
};
