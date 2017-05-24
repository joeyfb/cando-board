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
                id: 0,
                items: []
            })).toEqual([
                {
                    title: 'Done',
                    id: 0,
                    items: []
                }
            ])

        expect(
         lists([{
                title: 'Done',
                id: 0,
                items: []
            }],
            {
                type: 'ADD_LIST',
                title: 'Later',
                id: 1,
                items: []
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                items: []
            },
            {
                title: 'Later',
                id: 1,
                items: []
            }
          ])

        expect(
         lists([{
                title: 'Done',
                id: 0,
                items: []
            },
            {
                title: 'Later',
                id: 1,
                items: []
            }],
            {
                type: 'ADD_LIST',
                title: 'Never ever',
                id: 2,
                items: []
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                items: []
            },
            {
                title: 'Later',
                id: 1,
                items: []
            },
            {
                title: 'Never ever',
                id: 2,
                items: []
            }
          ])
    })

  it('should handle ADD_ITEM', () =>
    {
        expect(
         lists([{
                title: 'Done',
                id: 0,
                items: []
            }],
            {
                type: 'ADD_ITEM',
                id: 0,
                items: [
                    0
                ]
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                items: [
                    0
                ]
            }
          ])

        expect(
         lists([{
                title: 'Done',
                id: 0,
                items: [
                    0
                ]
            }],
            {
                type: 'ADD_ITEM',
                id: 0,
                items: [
                    1
                ]
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                items: [
                    0,
                    1
                ]
            }
          ])
        
        expect(
         lists([{
                title: 'Doing',
                id: 0,
                items: [
                    0
                ]
            },
            {
                title: 'Done',
                id: 1,
                items: []
            }
           ],
            {
                type: 'ADD_ITEM',
                id: 1,
                items: [
                    0
                ]
          })).toEqual([
            {
                title: 'Doing',
                id: 0,
                items: [
                    0
                ]
            },
            {
                title: 'Done',
                id: 1,
                items: [
                    0
                ]
            }
          ])
    })
  
  it('should handle REMOVE_ITEM', () =>
    {
        expect(
         lists([{
                title: 'Done',
                id: 0,
                items: [
                    0
                ]
            }],
            {
                type: 'REMOVE_ITEM',
                id: 0,
                items: [
                    0
                ]
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                items: []
            }
          ])
        
        expect(
         lists([{
                title: 'Doing',
                id: 0,
                items: [
                    0,
                    1
                ]
            },
            {
                id: 1,
                title: 'Done',
                items: []
            }
           ],
            {
                type: 'REMOVE_ITEM',
                id: 0,
                items: [
                    1
                ]
          })).toEqual([
            {
                title: 'Doing',
                id: 0,
                items: [
                    0
                ]
            },
            {
                title: 'Done',
                id: 1,
                items: []
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
                items: [
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
                items: [
                    0
                ]
          }
        ])
    })
})
