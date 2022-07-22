import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coodinator'
import { DivText, DivTextButton, DivButton } from './styled'

const Header = () => {

   const navigate = useNavigate()

   const [headerText, setHeaderText] = useState("")
   const [headerButton, setHeaderButton] = useState("<")

   return (
      <div>
         {headerButton === "" ?
            <DivText>{headerText}</DivText>
            :
            <>
               {headerText !== ""
                  ?
                  <DivTextButton>
                     <Button onClick={() => goBack(navigate)}> {headerButton} </Button>
                     <p> {headerText} </p>
                  </DivTextButton>
                  :
                  <DivButton>
                     <Button onClick={() => goBack(navigate)}> {headerButton} </Button>
                  </DivButton>
               }
            </>
         }
         <hr />
      </div>
   )
}

export default Header