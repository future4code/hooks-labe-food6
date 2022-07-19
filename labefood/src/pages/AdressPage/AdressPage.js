import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"

const AdressPage = () => {
   useProtectdPage()
   return (
      <div>
         <h1>Página de endereço</h1>
      </div>
   )
}

export default AdressPage