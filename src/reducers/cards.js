const card = (state, action) =>
{
  switch (action.type)
  {
    case 'ADD_CARD':
      return {
        title: action.title,
        id: action.id,
        description: action.description
      }

    default:
      return state
  }
}

const cards = (state = [], action) =>
{
  switch (action.type)
  {
    case 'ADD_CARD':
      return [
        ...state,
        card(
              undefined,
              {
                type: action.type,
                ...action.cards[0]
              }
            )
      ]

    case 'REMOVE_CARD':
      return state.filter(i => i.id !== action.cards[0].id)

    default:
      return state
  }
}

export default cards
