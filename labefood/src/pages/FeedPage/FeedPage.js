import React, { useState } from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"
import { Footer } from "../../components/Footer/Footer"
import useRequestData from '../../hooks/useRequestPage'
import { BASE_URL } from '../../constants/urls'
import {ScreenContainer, SelectedCategorie, UnSelectedCategorie, CategoriesDiv, SearchingHeaderDiv, SearchInput, SearchLabel} from './styled'
import IsLoading from './IsLoading'
import {restaurants} from './test'
import { categories } from './restaurantsInfos'
import useForm from '../../hooks/useForm'
import Restaurants from './Restaurants'

const FeedPage = () => {
   useProtectdPage()

   // categoria selecionada
   const [restaurantCategory, setRestaurantCategory] = useState(categories[0])

   const [searching, setSearching] = useState(false)
   const {form, onChange, clear} = useForm({search: ''})
   const {search} = form

   // const [restaurantsData, isLoading] = useRequestData( undefined, `${BASE_URL}/restaurants`)
   // const restaurants = !isLoading && restaurantsData && restaurantsData.restaurants

   const isLoading = false

   const CategoriesButtons = categories.length>0 && categories.map((categorie)=>{
      return categorie===restaurantCategory? <SelectedCategorie onClick={()=>setRestaurantCategory(categorie)}>{categorie}</SelectedCategorie> : <UnSelectedCategorie onClick={()=>setRestaurantCategory(categorie)}>{categorie}</UnSelectedCategorie>
   })

   return (
      <div>
         <ScreenContainer>
            <div>

               {searching? <SearchingHeaderDiv>
                  <span 
                  onClick={()=>setSearching(state => !state)}
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
                  onFocus={()=>setSearching(state => !state)}
                  />
               </SearchLabel>

               {!searching && <CategoriesDiv>
                  {categories.length>0 && CategoriesButtons}
               </CategoriesDiv>}

               {isLoading? <IsLoading /> : restaurants.length>0 && <Restaurants searching={searching} search={search} restaurantCategory={restaurantCategory} restaurants={restaurants} />}

            </div>
         </ScreenContainer>
         <Footer page='home' />
      </div>
   )
}

export default FeedPage