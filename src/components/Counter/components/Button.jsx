const increament = (counter) => {
  if (counter == 10) {
    return (counter = 10);
  }
  return counter + 1;
};
const decreament = (counter) => {
  if (counter == 0) {
    return (counter = 0);
  }
  return counter - 1;
};

export const IncButton = ({ setCounter, textButton }) => {
  return (
    <button
      className="w-40 py-5 mx-10 text-black bg-green-400 border btn rounded-xl"
      onClick={() => setCounter((counter) => increament(counter))}
    >
      {textButton}
    </button>
  );
};
export const DecButton = ({ setCounter, textButton }) => {
  return (
    <button
      className="w-40 py-5 mx-10 text-black bg-red-300 border btn rounded-xl"
      onClick={() => setCounter((counter) => decreament(counter))}
    >
      {textButton}
    </button>
  );
};
