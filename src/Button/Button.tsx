import React from 'react';
import './Button.scss';


type PropsType = {
  title: string
  onClick: () => void
  disabled?: boolean
  isMaxValue?: boolean
}

export const Button: React.FC<PropsType> = (props) => {

  const { title, onClick, disabled, isMaxValue } = props


  let classButton = 'button'
  if (disabled) {
    classButton += ` button__disabled`
  }
  if (isMaxValue) {
    classButton += ` button__max`
  }

  return (
    <button className={classButton} onClick={onClick} disabled={disabled}>
      {
        title
      }
    </button>
  );
}
