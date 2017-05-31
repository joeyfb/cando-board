const move = (state, action) =>
{
    const start = action.start;
    const stop = action.stop;
    let cards = state.cards.concat();

    if (state.id === start.id)
    {
      cards = cards.filter( (id) => 
                  start.cards.indexOf(id) === -1
                );
    }
    
    if (state.id === stop.id)
    {
      cards.splice(action.pos, 0, ...start.cards);
    }

    return {
      ...state,
      cards
    };
}

const cards = (state = [], action) =>
{
    const ids = action.cards.map((i) => i.id);

    switch (action.type)
    {
        case 'ADD_CARD':
          return state.concat( ids );
        
        case 'REMOVE_CARD':
          return state.filter( (id) =>
              ids.indexOf(id) === -1
            );

        default:
          return state.cards;
    }
}

const list = (state, action) =>
{

    switch (action.type)
    {
        case 'ADD_LIST':
            return {
                title: action.title,
                id: action.id,
                cards: []
            };
        
        case 'MOVE_CARD':
            return move(state, action);

        case 'ADD_CARD':
        case 'REMOVE_CARD':
            if (state.id !== action.id)
            {
                return state;
            }

            return {
                ...state,
                cards: cards(state.cards, action)
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
       
        case 'REMOVE_LIST':
            return state.filter(l => l.id !== action.id)
        
        case 'MOVE_CARD':
        case 'ADD_CARD':
        case 'REMOVE_CARD':
            return state.map( (l) => 
                  list(l, action)
                );

        default:
            return state;
    }
}

export default lists;
