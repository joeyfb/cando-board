import lists from './lists'
import items from './items'

const board = (state = {}, action) =>
({
  title: state.title,
  id: state.id,
  lists: lists(state.lists, action),
  items: items(state.items, action)
})

export default board
