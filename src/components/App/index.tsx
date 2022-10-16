import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../Header'
import { Catalog } from '../../pages/Catalog'
import { ProductById } from '../../pages/ProductById'
import { useDispatch } from 'react-redux'
import { getSaveCartData, getSaveTotalCart } from '../../app/cartSlice'


export const App = () => {
  const saveCartData = JSON.parse(localStorage.getItem('cart'))
  const saveTotalCart = JSON.parse(localStorage.getItem('total'))
  const dispatch = useDispatch()
  useEffect(() => {
    if (saveCartData) {
      dispatch(getSaveCartData(saveCartData))
    dispatch(getSaveTotalCart(saveTotalCart))
    }
  })
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />}/>
        <Route path='/:id' element={<ProductById />}/>
      </Routes>
    </BrowserRouter>
  )
}
