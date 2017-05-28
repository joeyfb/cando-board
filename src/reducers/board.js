const board = (state = {}, action) =>
{
  switch (action.type)
  {
    case 'ADD_LIST':
      return {
        ...state,
        lists: [
          ...state.lists,
          action.id
        ]
      }

    case 'REMOVE_LIST':
      return {
        ...state,
        lists: state.lists.filter( (id) => id !== action.id )
        
      }

    default:
      return state
  }
}

export default board
