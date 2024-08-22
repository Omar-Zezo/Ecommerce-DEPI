import { baseURL } from "../../api/baseURL"
import {GET_ALL_CATEGORIES} from "../types"


export const getAllCategories = ()=> async(dispatch)=>{
    try{
        const res = await baseURL.get('/products/categories')
        dispatch({type: GET_ALL_CATEGORIES, payload: res})
    }catch(err){
        dispatch({type: GET_ALL_CATEGORIES, payload: err.response})
    }
}