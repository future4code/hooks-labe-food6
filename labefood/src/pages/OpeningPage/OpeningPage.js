import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import openHome from "../../assets/openHome.png"
import { goToLoginPage } from "../../routes/coodinator"
import { OpeningDiv } from "./styled"

const OpeningPage = () => {

   const navigate = useNavigate()
   useEffect(() => {
      setTimeout(() => { goToLoginPage(navigate) }, 5000)
   }, [navigate])

   return (
      <OpeningDiv>
         <img src={openHome} alt="logo Future Eats" />
      </OpeningDiv>
   )
}

export default OpeningPage