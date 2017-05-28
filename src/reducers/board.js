import lists from './lists'
import cards from './cards'
import moving from './moving'

const board = (state = {}, action) =>
({
  title: state.title,
  id: state.id,
  lists: lists(state.lists, action),
  cards: cards(state.cards, action),
  moving: moving(state.moving, action)
})

export default board
