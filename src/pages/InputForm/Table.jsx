export const Table = ({ product }) => {
  return (
    <div className="w-full border border-amber-200 rounded-lg overflow-hidden bg-amber-50">
      <table className="w-full text-left border-collapse">
        <thead className="bg-amber-100 border-b border-amber-200">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-800 border-r border-amber-200">Product name</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-800 border-r border-amber-200 text-center w-24">Stock</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-800">Category</th>
          </tr>
        </thead>
        <tbody>
          {product && product.length > 0 ? (
            product.map((p, i) => (
              <tr
                key={i}
                className="border-b border-amber-200 last:border-b-0"
              >
                <td className="px-4 py-3 text-sm text-gray-800 border-r border-amber-200 whitespace-nowrap">{p.name}</td>
                <td className="px-4 py-3 text-sm text-gray-800 border-r border-amber-200 text-center">{p.sum}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{p.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="px-4 py-8 text-sm text-center text-gray-500"
              >
                Belum ada produk
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
