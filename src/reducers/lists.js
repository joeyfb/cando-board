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

        default:
            return state;
    }
}

export default lists
