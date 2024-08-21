import { AUTH_USER, GET_AUTH } from "../types"

const initState = {
    auth: [],
    getAuth: []
}


const authReducer = (state = initState, action)=>{
    switch(action.type){
        case AUTH_USER:
            return {auth: action.payload}
        case GET_AUTH:
            return {getAuth: action.payload}    
        default:
            return state    
    }
}

export default authReducer