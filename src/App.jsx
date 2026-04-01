import './App.css';
import { DecButton, IncButton } from './components/Button';
import { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-screen counter">
        <section className="buttons">
          <IncButton setCounter={setCounter} />
          <DecButton setCounter={setCounter} />
        </section>
        <p className="mt-10 text-4xl">Counter : {counter}</p>
      </section>
    </>
  );
}

export default App;
