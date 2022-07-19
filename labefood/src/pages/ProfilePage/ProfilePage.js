import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"

const ProfilePage = () => {
   useProtectdPage();
   return (
      <div>
         Página de Perfil
      </div>
   )
}

export default ProfilePage