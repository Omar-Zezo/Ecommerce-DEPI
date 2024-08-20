import { baseURL } from '../../api/baseURL'
import {GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY, SEARCH_PRODUCTS} from '../types'

export const getAllProducts = (str)=> async(dispatch)=>{
    try{
        const res = await baseURL.get(`/products?${str}`)
        dispatch({type: GET_ALL_PRODUCTS, payload: res.data})
    }catch(err){
        dispatch({type: GET_ALL_PRODUCTS, payload: err.response})
    }
}


export const getProductsSearch = (str)=> async(dispatch)=>{
    try{
        const res = await baseURL.get(`/products/search?${str}`)
        dispatch({type: SEARCH_PRODUCTS, payload: res.data})
    }catch(err){
        dispatch({type: SEARCH_PRODUCTS, payload: err.response})
    }
}


export const getAllProductsByCategory = (category, str)=> async(dispatch)=>{
    try{
        const res = await baseURL.get(`/products/category/${category}?${str}`)
        dispatch({type: GET_ALL_PRODUCTS_CATEGORY, payload: res.data})
    }catch(err){
        dispatch({type: GET_ALL_PRODUCTS_CATEGORY, payload: err.response})
    }
}