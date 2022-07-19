import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"

const CartPage = () => {
   useProtectdPage()
   return (
      <div>
         <h1>Carrinho</h1>
      </div>
   )
}

export default CartPage