import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styles from './styles.module.css';
import { catalogList } from '../../mock-data'
import { Wrapper } from '../../components/Wrapper';
import { CartPriceComponent } from '../../components/ui/CartPriceComponent';
import { ButtonBack } from '../../components/ui/ButtonBack';
import { addToCartData } from '../../app/cartSlice';
import { useDispatch } from 'react-redux';

export const ProductById = () => {
  const dispatch = useDispatch()
  const [item, setItem] = useState({})
  type Params = {
      id: string
  }
  const { id } = useParams<Params>()
  useEffect(() => {
    catalogList.forEach((item) => { 
      if (Number(id) === item.id) {
          setItem(item)
      }
    })
  }, [])


const addProductInCart = () => {
  dispatch(addToCartData(item))
}
  return (
    <Wrapper> 
      <div className={Styles.product}>
        <ButtonBack />
        <img className={Styles.product__image} src={item.image} alt='foto' />
        <h4 className={Styles.product__title}>{item.name}</h4>
        <p className={Styles.product__article}>Item model number: MT91547</p>
        <CartPriceComponent onClick={addProductInCart} price={item.price} large />
      </div>
    </Wrapper>
  )
}
