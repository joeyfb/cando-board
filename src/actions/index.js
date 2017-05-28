import { v4 } from 'node-uuid'

export const addList = (title) =>
({
    type: 'ADD_LIST',
    id: v4(),
    cards: [],
    title
})

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
})

export const removeCard = (listId, cardId) =>
({
  type: 'REMOVE_CARD',
  id: listId,
  cards: [
    {
      id: cardId
    }
  ]
})

export const removeList = (id) =>
({
  type: 'REMOVE_LIST',
  id
})

export const moveStart = (listId, cardId) =>
{
  let list = {
    id: listId
  }

  if (cardId)
  {
    list.cards = [ cardId ]
  }

  return {
    type: 'MOVE_START',
    lists: [ list ]
  }
}

export const moveStop = (pos, listId) =>
{
  let move = {  
      type: 'MOVE_STOP',
  }

  if ( pos === undefined )
  {
    move.status = 'fail'
    return move
  }

  move.status = 'success'
  move.pos = pos

  if (listId)
  {
    move.lists = [ { id: listId } ]
  }

  return  move
}
