import lists from './lists'
import cards from './cards'

const board = (state = {}, action) =>
({
  title: state.title,
  id: state.id,
  lists: lists(state.lists, action),
  cards: cards(state.cards, action)
})

export default board
