import React from 'react'
import logo from "../../assets/logo.png"
import LoginForm from "./LoginForm";
import { ScreenContainer, LogoImage, SubTitle, SignUpButton } from "./styled";
import { Button } from "@material-ui/core";

const LoginPage = () => {
   return (
      <ScreenContainer>
         <LogoImage src={logo} alt={"Imagem da logo Rappi4"} />

         <SubTitle> Entrar </SubTitle>

         <LoginForm />

         <Button
            onClick={() => null}
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