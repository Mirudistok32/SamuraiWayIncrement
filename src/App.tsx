import React, { useState } from 'react';
import './App.scss';
import { CountCanvas } from './CountCanvas/CountCanvas';


function App() {

  const [maxValue, setMaxValue] = useState<number>(4)
  const [count, setCount] = useState<number>(0)


  const setInc = () => {
    setCount(count => count + 1)
  }

  const setReset = () => {
    setCount(0)
  }


  return (
    <div className="app">
      <CountCanvas
        maxValue={maxValue}
        count={count}
        setInc={setInc}
        setReset={setReset} />
    </div>
  );
}

export default App;
