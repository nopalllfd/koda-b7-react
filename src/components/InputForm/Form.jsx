export const Form = ({ onAddProduct }) => {
  return (
    <form
      onSubmit={onAddProduct}
      action=""
      className=""
    >
      <div className="input-group flex flex-col gap-2 flex-1">
        <label htmlFor="name">Nama Produk : </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="border-1 rounded-md px-2 py-1"
        />
        <label htmlFor="sum">Jumlah : </label>
        <input
          type="number"
          name="sum"
          id="sum"
          required
          className="border-1 rounded-md px-2 py-1"
        />
        <label htmlFor="category">Kategori : </label>

        <select
          name="category"
          id="category"
          className="border p-1 rounded-md"
        >
          <option value="Foods">foods</option>
          <option value="Beverages">beverages</option>
          <option value="Tools">tools</option>
        </select>
        <button
          type="submit"
          className="btn border-2 p-1 rounded-md bg-amber-200 cursor-pointer"
        >
          Masukkan Barang
        </button>
      </div>
    </form>
  );
};
