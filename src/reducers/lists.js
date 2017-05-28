const list = (state, action) =>
{
    const ids = action.cards.map((i) => i.id)

    switch (action.type)
    {
        case 'ADD_LIST':
            return {
                title: action.title,
                id: action.id,
                cards: []
            }

        case 'ADD_CARD':
            if (state.id !== action.id)
            {
              return state
            }

            return {
                ...state,
                cards: state.cards.concat( ids )
            }

        case 'REMOVE_CARD':
            
            if (state.id !== action.id)
            {
              return state
            }
            
            return {
                ...state,
                cards: state.cards.filter( (id) =>
                    ids.indexOf(id) === -1
                )
            }

        default:
            return state;
    }
}

const lists = (state = [], action) =>
{
    switch (action.type)
    {
        case 'ADD_LIST':
            return [
                ...state,
                list(undefined, action)
            ];
       
        case 'REMOVE_LIST':
            return state.filter(l => l.id !== action.id)

        case 'ADD_CARD':
        case 'REMOVE_CARD':
            return state.map(l =>
                list(l, action)
              )

        default:
            return state;
    }
}

export default lists
