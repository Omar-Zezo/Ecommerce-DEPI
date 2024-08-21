import { AUTH_USER, GET_AUTH } from "../types"
import {baseURL} from '../../api/baseURL'

export const authUser = (body)=> async(dispatch)=>{
    try{
        const config = {headers: { 'Content-Type': 'application/json' }}
        const res = await  baseURL.post(`/user/login`, body, config)
        dispatch({type: AUTH_USER, payload: res})
    }catch(err){
        dispatch({type: AUTH_USER, payload: err.response})
    }
}


export const getAuthUser = (token)=> async(dispatch)=>{
    try{
        const config = {headers: {'Authorization': `Bearer ${token}`}}
        const res = await  baseURL.get(`/auth/me`, config)
        dispatch({type: GET_AUTH, payload: res})
    }catch(err){
        dispatch({type: GET_AUTH, payload: err.response})
    }
}
