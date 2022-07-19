import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"

const UpdatePage = () => {
   useProtectdPage()
   return (
      <div>
         Atualizar perfil
      </div>
   )
}

export default UpdatePage