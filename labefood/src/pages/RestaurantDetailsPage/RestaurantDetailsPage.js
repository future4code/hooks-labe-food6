import React, { useEffect } from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"
import { ScreenContainer, HeaderDiv } from './styled'
import { goBack } from '../../routes/coodinator'
import { useNavigate, useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestPage'
import { BASE_URL } from '../../constants/urls'
import CardRestaurant from './RestaurantCard/RestaurantCard'
import IsLoading from '../FeedPage/IsLoading'
import { ProductCard } from './ProductCard/ProductCard'

const RestaurantDetailsPage = () => {
   useProtectdPage()

   const navigate = useNavigate()
   const {restaurantId} = useParams()

   const [restaurantData, isLoading] = useRequestData({}, `${BASE_URL}/restaurants/${restaurantId}`)
   const restaurantDetails = !isLoading && restaurantData.restaurant && restaurantData.restaurant
   console.log(restaurantDetails)

   const ProductsMap = !isLoading && restaurantDetails && restaurantDetails.products.map((product)=>{
      return <ProductCard product={product} />
   })
   return (
      <ScreenContainer>
         <div>
            <HeaderDiv>
               <span 
               onClick={()=>goBack(navigate)}
               className="material-icons">arrow_back_ios
               </span>
               <h1>Restaurante</h1>
            </HeaderDiv>
            {isLoading && <IsLoading />}
            {!isLoading && restaurantDetails && <CardRestaurant restaurant={restaurantDetails} />}
            <h2 style={{borderBottom: '1px solid', width: '100%', margin: '2vh 0'}}>Principais</h2>
            {!isLoading && restaurantDetails && ProductsMap}
         </div>
      </ScreenContainer>
   )
}

export default RestaurantDetailsPage