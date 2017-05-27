import { v4 } from 'node-uuid'

export const addList = (title) =>
({
    type: 'ADD_LIST',
    id: v4(),
    items: [],
    title
})

export const addItem = (listId, title, description) =>
({
  type: 'ADD_ITEM',
  id: listId,
  items: [
            {
              id: v4(),
              title,
              description
            }
  ]
})

export const removeItem = (listId, itemId) =>
({
  type: 'REMOVE_ITEM',
  id: listId,
  items: [
    {
      id: itemId
    }
  ]
})

export const removeList = (id) =>
({
  type: 'REMOVE_LIST',
  id
})
