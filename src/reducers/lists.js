const list = (state, action) =>
{
    const ids = action.items.map((i) => i.id)

    switch (action.type)
    {
        case 'ADD_LIST':
            return {
                title: action.title,
                id: action.id,
                items: []
            }

        case 'ADD_ITEM':
            if (state.id !== action.id)
            {
              return state
            }

            return {
                ...state,
                items: state.items.concat( ids )
            }

        case 'REMOVE_ITEM':
            console.log(state, action)
            if (state.id !== action.id)
            {
              return state
            }
            
            return {
                ...state,
                items: state.items.filter( (id) =>
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

        case 'ADD_ITEM':
        case 'REMOVE_ITEM':
            return state.map(l =>
                list(l, action)
              )

        default:
            return state;
    }
}

export default lists
