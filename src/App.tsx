import React, { useState, useEffect, useCallback } from 'react';
import './App.scss';
import { CountCanvas } from './CountCanvas/CountCanvas';
import { SettingCanvas } from './SettingCanvas/SettingCanvas';
import { Switch, Route, Redirect } from 'react-router-dom';


function App() {

  const [startValue, setStartValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(1)
  const [count, setCount] = useState<number>(startValue)
  const [error, setError] = useState<string>('')
  const [isChangeValue, setIsChangeValue] = useState<boolean>(false)

  console.group("App Increment");
  console.log("document.referrer", document.referrer)
  console.log("document.baseURI", document.baseURI)
  console.log("window.parent", window.parent)
  console.log("window.top", window.top)
  console.log("window", window)
  console.groupEnd();

  useEffect(() => {
    let localStorageStartValue: string | null = localStorage.getItem('Start value')
    let localStorageMaxValue: string | null = localStorage.getItem('Max value')


    if (localStorageStartValue) {
      setStartValue(+localStorageStartValue)
      setCount(+localStorageStartValue)
    }
    if (localStorageMaxValue) {
      setMaxValue(+localStorageMaxValue)
    }
  }, [])

  const setInc = () => {
    setCount(count => count + 1)
  }

  const setReset = useCallback(() => {
    setCount(startValue)
  }, [startValue])

  return (
    <div className="app">

      <h1 className="app__title">
        Расчет от {count} до {maxValue}
      </h1>
      <div className="app__canvas">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route path="/main" render={() => (
            <CountCanvas
              startValue={startValue}
              maxValue={maxValue}
              count={count}
              setInc={setInc}
              setReset={setReset}
              error={error}
              isChangeValue={isChangeValue}
            />
          )} />
          <Route path="/setting" render={() => (
            <SettingCanvas
              error={error}
              setStartValue={setStartValue}
              setMaxValue={setMaxValue}
              setCount={setCount}
              setError={setError}
              isChangeValue={isChangeValue}
              setIsChangeValue={setIsChangeValue}
            />
          )} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
