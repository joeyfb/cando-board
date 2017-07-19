import lists from './lists';

const refs = (state = {}, action) =>
{
  const keys = Object.keys(state);
  let refs = {};

  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      for(let key of keys)
      {
        refs[key] = state[key]
                   .filter(i => i !== action.id);
      }

      return refs;

    case 'UPDATE_ENTITY':
      let update = action.update.refs;
      for(let key of keys)
      {
        refs[key] = update[key]
                      .concat(state[key]);
      }

      return refs;
    
    default:
      return state;
  }
}

const entity = (state = {}, action) =>
{
  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      return {
        ...state,
        refs: refs(state.refs, action)
      };
    
    case 'UPDATE_ENTITY':
      if (state.id !== action.id)
        return state;
      
      return {
        ...state,
        ...action.update,
        refs: refs(state.refs, action)
      };

    default:
      return state;
  }
}

const entities = (state = [], action) =>
{
  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      state = state
                .filter(e => e.id !== action.id)

      return state.map(e => entity(e, action));
    
    case 'UPDATE_ENTITY':
      return state.map(e => entity(e, action));

    default:
      return state;
  }
}

export default entities;
