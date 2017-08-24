import { compact } from 'lodash';

const refs = (state = [], action, id) =>
{
  const e = action.entities
            .find(e => e.id === id);
  
  switch (action.type)
  {
    case 'DELETE_ENTITY':
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

const entity = (state = {}, action, children) =>
{
  const e = action.entities
            .find(e => e.id === state.id);
  
  switch (action.type)
  {
    case 'CREATE_ENTITY':
      const isParent = action.parentID === state.id;
      const childID = action.entities[0].id;

      if ( ! isParent) return state;

      return {
        ...state,
        refs: state.refs.concat( [childID] )
      };

    case 'DELETE_ENTITY':
      const r = children.indexOf(state.id) !== -1;
  
      if (e || r) return; 

      return {
        ...state,
        refs: refs(state.refs, action, state.id)
      };
    
    case 'MOVE_ENTITY':
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
  var entities;

  switch (action.type)
  {
    case 'CREATE_ENTITY':
      let e = action.entities[0];

      entities = state.concat( [e] );
      entities = entities.map(e => entity(e, action));

      return compact(entities);

    case 'DELETE_ENTITY':
      const refs = state.find(e => e.id === action.entities[0].id).refs;
      entities = state.map(e => entity(e, action, refs));
     
      return compact(entities);
    
    case 'UPDATE_ENTITY':
    case 'MOVE_ENTITY':
      entities = state.map(e => entity(e, action));

      return compact(entities);

    default:
      return state;
  }
}

export default entities;
