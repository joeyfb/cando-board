const moving = (state = {}, action) =>
{
  switch (action.type)
  {
    case 'MOVE_START':
      return {
        entities: action.entities
      }

    case 'MOVE_STOP':
      return {
        ...state,
        stop: action.stop
      }
    
    case 'MOVE_CLEAR':
      return  {}

    default:
      return state
  }
}

export default moving
