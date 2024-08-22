import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import categoriesReducer from "./categoriesReducer";


const rootReducer = combineReducers({
    productsReducer: productsReducer,
    authReducer : authReducer,
    categoriesReducer: categoriesReducer
})

export default rootReducer