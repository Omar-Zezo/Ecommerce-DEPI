import {GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY, SEARCH_PRODUCTS} from '../types'

const initState = {
    products: [],
    productsByCategory: [],
    searchProducts:[]
}


const productsReducer = (state = initState, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {products : action.payload}
        case GET_ALL_PRODUCTS_CATEGORY:
            return {productsByCategory: action.payload}
        case SEARCH_PRODUCTS:
            return {searchProducts: action.payload}        
        default:
            return state    
    }
}

export default productsReducer