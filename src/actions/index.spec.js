import * as actions from './index'

const zeroIds = (obj) =>
{

  obj['id'] = 0

  if (obj['cards'])
  {
    obj['cards'] = obj.cards.map( (i) =>
        {
          i.id = 0

          return i
        })
  }

  return obj
}

describe('list actions', () => {

  it('addList should create ADD_LIST action', () => {
 
    expect(
         zeroIds(actions.addList('To Do'))
      ).toEqual({
        type: 'ADD_LIST',
        id: 0,
        title: 'To Do',
        cards: []
      })
    
  })

  it('addCard should create ADD_CARD action', () => {

    expect(
       zeroIds( 
        actions.addCard(
          0,
          'Cover untested case',
          'for add card'
        )
      )
    ).toEqual({
      type: 'ADD_CARD',
      id: 0,
      cards: [
        {
          id: 0,
          title: 'Cover untested case',
          description: 'for add card'
        }
      ]
    })

  })

  it('removeCard should create REMOVE_CARD action', () => {

    expect(actions.removeCard(0,0)
    ).toEqual({
      type: 'REMOVE_CARD',
      id: 0,
      cards: [
        {
          id: 0
        }
      ]
    })

  })

  it('removeList should create REMOVE_LIST action', () => {

    expect(actions.removeList(0,0)
    ).toEqual({
      type: 'REMOVE_LIST',
      id: 0,
    })

  })

  it('moveStart should create MOVE_START action', () => {

    expect(actions.moveStart(1, 2)
    ).toEqual({
      type: 'MOVE_START',
      lists: [
        {
          id: 1,
          cards: [2]
        }
      ]
    })

    expect(actions.moveStart(1)
    ).toEqual({
      type: 'MOVE_START',
      lists: [
        {
          id: 1
        }
      ]
    })

  })

  it('moveStop should create MOVE_STOP action', () => {

    expect(actions.moveStop()
    ).toEqual({
      type: 'MOVE_STOP',
      status: 'fail'
    })

    expect(actions.moveStop(1,2)
    ).toEqual({
      type: 'MOVE_STOP',
      pos: 1,
      status: 'success',
      lists: [
        {
          id: 2
        }
      ]
    })

    expect(actions.moveStop(0)
    ).toEqual({
      type: 'MOVE_STOP',
      status: 'success',
      pos: 0
    })
  })

})
