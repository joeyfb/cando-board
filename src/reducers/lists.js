import items from './items'

const list = (state, action) =>
{
    switch (action.type)
    {
        case 'ADD_LIST':
            return {
                title: action.title,
                id: action.id,
                items: []
            };

        case 'ADD_ITEM':
            if (state.id !== action.id)
            {
              return state
            }

            return {
                ...state,
                items: items(state.items, action)
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
        
        case 'ADD_ITEM':
            return state.map(l =>
                list(l, action)
              )

        default:
            return state;
    }
}

export default lists
