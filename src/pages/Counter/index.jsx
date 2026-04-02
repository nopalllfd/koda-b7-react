import { DecButton, IncButton } from './components/Button';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/Footer';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increamentText = counter !== 10 ? 'Increament' : 'Cannot Increase (10)';
  const decreamentText = counter !== 0 ? 'Decreament' : 'Cannot decrease(0)';
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-10 px-4 gap-6 w-full">
        <div className="w-full max-w-md"></div>

        <section className="flex flex-col items-center p-8 border border-amber-200 rounded-lg bg-amber-50 w-full max-w-md gap-6">
          <p className="text-3xl font-semibold text-gray-800">Counter : {counter}</p>
          <section className="flex gap-4">
            <IncButton
              textButton={increamentText}
              setCounter={setCounter}
            />
            <DecButton
              textButton={decreamentText}
              setCounter={setCounter}
            />
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};
