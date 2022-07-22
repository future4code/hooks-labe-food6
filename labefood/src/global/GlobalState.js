import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'

export default function GlobalState(props) {

   return (
      <GlobalContext.Provider value={{}}>
         {props.children}
      </GlobalContext.Provider>
   )
}