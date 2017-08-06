import lists from './lists';
import { compact, union } from 'lodash';

const refs = (state = {}, action, id) =>
{
  const stateKeys = Object.keys(state);
  let refs = {};
  
  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      for(let key of stateKeys)
      {
        refs[key] = state[key]
          .filter(id =>
            {
              const match = action.entities
                            .map(e => e.id === id);
              
              return match.some(x => x !== true);
            });
      }

      return refs;

    case 'UPDATE_ENTITY':
      let e = action.entities.map(e => {
        if (e.id === id)
        {
          return e;
        }
      });
      
      e = compact(e)[0];

      for(let key of stateKeys)
      {
        if (e && e.refs.hasOwnProperty(key))
        {
          refs[key] = union(e.refs[key], state[key]);
        }
        else
        {
          refs[key] = state[key];
        }
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
      let match = action.entities.filter(e => e.id === state.id);

      if (match.length > 0) return; 

      return {
        ...state,
        refs: refs(state.refs, action, state.id)
      };
    
    case 'UPDATE_ENTITY':
      let id = state.id;
      let update = action.entities[id];

      return {
        ...state,
        ...action.entities[id],
        refs: refs(state.refs, action, id)
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
    case 'UPDATE_ENTITY':
      let entities = state.map(e => entity(e, action));

      return compact(entities);

    default:
      return state;
  }
}

export default entities;
