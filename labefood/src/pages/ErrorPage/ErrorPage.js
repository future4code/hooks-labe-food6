import React from 'react'
import { ErrorPageContainer, ErrorImage } from './styled'
import errorPage from '../../assets/errorPage.png'
import { Button } from "@material-ui/core"
import { goToFeedPage } from '../../routes/coodinator'
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
   const navigate = useNavigate()
   return (
      <ErrorPageContainer>
         <ErrorImage src={errorPage} />
         {/* <Typography color={"black"} variant={"h4"} align={"center"}> Página Não Encontrada </Typography> */}
         <Button
            sx={{
               color: '#000000'
            }}
            onClick={() => goToFeedPage(navigate)}> Voltar ao feed
         </Button>
      </ErrorPageContainer>
   )
}

export default ErrorPage