import {GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY} from '../types'

const initState = {
    products: [],
    productsByCategory: []
}


const productsReducer = (state = initState, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {products : action.payload}
        case GET_ALL_PRODUCTS_CATEGORY:
            return {productsByCategory: action.payload}    
        default:
            return state    
    }
}

export default productsReducer