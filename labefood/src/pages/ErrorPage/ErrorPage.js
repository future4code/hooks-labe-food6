import React from 'react'
import { ErrorPageContainer, ErrorImage } from './styled'
import errorPage from '../../assets/errorPage.png'
// import { Typography } from "@material-ui/core"

const ErrorPage = () => {
   return (
      <ErrorPageContainer>
         <ErrorImage src={errorPage} />
         {/* <Typography color={"black"} variant={"h4"} align={"center"}> Página Não Encontrada </Typography> */}
      </ErrorPageContainer>
   )
}

export default ErrorPage