import {applyMiddleware, createStore} from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initState = {}

const middelware = [thunk]

const store = createStore(rootReducer, initState, applyMiddleware(...middelware))

export default store