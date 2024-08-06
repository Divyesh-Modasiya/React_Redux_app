import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import Cart from './Cart'
import About from './About'
import Contact from './Contact'

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default AllRoutes
