import styled from 'styled-components'

export const ScreenContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100vw;
   margin-top: 20vh;
`

export const LogoImage = styled.img`
   width: 110px;
   height: 65px;
`

export const SubTitle = styled.p`
   font-weight: bold;
   font-size: 16px;
   margin-top: 5vh;
   margin-bottom: 3vh;
`

export const InputsContainer = styled.form`
   display: flex;
   flex-direction: column;
   gap: 15px;
   align-items: center;
   width: 80vw;
   max-width: 450px;
   margin-bottom: 3vh;

   button{
      text-transform: capitalize;
      font-size: 16px;
      font-weight: bold;
   }
`

export const SignUpButton = styled.span`
   text-transform: none;
   font-size: 16px;
   font-weight: bold;
`