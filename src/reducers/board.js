import lists from './lists'

const board = (state = {}, action) =>
({
  title: state.title,
  id: state.id,
  lists: lists(state.lists, action)
})

export default board
