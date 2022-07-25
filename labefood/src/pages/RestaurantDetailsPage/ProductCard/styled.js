import styled from "styled-components";
import { lightColor, primaryColor } from "../../../constants/colors";

export const CardContainer = styled.div`
display: flex;
width: 100%;
min-height: 125px;
margin-bottom: 3vh;
border-radius: 10px;
border: 2px solid ${lightColor};
border-left: none;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
overflow: hidden;
`

export const ImageContainer = styled.div`
min-height: 100%;
width: 28%;
overflow: hidden;
border-left: 1px solid ${lightColor};
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;

img{
    object-fit: cover;
    height: 100%;
    width: 100%;
}
`

export const InfosContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
flex-grow: 1;
justify-content: space-between;
padding-left: 2vh;
padding-top: 2vh;


h3{
    color: ${primaryColor};
    margin-bottom: 1vh;
}


`

export const DescriptionContainer = styled.div`
color: ${lightColor};
max-height: 30%;

span{
    font-size: 12px;
    font-weight: 700;
}
`

export const PriceContainer = styled.div`
font-weight: 700;

`
