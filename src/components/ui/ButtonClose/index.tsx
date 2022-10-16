import React from 'react';
import Styles from './styles.module.css';

interface ButtonCloseProps {
  className?: string
  onClick: () => void
}
export const ButtonClose: React.FC<ButtonCloseProps> = ({onClick, className}) => {
  return (
    <button className={`${Styles.button} ${className}`} onClick={onClick} />
  )
}
