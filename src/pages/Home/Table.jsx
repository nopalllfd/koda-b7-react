export const Table = ({ datas }) => {
  return (
    <div className="max-w-md w-full border border-amber-200 rounded-lg overflow-hidden bg-amber-50">
      <table className="w-full text-left border-collapse">
        <thead className="bg-amber-100 border-b border-amber-200">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-800 border-r border-amber-200">Nama</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-800 border-r border-amber-200 text-center w-12">Rate</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-800">Pesan</th>
          </tr>
        </thead>
        <tbody>
          {datas.length ? (
            datas.map((review, idx) => (
              <tr
                key={idx}
                className="border-b border-amber-200 last:border-b-0"
              >
                <td className="px-4 py-3 text-sm text-gray-800 border-r border-amber-200 whitespace-nowrap">{review.name}</td>
                <td className="px-4 py-3 text-sm text-gray-800 border-r border-amber-200 text-center">{review.rate}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{review.msg}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="px-4 py-8 text-sm text-center text-gray-500"
              >
                Kosong
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
