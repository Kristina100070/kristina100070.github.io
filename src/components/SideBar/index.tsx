import React from 'react';
import { ItemSmall } from './components/ItemSmall';
import Styles from './styles.module.css';
import { Price } from '../ui/Price';
import { useSelector } from 'react-redux';

export const SideBar = () => {
  const cartData = useSelector((state) => state.cart.cartData)
  const subtotal = useSelector((state) => state.cart.subtotal)
  const tax = 100
  const shipping = 150
  const total = subtotal + tax + shipping

  return (
    <div className={Styles.sidebar}>
          <div className={Styles.sidebar__container}>
            <h2 className={Styles.sidebar__title}>My basket</h2>
            {cartData.length > 0 ? 
            <>{cartData.map((item) => (
               <ItemSmall key={item.id} item={item} />
            ))}</>
             : <p>Your cart is empty</p>}
      </div>
      {cartData.length > 0 &&
       <div className={Styles.sidebar__container}>
        <div className={Styles.sidebar__wrapper}>
          <p className={Styles.sidebar__field}>Subtotal</p>
          <Price price={subtotal} />
        </div>
        <div className={Styles.sidebar__wrapper}>
          <p className={Styles.sidebar__field}>Tax</p>
          <Price price={tax} />
        </div>
        <div className={Styles.sidebar__wrapper}>
          <p className={Styles.sidebar__field}>Shipping</p>
          <Price price={shipping} />
        </div>
        <div className={Styles.sidebar__wrapper}>
          <p className={Styles.sidebar__field_main}>Total</p>
          <Price price={total} />
        </div>
       </div>}
    </div>
  )
}
