import React, { useState } from 'react';
import './App.scss';
import { CountCanvas } from './CountCanvas/CountCanvas';
import { SettingCanvas } from './SettingCanvas/SettingCanvas';


function App() {

  const [startValue, setStartValue] = useState<number>(3)
  const [maxValue, setMaxValue] = useState<number>(7)
  const [count, setCount] = useState<number>(startValue)


  const setInc = () => {
    setCount(count => count + 1)
  }

  const setReset = () => {
    setCount(startValue)
  }

  return (
    <div className="app">
      <SettingCanvas
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}
      />
      <CountCanvas
        startValue={startValue}
        maxValue={maxValue}
        count={count}
        setInc={setInc}
        setReset={setReset}
      />
    </div>
  );
}

export default App;
