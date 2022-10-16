import React, { useState } from 'react';
import Styles from './styles.module.css';
import logo from '../../assets/icons/logo.png'
import { NavLink } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import { SideBar } from '../SideBar';
import { ButtonClose } from '../ui/ButtonClose';
import { useSelector } from 'react-redux';

export const Header = () => {
  const cartData = useSelector((state) => state.cart.cartData)
  const { width } = useWindowSize()
  const desktop = width > 768
  const [showCart, setShowCart] = useState(false)
  const toggleCart = () => {
    if (!desktop) {
      setShowCart(!showCart)
    }
  }
  return (
    <>
    <header className={Styles.header}>
      <NavLink className={Styles.logo} to='/'>
        <img src={logo} alt='logo' />
      </NavLink>
      <div className={Styles.header__cart} onClick={toggleCart}>
        <button className={Styles.cart__button} />
       {cartData.length > 0 && <span className={Styles.cart__count}>{cartData.length}</span>}
      </div>
    </header>
    {showCart && <div className={Styles.cart_mobile}>
      <ButtonClose className={Styles.close_mobile} onClick={toggleCart}/>
      <SideBar />
    </div>}
    
    </>
  )
}
