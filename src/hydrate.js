const data = {
  
  board: {
    title: "Stateful title!",
    id: 0,
    lists: [ 'aa', 'bb' ]
  },

  lists: [
    {
      title: "To do",
      id: 'aa',
      cards: ['a', 'b']
  },
  {
      title: "Doing",
      id: 'bb',
      cards: ['c']
    }
  ],

  cards: [
      {
        title: "make containers",
        id: 'a',
      },
      {
        title: "action stuff",
        id: 'b',
      },
      {
        title: "pure",
        id: 'c'
      }
  ],

  moving: undefined

}

export default data
