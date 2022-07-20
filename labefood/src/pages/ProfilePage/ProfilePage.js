import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"
import { Footer } from "../../components/Footer/Footer"

const ProfilePage = () => {
   useProtectdPage();
   return (
      <div>
         <h1>Página de Perfil</h1>
         <Footer page='profile' />
      </div>
   )
}

export default ProfilePage