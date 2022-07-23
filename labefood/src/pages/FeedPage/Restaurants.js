import CardRestaurant from './CardRestaurant/CardRestaurant'
import { RestaurantCardsDiv, SearchSpan } from './styled'


const Restaurants = ({restaurants, restaurantCategory, search, searching}) => {

    // filtra por categoria
    const restaurantCategoryFilter = (restaurant) => {
        if(!searching) return restaurantCategory? restaurant.category === restaurantCategory : true
        return true
    }
    
    // filtra por nome
    const restaurantSearchFilter = (restaurant) => {
        if(search){
           const restaurantName = restaurant.name.toLowerCase()
           const searchValue = search.toLowerCase()
           return restaurantName.includes(searchValue)
        }
        return true
     }

     const restaurantMap = restaurants.length>0 && 
        restaurants.filter(restaurantCategoryFilter)
        .filter(restaurantSearchFilter)
        .map((restaurant)=>{
        return <CardRestaurant restaurant={restaurant} />
        })

    return <>{searching&&!search? <SearchSpan>Busque por nome de restaurante</SearchSpan> :<RestaurantCardsDiv>{ restaurantMap}</RestaurantCardsDiv>}</>
}

export default Restaurants