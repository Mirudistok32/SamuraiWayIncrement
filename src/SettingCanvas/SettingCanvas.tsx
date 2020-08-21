import React, { useState, useEffect } from 'react';
import s from './SettingCanvas.module.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

type ClassesType = {
  mainClass: string
  countCanvasDisplay: string
  countCanvasApi: string
  countSpanError: string
}

type PropsType = {
  error: string
  isChangeValue: boolean
  setIsChangeValue: (isChangeValue: boolean) => void
  setStartValue: (value: number) => void
  setMaxValue: (value: number) => void
  setCount: (value: number) => void
  setError: (error: string) => void
}

export const SettingCanvas: React.FC<PropsType> = (props) => {

  const { setStartValue, setMaxValue, setCount, setError, error, isChangeValue, setIsChangeValue } = props

  const [maxValueLocal, setMaxValueLocal] = useState<number>(1)
  const [startValueLocal, setStartValueLocal] = useState<number>(0)

  //Объект для работы с классами
  let classes: ClassesType = {
    mainClass: s['count-canvas'],
    countCanvasDisplay: s['count-canvas__display'],
    countCanvasApi: s['count-canvas__api'],
    countSpanError: s['count-canvas__error']
  }

  const isError = () => {
    if (startValueLocal < 0) {
      setError("Start value can not be less 0")
    } else if (maxValueLocal === startValueLocal) {
      setError("Start value can not be equally Max value")
    } else if (startValueLocal > maxValueLocal) {
      setError("Start value can not be more Max value")
    } else {
      setError("")
    }
  }

  useEffect(() => {
    isError()
  }, [maxValueLocal, startValueLocal])

  const onClickHandler = () => {
    setStartValue(startValueLocal)
    setMaxValue(maxValueLocal)
    setCount(startValueLocal)
    setIsChangeValue(false)
  }

  const setIsChangeValueHandler = () => {
    setIsChangeValue(true)
  }

  return (
    <div className={classes.mainClass}>
      <div className={classes.countCanvasDisplay}>
        <Input
          title={"Max value"}
          value={maxValueLocal}
          setValue={setMaxValueLocal}
          error={error}
          setIsChangeValue={setIsChangeValueHandler} />
        <Input
          title={"Start value"}
          value={startValueLocal}
          setValue={setStartValueLocal}
          error={error}
          setIsChangeValue={setIsChangeValueHandler} />
        {
          error && <span className={classes.countSpanError}>{error}</span>
        }
      </div>
      <div className={classes.countCanvasApi}>
        <Button
          title={'Set'}
          onClick={onClickHandler}
          disabled={error !== '' || !isChangeValue} />
      </div>
    </div>
  );
}
