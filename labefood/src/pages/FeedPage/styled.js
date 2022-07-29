import styled from "styled-components"
import {primaryColor, lightColor} from '../../constants/colors'

export const ScreenContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 100vw;
   height: 90vh;
   
   &>div{
    padding: 5vh 0;
    display: flex;
    width: 350px;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${lightColor};
    border-left: 1px solid ${lightColor};

   }
`

export const CategoriesDiv = styled.div`
display: flex;
width: 100%;
height: 4vh;
padding: 1vh 0;
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
margin: 0 20px;
font-weight: 600;
`

export const SelectedCategorie = styled(UnSelectedCategorie)`
color: ${primaryColor};
`

export const RestaurantCardsDiv = styled.div`
width: 100%;
max-height: 50vh;
padding: 2vh 0;
overflow-y: scroll;

&::-webkit-scrollbar {
  display:none;           
}

&::-webkit-scrollbar-track {
    display:none;           
}

&::-webkit-scrollbar-thumb {
    display:none;           
}

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
    cursor: pointer;
}

h1{
    margin: 0 auto;
}
`

export const SearchInput = styled.input`
height: 4vh;
margin-left: 1vw;
border: none;

&:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
` 

export const SearchLabel = styled.label`
display: flex;
align-items: center;
margin-top: 4vh;
width: 95%;
height: 8vh;
padding: 2vh;
cursor: text;
border: 2px solid ${lightColor};
border-radius: 5px;

span{
    color: ${lightColor};
}
`