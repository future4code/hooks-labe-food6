import React from 'react'
import logo from "../../assets/logo.png"
import LoginForm from "./LoginForm"
import { ScreenContainer, LogoImage, SubTitle, SignUpButton } from "./styled"
import { Button } from "@material-ui/core"
import { useNavigate } from 'react-router-dom'
import { goTosignUpPage } from '../../routes/coodinator'

const LoginPage = () => {
   const navigate = useNavigate()
   return (

      <ScreenContainer>
         <LogoImage src={logo} alt={"Imagem da Future Eats"} />

         <SubTitle> Entrar </SubTitle>

         <LoginForm />

         <Button
            onClick={() => goTosignUpPage(navigate)}
            type={"submit"}
            variant={"text"}
            color={"inherit"}
         >
            <SignUpButton>  Não possui cadastro? Clique aqui. </SignUpButton>
         </Button>
      </ScreenContainer >
   )
}

export default LoginPage