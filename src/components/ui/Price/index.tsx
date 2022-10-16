import React from 'react';
import Styles from './styles.module.css';

interface PriceProps {
  price: number
  large?: boolean
}

export const Price: React.FC<PriceProps> = ({price, large}) => {

  return (
    <span className={`${Styles.price} ${large && Styles.price_l}`}>{`$ ${price}`}</span>
  )
}
