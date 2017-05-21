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
                  {
                    id: 0,
                    title: 'adding items',
                    description: 'to lists'
                  }
                ]
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                items: [
                  {
                    id: 0,
                    title: 'adding items',
                    description: 'to lists'
                  }
                ]
            }
          ])

        expect(
         lists([{
                title: 'Done',
                id: 0,
                items: [
                  {
                    id: 0,
                    title: 'adding items',
                    description: 'to lists'
                  }
                ]
            }],
            {
                type: 'ADD_ITEM',
                id: 0,
                items: [
                  {
                    id: 1,
                    title: 'list addItem tests',
                    description: 'should have been done before!'
                  }
                ]
          })).toEqual([
            {
                title: 'Done',
                id: 0,
                items: [
                  {
                    id: 0,
                    title: 'adding items',
                    description: 'to lists'
                  },
                  {
                    id: 1,
                    title: 'list addItem tests',
                    description: 'should have been done before!'
                  }
                ]
            }
          ])
        
        expect(
         lists([{
                title: 'Doing',
                id: 0,
                items: [
                  {
                    id: 0,
                    title: 'list addItem tests',
                    description: 'should have been done before!'
                  }
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
                  {
                    id: 0,
                    title: 'adding items',
                    description: 'to lists'
                  }
                ]
          })).toEqual([
            {
                title: 'Doing',
                id: 0,
                items: [
                  {
                    id: 0,
                    title: 'list addItem tests',
                    description: 'should have been done before!'
                  }
                ]
            },
            {
                title: 'Done',
                id: 1,
                items: [
                  {
                    id: 0,
                    title: 'adding items',
                    description: 'to lists'
                  }
                ]
            }
          ])
    })
})
