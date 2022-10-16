import React from 'react';
import Styles from './styles.module.css';


export const ButtonCart = ({onClick}) => {
  return (
    <button className={Styles.button} onClick={onClick} />
  )
}
