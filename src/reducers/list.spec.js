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

    })
})
