import React from 'react'
import { Main } from '../Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PostPage } from '../PostPage'


export const App = () => {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path='/:id' element={<PostPage />}/>
    </Routes>
  </BrowserRouter>
  )
}
