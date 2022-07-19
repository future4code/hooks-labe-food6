import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"

const RestaurantDetailsPage = () => {
   useProtectdPage()
   return (
      <div>
         Página de detalhe do restaurante
      </div>
   )
}

export default RestaurantDetailsPage