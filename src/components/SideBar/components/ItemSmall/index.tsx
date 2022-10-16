import React from 'react';
import Styles from './styles.module.css';
import { Price } from '../../../ui/Price';
import { useDispatch } from 'react-redux';
import { addToCartData, decrementOfCartData, deleteOfCartData } from '../../../../app/cartSlice';

export const ItemSmall = ({item}) => {
  const dispatch = useDispatch()

  const addProductInCart = () => {
    dispatch(addToCartData(item))
  }
  const deleteProductInCart = () => {
    dispatch(deleteOfCartData(item))
  }
  const decrementProductInCart = () => {
    dispatch(decrementOfCartData(item))
  }
  return (
    <div className={Styles.item}>
       <img className={Styles.item__image} src={item.image} alt='img' />
       <div>
          <h6 className={Styles.item__title}>{item.name}</h6>
          <div className={Styles.item__wrapper}>
            <button 
              onClick={decrementProductInCart} 
              className={`${Styles.item__button} ${Styles.item__button_minus}`}
              disabled={item.count === 1} />
            <span className={Styles.item__count}>{item.count}</span>
            <button onClick={addProductInCart} className={`${Styles.item__button} ${Styles.item__button_plus}`} />
            <Price price={item.price * item.count} />
          </div>
       </div>
       <button onClick={deleteProductInCart} className={Styles.item__delete} />
    </div>
  )
}
