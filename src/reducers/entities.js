import lists from './lists';
import { compact, cloneDeep } from 'lodash';

const refs = (state = [], action, id) =>
{
  const e = action.entities
            .find(e => e.id === id);
  
  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      let ids = action.entities.map(e => e.id);
      
      return state.filter( id => ids.indexOf(id) === -1);

    case 'UPDATE_ENTITY':
      if ( ! e )
      {
        let ids = action.entities[0].refs;
        return state.filter( id => ids.indexOf(id) === -1);
      }
      
      return e.refs.concat(state);
    
    default:
      return state;
  }
}

const entity = (state = {}, action) =>
{
  const e = action.entities
            .find(e => e.id === state.id);
  
  switch (action.type)
  {
    case 'REMOVE_ENTITY':
      if (e)
        return; 

      return {
        ...state,
        refs: refs(state.refs, action, state.id)
      };
    
    case 'MOVE_ENTITY':
      return {
        ...state,
        ...e,
        refs: refs(state.refs, action, state.id)
      };

    case 'UPDATE_ENTITY':
      return {
        ...state,
        ...e,
        refs: refs(state.refs, action, state.id)
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
    case 'MOVE_ENTITY':
      let entities = state.map(e => entity(e, action));

      return compact(entities);

    default:
      return state;
  }
}

export default entities;
