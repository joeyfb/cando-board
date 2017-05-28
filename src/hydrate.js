const data = {
  
  board: {
    title: "Stateful title!",
    id: 0,
    lists: [ 'a', 'b' ]
  },

  lists: [
    {
      title: "To do",
      id: 'a',
      cards: ['a', 'b']
  },
  {
      title: "Doing",
      id: 'b',
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
        id: 'c',
        description: "I have no clue what I meant when I wrote pure",
        created: "May 15th, 2017"
      }
  ],

  moving: undefined

}

export default data
