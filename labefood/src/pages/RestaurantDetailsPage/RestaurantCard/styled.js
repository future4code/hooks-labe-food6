import styled from "styled-components";
import {primaryColor, lightColor} from '../../../constants/colors'

export const RestaurantCard = styled.div`
width: 100%;
height: 215px;
margin: 0 auto;
border-radius: 8px;
border: none;
margin-bottom: 3vh;

`

export const RestaurantImageDiv = styled.div`
height: 60%;
width: 100%;


img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
`

export const RestaurantInfosDiv = styled.div`
width: 100%;
height: 50%;
padding:2% 0;

h2{
    margin-bottom: 3%;
    color: ${primaryColor};
}

span{
        color: ${lightColor};
        font-weight: 500;
    }

div:nth-of-type(2){
    span:nth-of-type(1){
        margin-right: 15%;
    }
}

div{
    margin-bottom:0.8vh; 
}
`

