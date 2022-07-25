import { useEffect, useState } from "react"
import { SelectedCategorie, UnSelectedCategorie, CategoriesDiv, } from './styled'


const RestaurantsCategories= ({restaurants, restaurantCategory, setRestaurantCategory}) => {
 // categorias dos restaurantes
 const [categories , setCategories] = useState([])
   
 // define categorias
 const defineAllCategories = (restaurants)=>{
    const categories = []

    for(let item of restaurants){
        if(!categories.includes(item.category)) categories.push(item.category)
    }

    return categories
}

// seta categorias   
useEffect(()=>{
    restaurants.length>0 && setCategories(defineAllCategories(restaurants))
 }, [restaurants])

 const CategoriesButtons = categories.length>0 && categories.map((categorie)=>{
    return categorie===restaurantCategory? <SelectedCategorie key={categorie} onClick={()=>setRestaurantCategory('')}>{categorie}</SelectedCategorie> : <UnSelectedCategorie key={categorie} onClick={()=>setRestaurantCategory(categorie)}>{categorie}</UnSelectedCategorie>
 })

 return<CategoriesDiv>
 {categories.length>0 && CategoriesButtons}
</CategoriesDiv>
}

export default RestaurantsCategories