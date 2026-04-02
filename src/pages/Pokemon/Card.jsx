function Card({ data }) {
  return (
    <ul className="grid grid-cols-4 gap-4 relative items-center justify-center">
      {data.map((data, idx) => (
        <li
          className="bg-amber-300 rounded-md px-10 grid grid-cols-2"
          key={idx}
        >
          <img
            className="row-span-2"
            src={data.img}
            alt=""
          />
          <h1 className="mt-2">{data.name}</h1>
          <p>{data.type}</p>
        </li>
      ))}
    </ul>
  );
}

export default Card;
