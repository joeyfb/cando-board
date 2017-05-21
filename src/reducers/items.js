const item = (state, action) =>
{
  switch (action.type)
  {
    case 'ADD_ITEM':
      return {
        title: action.title,
        id: action.id,
        description: action.description
      }

    default:
      return state
  }
}

const items = (state = [], action) =>
{
  switch (action.type)
  {
    case 'ADD_ITEM':
      return [
        ...state,
        item(
              undefined,
              {
                type: action.type,
                ...action.items[0]
              }
            )
      ]

    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.items[0].id)

    default:
      return state
  }
}

export default items
