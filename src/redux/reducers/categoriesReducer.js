import {GET_ALL_CATEGORIES} from "../types"

const initState = {
    categories: []
}


const categoriesReducer = (state= initState, action)=>{
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {categories: action.payload}
        default:
            return state    
    }
}


export default categoriesReducer