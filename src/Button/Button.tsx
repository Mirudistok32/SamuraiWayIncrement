import React from 'react';
import s from './Button.module.scss';


type PropsType = {
  title: string
  error?: string
  isClickMe?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const Button: React.FC<PropsType> = (props) => {

  const { title, error, disabled, isClickMe, onClick } = props

  let mainClass = s.button
  if (error) mainClass += ` ` + s.button__error
  if (disabled) mainClass += ` ` + s.button__disabled
  if (isClickMe) mainClass += ` ` + s.button__clickMe

  const onClickHandler = () => {
    onClick && onClick()
  }


  return (
    <button className={mainClass} onClick={onClickHandler} disabled={disabled} >
      {
        title
      }
    </button>
  );
}
