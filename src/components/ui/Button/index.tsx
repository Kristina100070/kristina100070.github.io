import React from 'react'
import Styles from './styles.module.css'

export const Button = ({value, onClick}) => {
  return (
    <button className={Styles.button} onClick={onClick}>{value}</button>
  )
}

