const board = (state = { title: "New board", id: 0, lists: [] }, action) =>
{
  switch (action.type)
  {
    case 'ADD_LIST':
      return {
        ...state,
        lists: [
          ...state.lists,
          action.id
        ]
      };

    case 'REMOVE_LIST':
      return {
        ...state,
        lists: state.lists.filter( (id) => id !== action.id )
      };

    default:
      return state;
  }
};

export default board;
