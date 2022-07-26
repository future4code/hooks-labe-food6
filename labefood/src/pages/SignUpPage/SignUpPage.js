import React from "react"
import Header from "../../components/Header/Header"
import SignUpForm from "./SignUpForm/SignUpForm";
import { ContainerSingup, Title } from "./styled";
import logo from "../../assets/logo.png"

function SignUpPage() {

   return (
      <div>
         <Header />

         <ContainerSingup>
            <img src={logo} alt={"Imagem logotipo Future Eats"} />

            <Title> Cadastrar </Title>

            <SignUpForm />
         </ContainerSingup>
      </div>
   )
}

export default SignUpPage;