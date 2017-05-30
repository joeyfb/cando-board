const moving = (state = {}, action) =>
{
  switch (action.type)
  {
    case 'MOVE_START':
      return {
        lists: action.lists
      }

    case 'MOVE_STOP':
      return {
        ...state,
        stop: {
          id: action.listId
        }
      }
    
    case 'MOVE_CLEAR':
      return  {}

    default:
      return state
  }
}

export default moving
