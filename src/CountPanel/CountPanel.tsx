import React from 'react';
import s from './CountPanel.module.scss';


type PropsType = {
  count: number
  maxValue: number
}

export const CountPanel: React.FC<PropsType> = (props) => {

  const { count, maxValue } = props

  let mainClass = s['count-panel']
  if(count >= maxValue) mainClass += ` ` + s['count-panel__max-value'] 

  return (
    <div className={mainClass}>
      {
        count
      }
    </div>
  );
}
