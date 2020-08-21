import React from 'react';
import s from './CountPanel.module.scss';


type PropsType = {
  count: number
  maxValue: number
  error: string
  isChangeValue: boolean
}

export const CountPanel: React.FC<PropsType> = (props) => {

  const { count, maxValue, error, isChangeValue } = props

  let mainClass = s['count-panel']
  let mainClassError = s['count-panel__error']
  if (count >= maxValue) mainClass += ` ` + s['count-panel__max-value']

  return (
    <div className={mainClass}>
      {
        !error && !isChangeValue && count
      }
      {
        error && <span className={mainClassError}>Incorrect value!</span>
      }
      {
        isChangeValue && !error && <span className={mainClassError}>Press 'set'</span>
      }
    </div>
  );
}
