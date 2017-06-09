import { v4 } from 'node-uuid';

export const updateList = (id, title) =>
({
    type: 'UPDATE_LIST',
    id,
    title
});

export const addList = (title) =>
({
    type: 'ADD_LIST',
    id: v4(),
    cards: [],
    title
});

export const addCard = (listId, title, description) =>
({
  type: 'ADD_CARD',
  id: listId,
  cards: [
            {
              id: v4(),
              title,
              description
            }
  ]
});

export const removeCard = (cardId) =>
({
  type: 'REMOVE_CARD',
  cards: [
    {
      id: cardId
    }
  ]
});

export const removeList = (id) =>
({
  type: 'REMOVE_LIST',
  id
});

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

export const moveCard = (pos, startList, startCards, stopId) =>
{
  let start = {
    id: startList
  };

  let stop = {
    id: stopId
  };

  if (startCards !== undefined)
  {
    start.cards = startCards;
  }

  return {
    type: 'MOVE_CARD',
    pos,
    start,
    stop
  };
};

// compound actions
export const removeEntity = (listId, cardId) =>
{
  if (cardId !== undefined)
  {
    return removeCard(cardId);
  }
  else
  {
    return removeList(listId);
  }
};

