export const Table = ({ product }) => {
  console.log(product.map((p) => p));
  return (
    <div className="mt-10 relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-red-300 text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 font-medium border-e"
            >
              Product name
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-medium border-e"
            >
              Stock
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-medium border-e"
            >
              Category
            </th>
          </tr>
        </thead>
        <tbody className="">
          {product.map((p, i) => (
            <tr
              key={i}
              className="bg-neutral-primary border-b border-default"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap border-e"
              >
                {p.name}
              </th>
              <td className="px-6 py-4 border-e">{p.sum}</td>
              <td className="px-6 py-4 border-e">{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
