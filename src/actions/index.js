let nextListId = 0;
export const addList = (title) =>
({
    type: 'ADD_LIST',
    id: nextListId++,
    title
})

let nextItemId = 0;
export const addItem = (listId, title, description) =>
({
  type: 'ADD_ITEM',
  id: listId,
  items: [
            {
              id: nextItemId++,
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
