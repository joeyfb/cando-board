import lists from './lists'

describe('lists reducer', () =>
{

  it('should handle initial state', () => {
    expect(
      lists(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_LIST', () =>
    {
        expect(
            lists([], {
                type: 'ADD_LIST',
                title: 'Done',
                cards: []
            })).toEqual([
                {
                    title: 'Done',
                    cards: []
                }
            ])

        expect(
         lists([{
                title: 'Done',
                id: 0,
                cards: []
            }],
            {
                type: 'ADD_LIST',
                title: 'Later',
                id: 1,
                cards: []
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                cards: []
            },
            {
                title: 'Later',
                id: 1,
                cards: []
            }
          ])

        expect(
         lists([{
                title: 'Done',
                id: 0,
                cards: []
            },
            {
                title: 'Later',
                id: 1,
                cards: []
            }],
            {
                type: 'ADD_LIST',
                title: 'Never ever',
                id: 2,
                cards: []
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                cards: []
            },
            {
                title: 'Later',
                id: 1,
                cards: []
            },
            {
                title: 'Never ever',
                id: 2,
                cards: []
            }
          ])
    })

  it('should handle MOVE_CARD', () =>
    {

      expect(
          lists([
            {
              title: 'home',
              id: 'a',
              cards: [ '1', '2' ]
            },
            {
              title: 'work',
              id: 'b',
              cards: [ '5', '9' ]
            }
          ],
          {
            type: 'MOVE_CARD',
            pos: 0,
            start: {
              list: {
                id: 'a',
                cards: [ '1' ]
              } 
            },
            stop: {
              list: {
                id: 'b'
              }
            }
          })
      ).toEqual([
          {
            title: 'home',
            id: 'a',
            cards: [ '2' ]
          },
          {
            title: 'work',
            id: 'b',
            cards: [ '1', '5', '9' ]
          }
      ])

      expect(
          lists([
            {
              title: 'home',
              id: 'a',
              cards: [ '1', '2' ]
            },
            {
              title: 'work',
              id: 'b',
              cards: [ '5', '9' ]
            }
          ],
          {
            type: 'MOVE_CARD',
            pos: 2,
            start: {
              list: {
                id: 'a',
                cards: [ '2' ]
              } 
            },
            stop: {
              list: {
                id: 'b'
              }
            }
          })
      ).toEqual([
          {
            title: 'home',
            id: 'a',
            cards: [ '1' ]
          },
          {
            title: 'work',
            id: 'b',
            cards: [ '5', '9', '2' ]
          }
      ])

      expect(
          lists([
            {
              title: 'home',
              id: 'a',
              cards: [ '1', '2' ]
            },
            {
              title: 'work',
              id: 'b',
              cards: [ '5', '9', '8' ]
            },
            {
              title: 'gym',
              id: 'c',
              cards: [ '11', '15', '19', '20', '50' ]
            }
          ],
          {
            type: 'MOVE_CARD',
            pos: 3,
            start: {
              list: {
                id: 'b',
                cards: [ '9' ]
              } 
            },
            stop: {
              list: {
                id: 'c'
              }
            }
          })
      ).toEqual([
          {
            title: 'home',
            id: 'a',
            cards: [ '1', '2' ]
          },
          {
            title: 'work',
            id: 'b',
            cards: [ '5', '8' ]
          },
          {
            title: 'gym',
            id: 'c',
            cards: [ '11', '15', '19', '9', '20', '50' ]
          }
      ])

    })

  it('should handle ADD_CARD', () =>
    {
        expect(
         lists([{
                title: 'Done',
                id: 0,
                cards: []
            }],
            {
                type: 'ADD_CARD',
                id: 0,
                cards: [
                  {
                    id: 0
                  }
                ]
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                cards: [
                    0
                ]
            }
          ])

        expect(
         lists([{
                title: 'Done',
                id: 0,
                cards: [
                    0
                ]
            }],
            {
                type: 'ADD_CARD',
                id: 0,
                cards: [
                  {
                    id: 1
                  }
                ]
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                cards: [
                    0,
                    1
                ]
            }
          ])
        
        expect(
         lists([{
                title: 'Doing',
                id: 0,
                cards: [
                    0
                ]
            },
            {
                title: 'Done',
                id: 1,
                cards: []
            }
           ],
            {
                type: 'ADD_CARD',
                id: 1,
                cards: [
                  {
                    id: 0
                  }
                ]
          })).toEqual([
            {
                title: 'Doing',
                id: 0,
                cards: [
                    0
                ]
            },
            {
                title: 'Done',
                id: 1,
                cards: [
                    0
                ]
            }
          ])
    })
  
  it('should handle REMOVE_CARD', () =>
    {
        expect(
         lists([{
                title: 'Done',
                id: 0,
                cards: [
                    0
                ]
            }],
            {
                type: 'REMOVE_CARD',
                id: 0,
                cards: [
                  {
                    id: 0
                  }
                ]
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                cards: []
            }
          ])
        
        expect(
         lists([{
                title: 'Doing',
                id: 0,
                cards: [
                    0,
                    1
                ]
            },
            {
                id: 1,
                title: 'Done',
                cards: []
            }
           ],
            {
                type: 'REMOVE_CARD',
                id: 0,
                cards: [
                  {
                    id: 1
                  }
                ]
          })).toEqual([
            {
                title: 'Doing',
                id: 0,
                cards: [
                    0
                ]
            },
            {
                title: 'Done',
                id: 1,
                cards: []
            }
          ])
    })

  it('should handle REMOVE_LIST', () =>
    {
      expect(
        lists([
          {
            id: 0,
            title: 'In',
            itmes: []
          }
        ],
        {
          type: 'REMOVE_LIST',
          id: 0
        })).toEqual([])
      
      expect(
        lists([
          {
            id: 0,
            title: 'In',
                cards: [
                    0
                ]
          },
          {
            id: 1,
            title: 'Out',
            itmes: []
          }
        ],
        {
          type: 'REMOVE_LIST',
          id: 1
        })).toEqual([
          {
            id: 0,
            title: 'In',
                cards: [
                    0
                ]
          }
        ])
    })
})
