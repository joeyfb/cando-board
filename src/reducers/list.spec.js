import lists from './lists'

describe('lists reducer', () => {
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
