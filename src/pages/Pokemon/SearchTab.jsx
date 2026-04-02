function SearchTab({ onSearch, pokemonTotal }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl">Pokemon ({pokemonTotal})</h1>
      <form
        className="flex gap-2 justify-end"
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
          className="border py-1 px-2 rounded-md"
        />
        <button
          className="btn border px-6 rounded-md bg-amber-200"
          type="submit"
        >
          Cari
        </button>
      </form>
    </div>
  );
}

export default SearchTab;
