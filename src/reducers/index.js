import { combineReducers } from 'redux'
import board from './board'
import lists from './lists'
import cards from './cards'
import moving from './moving'

const boardApp = combineReducers({
  board,
  lists,
  cards,
  moving
})

export default boardApp
