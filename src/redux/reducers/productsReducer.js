import {GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY, SEARCH_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, GET_SINGLE_PRODUCT} from '../types'

const initState = {
    products: [],
    singleProduct: [],
    productsByCategory: [],
    searchProducts:[],
    addProduct: [],
    editProduct: [],
    delete: []
}


const productsReducer = (state = initState, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {products : action.payload}
        case GET_ALL_PRODUCTS_CATEGORY:
            return {productsByCategory: action.payload}
        case SEARCH_PRODUCTS:
            return {searchProducts: action.payload}
        case ADD_PRODUCT:
            return {addProduct: action.payload}
        case EDIT_PRODUCT:
            return {editProduct: action.payload}
        case DELETE_PRODUCT:
            return {delete: action.payload}
        case GET_SINGLE_PRODUCT:
            return {singleProduct: action.payload}                      
        default:
            return state    
    }
}

export default productsReducer