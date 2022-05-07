import React from 'react'
import { Route, Routes } from 'react-router'
import { Cart } from '../Cart/Cart'
import Footer from '../Footer/Footer'
import { Home } from '../Home/Home'
import { Nav1 } from '../NavComponents/Nav1'
import Payment from '../payment/Payment'
import { Summary } from '../payment/Summary'
import { EachProduct } from '../Product/EachProduct'
import { Mens } from '../Product/Mens'

export const Routing = () => {
  return (
    <div>
        <Nav1 />
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/products' element = {<Mens />} />
            <Route path = '/products/:id' element = {<EachProduct />} />
            <Route path = '/payment' element = {<Payment />} />
            <Route path = '/cart'  element = {<Cart />} />

        </Routes>

        <Footer />
    </div>
  )
}
