import React from 'react';
import Styles from './styles.module.css';
import { CartPriceComponent } from '../../../../components/ui/CartPriceComponent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartData } from '../../../../app/cartSlice';

export const Item = ({item}) => {
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const goToProductById = () => {
    navigate(`/${item.id}`)
  }
  const addProductInCart = (e) => {
    e.stopPropagation()
    console.log('button');
    dispatch(addToCartData(item))
  }

  return (
    <div className={Styles.item} onClick={goToProductById}>
      <img className={Styles.item__img} src={item.image} alt='foto' />
      <h4 className={Styles.item__title}>{item.name}</h4>
      <CartPriceComponent onClick={addProductInCart} price={item.price} />
    </div>
  )
}