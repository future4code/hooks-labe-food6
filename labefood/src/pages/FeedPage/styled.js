import styled from "styled-components"
import {primaryColor, lightColor} from '../../constants/colors'

export const ScreenContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 100vw;
   height: 92vh;
   padding: 5vh 0;
   overflow-y: scroll;

   &>div{
    display: flex;
    width: 350px;
    flex-direction: column;
    align-items: center;
   }
`

export const CategoriesDiv = styled.div`
display: flex;
width: 100%;
overflow-x: scroll;
margin: 5vh 0;

&::-webkit-scrollbar {
  display:none;           
}

&::-webkit-scrollbar-track {
    display:none;           
}

&::-webkit-scrollbar-thumb {
    display:none;           
}
`

export const UnSelectedCategorie = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
margin: 0 1vw;
font-weight: 600;
`

export const SelectedCategorie = styled(UnSelectedCategorie)`
color: ${primaryColor};
`

export const RestaurantCardsDiv = styled.div`
width: 100%;
flex-grow: 1;
padding: 2vh 0;

display: flex;
flex-direction: column;
`

export const SearchSpan = styled.span`
align-self: center;
font-weight: 600;
margin-top: 4vh;
`

export const SearchingHeaderDiv = styled.div`
display: flex;
width: 95%;
align-items: center;

span{
    font-size: 16px;
    font-weight: 600;
}

h1{
    margin: 0 auto;
}
`

export const SearchInput = styled.input`
margin-top: 4vh;
width: 95%;
height: 8vh;
padding: 2vh;
` 