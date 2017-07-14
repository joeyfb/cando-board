import lists from './lists';

const refs = (state = {}, action) =>
{
  const keys = Object.keys(state);

  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      let refs = {};
      
      for(let key of keys)
      {
        refs[key] = state[key]
                   .filter(i => i !== action.id);
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

    default:
      return state;
  }
}

const entities = (state = [], action) =>
{
  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      state = state.filter(e => e.id !== action.id)
      return state.map(e => entity(e, action));
    
    default:
      return state;
  }
}

export default entities;
