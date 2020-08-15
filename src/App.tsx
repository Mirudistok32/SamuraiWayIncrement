import React, { useState } from 'react';
import './App.scss';
import { CountPanel } from './CountPanel/CountPanel';
import { Button } from './Button/Button';



function App() {

  const [count, setCount] = useState<number>(0)
  const [disabledInc, setDisabledInc] = useState<boolean>(false) //Для inc
  const [disabledReset, setDisabledReset] = useState<boolean>(true) //Для reset

  const setInc = () => {

    setCount(count + 1)
    setDisabledReset(false)
    if (count === 6) {
      setDisabledInc(true)
    }
  }

  const setReset = () => {

    setCount(0)
    setDisabledReset(true)
    if (disabledInc) {
      setDisabledInc(false)
    }
  }


  let classCountPanel = 'app__countPanel'
  if (disabledInc) {
    classCountPanel += ' app__countPanel-max'
  }

  return (
    <div className="app">
      <div className="app__panel">
        <div className={classCountPanel}>
          <CountPanel count={count} activeClass={disabledInc} />
        </div>
        <div className="app__api">
          <Button title="inc" onClick={setInc} disabled={disabledInc} />
          <Button title="reset" onClick={setReset} isMaxValue={disabledInc} disabled={disabledReset} />
        </div>
      </div>
    </div>
  );
}

export default App;
