import React, { useState } from 'react';
import s from './SettingCanvas.module.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

type ClassesType = {
  mainClass: string
  countCanvasDisplay: string
  countCanvasApi: string
}

type PropsType = {
  setStartValue: (value: number) => void
  setMaxValue: (value: number) => void
}

export const SettingCanvas: React.FC<PropsType> = (props) => {

  const { setStartValue, setMaxValue } = props

  const [maxValueLocal, setMaxValueLocal] = useState<number>(0)
  const [startValueLocal, setStartValueLocal] = useState<number>(0)

  //Объект для работы с классами
  let classes: ClassesType = {
    mainClass: s['count-canvas'],
    countCanvasDisplay: s['count-canvas__display'],
    countCanvasApi: s['count-canvas__api']
  }


  const onClickHandler = () => {
    setStartValue(startValueLocal)
    setMaxValue(maxValueLocal)
  }

  return (
    <div className={classes.mainClass}>
      <div className={classes.countCanvasDisplay}>
        <Input title={"Max value"} value={maxValueLocal} setValue={setMaxValueLocal} />
        <Input title={"Start value"} value={startValueLocal} setValue={setStartValueLocal} />
      </div>
      <div className={classes.countCanvasApi}>
        <Button title={'Set'} onClick={onClickHandler} disabled={startValueLocal < 1}/>
      </div>
    </div>
  );
}
