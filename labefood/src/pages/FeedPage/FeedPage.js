import React, { useEffect, useState } from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"
import { Footer } from "../../components/Footer/Footer"
import useRequestData from '../../hooks/useRequestPage'
import { BASE_URL } from '../../constants/urls'
import {ScreenContainer,  SearchingHeaderDiv, SearchInput, SearchLabel} from './styled'
import IsLoading from './IsLoading'
import useForm from '../../hooks/useForm'
import Restaurants from './Restaurants'
import RestaurantsCategories from './RestaurantsCategories'

const FeedPage = () => {
   useProtectdPage()

   const [restaurantsData, isLoading] = useRequestData( undefined, `${BASE_URL}/restaurants`)
   const restaurants = !isLoading && restaurantsData && restaurantsData.restaurants

   // categoria selecionada
   const [restaurantCategory, setRestaurantCategory] = useState('')

   const [searching, setSearching] = useState(false)
   const {form, onChange, clear} = useForm({search: ''})
   const {search} = form

   // sai do modo de busca
   const back = () => {
      clear()
      setSearching(state => !state)
   }

   return (
      <div>
         <ScreenContainer>
            <div>

               {searching? <SearchingHeaderDiv>
                  <span 
                  onClick={back}
                  className="material-icons">arrow_back_ios</span>
                  <h1>Busca</h1>
               </SearchingHeaderDiv> 
               : 
               <h1>FutureEats</h1>}

               <SearchLabel>
                  <span class="material-icons">
                  search
                  </span>
                  <SearchInput 
                  name='search'
                  value={search}
                  onChange={onChange}
                  // quando focado entra no modo de busca
                  onFocus={()=>setSearching(state => !state)}
                  />
               </SearchLabel>

               {!searching && <RestaurantsCategories setRestaurantCategory={setRestaurantCategory} restaurantCategory={restaurantCategory} restaurants={restaurants} />}

               {isLoading? <IsLoading /> : restaurants.length>0 && <Restaurants searching={searching} search={search} restaurantCategory={restaurantCategory} restaurants={restaurants} />}

            </div>
         </ScreenContainer>
         <Footer page='home' />
      </div>
   )
}

export default FeedPage