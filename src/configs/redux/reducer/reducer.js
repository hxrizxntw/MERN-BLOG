import { combineReducers } from 'redux'
import globalReducer from './globalReducer'
import homeReducer from './homeReducer'
import createPostReducer from './createPostReducer'

const reducer = combineReducers({ homeReducer, globalReducer, createPostReducer })

export default reducer