import { v4 } from 'node-uuid';

// move
export const moveStart = (parentId, childId) =>
{
  let parentEntity = {
    id: parentId
  };

  if (childId)
  {
    parentEntity.refs = [ childId ];
  }

  return {
    type: 'MOVE_START',
    entities: [ parentEntity ]
  };
};

export const moveStop = (pos, parentId) =>
{
  let move = {  
      type: 'MOVE_STOP',
  };

  if ( pos === undefined ) return move;

  move.pos = pos;

  if (parentId)
  {
    move.stop = parentId;
  }

  return  move;
};

export const moveClear = () =>
({
  type: 'MOVE_CLEAR'
});

// entity actions
export const updateEntity = (entity, position) =>
({
  type: 'UPDATE_ENTITY',
  position,
  entities: [
    entity
  ]
});

export const deleteEntity = (id) =>
({
  type: 'DELETE_ENTITY',
  entities: [
    { id }
  ]
});

export const createEntity = (entity, parentID) =>
({
  type: 'CREATE_ENTITY',
  entities: [ 
    {
      ...entity,
      id: v4()
    }
  ],
  parentID
});
