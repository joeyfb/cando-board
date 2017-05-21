import { combineReducers } from 'redux'
import lists from './lists'

const boardApp = combineReducers({
  lists
})

export default boardApp
