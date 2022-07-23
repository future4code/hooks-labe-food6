import { restaurants } from "./test";

const defineAllCategories = ()=>{
    const categories = []

    for(let item of restaurants){
        if(!categories.includes(item.category)) categories.push(item.category)
    }

    return categories
}

export const categories = defineAllCategories()
