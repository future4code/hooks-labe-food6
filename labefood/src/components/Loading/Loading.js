import React from "react";
import Loading from '../../assets/myLoading.svg'
import { LoadingContainer } from "./styled"

const Loading = () => {
   return (
      <LoadingContainer>
         <img src={Loading} alt='imagem de loading' />
      </LoadingContainer>
   )
}

export default Loading