import { combineReducers } from "redux";
import productsReducer from "./productsReducer";


const rootReducer = combineReducers({
    productsReducer: productsReducer,
})

export default rootReducer