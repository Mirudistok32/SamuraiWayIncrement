import React from 'react';
import s from './CountCanvas.module.scss';
import { CountPanel } from '../CountPanel/CountPanel';
import { Button } from '../Button/Button';

type ClassesType = {
  mainClass: string
  countCanvasDisplay: string
  countCanvasApi: string
}

type PropsType = {
  maxValue: number
  count: number
  error: string
  isChangeValue: boolean
  startValue: number
  setInc: () => void
  setReset: () => void
}

export const CountCanvas: React.FC<PropsType> = (props) => {

  const { setInc, setReset, count, maxValue, startValue, error, isChangeValue } = props

  //Объект для работы с классами
  let classes: ClassesType = {
    mainClass: s['count-canvas'],
    countCanvasDisplay: s['count-canvas__display'],
    countCanvasApi: s['count-canvas__api']
  }
  if (count >= maxValue) classes.countCanvasDisplay += ` ` + s['count-canvas__max-value']


  return (
    <div className={classes.mainClass}>
      <div className={classes.countCanvasDisplay}>
        <CountPanel count={count} maxValue={maxValue} error={error} isChangeValue={isChangeValue}/>
      </div>
      <div className={classes.countCanvasApi}>
        <Button title={'Inc'} onClick={setInc} disabled={count >= maxValue} />
        <Button title={'Reset'} onClick={setReset} disabled={count < (startValue + 1)} isClickMe={count >= maxValue} />
      </div>
    </div>
  );
}
