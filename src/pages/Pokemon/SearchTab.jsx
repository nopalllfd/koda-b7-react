function SearchTab({ onSearch, pokemonTotal }) {
  return (
    <div className="w-full max-w-5xl flex items-center justify-between pb-4">
      <h1 className="text-lg font-semibold text-gray-800">Pokemon ({pokemonTotal})</h1>
      <form
        className="flex gap-2"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(e.target.name.value);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Cari Pokemon"
          className="border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none w-60"
        />
        <button
          className="bg-amber-600 text-white px-5 py-1.5 rounded-md text-sm font-semibold"
          type="submit"
        >
          Cari
        </button>
      </form>
    </div>
  );
}

export default SearchTab;
