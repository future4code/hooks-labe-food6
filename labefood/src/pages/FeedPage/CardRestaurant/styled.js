import styled from "styled-components";
import {primaryColor, lightColor} from '../../../constants/colors'

export const RestaurantCard = styled.div`
width: 90%;
height: 170px;
margin: 0 auto;
border-radius: 8px;
border: 1px solid ${lightColor};
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
margin-bottom: 3vh;
`

export const RestaurantImageDiv = styled.div`
height: 60%;
width: 100%;

img{
    width: 100%;
    height: 100%;
}
`

export const RestaurantInfosDiv = styled.div`
width: 100%;
height: 50%;
padding:2%;


h2{
    margin-bottom: 3%;
    color: ${primaryColor};
}

div{
    display: flex;
    justify-content: space-between;

    span{
        color: ${lightColor};
    }
}
`