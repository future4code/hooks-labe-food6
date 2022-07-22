import styled from 'styled-components'

export const ScreenContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100vw;
   margin-top: 20vh;
`

export const LogoImage = styled.img`
   width: 115px;
   height: 70px;
`

export const SubTitle = styled.p`
   font-weight: bold;
   font-size: 20px;
   margin-top: 4vh;
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

      img {
         max-width: 50px; 
         max-height: 50px;
      } 
   }
`

export const SignUpButton = styled.span`
   text-transform: none;
   font-size: 16px;
   font-weight: bold;
`