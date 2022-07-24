import React from "react"
import { RestaurantCard, RestaurantImageDiv, RestaurantInfosDiv } from "./styled"


{/* infornações sobre o restaurante */}

const CardRestaurant = ({restaurant}) => {

   return (
      <RestaurantCard>
         {/* logo do restaurante */}
         <RestaurantImageDiv>
            <img src={restaurant.logoUrl} />
         </RestaurantImageDiv>
         
         {/* nome do restaurante */}
         <RestaurantInfosDiv>
            <h2>{restaurant.name}</h2>
            <div>
                <span>{restaurant.category}</span>
            </div>
            <div>
               {/* tempo de delivery */}
               <span>{restaurant.deliveryTime} min</span>
               {/* preço de delivery */}
               <span>Frete-R${restaurant.shipping},00</span>
            </div>
            <div>
                <span>{restaurant.address}</span>
            </div>
         </RestaurantInfosDiv>
      </RestaurantCard>
   )
}

export default CardRestaurant