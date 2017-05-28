import board from './board'

describe('board reducer', () =>
{
  it('should handle initial state', () =>
    {
      expect(
          board(undefined, {})
      ).toEqual({})

    })

  it('should hanlde ADD_LIST', () =>
    {

      expect(
          board({
            title: 'test',
            id: 0,
            lists: [ ]
          },
          {
            type: 'ADD_LIST',
            title: 'Done',
            id: 0,
            cards: []
          })
      ).toEqual({
          title: 'test',
          id: 0,
          lists: [ 0 ]
      })
            
      expect(
          board({
            title: 'test',
            id: 0,
            lists: [ 0 ]
          },
          {
            type: 'ADD_LIST',
            title: 'Later, much',
            id: 2,
            cards: [ 5 ]
          })
      ).toEqual({
          title: 'test',
          id: 0,
          lists: [ 0, 2 ]
      })

    })

  it('should handle REMOVE_LIST', () =>
    {
      expect(
        board({
          title: 'test',
          id: 0,
          lists: [ 0 ]
        },
        {
          type: 'REMOVE_LIST',
          id: 0
        })
      ).toEqual({
        title: 'test',
        id: 0,
        lists: [ ]
      })

      expect(
        board({
          title: 'In house',
          id: 'asdx-sda',
          lists: [ 0, 5 ]
        },
        {
          type: 'REMOVE_LIST',
          id: 5
        })
      ).toEqual({
          title: 'In house',
          id: 'asdx-sda',
          lists: [ 0 ]
      })

    })
})
