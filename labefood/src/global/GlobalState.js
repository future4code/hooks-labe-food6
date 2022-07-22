import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'

export default function GlobalState(props) {

   //-- HEADER --//
   const [headerText, setHeaderText] = useState("")
   const [headerButton, setHeaderButton] = useState("<")




   //-- Constantes para organização --//
   const states = { headerText, headerButton }
   const setters = { setHeaderText, setHeaderButton }

   return (
      <GlobalContext.Provider value={{ states, setter }}>
         {props.children}
      </GlobalContext.Provider>
   )
}