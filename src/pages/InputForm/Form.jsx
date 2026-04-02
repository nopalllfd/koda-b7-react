import { useState } from 'react';

export const Form = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    sum: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: e.target.name.value,
      sum: e.target.sum.value,
      category: e.target.category.value,
    };
    console.log(newProduct);

    onAddProduct(newProduct);
  };
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="max-w-md p-6 bg-amber-50 border border-amber-200 rounded-lg w-full"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-800"
          >
            Nama Produk :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="sum"
            className="text-sm font-semibold text-gray-800"
          >
            Jumlah :
          </label>
          <input
            type="number"
            name="sum"
            id="sum"
            onChange={handleChange}
            value={formData.sum}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="category"
            className="text-sm font-semibold text-gray-800"
          >
            Kategori :
          </label>
          <select
            name="category"
            id="category"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-white"
          >
            <option value="Foods">Foods</option>
            <option value="Beverages">Beverages</option>
            <option value="Tools">Tools</option>
          </select>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-amber-600 text-white font-semibold py-2 rounded-md text-sm cursor-pointer"
          >
            Masukkan Barang
          </button>
        </div>
      </div>
    </form>
  );
};
