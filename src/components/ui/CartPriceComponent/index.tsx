import React from 'react';
import Styles from './styles.module.css';
import { ButtonCart } from '../ButtonCart';
import { Price } from '../Price';

interface CartPriceComponentProps {
  price: number
  large?: boolean
  onClick: () => void
}

export const CartPriceComponent: React.FC<CartPriceComponentProps> = ({price, onClick, large}) => {
  return (
    <div className={Styles.container}>
        <ButtonCart onClick={onClick} />
        <Price price={price} large={large} />
    </div>
  )
}