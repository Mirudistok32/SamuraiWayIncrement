import React from 'react';
import './CountPanel.scss';


type PropsType = {
  count: number
  activeClass: boolean
}

export const CountPanel: React.FC<PropsType> = (props) => {

  const { count, activeClass } = props


  let classPanel = 'countPanel'
  if (activeClass) {
    classPanel += ' countPanel__max'
  }

  return (
    <div className={classPanel}>
      {
        count
      }
    </div>
  );
}
