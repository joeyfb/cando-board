import * as actions from './index'

const zeroIds = (obj) =>
{

  obj['id'] = 0

  if (obj['items'])
  {
    obj['items'] = obj.items.map( (i) =>
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
        items: []
      })
    
  })

  it('addItem should create ADD_ITEM action', () => {

    expect(
       zeroIds( 
        actions.addItem(
          0,
          'Cover untested case',
          'for add item'
        )
      )
    ).toEqual({
      type: 'ADD_ITEM',
      id: 0,
      items: [
        {
          id: 0,
          title: 'Cover untested case',
          description: 'for add item'
        }
      ]
    })

  })

  it('removeItem should create REMOVE_ITEM action', () => {

    expect(actions.removeItem(0,0)
    ).toEqual({
      type: 'REMOVE_ITEM',
      id: 0,
      items: [
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

})
