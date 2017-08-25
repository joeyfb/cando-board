import { v4 } from 'node-uuid';

// move
export const moveStart = (listId, cardId) =>
{
  let list = {
    id: listId
  };

  if (cardId)
  {
    list.cards = [ cardId ];
  }

  return {
    type: 'MOVE_START',
    lists: [ list ]
  };
};

export const moveStop = (pos, listId) =>
{
  let move = {  
      type: 'MOVE_STOP',
  };

  if ( pos === undefined )
  {
    move.status = 'fail';
    return move;
  }

  move.status = 'success';
  move.pos = pos;

  if (listId)
  {
    move.lists = [ { id: listId } ];
  }

  return  move;
};

export const moveClear = () =>
({
  type: 'MOVE_CLEAR'
});

// entity actions
export const updateEntity = (entity) =>
({
  type: 'UPDATE_ENTITY',
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
