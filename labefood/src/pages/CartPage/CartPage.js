import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"
import { Footer } from "../../components/Footer/Footer"

const CartPage = () => {
   useProtectdPage()
   return (
      <div>
         <h1>Carrinho</h1>
         <Footer page='cart' />
      </div>
   )
}

export default CartPage