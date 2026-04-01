import { DecButton, IncButton } from './components/Button';
import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increamentText = counter !== 10 ? 'Increament' : 'Cannot Increase (10)';
  const decreamentText = counter !== 0 ? 'Decreament' : 'Cannot decrease(0)';
  return (
    <>
      <section className="flex flex-col items-center p-10 justify-center w-full counter">
        <section className="buttons">
          <IncButton
            textButton={increamentText}
            setCounter={setCounter}
          />
          <DecButton
            textButton={decreamentText}
            setCounter={setCounter}
          />
        </section>
        <p className="mt-10 text-4xl">Counter : {counter}</p>
      </section>
    </>
  );
};
