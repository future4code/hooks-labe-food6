import React from "react"
import { RestaurantCard, RestaurantImageDiv, RestaurantInfosDiv } from "./styled"
import { goToDetailsPage } from '../../../routes/coodinator'
import { useNavigate } from 'react-router-dom'


{/* infornações sobre o restaurante */}

const CardRestaurant = ({restaurant}) => {
   const navigate = useNavigate()

   return (
      <RestaurantCard onClick={()=>goToDetailsPage(navigate, restaurant.id)}>
         {/* logo do restaurante */}
         <RestaurantImageDiv>
            <img src={restaurant.logoUrl} />
         </RestaurantImageDiv>
         
         {/* nome do restaurante */}
         <RestaurantInfosDiv>
            <h2>{restaurant.name}</h2>
            <div>
               {/* tempo de delivery */}
               <span>{restaurant.deliveryTime} min</span>
               {/* preço de delivery */}
               <span>Frete-R${restaurant.shipping},00</span>
            </div>
         </RestaurantInfosDiv>
      </RestaurantCard>
   )
}

export default CardRestaurant