import React from "react"
import { CardContainer, ImageContainer, InfosContainer, DescriptionContainer, PriceContainer } from "./styled"

export const ProductCard = ({product}) => {

   return (
      <CardContainer>
         <ImageContainer>
            <img src={`${product.photoUrl}`} />
         </ImageContainer>
         <InfosContainer>
               <h3>{product.name}</h3>
            <DescriptionContainer>
               <span>{product.description}</span>
            </DescriptionContainer>
            <PriceContainer>
               <span>R$ {product.price}</span>
            </PriceContainer>
         </InfosContainer>
      </CardContainer >
   )
}