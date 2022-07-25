import styled from 'styled-components'
import { lightColor } from '../../constants/colors'

export const ScreenContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 100vw;
   min-height: 100vh;
   
   
   
   &>div{
    padding: 5vh 2vh;
    display: flex;
    width: 350px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${lightColor};
    border-left: 1px solid ${lightColor};
   }
`

export const HeaderDiv = styled.div`
display: flex;
width: 95%;
align-items: center;
margin-bottom: 4vh;

span{
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

h1{
    margin: 0 auto;
}
`
