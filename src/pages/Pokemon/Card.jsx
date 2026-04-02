function Card({ data }) {
  return (
    <div className="w-full max-w-5xl">
      <ul className="grid grid-cols-4 gap-4">
        {data.map((item, idx) => (
          <li
            key={idx}
            className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center gap-4"
          >
            <div className="shrink-0 w-16 h-16 bg-white border border-amber-100 rounded-md flex justify-center items-center p-1">
              <img
                className="w-full h-full object-contain"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col gap-1.5 overflow-hidden">
              <h1 className="text-md font-semibold text-gray-800 truncate">{item.name}</h1>
              <span className="text-xs font-medium px-2 py-0.5 bg-amber-200 text-amber-900  rounded w-fit">{item.type}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
