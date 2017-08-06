import lists from './lists';
import { compact, union, cloneDeep } from 'lodash';

const refs = (state = {}, action, id) =>
{
  const stateKeys = Object.keys(state);
  let refs = cloneDeep(state);
  
  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      let removedIDs = action.entities.map(e => e.id);

      for(let key of stateKeys)
      {
        refs[key] = state[key]
                    .filter(id => removedIDs.indexOf(id) === -1);
      }

      return refs;

    case 'UPDATE_ENTITY':
      const e = action.entities.find(e => e.id === id);

      for(let key of stateKeys)
      {
        let hasKey = e && e.refs.hasOwnProperty(key);

        if (hasKey)
        {
          refs[key] = union(e.refs[key], refs[key]);
        }
      }

      return refs;
    
    default:
      return refs;
  }
}

const entity = (state = {}, action) =>
{
  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      let selfRemove = action.entities
                       .find(e => e.id === state.id);
      
      if (selfRemove)
        return; 

      return {
        ...state,
        refs: refs(state.refs, action, state.id)
      };
    
    case 'UPDATE_ENTITY':
      let id = state.id;

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
