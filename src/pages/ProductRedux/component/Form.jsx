import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/slice/productSlice';

export const Form = ({ onAdd, onSave }) => {
  let selectedProduct = useSelector((state) => state.selectedProduct);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      setSelectedProduct({
        ...selectedProduct,
        [e.target.name]: e.target.value,
      }),
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedProduct.id) {
      onSave();
    } else {
      onAdd();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md p-6 bg-amber-50 border border-amber-200 rounded-lg w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-800">Nama Produk :</label>
          <input
            type="text"
            name="name"
            value={selectedProduct.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-800">Jumlah :</label>
          <input
            type="number"
            name="qty"
            value={selectedProduct.qty}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-800">Kategori :</label>
          <select
            name="category"
            value={selectedProduct.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-white"
          >
            <option value="" selected disabled>
              Pilih Kategori
            </option>
            <option value="Foods">Foods</option>
            <option value="Beverages">Beverages</option>
            <option value="Tools">Tools</option>
          </select>
        </div>

        <div className="pt-2">
          <button type="submit" className="w-full bg-amber-600 text-white font-semibold py-2 rounded-md text-sm cursor-pointer">
            {selectedProduct.id ? 'Simpan Perubahan' : 'Masukkan Barang'}
          </button>
        </div>
      </div>
    </form>
  );
};
