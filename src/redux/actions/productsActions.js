import { baseURL } from '../../api/baseURL'
import {ADD_PRODUCT, EDIT_PRODUCT, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY, SEARCH_PRODUCTS, DELETE_PRODUCT, GET_SINGLE_PRODUCT} from '../types'

export const getAllProducts = (str)=> async(dispatch)=>{
    try{
        const res = await baseURL.get(`/products?${str}`)
        dispatch({type: GET_ALL_PRODUCTS, payload: res.data})
    }catch(err){
        dispatch({type: GET_ALL_PRODUCTS, payload: err.response})
    }
}


export const addProduct = (body)=> async(dispatch)=>{
    try{
        const config = {headers: { "Content-Type": "application/json" }}
        const res = await baseURL.post(`/products/add`, body, config)
        dispatch({type: ADD_PRODUCT, payload: res.data})
    }catch(err){
        dispatch({type: ADD_PRODUCT, payload: err.response})
    }
}


export const editProduct = (id, body)=> async(dispatch)=>{
    try{
        const config = {headers: { "Content-Type": "application/json" }}
        const res = await baseURL.put(`/products/${id}`, body, config)
        dispatch({type: EDIT_PRODUCT, payload: res.data})
    }catch(err){
        dispatch({type: EDIT_PRODUCT, payload: err.response})
    }
}

export const deleteProduct = (id)=> async(dispatch)=>{
    try{
        const res = await baseURL.delete(`/products/${id}`)
        dispatch({type: DELETE_PRODUCT, payload: res.data})
    }catch(err){
        dispatch({type: DELETE_PRODUCT, payload: err.response})
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

export const getSingleProduct = (id)=> async(dispatch)=>{
    try{
        const res = await baseURL.get(`/products/${id}`)
        dispatch({type: GET_SINGLE_PRODUCT, payload: res.data})
    }catch(err){
        dispatch({type: GET_SINGLE_PRODUCT, payload: err.response})
    }
}