import React, { ChangeEvent } from 'react';
import s from './Input.module.scss';


type PropsType = {
  title: string
  value: number
  error?: string
  setValue: (value: number) => void
  setIsChangeValue?: () => void
  localStorage: (title: string, value: string) => void
}

export const Input: React.FC<PropsType> = React.memo((props) => {

  const { title, value, error, setValue, setIsChangeValue, localStorage } = props

  let mainClass = s.main
  let mainClassTitle = s.main__title
  let mainClassInput = s.main__input
  if (error) mainClassInput += ` ` + s['main__input-error']

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value)
    setIsChangeValue && setIsChangeValue()
    localStorage(title, e.currentTarget.value)
  }

  return (
    <>
      <label className={mainClass} >
        <span className={mainClassTitle}>{title}</span>
        <input className={mainClassInput} type="number" min="-1" value={value} onChange={onChangeHandler} />
      </label>
    </>
  );
})
