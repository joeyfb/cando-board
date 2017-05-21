let nextListId = 0;
export const addList = (title) =>
({
    type: 'ADD_LIST',
    id: nextListId++,
    title
})
